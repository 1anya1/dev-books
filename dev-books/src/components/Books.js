import React, { Component } from 'react';

class Books extends Component {
    state = {
        books:[]
    }
    componentDidMount(){
        this.getBooks()
    }
    getBooks = () =>{
        fetch('http://localhost:3000/books')
            .then(response =>response.json())
            //this line of code is passing in the info from our ruby file via json AJAX requeest 
            .then(json => this.setState({ books: json }))
        .catch(error => console.log(error))
    }
    render () {
        // console.log(this.state.books)
        return (
            <div>
                {this.state.books.map( book => {
                    return (
                    <div key={book.id} className='book'>
                        <h3>{book.name}</h3>
                        <h4>{book.author}</h4>
                        <h5>{book.published}</h5>

                    </div>
                    )
                })}
            </div>
        )
    }
}

export default Books;