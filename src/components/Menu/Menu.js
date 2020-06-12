import React from 'react';
import { Link } from 'react-router-dom'

import styles from './Menu.module.css';
import Logo1 from '../../assets/facebook (1).png'
import Logo2 from '../../assets/logo (2).png'
import Logo3 from '../../assets/twitter (1).png';

class Menu extends React.Component {
    state = {
        pageTitle: "",
        toggleCondition: true
    }

    changeTitle = (title) => {
        this.setState({
            pageTitle: title,
            toggleCondition: !this.state.toggleCondition
        })
    }

    toggleClass = () => this.setState({ toggleCondition: !this.state.toggleCondition })

    render(){
        return (
            <React.Fragment>
                {/* Drawer */}

                <div className={styles.drawer} style={{height: !this.state.toggleCondition ? "80vh" : "0px"}}>
                    <div className={styles.drawerSide}>
                        <div className={styles.socialMedia}>
                            <p>@centerforeducationX</p>
                            <div className={styles.socialMediaIcons}>
                                <img src={Logo1}></img>
                                <img src={Logo2}></img>
                                <img src={Logo3}></img>
                            </div>
                        </div>
                    </div>

                    <div className={styles.menu}>
                        <div className={styles.col1}>
                            <Link className={styles.link} to="/" onClick={() => this.changeTitle("")}>Home</Link>
                            <Link className={styles.link} to="cedtalks" onClick={() => this.changeTitle("CEDTALKS")}>CedTalks</Link>
                            <Link className={styles.link} to="kontakti" onClick={() => this.changeTitle("KONTAKTI")}>Kontakti</Link>
                            <Link className={styles.link} to="projektet" onClick={() => this.changeTitle("PROJEKTET")}>Projektet</Link>
                        </div>
                        <div className={styles.col2}>
                            <Link className={styles.link2} to="publikimet" onClick={() => this.changeTitle("PUBLIKIMET")}>Publikimet</Link>
                            <Link className={styles.link2} to="sponzoret" onClick={() => this.changeTitle("SPONZORET")}>Sponzoret</Link>
                            <Link className={styles.link2} to="trajnimet" onClick={() => this.changeTitle("TRAJNIMET")}>Trajnimet</Link>
                            <Link className={styles.link2} to="team" onClick={() => this.changeTitle("X THE TEAM")}>X The Team</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.titleBar}>
                    <h1 className={styles.title}>{this.state.pageTitle}</h1>
                </div>

                {/* Hamburger Icon */}
                <div 
                    id={styles.navIcon4} 
                    onClick={this.toggleClass}
                    className={!this.state.toggleCondition ? styles.open : ""}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                
            </React.Fragment>
        );
    }
};

export default Menu;