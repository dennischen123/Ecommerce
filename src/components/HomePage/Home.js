import React, {useState, } from 'react';
import Banner from './Banner';
import InfoTab from './InfoTab';
import MenuContainer from './MenuContainer';
export default function Home(props) {
    return (
        <div className="Home">
            <Banner image={props.restaurant.info.bannerImage}/>
            <InfoTab info={props.restaurant.info}/>
            <MenuContainer submenus={props.restaurant.submenus}/>
        </div>
    )
}