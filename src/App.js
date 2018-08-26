import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MajorPage from './MajorPage'
import SearchPage from './SearchPage'

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
        <MajorPage
          books={this.state.books}
          moveBooks={this.moveBooks}
        />
        <SearchPage/>
      </div>
    )
  }
}

export default BooksApp
