import React from 'react'

const Profile = props => {

    return props.loggedInUser && <h2>Hi, {props.loggedInUser.username}! Looking for something?</h2>
}

export default Profile