import React from 'react'

import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import './Item-list.css'
import lupa from './lupa.svg'


const ItemCard = ({ _id, name, imageUrl, foundBy }) => {

    console.log('ID DE LA CARTA', _id)

    return (

        < Col md={4} >
            <Card className="item-card">
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body className="imgCardContainer">
                    <Card.Title>{name}</Card.Title>
                    <div>
                        <Link to={`/items/${_id}`}><img className="imgCards" src={lupa} alt="see more" /></Link>
                        <Link to={`/chat/${_id}`}><p>{foundBy.username}</p></Link>
                    </div>
                </Card.Body>
            </Card>
        </Col >
    )
}

export default ItemCard