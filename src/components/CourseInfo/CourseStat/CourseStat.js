import React from 'react';

import classes from './CourseStat.module.css';

const coursestat = ( props ) => {
    return (
        <React.Fragment>
            <div style={{textAlign: props.align}} className={classes.container}>
                <p className={classes.type}>{props.type}</p>
                <p className={classes.info}>{props.info}</p>
            </div>
            <div className={classes.hLine}></div>
        </React.Fragment>
    );
};

export default coursestat;