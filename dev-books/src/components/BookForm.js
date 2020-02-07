import React, { Component } from 'react'
import axios from 'axios'

class BookForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
        name: this.props.book.name,
        author: this.props.book.author,
        customerReviews: this.props.book.customerReviews,
        published: this.props.book.published,
        img: this.props.book.img
    }
  }
handleInput = (e) =>{
    this.props.resetNotification()
    this.setState({[e.target.name]: e.target.value})
}
handleBlur = () => {
    const book = {
        name: this.state.name,
        author: this.state.author, 
        customerReviews: this.state.customerReviews, 
        published: this.state.published,
        img: this.state.img 
    }
axios.put(
    `http://localhost:3000/books/${this.props.book.id}`,
    {
        book: book
    }
)
.then(response => {
    
    this.props.updateBook(response.data)
})
.catch(error => console.log(error))
}
  render() {
    return (
      <div className="title">
        <form onBlur={this.handleBlur}>
          <input className='name' type="text"
            name="name" placeholder='Book Titile'  value={this.state.name} onChange={this.handleInput}/>
          <input className='author' type="text"
            name="author" placeholder='Author' value={this.state.author} onChange={this.handleInput}></input>
            <input className='customerReviews' type="number"
            name="customerReviews" placeholder='Rating'value={this.state.number} onChange={this.handleInput}></input>
            <input className='published' type="text"
            name="published" placeholder='Date Published' value={this.state.published} onChange={this.handleInput}></input>
            <input className='img' type="text"
            name="img" placeholder='image URL'value={this.state.img} onChange={this.handleInput}></input>
        </form>
      </div>
    );
  }
}


export default BookForm