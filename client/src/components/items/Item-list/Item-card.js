import React from 'react'

import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

const ItemCard = ({ _id, name, imageUrl }) => {


    return (
        <Col md={4}>
            <Card className="item-card">
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Link to={`/main/${_id}`} className="btn btn-dark btn-block btn-sm">See details</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ItemCard