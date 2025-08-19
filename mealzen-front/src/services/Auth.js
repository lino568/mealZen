import api from "../api/axios"

export const loginAPI = (email, password) => {
    return api.post("/login", {email, password});
};

export const registerAPI = (name, email, password) => {
    return api.post("/register", {name, email, password});
};