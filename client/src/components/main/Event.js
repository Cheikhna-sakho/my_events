import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import EventSheetCard from '../cards/EventSheetCard';

const EventMain = () => {
    const { id } = useParams();
    const { data, error } = useFetch(`https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records/${id}`);
    data && console.log(data);
    error && console.log(error);
    
    return (
        <div className="body body-event">
            <EventSheetCard data={data && data} />
            <div className="eventSheet-desc">
                <h2>Description Event</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dignissimos ipsa commodi deleniti alias? Sint aspernatur labore qui laborum iure, unde impedit vel ipsum nobis iste inventore repellat ratione odit!</p>
            </div>
        </div>
    )
}

export default EventMain;