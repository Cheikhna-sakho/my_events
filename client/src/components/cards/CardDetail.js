import React from 'react';

const CardDetail = ({ content,cardClass,infoClass,imageSrc }) => {
    const info_class = infoClass || "";
    const card_class = cardClass || "";
    return (
        <div className={"card " + card_class}>
            <div className="img-card">
                {imageSrc && <img src={imageSrc} alt={"image event"}/>}
            </div>
            <div className={"grid-row detail-event " +  info_class }>
                {content}
            </div>
        </div>
    )
}

export default CardDetail;