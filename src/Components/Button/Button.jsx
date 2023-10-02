
import React from 'react';

import "./ButtonStyle.scss";
export default function Button ({style,content,action,type}){
    return (
        <button className={type ? type : "button"} onClick={() => action} style={{...style}} >
            {content}
        </button>
    )
}