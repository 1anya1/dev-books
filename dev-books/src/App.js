import React, { Component } from 'react';
import Books from './components/Books.js';
import './App.css'


class App extends Component {
  state = {
    books: [],
    formInputs: {
      name: '',
      author: '',
      customerReviews: '',
      published: '',
      img: '',
    },
    updateBook: {
      name: '',
      author: '',
      customerReviews: '',
      published: '',
      img: '',
    },
    editable: false

  };
  componentDidMount() {
    this.getBooks();
  }
  getBooks = () => {
    fetch('http://localhost:3000/books')
      .then(response => response.json())
      .then(json => this.setState({ books: json }))
      .catch(error => console.log(error))
  }
handleChange = (event) => {
    const updateInput = Object.assign(this.state.formInputs, { [event.target.id]: event.target.value })
    this.setState(updateInput)
  }
handleUpdate = (event) => {
  const updateBook = Object.assign(this.state.updateBook, {[event.target.id]: event.target.value})
    this.setState(updateBook)
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
            name: '',
            author: '',
            customerReviews: '',
            published: '',
            img: '',
            
          },
          books: [jsonedBook, ...this.state.books]
        })
      })
      .catch(err => console.log(err))
  }
  deleteBook = (id, index) => {
    fetch('http://localhost:3000/books/' + id, {
      method: 'DELETE'
    })
      .then((data) => {
        console.log(this.state)
        this.setState({
          books: [...this.state.books.slice(0, index), ...this.state.books.slice(index + 1)]
        });
        console.log(this.state)
      });

  }
 editBook = (book, index) => {
		console.log(this.state.editable);
		this.setState({
			editable: !this.state.editable
		});
  };
  
  
  updateBook = (event, book) => {
    event.preventDefault()
    book.name = this.state.updateBook.name
    book.author = this.state.updateBook.author
    book.customerReviews = this.state.updateBook.customerReviews
    book.published = this.state.updateBook.published
    book.img = this.state.updateBook.img

    fetch('http://localhost:3000/books/' + book.id, {
      body: JSON.stringify(book),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }

    })
    
    .then(updatedBook => {
      return updatedBook.json()
    })
      .then((jsonedBook) => {
        fetch('http://localhost:3000/books').then((response) => response.json()).then((books) => {
          this.setState({
            books: books, 
            editable: !this.state.editable, 
            updateData: 
            {
              name: '',
              author: '',
              customerReviews: '',
              published: '',
              img: ''
            } 
          })
        })

      })
  }
  

  render() {
    return (
      <div className='App'>
        <div className='container'>


          <nav>
            <h2>Add Book</h2>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor='author'>Author</label>
                <input type='text' id='author'
                  value={this.state.formInputs.author}
                  onChange={this.handleChange} />
              </div>
              <div>
                <label htmlFor='name'> Book's Name </label>
                <input type='text' id='name'
                  value={this.state.formInputs.name}
                  onChange={this.handleChange} />
              </div>
              <div>
                <label htmlFor='customerReviews'>Review Score</label>
                <input type='decimals' id='customerReviews'
                  value={this.state.formInputs.customerreviews}
                  onChange={this.handleChange} />
              </div>
              <div>
                <label htmlFor='published'>Date published</label>
                <input type='text' id='published'
                  value={this.state.formInputs.published}
                  onChange={this.handleChange} />
              </div>
              <div>
                <label htmlFor='img'>Image.png</label>
                <input type='url' id='img'
                  value={this.state.formInputs.img}
                  onChange={this.handleChange} />
              </div>
              <div>
                <input type='submit' className='submit' />
              </div>
            </form>
          </nav>

          <main>
            <div className='container'>
              {this.state.books.map((book, index) => {
                return (
                  <div key={book.id} className='book'>
                    <Books destroy={this.deleteBook} id={index} content={book}  edit={this.editBook} />
                    {this.state.editable && (
                      <form onSubmit= {(e) => {
                        this.updateBook(e, book)
                      }}
                       >
                        <h2>Update Bookmark</h2>
                        <label htmlFor="name">Name:</label>
										      <input
											        type="text"
											        default={book.name}
											        value={this.state.updateBook.name}
											        onChange={this.handleUpdate}
											        id="name"
										  />
                      <label htmlFor="author">Author:</label>
										      <input
											        type="text"
											        default={book.author}
											        value={this.state.updateBook.author}
											        onChange={this.handleUpdate}
											        id='author'
										  />
                      <label htmlFor="">Customer Reviews :</label>
										      <input
											        type="number"
											        default={book.customerReviews}
											        value={this.state.updateBook.customerReviews}
											        onChange={this.handleUpdate}
											        id="customerReviews"
										  />
                      <label htmlFor="published">Published:</label>
										      <input
											        type="text"
											        default={book.published}
											        value={this.state.updateBook.published}
											        onChange={this.handleUpdate}
											        id="published"
										  />
                      <label htmlFor="img"> Image URL:</label>
										      <input
											        type="text"
											        default={book.img}
											        value={this.state.updateBook.img}
											        onChange={this.handleUpdate}
											        id="img"
										  />
                      <input type='submit'/>


                      </form>
                    )}
                  </div>
                  
                );

              })}

            </div>
          </main>

          <footer />
        </div>
      </div>
    )
  }
}

export default App;