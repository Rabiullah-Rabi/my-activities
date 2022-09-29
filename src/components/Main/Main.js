import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import {Activities} from './Activities/Activities';
import Info from './Info/Info';
import './Main.css'

const Main = () => {
    const [activities, setActivities] = useState([]);
    const [durations, setDurations] = useState([]);
    const [breaks, setBreaks] = useState([]);
    
    const handleBreak = (props) => {
        setBreaks(props);
        addToDb(props)
        }
    useEffect(() => {
        fetch('fakeData/activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    },[])
    return (
        <div className='main-wrapper'>
            <Activities
                activities={activities}
                durations={durations}
                setDurations={setDurations}
            ></Activities>
            <Info
                durations={durations}
                setDurations={setDurations}
                breaks={breaks}
                handleBreak={handleBreak}
            ></Info>
        </div>
    );
};

export default Main;