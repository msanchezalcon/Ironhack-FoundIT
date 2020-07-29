import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import './index.css'



const Index = () => {

    return (
        <>
            <div className='container homePage'>
                <img className="imgPag" src="./../../../../../logo_transparent.png" alt="company logo" />
            </div>

            <div className="container registerBtns">
                <Button className="btn btn-light btn-block btn-sm details authIndex bt"><Link to="/signup" activeStyle={{ color: 'lightseagreen' }}>Sign up</Link></Button>
                <Button className="btn btn-light btn-block btn-sm details authIndex bt"><Link to="/login" activeStyle={{ color: 'lightseagreen' }}>Log in</Link></Button>
            </div>

        </>
    )
}

export default Index