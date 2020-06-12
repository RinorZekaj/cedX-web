import React from 'react';

import classes from './CourseInfo.module.css';
import CourseStat from './CourseStat/CourseStat';

const courseinfo = ( props ) => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <div className={classes.course}>ROBOTIKA PER FEMIJE</div>
            </div>

            <div className={classes.info}>
                <div className={classes.firstRow}>
                    <CourseStat type="Niveli i aftesive" info="Niveli Fillestar" align="right"/>
                    <div className={classes.vLine}></div>
                    <CourseStat type="Mosha e kerkuar" info="+15" align="left"/>
                </div>
                <div className={classes.hLine}></div>
                <div className={classes.secondRow}>
                    <CourseStat type="Kohezgjatja" info="48 ore" align="right"/>
                    <div className={classes.vLine}></div>
                    <CourseStat type="Qmimi" info="120 EUR" align="left"/>
                </div>
                <div className={classes.hLine}></div>
            </div>
        </div>
    );
};

export default courseinfo;