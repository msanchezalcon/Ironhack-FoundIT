import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import AuthService from './../service/AuthService'

import { Switch, Route, Redirect } from 'react-router-dom'


import Navigation from './ui/Navbar'
import Message from './ui/CustomToast'
import SignupForm from './auth/Signup-form'
import LoginForm from './auth/Login-form'
import IndexPage from './pages/index'
import ItemList from './../components/pages/items/Item-main'
import ItemDetail from './../components/pages/items/Item-detail'
import Profile from './pages/profile'
import Chat from './ui/Chat'
import RegularFooter from './../components/ui/Footer/RegularFooter'
import ChatComponent from './ui/Chat/ChatComponent'

class App extends Component {

    constructor() {
        super()
        this.state = {
            loggedInUser: null,
            chat:true,
            toast: {
                visible: false,
                text: '',
            }
        }
        this.AuthService = new AuthService()
    }

    setTheUser = user => this.setState({ loggedInUser: user }, () => console.log("El estado de App ha cambiado:", this.state))

    fetchUser = () => {
        this.AuthService
            .isLoggedIn()
            .then(response => this.state.loggedInUser === null && this.setState({ loggedInUser: response.data }))
            .catch(err => console.log({ err }))
    }

    handleToast = (visible, text = '') => {
        let toastCopy = { ...this.state.toast }
        toastCopy = { visible, text }
        this.setState({ toast: toastCopy })
    }

    render() {

        this.fetchUser()

        return (

            <>

                <Navigation setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} handleToast={this.handleToast} />

                <Switch>

                    <Route exact path="/" render={() => <IndexPage />} />

                    <Route exact path="/chat/:item_id" render={props => <Chat {...props} loggedInUser={this.state.loggedInUser} setTheUser={this.setTheUser} />} />
                    <Route exact path="/message" render={props => <ChatComponent {...props} loggedInUser={this.state.loggedInUser} setTheUser={this.setTheUser} chat={this.state.chat}/>} />


                    <Route exact path="/items/all" render={() => this.state.loggedInUser ? <ItemList loggedInUser={this.state.loggedInUser} /> : <Redirect to='/signup' />} />


                    <Route exact path="/items/:item_id" render={props => <ItemDetail {...props} />} />

                    <Route exact path="/user" render={props => <Profile {...props} setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />} />


                    <Route exact path="/signup" render={props => <SignupForm {...props} setTheUser={this.setTheUser} handleToast={this.handleToast} />} />

                    <Route exact path="/login" render={props => <LoginForm {...props} setTheUser={this.setTheUser} handleToast={this.handleToast} />} />

                </Switch>
                {/* <RegularFooter /> */}


                <Message {...this.state.toast} handleToast={this.handleToast} />

            </>

        )
    }
}

export default App
