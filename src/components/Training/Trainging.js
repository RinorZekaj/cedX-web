import React from 'react';

import classes from './Training.module.css';

const training = ( props ) => {
    return (
        <div className={classes.project}>
            <div className={classes.image}>
                <img src={props.image}/>
                <div className={classes.gradient} style={{backgroundImage: "linear-gradient(to left," + props.color + "80 , rgba(0, 0, 0, 0))"}}></div>
            </div>
            <div className={classes.info}>
                <p id={classes.teacher}>{props.teacher}</p>
                <p className={classes.title} style={{color: props.color}}>{props.title}</p>
                <p id={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <button className={classes.btn} style={{backgroundColor: props.color}}>ME SHUME +</button>
        </div>
    );
};

export default training;