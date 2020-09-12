import React from 'react';

export default function InfoTab(props) {
    return (
        <div className="InfoTab">
            <h2>{props.info.name}</h2>
            <div className="info">
                <p>{props.info.address}</p>
                <p>{props.info.phoneNumber}</p>
            </div>
        </div>
    )
}