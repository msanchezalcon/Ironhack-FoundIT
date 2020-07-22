import React from 'react'

import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import './Item-list.css'

const ItemCard = ({ _id, name, imageUrl }) => {


    return (
        <Col md={4}>
            <Card className="item-card">
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <div className="imgCardContainer">
                        <Link to={`/main/${_id}`}><img className="imgCards" src="./../../../../../magnifying-glass.svg" alt="see more" /></Link>
                        <Link to={`/main/${_id}/edit`}><img className="imgCards" src="./../../../../../edit.svg" alt="edit" /></Link>
                        <Link to={`/main/${_id}/delete`}><img className="imgCards" src="./../../../../../delete.svg" alt="delete" /></Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ItemCard