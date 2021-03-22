
import React from 'react';
import './card.style.css';

export const Card=(props)=>(
    <div className="card-container">
        <img alt="catto" src={`https://robohash.org/${props.manga.id}.png?set=set4`}/>
        <p >{props.manga.name}</p>
    </div>
)

