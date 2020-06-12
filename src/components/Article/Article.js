import React from 'react';

import classes from './Article.module.css'

const article = ( props ) => {
    return (
        <div className={classes.container}>
            <div className={classes.article}>
                <p className={classes.letter}>M</p>
                <p className={classes.author}>EDMOND LAJA</p>
                <p className={classes.title}>"SI TE BEHEMI MILIONER PER 5 MINUTA E KATERDHJET E KATER SEKONDA"</p>
                <p className={classes.date}>28/12/2018</p>
            </div>
            <button className={classes.btn}>ME SHUME +</button>
        </div>
    );
};

export default article;