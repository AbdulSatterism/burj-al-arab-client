import React, { useEffect, useState } from 'react';
import Room from '../Room/Room';
import './Home.css'

const Home = () => {
    const [hotelInfom, setHotelInfo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/hotel-info')
            .then(res => res.json())
            .then(data => setHotelInfo(data))
    }, [])

    return (
        <div className='room-container container mt-5 mb-5'>
            {
                hotelInfom.map(hotel => <Room
                    key={hotel.id}
                    hotel={hotel}
                ></Room>)
            }
        </div>
    );
};

export default Home;