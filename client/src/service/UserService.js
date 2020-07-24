import axios from 'axios'

export default class UserService {

    constructor() {

        this.service = axios.create({
            // baseURL: 'http://localhost:5000/api',
            baseURL: 'http://found-it-app.herokuapp.com/api',
            withCredentials: true
        })
    }

    getAllUsers = () => this.service.get(`/users`)
    getUserItems = id => this.service.get(`/items/users/${id}`)
    editUser = (id, data) => this.service.post(`/users/${id}`, data)

}