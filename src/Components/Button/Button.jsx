import React from 'react';

import "./ButtonStyle.scss";
/*eslint-disable*/
export default function Button ({style, content, action, classN}){
    return (
        <button className={classN ? `button ${classN}` : "button"} onClick={() => action} style={{...style}} >
            {content}
        </button>
    )
}