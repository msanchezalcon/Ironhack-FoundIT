import axios from 'axios'

export default class AppService {

    constructor() {

        this.service = axios.create({
            baseURL: 'http://localhost:5000/api',
            withCredentials: true
        })
    }

    getAllItems = () => this.service.get('/main')
    getOneItem = id => this.service.get(`/main/${id}`)
    newItem = item => this.service.post(`/main/new`, item)
    editItem = id => this.service.post(`/main/${id}/edit`)
}