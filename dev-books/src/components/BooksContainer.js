import React, { Component } from 'react';
import axios from 'axios';
import Book from './Book'
import update from 'immutability-helper'
import BookForm from './BookForm'
class BooksContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            editBookId:null
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
            //console.log(response)
            const books = update(this.state.books, {
                $splice: [[0,0, response.data]]
            })
            this.setState({books: books,
            editBookId: response.data.id})
        })
        .catch (error=> console.log(error))
    }
    
  render() {
    return (
    <div>
        <div>
            <button className='newBook'
            onClick={this.addNewBook}>
            New Book
            </button>  
        </div>                  
            
            {this.state.books.map((book) => {
                    if(this.state.editBookId === book.id) {
                      return(<BookForm book={book} key={book.id} />)
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