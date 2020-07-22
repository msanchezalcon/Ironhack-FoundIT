import axios from 'axios'

export default class UserService {

    constructor() {

        this.service = axios.create({
            baseURL: 'http://localhost:5000/api',
            withCredentials: true
        })
    }

    getAllUsers = () => this.service.get(`/users`)
    getUserInfo = id => this.service.get(`/users/${id}`)
    editUser = (id, data) => this.service.post(`/users/${id}`, data)

}