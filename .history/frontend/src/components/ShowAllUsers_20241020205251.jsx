import React, { useState } from 'react'
import axios from 'axios'

function ShowAllUsers() {
    const [users, setUsers] = useState([]);


    const getAllUsers = async() =>{
       const Ausers = await axios.get(
         "http://localhost:3000/api/user/getAllUsers",
         {
            withCredentials:true
         }
       );
       setUsers()
    }

    return (
        <>
        <table className='w-[800px] text-sm border-2 rounded-md  overflow-hidden'>

            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email </th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>

            </tbody>
        </table>
        </>
    )
}

export default ShowAllUsers
