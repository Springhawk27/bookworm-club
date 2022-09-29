import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

import Books from '../Books/Books';
import RightMenu from '../RightMenu/RightMenu';
import './Body.css'

const Body = () => {
    // useState of books and right menu
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);




    // useEffect of businessman state
    useEffect(() => {
        fetch('./books.json')
            .then(res => res.json())
            .then(data => {
                setBooks(data);

            })
    }, [])

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const key in storedCart) {
            const addedBook = books.find(book => book.key === key)
            if (addedBook) {
                const quantity = storedCart[key];
                addedBook.quantity = quantity;
                savedCart.push(addedBook);
            }
        }
        setCart(savedCart)
    }, [books])

    const handleAddToCart = (selectedBook) => {
        let newCart = [];

        const exists = cart.find(book => book.key === selectedBook.key);
        if (!exists) {
            selectedBook.quantity = 1;
            newCart = [...cart, selectedBook];
        }
        else {
            const rest = cart.filter(product => product.key !== selectedBook.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedBook.key)
    }

    return (
        <div className='body-container'>
            <Books books={books}
                handleAddToCart={handleAddToCart}
            ></Books>
            <RightMenu cart={cart}></RightMenu>
        </div>
    );
};

export default Body;