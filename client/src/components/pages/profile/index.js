import React from 'react'

const Profile = props => {

    return props.loggedInUser && <h2>Hi, {props.loggedInUser.username}! These are your listed items</h2>
}

export default Profile