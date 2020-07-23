import React, { Component } from 'react'
import AppService from '../../../../service/AppService'

import ItemCard from './Item-card'
import ItemForm from './../Item-form'
import Spinner from '../../../ui/Spinner'
import Form from './../Item-form/second-form'
// import ProfilePage from '../../pages/profile'


import './Item-list.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import add from './add.svg'


class ItemList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: undefined,
            showModal: false,
            selectedId: null


        }
        this.appService = new AppService()
    }
    //--------------------------------------------------------------------
    //Gets all items in general search view
    componentDidMount = () => this.updateItemList()

    updateItemList = () => {
        this.appService
            .getAllItems()
            .then(response => {
                console.log('all items', response.data)
                this.setState({ items: response.data })
            })
            .catch(err => console.log(err))
    }

    //--------------------------------------------------------------------
    handleModal = status => this.setState({ showModal: status })


    showUpdateModal = (id) => {
        this.setState({ showUpdateModal: true, selectedId: id })
    }


    handleItemSubmit = () => {
        this.handleModal(false)
        this.updateItemList()
    }

    //--------------------------------------------------------------------
    // deleteItem = (id) => {
    //     this.appService.deleteItem(id)
    //         .then(response => {
    //             const updateItem = this.state.items.filter(item => item._id !== id)
    //             this.setState({ items: updateItem })
    //         })
    //         .catch(err => console.log(err))
    // }

    // editItem = (id) => { // no funciona aun
    //     this.appService.editItem(id)
    //         .then(() => this.updateItemList())
    //         .catch(err => console.log(err))
    // }

    //--------------------------------------------------------------------




    render() {
        return (
            <>

                {/* shows each individual item in general search view and allows creating new one with button*/}
                <Container as="main" className="items-page">
                    {
                        this.props.loggedInUser && <div className='container'> <Button variant="link" onClick={() => this.handleModal(true)}><img className="addBtn" src={add} alt="add" /></Button></div>
                    }
                    {
                        !this.state.items ? <Spinner /> :
                            <Row>
                                {this.state.items && this.state.items.map(elm => <ItemCard editItem={this.editItem} key={elm._id} {...elm} />)}
                            </Row>
                    }
                </Container>



                {/* handles submission of modal for creating new item */}
                {/* <Modal size="lg" show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <ItemForm {...this.props} handleItemSubmit={this.handleItemSubmit} />
                    </Modal.Body>
                </Modal> */}

                <Modal size="lg" show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <Form {...this.props} handleItemSubmit={this.handleItemSubmit} />
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default ItemList
