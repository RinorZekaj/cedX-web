import React from 'react';

import classes from './InfoSection.module.css';
import CourseInfo from '../CourseInfo/CourseInfo';
import CourseOverView from '../CourseInfo/CourseOverView/CourseOverView';
import Course from '../CourseInfo/Course/Course';

const infosection = ( props ) => {
    return (
        <div className={classes.container}>
            <CourseInfo />
            <CourseOverView 
                title="Permbledhje"
                overview={`Moduli i pare i trajnimit 'Zhvillimi ne Web' perfshin gjuhet programuseme te perdorura ne web te cilat nevojiten per programimin e front endte qdo faqe moderne.
                \n Nga ky trajnim praktik synohet qe qdo participant te kete aftesite e duhura ne front end qe i kerkon tregu i punes.`} />
            <CourseOverView 
                title="Deri ne fund te ketij kursi studenti do te duhet te mesoje:"
                overview={`-Konceptet e zhvillimit ne web
                    \n-Ndertimi i nje web faqe me HTML
                    \n-Stilimi i faqes me CSS
                    \n-Ndertimi i web faqeve responsive
                    \n-Eventet, klikimet dhe programimi animator`}/>
            <h2 className={classes.title}>Permbajtja e trajnimit:</h2>
            <Course />
            <Course />
            <Course />
        </div>
    );
};

export default infosection;