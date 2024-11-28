import { useState } from "react"
import { userRegistration } from "../API";
import { useNavigate } from "react-router-dom";

export default function Register({setToken}) {
    const [userReg, setUserReg] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    })
    const navigate = useNavigate();
    function handleChange(e) {
        const {name, value} = e.target;
        setUserReg((prevData) => ({...prevData, [name]: value,}))
    }

    async function submitHandler(e) {
        e.preventDefault();
        setToken(await userRegistration(userReg));
        navigate('/');
    }

    return <form onSubmit={submitHandler}>
        <label> First name: <input required name="firstname" value={userReg.firstname} type="text" onChange={handleChange}/></label>
        <label> Last Name: <input required name="lastname" value={userReg.lastname} type="text" onChange={handleChange}/></label>
        <label> Email: <input required name="email" value={userReg.email} type="text" onChange={handleChange}/></label>
        <label> Password: <input required name="password" value={userReg.password} type="text" onChange={handleChange}/></label>
        <button type="submit">submit</button>
    </form>
}