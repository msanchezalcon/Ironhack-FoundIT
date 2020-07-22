import React, { Component } from 'react'

import AppService from '../../../service/AppService'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import Spinner from '../../ui/Spinner'

import './item-detail.css'

class ItemDetails extends Component {
    constructor() {
        super()
        this.state = {
            itemDetails: undefined
        }
        this.appService = new AppService()
    }

    componentDidMount = () => {

        const id = this.props.match.params.item_id

        this.appService
            .getOneItem(id)
            .then(response => this.setState({ itemDetails: response.data }))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <>
                <Container as="main">

                    {
                        !this.state.itemDetails ? <Spinner /> :

                            <Row>
                                <Col md={{ span: 5, offset: 1 }}>
                                    <h1>{this.state.itemDetails.name}</h1>
                                    <hr></hr>
                                    <p><b>Category:</b> {this.state.itemDetails.category}</p>
                                    <p><b>Description:</b> {this.state.itemDetails.description}</p>
                                    {/* <p><b>Location:</b> {this.state.itemDetails.location}</p> */}
                                    <p><b>Found by:</b> {this.state.itemDetails.foundBy}</p>
                                    <hr></hr>
                                    <Link className="btn btn-light btn-block btn-sm details auth" to='/main/all'>Back to search</Link>
                                </Col>
                                <Col md={{ span: 4, offset: 1 }}>
                                    <img src={this.state.itemDetails.imageUrl} alt={this.state.itemDetails.name} />
                                </Col>
                            </Row>
                    }

                </Container>
            </>
        )
    }
}

export default ItemDetails