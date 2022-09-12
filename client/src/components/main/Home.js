import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch';
import Nav from '../../templates/Nav';
import EventCard from '../cards/EventCard';

const HomeMain = () => {

    const [filterUrl, setFilterUrl] = useState(null);
    const url = "https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?limit=100&offset=0&lang=fr&timezone=UTC";
    const { data } = useFetch(filterUrl || url);

    const emptyArray = (ar) => {
        if (!ar) return false;
        if (ar.lenth == 0) return false;
        return true;
    }
    return (
        <div className="body body-home grid-col">
            <Nav setUrl={setFilterUrl} />
            <div className="content-card grid-row">
                {data && data.records.map((event, k) => <EventCard event={event.record} key={k} />)}

                {emptyArray(data) && (
                    <div className="noEvent">
                        Aucun event disponible
                    </div>
                )}

            </div>
        </div>
    )
}

export default HomeMain;