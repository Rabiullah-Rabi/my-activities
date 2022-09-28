import React, { useEffect, useState } from 'react';
import Activities from './Activities/Activities';
import Info from './Info/Info';
import './Main.css'

const Main = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('fakeData/activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    },[])
    return (
        <div className='main-wrapper'>
            <Activities activities={activities}></Activities>
            <Info></Info>
        </div>
    );
};

export default Main;