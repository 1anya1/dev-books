import React, { Component } from 'react';

class Books extends Component {

    state = {
        books: []
    }

    render() {
        const book = this.props.content;
        console.log(book)
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


            </div>
        )
    }
}

export default Books;