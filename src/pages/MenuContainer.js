import React, { useContext } from 'react';
import SubMenuContainer from '../components/SubMenuContainer';
import { CartContext } from '../context/CartContext';

export default function MenuContainer(props) {
    const {store, dispatch} = useContext(CartContext);
    const submenus = store.restaurant.submenus.map((submenu,index) => <SubMenuContainer key={index} submenu={submenu}/>);
    return (
        <div className="MenuContainer">
            {submenus && submenus}
        </div>
    )
}