import React, { Component } from 'react';
import axios from 'axios';
import Book from './Book.js'
import update from 'immutability-helper'
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
    addNewBook = () => {
        axios.post(
            'http://localhost:3000/books',
            { book: 
                {
                    name:'',
                    author:'', 
                    customerReviews:'', 
                    published: '', 
                    img:''
                }
            }

        )
        .then(response =>{
            console.log(response)
            const books = update(this.state.ideas, {
                $splice: [[0,0, response.data]]
            })
            this.setState({books: books})
        })
        .catch (error=> console.log(error))
    }
  render() {
    return (
        <div className='container'>
            <button className='newBook'
            onClick={this.addNewBook}>
            New Book
            </button>                    
            
        {this.state.books.map((book)=> {
            return(
                 <Book book={book} key={book.id} />
            )
        })}
      </div>
    )
  }
}

export default BooksContainer