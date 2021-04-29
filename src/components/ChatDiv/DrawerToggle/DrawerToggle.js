import React from 'react';

// import Logo from '../../Logo/Logo';
// import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './DrawerToggle.module.css';
import LeftSideContact from '../../LeftSideContact/LeftSideContact';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <div className={attachedClasses.join(' ')}>
            <LeftSideContact />

        </div>

    );
};

export default sideDrawer;