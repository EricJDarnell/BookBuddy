import { useState, useEffect } from "react"
import { login } from "../API";
import { Link } from "react-router-dom";
import Account from "./Account";

export default function Login({user, setUser, token, setToken}) {
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: '',
    })
    function handleChange(e) {
        const {name, value} = e.target;
        setUserLogin((prevData) => ({...prevData, [name]: value,}))
    }

    async function submitHandler(e) {
        e.preventDefault();
        setToken(await login(userLogin));
    }

    return !token ? <form onSubmit={submitHandler}>
        <label> Email: <input required name="email" value={userLogin.email} type="text" onChange={handleChange}/></label>
        <label> Password: <input required name="password" value={userLogin.password} type="text" onChange={handleChange}/></label>
        <button type="submit">submit</button>
        <div>
            <h2>Not a user?<Link to='/register'>Register here!</Link></h2>
        </div>
    </form> : <Account token={token} user={user} setUser={setUser} />
}