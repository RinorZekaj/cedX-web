import React from 'react';

import classes from './Sponsors.module.css';
import Help from '../../../assets/Sponsors/help.PNG';
import Vita from '../../../assets/Sponsors/Vita.PNG';
import UBT from '../../../assets/Sponsors/ubt.PNG';
import Offbox from '../../../assets/Sponsors/offbox.PNG';
import Light from '../../../assets/Sponsors/light.PNG';
import KBI from '../../../assets/Sponsors/KBI.PNG';
import Footer from '../../../components/Footer/Footer';

const sponsors = ( props ) => {
    return (
        <div className={classes.container}>
            <div className={classes.boxHolder}>
                <div className={classes.box}>
                    <img src={Help}/>
                </div>
                <div className={classes.vL}></div>
                <div className={classes.box}>
                    <img src={Vita}/>
                </div>
                <div className={classes.one}></div>
                <div className={classes.box}>
                    <img src={UBT}/>
                </div>
                <div className={classes.two}></div>
                <div className={classes.box}>
                    <img src={Offbox}/>
                </div>
                <div className={classes.one}></div>
                <div className={classes.box}>
                    <img src={Light}/>
                </div>
                <div className={classes.vL}></div>
                <div className={classes.box}>
                    <img src={KBI}/>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default sponsors;