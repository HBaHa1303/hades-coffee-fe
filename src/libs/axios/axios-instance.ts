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
        const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzIiwiZXhwIjoxNzY0MzI1MDM0fQ.RdglxMiGum8N3x7WbDnjFq6aRdLhqEJZIHQ66M_N6aM";
        config.headers.Authorization = `Bearer ${token}`;

        return config;
    }
);

axiosPrivate.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);