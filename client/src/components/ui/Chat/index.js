import React, { Component } from 'react'
import AppService from './../../../service/AppService'
import ChatComponent from './ChatComponent'
import Spinner from './../Spinner'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'



class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            ownerItem: []
        }
        this.appService = new AppService()

    }


    componentDidMount = () => this.updateItemList()

    functionOwner = () => {
        const idItem = this.props.match.params.item_id
        const info_chatItem = this.state.items.filter(item => idItem.includes(item._id))
        this.setState({ ownerItem: info_chatItem })
    }

    updateItemList = () => {
        this.appService
            .getAllItems()
            .then(response => {
                console.log('all items from DB', response.data)
                this.setState({ items: response.data })
                this.functionOwner()
            })
            .catch(err => console.log(err))
    }


    render() {

        console.log('chat father items', this.state.items)
        console.log('OwnerItem', this.state.ownerItem)

        const id_chat = this.props.match.params.item_id
        const info_chatItem = this.state.items.filter(item => id_chat.includes(item._id))
        const personWhoFound = info_chatItem
        console.log('person who found', personWhoFound)

        return (


            <Container as="main" className="chat-page">


                {
                    !this.state.items.length ? <Spinner /> :
                        <Row>
                            <ChatComponent {...this.props} items={this.state.items} />
                        </Row>
                }

            </Container>

        )
    }
}

export default Chat