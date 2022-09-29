import React, { useState } from 'react';
import './Activity.css';

const Activity = ({ activity ,durations,setDurations}) => {
    const { name, img, description, duration } = activity;
    const handleAddToList = () => {
        const AddedDuration = duration;
        setDurations([...durations,AddedDuration]);
    }

    return (
        <div className='activity-wrapper'>
            <img src={img}  className='thumbnail' alt="" />
            <h3>{name}</h3>
            <p>{ description}</p>
            <p><b>Duration:</b> {duration} min</p>
            <button className='add-to-list' onClick={()=>handleAddToList(duration)}>Add To list</button>
        </div>
    );
};


export default Activity;