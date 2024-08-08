import React, {useContext} from 'react'
import UserContext from "../context/UserContext";


function Profile() {

    const {user} = useContext(UserContext)
    if(!user) return <div style={{textAlign:"center"}}>Please Login</div>

    return <div style={{textAlign:"center"}}>Welcome {user.username} </div>
    

  
}

export default Profile