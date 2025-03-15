import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

// in this component, we will understand how the data is accessed
function Profile() {

    const {user} = useContext(UserContext)

    if (!user) return <div>Please Login</div> // no user is found

    return <div>Welcome {user.username}</div>
}

export default Profile