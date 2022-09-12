import React from 'react'
import { FcCalendar } from "react-icons/fc";
import { MdPlace } from "react-icons/md";
import BtnShadow from '../buttons/BtnShadow';
import CardDetail from './CardDetail';

const EventSheetCard = ({ data }) => {
    const record = data ? data?.record : null;
    const fields = record ? record?.fields : null;
    
    return (
        <CardDetail imageSrc={fields?.image} cardClass={"sheet-card eventSheet-card"} content={
            <>
                <p>
                    date  {fields && <span className="date" style={{ color: "orange" }}>{fields?.date_start.replaceAll("-","/")}</span>} <FcCalendar />
                </p>
                <p>
                    lieu {fields && <span className="lieu" style={{ color: "orange" }}><em>{fields?.address}</em></span>} <MdPlace />
                </p>
                <BtnShadow title={"Organiser une sortie"} addClass={"evnt-sheet-btn"} />
            </>
        } />
    )
}

export default EventSheetCard;