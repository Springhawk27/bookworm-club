import React from 'react';
import './RightMenu.css'
import user from '../../images/user.jpg'

const RightMenu = () => {
    return (
        <div className='right-menu-container'>
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
                    <h3 className='title-text2'>26 yrs</h3>
                    <p className='small-text2'>Age</p>
                </div>
            </div>
            <div>
                <h3 className='title-text'>Add A Break</h3>
                <div className='break-details'>
                    <div>
                        <button type="button" class="btn btn-outline-dark button-break">05m</button>
                    </div>
                    <div>
                        <button type="button" class="btn btn-outline-dark button-break">10m</button>
                    </div>
                    <div>
                        <button type="button" class="btn btn-outline-dark button-break">20m</button>
                    </div>

                    <div>
                        <button type="button" class="btn btn-outline-dark button-break">30m</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightMenu;