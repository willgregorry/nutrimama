import axios, { AxiosError } from "axios";

export const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});

apiClient.interceptors.request.use(
    (config) => {
        if (typeof window !== "undefined") {
            const token = localStorage.getItem("accessToken");
            if (token && config.headers) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error: AxiosError) => {
        if (error.response) {
            if (error.response.status === 401) {
                console.error("Unauthorized: Redirecting to login or refreshing token...");
                if (typeof window !== "undefined") {
                }
            }
        } else if (error.request) {
            console.error("Network Error: No response received from server.");
        } else {
            console.error("Axios Setup Error:", error.message);
        }

        return Promise.reject(error);
    }
);
