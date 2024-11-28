import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import bookLogo from './assets/books.png'
import Books from './components/Books'
import Navigation from './components/Navigations'
import SingleBook from './components/SingleBook'
import Register from './components/Register'
import Login from './components/Login'

function App() {
  const [token, setToken] = useState(null)
  const [bookId, setBookId] = useState(null)
  const [user, setUser] = useState({})


  return (
    <>
    <header>
      <Navigation/>
    </header>
    <div id='main-section'>

      <h1><img id='logo-image' src={bookLogo}/>Library App</h1>
      <Routes>
        <Route path='/' element={<Login user={user} setUser={setUser} token={token} setToken={setToken}/>}/>
        <Route path='/register' element={<Register setToken={setToken}/>}/>
        <Route path='/catalog' element={<Books user={user} token={token} setBookId={setBookId}/>}/>
        <Route path='/catalog/:bookid' element={<SingleBook token={token} user={user} bookId={bookId}/>} />
      </Routes>
    </div>
    </>
  )
}

export default App
