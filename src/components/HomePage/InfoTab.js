import React from 'react';

export default function InfoTab(props) {
    return (
        <div className="InfoTab">
            <h2>{props.info.name}</h2>
            <div className="info">
                {/* <p>3638 noriega st</p> */}
                {/* <p>415-676-9556</p> */}
                <p>{props.info.address}</p>
                <p>{props.info.phoneNumber}</p>
            </div>
        </div>
    )
}