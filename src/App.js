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

  render() {
    return (
      <div className="app">
        <MajorPage
          book={this.state.book}
        />
        <SearchPage/>
      </div>
    )
  }
}

export default BooksApp
