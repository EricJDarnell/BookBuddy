import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function SearchBar({catalog, setBookId}) {
    const [searchFilter, setSearchFilter] = useState([])
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    function handleSearch() {
        if (query !== '') {
            setSearchFilter(catalog.filter(title => title.author.toLowerCase().includes(query.toLowerCase())
    || title.title.toLowerCase().includes(query.toLowerCase())))
} else (setSearchFilter([])) 
    }

    return <><form onSubmit={(e) => {
        e.preventDefault()
        handleSearch()}}><label>Search by author or title: <input value={query} onChange={(e) => {
        e.preventDefault();
        setQuery(e.target.value)
    }}/></label><button type='submit'>search</button></form>
    {<ul id="catalog">
          {(searchFilter.length !== 0) && (
            searchFilter.map((book, idx) => {
              return (
                <li key={idx} id={book.id} className="book-card" name={book.title} onClick={(e) => {
                  e.preventDefault();
                  setBookId(book.id);
                  navigate(`/catalog/${book.title}`);
                }}>
                  <p className="title">{book.title}</p>
                  <img src={book.coverimage} alt={book.title} />
                  <p className='author'>{book.author}</p>
                  {!book.available && <p className="checked-out">checked out</p>}
                </li>
              );
            })
          )}
        </ul>}
    </>

}