import { Link } from "react-router-dom"
/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
export default function Navigation() {

    return (
        <div id='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/catalog'>Catalog</Link>
        </div>
    )
}