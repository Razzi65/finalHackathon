import { useState } from "react"


const UseSignIn = () => {

    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")

    return {
        setUserEmail, userEmail, setUserPassword, userPassword
    }
}


export default UseSignIn