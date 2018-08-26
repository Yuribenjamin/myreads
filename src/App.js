import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MajorPage from './MajorPage'
import SearchPage from './SearchPage'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  moveBooks = (book, shelf) => {
    BooksAPI.update(book, shelf);
    this.componentDidMount();
  }

  render() {
    return (
      <div className="app">
         <Route exact path ="/" render ={() => (
            <MajorPage
            books={this.state.books}
            moveShelf = {this.moveBooks}
         /> 
         )}
         />
         <Route path ="/search" render ={() => (
           < SearchPage
              books={this.state.books}
              moveShelf = {this.moveBooks}
            />
          )}
          />     
      </div>
    )
  }
}

export default BooksApp
