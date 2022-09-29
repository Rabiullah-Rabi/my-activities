import React, { useEffect, useState } from 'react';
import './Info.css';
import profile from '../../../profile.PNG';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { addToDb } from '../../../utilities/fakedb';


const Info = ({durations,breaks,handleBreak}) => {
    const totalDuration = durations.reduce((curr, prev) => curr + prev, 0);
    const breakTime = localStorage.getItem('break_time');
    return (
        <div className='info-container'>
            <div className='profile-wrapper'>
                <img src={profile} className='profile' alt="" />
                <div>
                    <h2>Md Rabiullah</h2>
                    <h3>Astronaut</h3>
                </div>
            </div>
            <div className='break-wrapper'>
                <h2>Add Breaks</h2>
                <div className='breaks'>
                    <p className='break' onClick={()=>handleBreak(5)}>5 min</p>
                    <p className='break' onClick={()=>handleBreak(10)}>10 min</p>
                    <p className='break' onClick={()=>handleBreak(15)}>15 min</p>
                    <p className='break' onClick={()=>handleBreak(25)}>25 min</p>
                </div>
            </div>
            <div className='activitity-details'>
                <h2>Activity Details</h2>
                <div className='result'>
                    <h3 >Activity Duration:</h3>
                    <span >{totalDuration} min</span>
                </div>
                <div className='result'>
                    <h3 >Break Time:</h3>
                    <span >{(breakTime==null)?0:breakTime} min</span>
                </div>
            </div>
            <div>
                <button className='completed-btn' onClick={() => toast("Successfully Completed activity")}>Activity Completed</button>
                <ToastContainer />
            </div>
            
        </div>
    );
};

export default Info;