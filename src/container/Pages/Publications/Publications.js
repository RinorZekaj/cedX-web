import React from 'react';

import classes from './Publications.module.css';
import Article from '../../../components/Article/Article';
import Footer from '../../../components/Footer/Footer';

const publications = ( props ) => {
    return (
        <div className={classes.container}>
            <Article />
            <Article />
            <Article />
            <button className={classes.button}>LEXO ME SHUME</button>
            <Footer />
        </div>
    );
};

export default publications;