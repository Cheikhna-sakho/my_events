import React, { useState } from 'react';
import useFetch from '../../../hooks/useFetch';

const Lieu = ({setLieu}) => {
    return (
        <div className="lieu">
            <input type="text" placeholder='lieu' onChange={e => setLieu(e.target.value)} />
        </div>
    )
}

export default Lieu;