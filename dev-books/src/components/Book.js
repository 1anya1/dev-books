import React from 'react'


const Book = ({book}) =>
    <div className='title' key={book.id}>
        <h3>{book.name}</h3>
        <h4>{book.author}</h4>
        <h5>{book.published}</h5>
        <h5>Amazon Rating : {book.customerReviews}</h5>
        <img src= {book.img} alt=''></img>
    </div>


export default Book