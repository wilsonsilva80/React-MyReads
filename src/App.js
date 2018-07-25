import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import ListShelfs from './ListShelfs'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
    state = {
        books: [],
    }

    componentDidMount() {
        this.fetchBooks()
    }

    fetchBooks = () => {
        BooksAPI.getAll().then((books) =>{
            this.setState({ books })
        })
    }

    onShelfUpdate = (book, shelf) => {
        BooksAPI.update(book, shelf).then(()=>{
            this.fetchBooks()
        })
    }

    render() {
        const books = this.state.books;

        return (
            <div className="app">
                <Route path="/search" render={() => (
                        <ListBooks
                            books = {books}
                            onShelfUpdate={this.onShelfUpdate}
                        />
                )} />

            <Route exact path="/" render={() => (
                <ListShelfs
                    books = {books}
                    onShelfUpdate={this.onShelfUpdate}
                />
            )} />

            </div>
        )
    }
}

export default BooksApp
