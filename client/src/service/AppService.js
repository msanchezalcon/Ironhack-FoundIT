import axios from 'axios'

export default class AppService {

    constructor() {

        this.service = axios.create({
            // baseURL: 'http://localhost:5000/api',
            baseURL: 'http://found-it-app.herokuapp.com/api',
            withCredentials: true
        })
    }

    getAllItems = () => this.service.get('/items/all')
    newItem = item => this.service.post('/items/new', item)
    getOneItem = id => this.service.get(`/items/${id}`)
    editItem = id => this.service.post(`/items/${id}/edit`)
    deleteItem = id => this.service.get(`/items/${id}/delete`)
    //traer owned items


}