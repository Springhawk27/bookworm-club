import React from 'react';
import Book from '../Book/Book';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons';
import './Books.css'


const Books = (props) => {
    const { books } = props;
    return (
        <div className='books-container-main'>
            <div className='title'>
                <FontAwesomeIcon icon={faBook} className='book-icon' />
                <h1>Book Worm</h1>

            </div>
            <p>Select today's books to read</p>
            <div className='books-container'>
                {
                    books.map(book => <Book
                        key={book.key}
                        book={book}></Book>
                    )
                }
            </div>
        </div >
    );
};

export default Books;