import axios from 'axios'

export default class AppService {

    constructor() {

        this.service = axios.create({
            baseURL: 'http://localhost:5000/api',
            withCredentials: true
        })
    }

    getAllItems = () => this.service.get('/main/all')
    newItem = item => this.service.post('/main/new', item)
    getOneItem = id => this.service.get(`/main/${id}`)
    editItem = id => this.service.post(`/main/${id}/edit`)
    deleteItem = id => this.service.get(`/main/${id}/delete`)


}