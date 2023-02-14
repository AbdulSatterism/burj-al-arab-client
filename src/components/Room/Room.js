import React from 'react';
import { Link } from 'react-router-dom';
import './Room.css'

const Room = ({ hotel }) => {
    const { name, img, price, id } = hotel;
    console.log(img)
    return (
        <div className='room-card'>
            <div className='bed'>
                <img src={img} alt="" />
                <div className='info'>
                    <h4>{name}</h4>
                    <p>Price: ${price}</p>
                </div>
            </div>
            <Link to={`/booking/${id}`}><button>Book</button></Link>
        </div>
    );
};

export default Room;