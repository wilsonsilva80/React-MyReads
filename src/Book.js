import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onShelf: PropTypes.func.isRequired
    }

    // onShelf: function with param book and shelf
    handleChange = (e) => {
        onShelf(book, e.target.value)
    }


    render() {
        const { book, onShelf } = this.props

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
                            <select value={book.shelf} onChange={this.handleChange}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div> // TODO: check if > 1
                </div>
            </li>
        )
    }
}

export default Book
