import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Shelf extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array
    }

    render() {
        const { title, books } = this.props

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">
                    { title }
                </h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.length > 0 && books.filter((book, index) => (
                            book.shelf === title && (
                                <Book
                                    key={index}
                                    book={book}
                                    onShelf={onShelf}
                                />
                            )
                        ))}
                    </ol>
            </div>
        )
    }
}

export default Shelf
