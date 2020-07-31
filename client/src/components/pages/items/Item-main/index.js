import React, { Component } from 'react'
import AppService from '../../../../service/AppService'

import ItemCard from './Item-card'
import ItemForm from './../Item-form'
import Spinner from '../../../ui/Spinner'
import CardFooter from './../../../ui/Footer'
import SearchBar from './../../../ui/SearchBar'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import app from './app.svg'
import MapApp from './../../../ui/maps/map'




class ItemList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            showModal: false,
            selectedId: null,
            filteredItems: []
        }
        this.appService = new AppService()

    }

    componentDidMount = () => this.updateItemList()

    updateItemList = () => {
        this.appService
            .getAllItems()
            .then(response => {
                console.log('all items from DB', response.data)
                this.setState({ items: response.data })
            })
            .catch(err => console.log(err))
    }

    handleModal = status => this.setState({ showModal: status })


    handleItemSubmit = () => {
        this.handleModal(false)
        this.updateItemList()
    }

    filterItem = nameSearched => {
        console.log(nameSearched)
        let copyItem = this.state.items.filter(items => items.name.toLowerCase().includes(nameSearched))
        this.setState({ filteredItems: copyItem, nameSearched })
    }



    render() {
        console.log('main page this state items', this.state.items)

        return (
            <>
                <Container className="searchMap">
                    <SearchBar filterItem={this.filterItem} />
                </Container>


                <Container className="mapMain">
                    <MapApp items={this.state.items} markers={this.state.items} />
                </Container>


                <Container as="main" className="items-page">

                    {
                        this.props.loggedInUser && <div className='container'> <Button variant="link" onClick={() => this.handleModal(true)}><img className="addBtn" src={app} alt="add" /></Button></div>
                    }
                    {
                        !this.state.items.length ? <Spinner /> :
                            <Row>
                                {!this.state.nameSearched && this.state.items.map(elm => <ItemCard editItem={this.editItem} key={elm._id} {...elm} />)}

                                {this.state.nameSearched && this.state.filteredItems.map(elm => <ItemCard editItem={this.editItem} key={elm._id} {...elm} />)}
                            </Row>
                    }
                </Container>




                <Modal size="lg" show={this.state.showModal}
                    onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <ItemForm {...this.props} handleItemSubmit={this.handleItemSubmit} />
                    </Modal.Body>
                </Modal>

                <CardFooter />

            </>

        )
    }
}

export default ItemList
