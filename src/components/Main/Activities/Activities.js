import React from 'react';
import './Activities.css'
import Activity from './Activity/Activity';

const Activities = ({activities}) => {
    return (
        <div className='activities-container'>
            {
                activities.map(activity=><Activity activity={activity} key={activity.id}></Activity>)
            }
        </div>
    );
};

export default Activities;