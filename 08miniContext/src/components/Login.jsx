import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'
// how the values will be fetched in UserContext for that we use useContext

// in this component, we will understand how the data is send
function Login() {

    const [username, setUsername] = useState('') // states for placeholder's values
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)
    // we have provided Context to the useContext (in this case useContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password }) // sending of data
    }

    return (
        <div>
            <h2>Login</h2>

            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder='username' />

            {" "}

            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder='password' />

            <button onClick={handleSubmit}>Submit</button>

        </div>
    )
}

export default Login