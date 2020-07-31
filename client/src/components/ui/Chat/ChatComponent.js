import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import io from "socket.io-client"
import { Link } from 'react-router-dom'
import './Chat.css'
import exit from './exit.svg'




const Page = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  background-color: #A1CAC5;
  flex-direction: column;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  max-height: 500px;
  overflow: auto;
  width: 400px;
  border: 1px solid #867D93;
  border-radius: 10px;
  padding-bottom: 10px;
  margin-top: 25px;
`

const TextArea = styled.textarea`
  width: 98%;
  height: 100px;
  border-radius: 10px;
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 17px;
  background-color: transparent;
  border: 1px solid #867D93;
  outline: none;
  color: #F0E5F3;
  letter-spacing: 1px;
  line-height: 20px;
  ::placeholder {
    color: #B1A9B4;
  }
`

const Button = styled.button`
  background-color: 56837E;
  width: 100%;
  border: none;
  height: 50px;
  border-radius: 10px;
  color: #703F83;
  font-size: 17px;
`

const Form = styled.form`
  width: 400px;
`

const MyRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`

const MyMessage = styled.div`
  width: 45%;
  background-color: #A89EB6;
  color: white;
  padding: 10px;
  margin-right: 5px;
  text-align: center;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 10%;
`

const PartnerRow = styled(MyRow)`
  justify-content: flex-start;
`

const PartnerMessage = styled.div`
  width: 45%;
  background-color: transparent;
  color: #705F88;
  border: 1px solid white;
  padding: 10px;
  margin-left: 5px;
  text-align: center;
  border-top-left-radius: 10%;
  border-bottom-left-radius: 10%;
`

const ChatComponent = (props) => {
  const [yourID, setYourID] = useState()
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState("")


  console.log('props id chat hijo', props.chat)

  const id_chat = props.chat ? "" : props.match.params.item_id
  const info_chatItem = props.chat ? "" : props.items.filter(item => id_chat.includes(item._id))
  //const personWhoFound = info_chatItem[0].foundBy.username
  //console.log('info chat item owner', info_chatItem[0].foundBy.username)
  //console.log('id chat', info_chatItem)

  const socketRef = useRef()

  useEffect(() => {
    socketRef.current = io.connect('http://localhost:5000')

    socketRef.current.on("your id", id => {
      setYourID(id);
    })

    socketRef.current.on("message", (message) => {
      console.log("here")
      receivedMessage(message)
    })
  }, [])

  function receivedMessage(message) {
    setMessages(oldMsgs => [...oldMsgs, message])
  }

  function sendMessage(e) {
    e.preventDefault()
    const messageObject = {
      body: message,
      id: yourID,
    }
    setMessage("")
    socketRef.current.emit("send message", messageObject)
  }

  function handleChange(e) {
    setMessage(e.target.value)
  }

  return (

    <Page>
      <h3>Chat room for <b><i>{!props.chat ? info_chatItem[0].name : "your listed item"}</i></b> </h3>
      <Container>
        {messages.map((message, index) => {
          if (message.id === yourID) {
            return (
              <MyRow key={index}>
                <MyMessage>
                  <p><small>{props.loggedInUser.username}</small></p>
                  {message.body}
                </MyMessage>
              </MyRow>
            )
          }
          return (
            <PartnerRow key={index}>
              <PartnerMessage>
                <p><small>{!props.chat ? info_chatItem[0].foundBy.username : "claimer: "} </small></p>
                {message.body}
              </PartnerMessage>
            </PartnerRow>
          )
        })}
      </Container>
      <Form onSubmit={sendMessage}>
        <TextArea value={message} onChange={handleChange} placeholder="Type here..." />
        <Button>Send</Button>
      </Form>
      <Link to='/items/all'><img className="exitIcon" src={exit} alt="exit" /></Link>

    </Page>
  )
}

export default ChatComponent