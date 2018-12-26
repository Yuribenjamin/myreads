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

  dispaly = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  componentDidMount() {
    this.dispaly()
  }

  moveBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.dispaly()
    })
  }

  render() {
    return (
      <div className="app">
         <Route exact path ="/myreads" render ={() => (
            <MajorPage
            books={this.state.books}
            moveBooks = {this.moveBooks}
         /> 
         )}
         />
         <Route path ="/search" render ={() => (
           < SearchPage
              books={this.state.books}
              moveBooks = {this.moveBooks}
            />
          )}
          />     
      </div>
    )
  }
}

export default BooksApp
