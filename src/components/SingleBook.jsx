import { fetchSingleBook, updateBook } from "../API";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// TODO - add your code to create a functional React component that renders details for a single book. 
export default function SingleBook({ bookId, user, token }) {
    const [book, setBook] = useState({})

    useEffect(() => {
        async function bookFetch(idNum) {
            setBook( await fetchSingleBook(idNum));
        }
        bookFetch(bookId);
    },[]);

    async function clickToReserve(tk, bkId, ava){
        setBook(await updateBook(tk, bkId, ava))
    }
    return book ? <><ul id="catalog"><li id={book.id} className="single-book-card" name={book.title}>
        <p className="title">{book.title}</p>
        <img src={book.coverimage} alt={book.title} />
        <p className='author'>{book.author}</p>
        </li>
        <li className="single-book-card">
            <h2>Description</h2>
        <h3 className='description'>{book.description}</h3>
        {book.available ? <p className="available">available to rent</p> : <p className="checked-out">checked out</p>}
        {user.id && book.available && <button onClick={async (e) =>{
            e.preventDefault()
            await clickToReserve(token, book.id, false)
            }}>Check out book</button>}
        {!user.id && book.available && <Link to='/'>log in to reserve</Link>}
        <Link to='/catalog'>back to catalog</Link>
      </li></ul></> : <p>retrieving update...</p>
}
//Fetch the book data from the provided API. 
//You may consider conditionally rendering a 'Checkout' button for logged in users.