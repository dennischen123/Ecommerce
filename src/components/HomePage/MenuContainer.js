import React, { useContext } from 'react';
import SubMenuContainer from './SubMenuContainer';
import { CartContext } from '../../context/CartContext';

export default function MenuContainer(props) {
    const context = useContext(CartContext).restaurant;
    const submenus = context.submenus.map((submenu,index) => <SubMenuContainer key={index} submenu={submenu}/>);
    return (
        <div className="MenuContainer">
            <h1>test</h1>
            {submenus}
        </div>
    )
}