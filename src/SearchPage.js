import React, { Component } from 'react'
import Books from './Books'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {
    state = {
        query: '',
        searchBooks: []
    }

    updateQuery = (query) => {
        this.setState({query})
        this.searchedBooks(query);
    }

    searchedBooks = query => {

        if(query) {
            BooksAPI.search(query).then((searchBooks) =>{
                this.setState({searchBooks})
            })
        }else {
            this.setState.searchBooks({searchBooks: []});
        }
        
    }

    render() {
        return(
            <div className="search-books">
            <div className="search-books-bar">
                <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                <div className="search-books-input-wrapper">
                
                <input 
                    type="text" 
                    placeholder="Search by title or author"
                    value={this.state.query}
                    onChange={(e) =>
                        this.updateQuery(e.target.value)
                    }
                />

                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                {this.state.searchBooks.map(searchBooks => (
                    <li key={searchBooks.id}>
                        <Books
                            book={searchBooks}   
                        />
                    </li>
                ))}
                </ol>
            </div>
            </div>
        )
    }
    }

export default SearchPage