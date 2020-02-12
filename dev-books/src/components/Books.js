import React, { Component } from 'react';

class Books extends Component {

    state = {
        books: [],
    
  };

    render() {
        const book = this.props.content;
        const updateBook = this.props.update.book;
        const editBook = this.props.edit.book;
        console.log(book)
        console.log(updateBook)
        return (
            <div>

                <div key={book.id} className='book'>
                    <h3>{book.name}</h3>
                    <h4>{book.author}</h4>
                    <h5>{book.published}</h5>
                    <h5>Amazon Rating : {book.customerReviews}</h5>
                    <img src={book.img} alt=''></img>
                    <button onClick={e => this.props.destroy(book.id, this.props.id)}>Delete</button>
                    <button onClick={e => this.props.edit(book.id)}>Update</button>
                    
                    
                </div>
                {this.state.editable &&  (
                      <form onSubmit= {(e) => {
                        this.updateBook(e, book)
                      }}
                       >
                        <h2>Update Book</h2>
                        <label htmlFor="name">Name:</label>
										      <input
											        type="text"
											        default={book.name}
											        value={this.state.updateBook.name}
											        onChange={this.handleUpdate}
											        id= {book.id}
										  />
                      <label htmlFor="author">Author:</label>
										      <input
											        type="text"
											        default={book.author}
											        value={this.state.updateBook.author}
											        onChange={this.handleUpdate}
											        id= {book.id}
										  />
                      <label htmlFor="">Customer Reviews :</label>
										      <input
											        type="number"
											        default={book.customerReviews}
											        value={this.state.updateBook.customerReviews}
											        onChange={this.handleUpdate}
											        id= {book.id}
										  />
                      <label htmlFor="published">Published:</label>
										      <input
											        type="text"
											        default={book.published}
											        value={this.state.updateBook.published}
											        onChange={this.handleUpdate}
											        id= {book.id}
										  />
                      <label htmlFor="img"> Image URL:</label>
										      <input
											        type="text"
											        default={book.img}
											        value={this.state.updateBook.img}
											        onChange={this.handleUpdate}
											        id= {book.id}
										  />
                      <input type='submit'/>


                      </form>
                    )}


            </div>
        )
    }
}

export default Books;