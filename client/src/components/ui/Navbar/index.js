import React, { Component } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './navbar.css'

import AuthService from './../../../service/AuthService'

import { Link, NavLink } from 'react-router-dom'

class Navigation extends Component {

    constructor(props) {
        super(props)
        this.AuthService = new AuthService()
    }

    logout = () => {
        this.AuthService
            .logout()
            .then(() => {
                this.props.setTheUser(false)
                this.props.handleToast(true, 'User has been disconnected')
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Navbar bg="light" variant="light" expand="lg" sticky="top" className="details">
                <Navbar.Brand>
                    <Link to="/">Found_IT</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as="span">
                            <NavLink to="/" exact activeStyle={{ color: 'SlateBlue' }}>Home</NavLink>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <NavLink to="/main/all" activeStyle={{ color: 'SlateBlue' }}>Find items</NavLink>
                        </Nav.Link>

                        {this.props.loggedInUser ?
                            (
                                <Nav.Link as="span">
                                    <span onClick={this.logout}>Log out</span>
                                </Nav.Link>
                            ) : (
                                <>
                                    <Nav.Link as="span">
                                        <NavLink to="/signup" activeStyle={{ color: 'SlateBlue' }}>Sign up</NavLink>
                                    </Nav.Link>
                                    <Nav.Link as="span">
                                        <NavLink to="/login" activeStyle={{ color: 'SlateBlue' }}>Log in</NavLink>
                                    </Nav.Link>
                                </>
                            )
                        }

                        <Nav.Link as="span">
                            <NavLink to="/main/all" activeStyle={{ color: 'SlateBlue' }}>Hi, {this.props.loggedInUser ? this.props.loggedInUser.username : 'guest'}</NavLink>
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation