import React from 'react'
import classes from './Header.module.css'

const Header = () => {
    return <header className={classes.header}>
        <img src="https://www.tirestickers.com/wp-content/uploads/2015/07/CUSTOM-LOGO.jpg" className="logo" />
    </header>;
}

export default Header;