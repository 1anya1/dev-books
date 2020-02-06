import React, { Component } from 'react';

class Books extends Component {

    state = {
        books:[]
    }
    
    render () {
        return (
            <div>
                {this.props.content.map( book => {
                    return (
                    <div key={book.id} className='book'>
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

export default Books;