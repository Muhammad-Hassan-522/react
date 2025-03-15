import React from 'react'

const UserContext = React.createContext()

export default UserContext;

// context gives you provider
// each context is a provider / you have to make a provider

// <UserContext>  {/* now it becomes a provider, it means all the components inside it (Login, Card, Data) will have the access of global UserContext, all the components can access the states through UserContext */}
    // <Login />
    // <Card> 
        // <Data />
    // </Card>
// </UserContext>
