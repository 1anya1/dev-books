import React, { Component } from 'react';

class Books extends Component {
    state = {
        books:[]
    }
    componentDidMount(){
        this.getBooks()
    }
    getBooks= ()=>{
        fetch('http://localhost:3000/books')
            .then(response =>response.json())
            .then(json=> console.log(json))
        .catch(error => console.log(error))
    }
    render () {
        return (
            <h1>Notices</h1>
        )
    }
}

export default Books;