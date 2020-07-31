import React, { Component } from 'react'

import AppService from '../../../../service/AppService'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import CardFooter from './../../../ui/Footer'
import Spinner from './../../../ui/Spinner'
import MapApp from './../../../ui/maps/map'
import chatIcon from './chat.svg'
import './item-detail.css'

class ItemDetails extends Component {
    constructor() {
        super()
        this.state = {
            itemDetails: undefined,
            itemView: []
        }
        this.appService = new AppService()
    }

    componentDidMount = () => {

        const id = this.props.match.params.item_id

        this.appService
            .getOneItem(id)
            .then(response => this.setState({ itemDetails: response.data, itemView: [response.data] }))
            .catch(err => console.log(err))
    }

    render() {
        console.log('DETAIL VIEW items', this.state.itemView)
        console.log('DETAIL ITEMS items', this.state.itemDetails)

        return (
            <>

                <Container as="main">

                    {

                        !this.state.itemDetails ? <Spinner /> :

                            <Row>
                                <Col md={{ span: 5, offset: 1 }}>
                                    <h1>{this.state.itemDetails.name}</h1>
                                    <hr></hr>
                                    <h4> {this.state.itemDetails.description}</h4>
                                    <br></br>
                                    <p><b>Category: </b> {this.state.itemDetails.category}</p>

                                    {/* FIX */}
                                    <Link to={`/chat/${this.state.itemDetails._id}`}><p><b>Found by: </b> {this.state.itemDetails.foundBy.username} <img className="imgCards" src={chatIcon} alt="chat" /></p></Link>
                                    <hr></hr>
                                    <Link className="btn btn-light btn-block btn-sm details authDetail" to='/items/all'>Back to search</Link>
                                </Col>
                                <Col md={{ span: 4, offset: 1 }}>
                                    <img src={this.state.itemDetails.imageUrl} alt={this.state.itemDetails.name} />
                                </Col>
                            </Row>

                    }

                </Container>

                <Container className="mapMain">
                    <MapApp items={this.state.itemView} markers={this.state.itemView} />
                </Container>





            </>
        )
    }
}

export default ItemDetails