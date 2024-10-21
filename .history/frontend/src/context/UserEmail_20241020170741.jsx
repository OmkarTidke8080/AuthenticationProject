import { createContext, useState } from "react";

import React from 'react'

function UserEmail() {
    const [userEmail , setUserEmail] = useState("");

    return (
        <UserEmailContext.Provider
        value={
            {
                userEmail,
                setUserEmail
            }
        }
        >
            {children}
        </UserEmailContext.Provider>
    )
}

export default UserEmail
