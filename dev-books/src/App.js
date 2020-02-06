import React, { Component } from 'react';
import Books from './components/Books.js';


class App extends Component {
  state = {
    books:[], 
        formInputs: {
            name: '',
            author:'',
            customerReviews:'',
            published:'',
            img:''
        }
}
componentDidMount() {
  this.getBooks();
}
getBooks = () =>{
  fetch('http://localhost:3000/books')
    .then(response=>response.json())
    .then(json =>this.setState({books: json}))
    .catch(error =>console.log(error))
}
handleChange = (event) => {
    const updateInput = Object.assign( this.state.formInputs, { [event.target.id]: event.target.value })
    this.setState(updateInput)
}

handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/books', {
      body: JSON.stringify(this.state.formInputs),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdBook => {
      return createdBook.json()
    })
    .then(jsonedBook => {
      this.setState({
        formInputs: {
          name:'',
          author:'',
          customerReviews: '',
          published: '',
          img: ''
        } ,
        books: [jsonedBook, ...this.state.books]
      })
    })
    .catch(err => console.log(err))
}

    render() {
        return (
            <div className = 'App'>
              <div className = 'container'>
                <main>
                  <Books content={this.state.books} />
                </main>
                <nav>
                  <h2>Add Book</h2>
                    <form onSubmit={this.handleSubmit}>
                      <label htmlFor='author'>Author</label>
                      <input type='text' id='author' 
                      value={this.state.formInputs.author} 
                      onChange={this.handleChange} />

                      <label htmlFor='name'> Book's Name </label>
                      <input type='text' id='name' 
                      value={this.state.formInputs.name} 
                      onChange={this.handleChange}/>

                      <label htmlFor='customerReviews'>Review Score</label>
                      <input type='decimals' id='customerReviews' 
                      value={this.state.formInputs.customerreviews} 
                      onChange={this.handleChange}/>

                      <label htmlFor='published'>Date published</label>
                      <input type='text' id='published'  
                      value={this.state.formInputs.published} 
                      onChange={this.handleChange}/>

                      <label htmlFor='img'>Image.png</label>
                      <input type='url' id='img' 
                      value={this.state.formInputs.img} 
                      onChange={this.handleChange}/>

                      <input type='submit' className='submit' />
                    </form>
                </nav>
              </div>
              <footer />
            </div>
        )
    }
}

export default App;