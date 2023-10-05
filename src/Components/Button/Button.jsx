import React from 'react';

import "./ButtonStyle.scss";
/*eslint-disable*/
export default function Button ({style, content, action, classN,type}){
    return (
        <button type={type ? type : "button"}  className={classN ? `button ${classN}` : "button"} onClick={() => action} style={{...style}} >
            {content}
        </button>
    )
}