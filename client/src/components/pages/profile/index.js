import React, { Component } from 'react'
import UserService from '../../../service/UserService'
import './profile.css'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.userService = new UserService()
    }



    render() {
        console.log(this.props)
        return (
            <>
                <div className="container">
                    <Col className="profileCol">
                        <h2> Hi, {this.props.loggedInUser.name}!</h2>

                        <p><img className="avatarUser" src={this.props.loggedInUser.avatar} alt="user avatar" /></p>
                        <Button type="submit" className="btn btn-light btn-block btn-sm details auth">Edit profile</Button>
                    </Col>
                    <hr></hr>
                    <br></br>
                    <h4>These are your listed items:</h4>
                    <br></br>

                </div>

            </>
        )
    }
}

export default Profile

