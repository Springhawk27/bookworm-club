import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import RightMenu from '../RightMenu/RightMenu';
import './Body.css'

const Body = () => {
    // useState of books and right menu
    const [books, setBooks] = useState([]);


    // useEffect of businessman state
    useEffect(() => {
        fetch('./books.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setBooks(data);

            })
    }, [])

    return (
        <div className='body-container'>
            <Books books={books}></Books>
            <RightMenu></RightMenu>
        </div>
    );
};

export default Body;