import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Shelf extends Component {

    static propTypes = {
        shelfTitle: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        books: PropTypes.array,
        onShelfUpdate: PropTypes.func.isRequired
    }

    render() {
        const { shelfTitle, title, books, onShelfUpdate } = this.props

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">
                    { shelfTitle }
                </h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book, index) => (
                            book.shelf === title && (
                                <Book
                                    key={index}
                                    book={book}
                                    onShelfUpdate={onShelfUpdate}
                                />
                            )
                        ))}
                    </ol>
                </div>
            </div>

        )
    }
}

export default Shelf
