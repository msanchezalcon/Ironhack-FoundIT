import axios from 'axios'

export default class UserService {

    constructor() {

        this.service = axios.create({
            // baseURL: 'http://localhost:5000/api',
            baseURL: `${process.env.REACT_APP_API_URL}`,
            withCredentials: true
        })
    }

    getAllUsers = () => this.service.get(`/users`)
    getUserItems = id => this.service.get(`/items/users/${id}`)
    editUser = (id, data) => this.service.post(`/users/${id}`, data)

}