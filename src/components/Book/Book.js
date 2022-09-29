import React from 'react';
import './Book.css'

const Book = ({ book, handleAddToCart }) => {
    const { name, time, img } = book;
    return (
        <div>

            <div className="card h-100" >
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h5 className="card-title fs-6">{name}</h5>
                        <p className="card-text fs-6">Reading Time: {time} minutes</p>
                    </div>
                    <button onClick={() => handleAddToCart(book)} className="btn btn-warning">Add To List</button>
                </div>
            </div>
        </div>
    );
};

export default Book;