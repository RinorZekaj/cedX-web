import React from 'react';

import classes from './Footer.module.css'
import footerLogo from '../../assets/footer.PNG'

const footer = ( props ) => {
    return (
        <div className={classes.footer}>
            <img src={footerLogo}/>
        </div>
    );
};

export default footer;