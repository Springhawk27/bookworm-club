import React, { useEffect, useState } from 'react';
import './RightMenu.css'
import user from '../../images/user.jpg'
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('congratulations you have completed your activity', {
    style: {
        border: '1px solid orange',
        padding: '16px',
        color: '#713200',
    },
    iconTheme: {
        primary: 'green',
        secondary: '#FFFAEE',
    },
});


const RightMenu = ({ cart }) => {
    const [bTime, setBTime] = useState([]);
    console.log(bTime)

    let total = 0;
    let quantity = 0;
    for (const book of cart) {
        quantity = quantity + book.quantity;
        total = total + (book.time * book.quantity);

    }


    const handleAddBreak = (id, time) => {
        let breakTime = {};

        const timeExist = breakTime[id]
        if (!timeExist) {
            breakTime[id] = time
        }
        localStorage.setItem('break-time', JSON.stringify(breakTime))
        setBTime(breakTime)

    }

    const getBreakTime = () => {
        let breakTime = {};

        //get the  cart from local storage
        const storedBreakTime = localStorage.getItem('break-time');
        if (storedBreakTime) {
            breakTime = JSON.parse(storedBreakTime);
        }
        return breakTime;
    }
    const storedBreakTime = getBreakTime()

    return (
        <div className='right-menu-container'>
            {/* <h3 className='title-text'>{quantity}</h3> */}

            <div className='user'>
                <img src={user} alt="" className='user-image' />
                <div className='user-info'>
                    <h3 className='title-text'>Sajjad Mahmud</h3>
                    <p className='small-text'>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='user-details'>
                <div>
                    <h3 className='title-text2'>SE </h3>
                    <p className='small-text2'>Profession</p>
                </div>
                <div>
                    <h3 className='title-text2'>56hr</h3>
                    <p className='small-text2'>Read</p>
                </div>
                <div>
                    <h3 className='title-text2'>26yrs</h3>
                    <p className='small-text2'>Age</p>
                </div>
            </div>
            <div>
                <h3 className='title-text'>Add A Break</h3>
                <div className='break-details'>
                    <div>
                        <button onClick={() => handleAddBreak('time', 5)} type="button" className="btn btn-outline-dark button-break" >05m</button>
                    </div>
                    <div>
                        <button onClick={() => handleAddBreak('time', 10)} type="button" className="btn btn-outline-dark button-break">10m</button>
                    </div>
                    <div>
                        <button onClick={() => handleAddBreak('time', 20)} type="button" className="btn btn-outline-dark button-break">20m</button>
                    </div>

                    <div>
                        <button onClick={() => handleAddBreak('time', 30)} type="button" className="btn btn-outline-dark button-break">30m</button>

                    </div>
                </div>
            </div>
            <div>
                <h3 className='title-text'>Reading Details</h3>
                <div className='reading-details'>
                    <div>
                        <h3 className='title-text2'>Reading Time</h3>
                    </div>
                    <div>
                        <p className='small-text2'>{total} minutes</p>

                    </div>

                </div>
                <div className='reading-details'>
                    <div>
                        <h3 className='title-text2'>Break Time</h3>
                    </div>
                    <div>
                        <p className='small-text2'>{storedBreakTime.time} minutes</p>

                    </div>

                </div>
                <div >
                    <button onClick={notify} type="button" className="btn btn-warning w-100">Activity Completed</button>

                    <Toaster position="top-center"
                        reverseOrder={false} />
                </div>
            </div>
        </div>
    );
};

export default RightMenu;