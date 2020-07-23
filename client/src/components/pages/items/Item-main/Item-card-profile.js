import React from 'react'

import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import './Item-list.css'
import edit from './edit.svg'
import trash from './trash.svg'
import lupa from './lupa.svg'

const ItemCardProfile = ({ _id, name, imageUrl, deleteItem, showUpdateModal }) => {

    console.log('ID DE LA CARTA', _id)

    return (

        < Col md={4} >
            <Card className="item-card">
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <div className="imgCardContainer">
                        <Link to={`/items/${_id}`}><img className="imgCards" src={lupa} alt="see more" /></Link>
                        <Link to={`/items/${_id}/edit`} onClick={() => showUpdateModal(_id)} > <img className="imgCards" src={edit} alt="edit" /></Link>
                        <div onClick={() => deleteItem(_id)}><img className="imgCards" src={trash} alt="delete" /></div>
                    </div>
                </Card.Body>
            </Card>
        </Col >
    )
}

export default ItemCardProfile