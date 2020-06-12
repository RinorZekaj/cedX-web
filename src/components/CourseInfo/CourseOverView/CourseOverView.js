import React from 'react';

import classes from './CourseOverView.module.css'

const courseoverview = ( props ) => {
    return (
        <div className={classes.container}>
            <h2 className={classes.title}>{props.title}</h2>
            <p className={classes.overview}>{props.overview}</p>
            <div className={classes.hLine}></div>
        </div>
    );
};

export default courseoverview;