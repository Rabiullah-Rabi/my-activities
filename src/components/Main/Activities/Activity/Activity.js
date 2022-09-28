import React from 'react';
import './Activity.css'
const Activity = ({ activity }) => {
    const { name, img, duration } = activity;
    return (
        <div className='activity-wrapper'>
            <img src={img}  className='thumbnail' alt="" />
            <h1>{name}</h1>
        </div>
    );
};

export default Activity;