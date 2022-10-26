
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const ContactPage = () => {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    return (
        <div>
            <h1>Contact</h1>
<label>First Name: </label>
<input type='text' onChange={(e)=>{
    console.log('Before', firstName);
    setFirstName(e.target.value)
    console.log('After', firstName);
}}/>
<br/>
<label>Last Name: </label>
<input type='text' onChange={(e)=>{
setLastName(e.target.value)
}}/>
<br/>
<label>Email: </label>
<input type='text' onChange={(e)=>{
    setEmail(e.target.value)
}}/>
<button onClick={()=>{
    navigate("/")
}}>Submit</button>
        </div>
    )
}

export default ContactPage