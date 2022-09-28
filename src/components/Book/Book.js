import React from 'react';
import './Book.css'

const Book = (props) => {
    const { name, time, img } = props.book;
    console.log(props)
    return (
        <div>
            {/* <h1>name</h1> */}
            {/* <img src={img} alt="data-science" border="0" /> */}
            <div className="card h-100" >
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h5 className="card-title fs-6">{name}</h5>
                        <p className="card-text fs-6">Reading Time: {time} minutes</p>
                    </div>
                    <a href="" className="btn btn-warning">Add To List</a>
                </div>
            </div>
            {/* <h1 className='text-primary'>Book</h1> */}
            {/* <img src="https://i.ibb.co/4ThcXLM/data-science.jpg" alt="data-science" border="0" />
            <img src="https://i.ibb.co/NL1srHs/javascript.jpg" alt="javascript" border="0" />
            <img src="https://i.ibb.co/RNMmvf1/machine-learning.jpg" alt="machine-learning" border="0" />
            <img src="https://i.ibb.co/d0r93JP/python.jpg" alt="python" border="0" />
            <img src="https://i.ibb.co/nM0j31R/react.jpg" alt="react" border="0" />
            <img src="https://i.ibb.co/CV39nJY/deep-learning.jpg" alt="deep-learning" border="0" />

            <img src="https://i.ibb.co/wy9NsZr/statistics.jpg" alt="statistics" border="0" /> */}
        </div>
    );
};

export default Book;