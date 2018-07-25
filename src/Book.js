import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onShelfUpdate: PropTypes.func.isRequired
    }

    render() {
        const { book, onShelfUpdate } = this.props
        console.log('chegou a book.js')

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div
                            className="book-cover"
                            style={ {
                                    width: 128,
                                    height: 193,
                                    backgroundImage: `url("${book.imageLinks.thumbnail}")`
                                } } ></div>
                        <div className="book-shelf-changer">
                            <select value={book.shelf} onChange={(e) => onShelfUpdate(book, e.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }
}

export default Book
