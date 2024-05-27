import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BookComponent from './BookComponent'

const GetAllBooksComponent = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    axios
    .get('http://localhost:3500/api/v1/books')
    .then(response => setBooks(response.data))
    .catch(error => console.log(error))
  }, [books])

  return (
    <div className='books'>
      {books.map((book, index) => (
        <BookComponent book = {book} key = {index}/>
      ))}
    </div>
  )
}

export default GetAllBooksComponent