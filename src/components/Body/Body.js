import React from 'react';
import Books from '../Books/Books';
import RightMenu from '../RightMenu/RightMenu';
import './Body.css'

const Body = () => {
    return (
        <div className='body-container'>
            <Books></Books>
            <RightMenu></RightMenu>
        </div>
    );
};

export default Body;