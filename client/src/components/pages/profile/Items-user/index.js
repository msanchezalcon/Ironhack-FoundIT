// import React, { Component } from 'react'

// import AppService from '../../../../service/AppService'
// import UserService from '../../../../service/UserService'

// import './items-user.css'
// import Button from 'react-bootstrap/Button'
// import Row from 'react-bootstrap/Row'
// import Modal from 'react-bootstrap/Modal'
// import ItemCardProfile from './Item-card-profile'
// import Spinner from '../../../ui/Spinner'
// import ItemForm from './../../items/Item-form'


// class ItemsUser extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             items: [],
//             updateModal: false,
//             id: this.props.loggedInUser._id


//         }
//         this.appService = new AppService()
//         this.userService = new UserService()

//     }

//     componentDidMount = () => {
//         if (this.props.loggedInUser) {
//             this.updateItemList()
//         }
//     }
//     componentDidUpdate = (prevProps) => {
//         if (!prevProps.loggedInUser && this.props.loggedInUser) {
//             this.updateItemList()
//         }
//     }

//     updateItemList = () => {
//         this.userService
//             .getUserItems(this.state.id)
//             .then(response => {
//                 console.log('all items from this user', response.data)
//                 this.setState({ items: response.data })
//             })
//             .catch(err => console.log(err))
//     }

//     deleteItem = (id) => {
//         this.appService.deleteItem(id)
//             .then(response => {
//                 const updateItem = this.state.items.filter(item => item._id !== id)
//                 this.setState({ items: updateItem })
//             })
//             .catch(err => console.log(err))
//     }

//     // editItem = (id,{} ) => { // no funciona aun
//     //     this.appService.editItem(id,{loquesea} )
//     //         .then(() => this.updateItemList())
//     //         .catch(err => console.log(err))
//     // }

//     //handle edit modal for item
//     handleModal = () => this.setState({ updateModal: true })
//     onHide = () => this.setState({ updateModal: false })

//     handleItemSubmit = () => {
//         this.handleModal(false)
//         this.updateItemList()
//     }


//     render() {
//         console.log('items user page props', this.props)
//         console.log('estado de items user', this.state.items)
//         console.log('props de usuario en items user', this.props.loggedInUser)




//         const name = this.state.items.name ? this.state.items.name : ""
//         const description = this.state.items.description ? this.state.items.description : ""
//         const imageUrl = this.state.items.imageUrl ? this.state.items.imageUrl : ""

//         return (
//             <>
//                 {
//                     !this.state.items ? <Spinner /> :
//                         <Row>
//                             {this.state.items.map(elm => <ItemCardProfile editItem={this.editItem} deleteItem={this.deleteItem} key={elm._id} {...elm} />
//                             )}
//                         </Row>
//                 }


//                 {/* <Modal size="lg" show={this.state.updateModal} onHide={this.onHide} >
//                     <Modal.Body>
//                         <Row>
//                             {this.state.updateModal ? <ItemForm id={id} name={name} description={description} imageUrl={imageUrl} closeModal={this.onHide} /> : null}
//                         </Row>
//                     </Modal.Body>
//                 </Modal> */}
//             </>
//         )
//     }
// }

// export default ItemsUser