import React from 'react'

import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import './items-user.css'
import edit from './edit.svg'
import trash from './trash.svg'
import lupa from './lupa.svg'

const ItemCardProfile = ({ _id, name, imageUrl, deleteItem, handleModal }) => {

    // console.log('ID DE LA CARTA', _id)

    return (

        < Col md={4} >
            <Card className="item-card">
                <Card.Img variant="top" src={imageUrl || "https://www.fulltimefba.com/wp-content/uploads/2014/03/Lost-Box.jpg"} />                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <div className="imgCardContainerUser">
                        {/* <Link to={`/items/${_id}`}><img className="imgCards" src={lupa} alt="see more" /></Link> */}
                        <div onClick={() => handleModal(true, _id)} > <img className="imgCards" src={edit} alt="edit" /></div>
                        <div onClick={() => deleteItem(_id)}><img className="imgCards" src={trash} alt="delete" /></div>
                    </div>
                </Card.Body>
            </Card>
        </Col >
    )
}

export default ItemCardProfile