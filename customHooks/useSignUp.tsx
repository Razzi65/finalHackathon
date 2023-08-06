import { useState } from "react"


const UseSignup = () => {

    const [newEmail, SetNewEmail] = useState ("")
    const [newPassword, setNewPassword] = useState("")


    const UserSubmitHandler = () => {


    }

    return {
        SetNewEmail, setNewPassword, UserSubmitHandler, newEmail,newPassword
    }
}

export default UseSignup