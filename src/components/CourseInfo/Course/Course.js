import React from 'react';

import classes from './Course.module.css';

const course = ( props ) => {
    return (
        <div className={classes.container}>
            <h2>HTML 5</h2>
            <ul>
                <li>Hyrje ne HTML 5</li>
                <li>Struktura e web faqes</li>
                <li>Tagat e hederave</li>
                <li>Tagat e paragrafit</li>
                <li>Formatimi i tekstit</li>
                <li>Listat e parenditura</li>
                <li>Listat e renditura</li>
                <li>Imazhet</li>
                <li>Format</li>
                <li>Tabelat</li>
                <li>Linqet</li>
                <li>Entitetet e HTML</li>
                <li>IFrames</li>
            </ul>
        </div>
    );
};

export default course;