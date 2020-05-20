import React from 'react';

export default function Banner(props) {
    return (
        <div className="Banner">
            <img alt="banner" src={props.image}></img>
        </div>
    )
}