import React from 'react';
import './Activities.css';
import Activity from './Activity/Activity';
import Logo from '../../../logo.png';

const Activities = ({activities,durations,setDurations}) => {
    return (
        <div className='activities-main-wrapper'>
            <div className='section-header'>
                <img src={Logo} className='logo' alt="" />
                <h1>My Daily activities</h1>
            </div>
            <div className='activities-wrapper'>

                {
                    activities.map(activity => <Activity
                        activity={activity}
                        key={activity.id}
                        durations={durations}
                        setDurations={setDurations}></Activity>)
                }
            </div>
        </div>
    );
};

export {Activities};