import React, { Component } from 'react';
import axios from 'axios';

class BooksContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3000/books')
        .then(response => {
          console.log(response)
          this.setState({books: response.data})
        })
        .catch(error => console.log(error))
      }
  render() {
    return (
      <div className='container'>
        {this.state.books.map((book)=> {
            return(
                <div className='title' key={book.id}>
                    <h3>{book.name}</h3>
                    <h4>{book.author}</h4>
                    <h5>{book.published}</h5>
                    <h5>Amazon Rating : {book.customerReviews}</h5>
                    <img src= {book.img} alt=''></img>
                </div>
            )
        })}
      </div>
    )
  }
}

export default BooksContainer