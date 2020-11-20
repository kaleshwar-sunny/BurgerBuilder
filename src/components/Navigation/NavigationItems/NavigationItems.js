import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem className={classes.pacificoFont} link="/" exact>Burger builder</NavigationItem>
        <NavigationItem className={classes.pacificoFont} link="/orders">Orders</NavigationItem>
    </ul>
);

export default navigationItems;