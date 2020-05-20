import React from 'react';
import SubMenuContainer from './SubMenuContainer';
export default function MenuContainer(props) {
    const submenus = props.submenus.map((submenu,index) => <SubMenuContainer key={index} submenu={submenu}/>);
    return (
        <div className="MenuContainer">
            {/* <h1>MenuContainer</h1> */}
            {submenus}
        </div>
    )
}