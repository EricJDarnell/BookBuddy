/* TODO - add your code to create a functional React component that renders 
account details for a logged in user. 
Fetch the account data from the provided API. 
You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import { useEffect } from "react";
import { getUserMe } from "../API";
import Reservations from "./Reservations";
import { Navigate } from "react-router-dom";

export default function Account({token, setToken, user, setUser}){
    useEffect(() => {
        async function fetchUser(tk) {
            setUser(await getUserMe(tk));
        }
        fetchUser(token);
    }, [token]);

    function logOut(){
        history.go(0)
    }

    return user.id && <>  
    <h2>Welcome {user.firstname} {user.lastname}</h2>
    <p>{user.email} is this not you? <button onClick={(e) => {
        e.preventDefault()
        logOut();
    }}>log out</button></p>
    <p>You have {user.books.length} books checked out</p>
    <Reservations token={token} setUser={setUser}/>
    </>
}