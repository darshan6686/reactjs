import React from 'react'
import Book from './Book';
import books from './Books.json'

const Booklist = () => {
  return (
    <>
      {books.map((elem) => {
        return (
            <Book Img={elem.Img} name={elem.name} Email={elem.Email} Address={elem.Address} qualification={elem.qualification} contact={elem.contact} />
        )
      })}
    </>
  )
}

export default Booklist;