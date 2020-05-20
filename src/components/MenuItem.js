import React from 'react';

export default function MenuItem(props) {
    return (
        <div className="MenuItem">
            <img alt="food" src={props.item.img}></img>
            <h5>{props.item.name}</h5>
            <h5>${props.item.price}</h5>
        </div>
    )
}