import React from 'react';
import './Activity.css'
const Activity = ({ activity }) => {
    const { name, img, duration } = activity;

    return (
        <div className='activity-wrapper'>
            <img src={img}  className='thumbnail' alt="" />
            <h3>{name}</h3>
            <p>Duration: {duration} min</p>
            <button className='add-to-list'>Add To list</button>
        </div>
    );
};

export default Activity;