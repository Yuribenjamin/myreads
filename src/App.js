import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MajorPage from './MajorPage'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {
    book: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((book) => {
      this.setState({book})
    })
  }

  moveBooks = (book, shelf) => {
    BooksAPI.update(book, shelf);
    this.componentDidMount();
  }

  render() {
    return (
      <div className="app">
        <MajorPage
          book={this.state.book}
          moveBooks={this.moveBooks}
        />
        <SearchPage/>
      </div>
    )
  }
}

export default BooksApp
