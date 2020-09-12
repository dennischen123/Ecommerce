import React, {useContext} from 'react'
import { makeStyles } from '@material-ui/styles';
import { useHistory, Link } from 'react-router-dom';
import {Button} from '@material-ui/core';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import InfoTab from '../components/InfoTab';
import {CartContext} from '../context/CartContext';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
    },
    nav: {
        // position: 'absolute'
    }

}))

export default function Header(props) {
    const {store, dispatch} = useContext(CartContext);
    const classes = useStyles();
    const history = useHistory();
    return(
        <>
            <Nav className={classes.nav}></Nav>
            <Banner className={classes.nav} image={store.restaurant.info.bannerImage}></Banner>
            <InfoTab info={store.restaurant.info}></InfoTab>
        </>
    )
}