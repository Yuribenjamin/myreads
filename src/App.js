import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import MajorPage from './MajorPage'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  
  render() {
    return (
      <div className="app">
        <MajorPage/>
        <SearchPage/>
      </div>
    )
  }
}

export default BooksApp
