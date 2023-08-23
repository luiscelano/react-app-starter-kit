import React from 'react';
import NavigationBar from '../NavigationBar';
import * as styles from './styles'
import { Outlet } from 'react-router-dom';

function AppLayout(props) {

    return(
        <React.Fragment>
            <NavigationBar />
            <styles.LayoutContainer>
                <Outlet/>
            </styles.LayoutContainer>
        </React.Fragment>
    );
}

export default AppLayout;
