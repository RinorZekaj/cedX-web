import React from 'react';
import Menu from '../Menu/Menu';

const header = ( props ) => {
    return (
        <div>
            <h4>{props.pageTitle}</h4>
            <Menu />
        </div>
    );
};

export default header;