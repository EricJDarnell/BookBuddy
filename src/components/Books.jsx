import { fetchBooks, updateBook } from "../API";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Books({ setBookId, user, token }) {
  const [catalog, setCatalog] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      setCatalog(await fetchBooks());
    }
    fetchData();
  }, [catalog.length]);

  async function availabilityClicker(tk, bkId){
    await updateBook(tk, bkId, true)
    navigate('/catalog')
  }

  return (
    <>
      <SearchBar catalog={catalog} setBookId={setBookId}/>
      <h2>Catalog</h2>
        <ul id="catalog">
          {catalog.length ? (
            catalog.map((book, idx) => {
              return (
                <li key={idx} id={book.id} className="book-card" name={book.title} onClick={(e) => {
                  e.preventDefault();
                  setBookId(book.id);
                  navigate(`/catalog/${book.title}`);
                }}>
                  <p className="title">{book.title}</p>
                  {user.firstname === 'admin' && <button onClick={(e) => {
                    e.preventDefault()
                    availabilityClicker(token, book.id)
                  }}>fix availability</button>}
                  <img src={book.coverimage} alt={book.title} />
                  <p className='author'>{book.author}</p>
                  {!book.available && <p className="checked-out">checked out</p>}
                </li>
              );
            })
          ) : (
            <div>Retrieving Titles...</div>
          )}
        </ul>
    </>
  );
}
//TODO - Users should be able to click on an individual book to navigate to the SingleBook component and view its details.
