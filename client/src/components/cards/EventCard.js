import React from 'react'
import { useNavigate } from 'react-router-dom';
import BtnShadow from '../buttons/BtnShadow';
import CardDetail from './CardDetail';

const EventCard = ({ event }) => {
    const navigate = useNavigate();
    const {id,fields} = event;
    const {title,description,image} = fields;
    return (
        <CardDetail cardClass={"home-card"} imageSrc={image} infoClass={"info-card"} content={
            <>
                <h2 className=''>{title}</h2>
                <p className='desc-event'>{description}</p>
                <BtnShadow title={"En savoir plus"} addClass={"btn-card"} click={() => navigate("/event/"+id)} />
            </>
        } />
    )
}

export default EventCard;