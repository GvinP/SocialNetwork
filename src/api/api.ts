import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'e2b2d8ed-9e2a-4c10-8057-a81181e19d3c'
    }
})

export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    getUserProfile(userId: number) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    getUserStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateUserStatus(status: string) {
        return instance.put(`profile/status/`, {status})
    },
    follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unfollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
}

export const authApi = {
    authMe() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(response => {

            return  response.data
        })
    },
    logout() {
        return instance.delete(`auth/login`).then(response => response.data)
    },
}



