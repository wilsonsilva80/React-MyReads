import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class ListBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onShelfUpdate: PropTypes.func.isRequired
    }

    state = {
        query: '',
        filteredBooks: []
    }

    updateQuery = (query) => {
        let trimmedQuery = query.replace(/^\s+/, '')
        this.setState({
            query: trimmedQuery
        })
    }

    clearQuery = () => {
        this.setState({ query: '' })
    }

    render() {
        const { books, onShelfUpdate } = this.props
        const { query, filteredBooks } = this.state

        if(query) {
            BooksAPI.search(query, 20).then(results => {
                if(results.length) {
                    results = results.filter((res) => (res.imageLinks))
                    for (let res of results) {
                        res.shelf = 'none'
                        books.map(book => {
                            if(res.id === book.id)
                                res.shelf = book.shelf
                            return null
                        })
                    }
                this.setState({filteredBooks: results})
              }
        })}


        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to='/'
                        className="close-search">
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                      <input
                        type="text"
                        onChange={(event) => this.updateQuery(event.target.value)}
                        placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {   (filteredBooks.length && query) ? (
                                filteredBooks.map((book, index) => (
                                   <Book
                                       key={index}
                                       book={book}
                                       onShelfUpdate={onShelfUpdate}
                                   />
                                ))
                            ) : 'Use the search box'
                    }
                    </ol>
                </div>
            </div>
        )
    }
}


export default ListBooks
