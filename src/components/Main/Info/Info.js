import React from 'react';
import './Info.css';
import profile from '../../../profile.PNG'

const Info = ({durations,setDurations}) => {
    const totalDuration = durations.reduce((curr, prev) => curr + prev,0);
    const handleBreak = (props) => {
        console.log(props);
    }
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
                {/* <div className='result'>
                    <h3 >Break Time:</h3>
                    <span >{handleBreak()} min</span>
                </div> */}
            </div>
            
        </div>
    );
};

export default Info;