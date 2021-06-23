import React from 'react';
import { Card } from '../card/card.component';
import './card-list.style.css'



export const Cardlist=(props) => {

    return <div className="card-list">{props.Manga.map((manga) => (
        <Card  key={manga.id} manga={manga}/>
      ))}</div>;
};