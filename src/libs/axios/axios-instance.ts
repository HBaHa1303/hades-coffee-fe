import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {'Content-Type': 'application/json'}
});

axiosPublic.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

export const axiosPrivate = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {'Content-Type': 'application/json'}
});

axiosPrivate.interceptors.request.use(
    (config) => {
        const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzIiwiZXhwIjoxNzY0MzI1MDM0fQ.RdglxMiGum8N3x7WbDnjFq6aRdLhqEJZIHQ66M_N6aMa";
        config.headers.Authorization = `Bearer ${token}`;

        return config;
    }
);

axiosPrivate.interceptors.response.use(
  (response) => response,
  (error) => {
    const res = error.response;

    if (!res) {
        return Promise.reject({ message: "Không thể kết nối server" });
    }

    if (res.status === 401) {
        window.location.href = "/login"; 
        return Promise.reject({ message: "Chưa đăng nhập" });
    }

    return Promise.reject({ message: res.data?.message ?? "Có lỗi xảy ra" });
  }
);
