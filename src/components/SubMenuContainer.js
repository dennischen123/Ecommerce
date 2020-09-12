import React from 'react';
import MenuItem from './MenuItem';

export default function SubMenuContainer(props) {
    const submenuItems = props.submenu.items.map((item, index) => <MenuItem key={index} item={item}/>)
    return (
        <div className="SubMenuContainer">
            <h1>{props.submenu.name}</h1>
            <div className="submenu-items">{submenuItems}</div>
        </div>
    )
}