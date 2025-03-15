import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null) // api calls can be made here and then just throw these into the value={}
    return (
        <UserContext.Provider value={{ user, setUser }}>  {/* wrapping is Provider, and just by writing <UserContext > will not work because we have to pass a value(property) i.e., Provider*/}
                                                          {/* but what it will access, so we have to give some data too */}
                                                          {/* we are giving access to user and setUser by using the Provider's property "value"  */}
                                                          {/* we are passing object in value */}
            {children} {/* children will be rendered as it is, children may has Card or Card which has dashboard, etc */}
        </UserContext.Provider>
    )
}

export default UserContextProvider