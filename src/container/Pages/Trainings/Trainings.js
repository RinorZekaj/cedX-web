import React from 'react';

import classes from './Trainings.module.css';
import Training from '../../../components/Training/Trainging';
import Image1 from '../../../assets/Projects/Image1.png';
import Image2 from '../../../assets/Projects/Image2.png';
import Image3 from '../../../assets/Projects/image3.png';
import Image4 from '../../../assets/Projects/Image4.png';
import Image5 from '../../../assets/Projects/Image5.png';
import Footer from '../../../components/Footer/Footer';

const trainings = ( props ) => {
    return ( 
        <div className={classes.container}>
            <Training 
                color="#F79021" 
                teacher="Edon Zeqiri" 
                title="ROBOTIKA PER FEMIJE"
                image={Image1}/>
            <Training 
                color="#E82353" 
                teacher="Edmond Laja" 
                title="PROGRAMIM NE JAVA"
                image={Image2}/>
            <Training 
                color="#000000"
                teacher="Flamur Krasniqi" 
                title="DIZAJN GRAFIK"
                image={Image3}/>
            <Training 
                color="#67C9CF" 
                teacher="Krenar Spahija" 
                title="ELEKTRONIKA"
                image={Image4}/>
            <Training 
                color="#0040F0" 
                teacher="Edmond Laja" 
                title="WEB DEVELOPMENT"
                image={Image5}/>
            <Footer />
        </div>
    );
};

export default trainings;