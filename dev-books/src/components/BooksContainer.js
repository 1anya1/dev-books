import React, { Component } from 'react';
import axios from 'axios';
import Book from './Books'
import update from 'immutability-helper'
import BookForm from './BookForm'
class BooksContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            editBookId:null,
            notification:''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3000/books')
        .then(response => {
          this.setState({books: response.data})
        })
        .catch(error => console.log(error))
      }
    addNewBook = () => {
        axios.post( 'http://localhost:3000/books',
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
            const books = update(this.state.books, {
                $splice: [[0,0, response.data]]
            })
            this.setState({books: books,
            editBookId: response.data.id})
        })
        .catch (error=> console.log(error))
    }
    updateBook = (book) => {
        const bookIndex = this.state.books.findIndex(x => x.id === book.id)
        const books = update(this.state.books, {
            [bookIndex]: {$set: book}
        })
        this.setState({books: books, notification: 'All Changes Saved'})
    }
    resetNotification = () => {
        this.setState({notification: ''})
    }
    enableEditing = (id) => {
        this.setState({editBookId: id})
    }
    
  render() {
    return (
    <div>
        <div>
            <button className='newBook'
            onClick={this.addNewBook}>
            New Book
            </button> 
            <span className="notification">
            {this.state.notification}
            </span> 
        </div>                  
            
            {this.state.books.map((book) => {
                    if(this.state.editBookId === book.id) {
                      return(<BookForm book={book} key={book.id} 
                      updateBook={this.updateBook}
                      resetNotification = {this.resetNotification}/>)
                    } else {
                      return (<Book book={book} key={book.id} />)
                    }
                  })}
            {/* return(
                 <Book book={book} key={book.id} />     
            ) */}
     
      </div>
    )
  }
}

export default BooksContainer