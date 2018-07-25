import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Shelf from './Shelf'

class ListShelfs extends Component {
    static propTypes = {
        books: PropTypes.array,
        onShelfUpdate: PropTypes.func.isRequired
    }

    render() {
        const { books, onShelfUpdate } = this.props

        return (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                    <Shelf
                        shelfTitle='Currently reading'
                        title='currentlyReading'
                        books={books}
                        onShelfUpdate={onShelfUpdate}
                    />
                    <Shelf
                        shelfTitle='Read'
                        title='read'
                        books={books}
                        onShelfUpdate={onShelfUpdate}
                    />
                    <Shelf
                        shelfTitle='Want to read'
                        title='wantToRead'
                        books={books}
                        onShelfUpdate={onShelfUpdate}
                    />
                </div>
                <div className="open-search">
                    <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
              </div>
            </div>
        )
    }

}

export default ListShelfs
