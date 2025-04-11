import axios from "axios";
import { loginDto } from "../ds/loginDto";
import { registerDto } from "../ds/registerDto";

const AUTH_BACKEND_URL = 'http://localhost:8080/api/auth';

export const loginApiCall = (login: loginDto) =>
    axios.post(AUTH_BACKEND_URL + '/login', login, {
        withCredentials: true 
    });


    export const registerApiCall = (registerData: registerDto) => {
        return axios.post(`${AUTH_BACKEND_URL}/register`, registerData, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true 
        });
    };


export const setLoggedInUserName = (username: string) => {
    sessionStorage.setItem('loggedInUserName', username);
};

export const getLoggedInUserName = () => {
    return sessionStorage.getItem('loggedInUserName');
};

export const clearAuthData = () => {
    sessionStorage.removeItem('loggedInUserName');
};

export const isLoggedIn = () => {
    return getLoggedInUserName() !== null;
};


export const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
}