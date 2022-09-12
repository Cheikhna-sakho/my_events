import React from 'react'

const BtnShadow = ({ title, click, addClass }) => {
    return (
        <div className={addClass}>
            <button onClick={click} className='btn-shadow'>
                {title}
            </button>
        </div>
    )
}

export default BtnShadow