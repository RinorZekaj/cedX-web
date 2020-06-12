import React from 'react';

import classes from './Contact.module.css';
import map from '../../../assets/map.PNG';
import facebook from '../../../assets/facebook-logo.png';
import instagram from '../../../assets/instagram.png';
import twitter from '../../../assets/twitter (2).png';
import Footer from '../../../components/Footer/Footer';

const contact = ( props ) => {
    return (
        <div className={classes.container}>
            <div className={classes.map}>
                <img src={map}/>
            </div>
            <div className={classes.info}>
                <div className={classes.contact}>
                    <p>Hoxhe Tahsini</p>
                    <p>Peje</p>
                    <p>+386 49 813 624</p>
                    <p>info@cedx.co</p>
                    <p>@centerforeducationX</p>
                </div>
                <hr />
                <div className={classes.socialMedia}>
                    <img src={facebook}/>
                    <img src={instagram}/>
                    <img src={twitter}/>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default contact;