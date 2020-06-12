import React from 'react';

import Header from '../../components/Header/Header'
import classes from './Layout.module.css'

const layout = ( props ) => {
    return (
        <div className={classes.layout}>
            <Header pageTitle={props.children.children}/>
            <main>
                {props.children}
            </main>
        </div>
    );
};

export default layout;