import React from 'react';
import Book from '../Book/Book';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons';
import './Books.css'
import Blog from '../Blog/Blog';


const Books = (props) => {
    const { books, handleAddToCart } = props;
    return (
        <div className='books-container-main'>
            <div className='title'>
                <FontAwesomeIcon icon={faBook} className='book-icon' />
                <h1>Book Worm Club</h1>

            </div>
            <p>Select today's books to read</p>
            <div className='books-container'>
                {
                    books.map(book => <Book
                        key={book.key}
                        book={book}
                        handleAddToCart={handleAddToCart}
                    ></Book>
                    )
                }
            </div>
            <Blog></Blog>
        </div >
    );
};

export default Books;