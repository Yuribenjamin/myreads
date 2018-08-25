import React, { Component } from 'react'
import Books from './Books'

class MajorPage extends Component {
    render() {
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        this.props.book.filter(x => x.shelf === 'currentlyReading')
                        .map(x => (
                            <li key={x.id}>
                                <Books
                                x = {x}
                                moveBooks={this.props.moveBooks}
                                currentShelf= 'currentlyReading'
                                />
                            </li>)
                        )
                    }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        this.props.book.filter(x => x.shelf === 'wantToRead')
                        .map(x => (
                            <li key={x.id}>
                                <Books
                                x = {x}
                                moveBooks={this.props.moveBooks}
                                currentShelf= 'wantToRead'
                                />
                            </li>)
                        )
                    }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        this.props.book.filter(x => x.shelf === 'read')
                        .map(x => (
                            <li key={x.id}>
                                <Books
                                x = {x}
                                moveBooks={this.props.moveBooks}
                                currentShelf= 'read'
                                />
                            </li>)
                        )
                    }
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )
    }
}

export default MajorPage