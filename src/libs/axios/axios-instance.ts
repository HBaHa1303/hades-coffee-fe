import axios from "axios";
import { useAuthStore } from "../stores/authStore";

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
        const token = useAuthStore.getState().token;
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
        window.location.href = "/sign-in"; 
        return Promise.reject({ message: "Chưa đăng nhập" });
    }

    return Promise.reject({ message: res.data?.message ?? "Có lỗi xảy ra" });
  }
);
