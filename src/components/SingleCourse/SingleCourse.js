import React from 'react';

import classes from './SingleCourse.module.css';
import cover from '../../assets/Courses/robot.jpg';
import InfoSection from '../InfoSection/InfoSection';
import Footer from '../Footer/Footer';

const singlecourse = ( props ) => {
    return (
        <div className={classes.container}>
            <img id={classes.image} src={cover}/>
            <InfoSection />
            <Footer />
        </div>
    );
};

export default singlecourse;