import React from 'react';
import anime from 'animejs';
import VizSensor from 'react-visibility-sensor';

import Cover from '../../../assets/cover.jpg'
import classes from './Home.module.css'
import Event from '../../../assets/event.PNG'
import Footer from '../../../components/Footer/Footer'

class home extends React.Component {

    state = {
        change: true
    }

    animation = () => {
        if(!this.state.change){
            anime({
                targets: [document.getElementById('box1'), document.getElementById('box2'), document.getElementById('box3'), document.getElementById('box4')],
                translateY: -290,
                duration: 1800
            })
        }
    }

    componentWillUpdate(){
        this.animation();
        console.log(this.state.change)
    }

    render(){
    return (
        <div className={classes.container}>
            <div className={classes.firstDiv}>
                <img src={Cover}/>
                <div id={classes.gradient}>
                    <h1>TEACHING YOUNGSTER EARLY<br /> WHAT WE LEARND LATE</h1>
                </div>
                <button className={classes.btn}>REGJISTROHU</button>
            </div>
            <div className={classes.secondDiv}>
                <div className={classes.secondGradient}>
                    <p id={classes.p1}>WHY <br />CHOSE <br />US</p>
                    <p id={classes.p2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className={classes.thirdDiv}>
                <div className={classes.title}>
                    <p>Publikimet</p>
                    <h1>CEDTALKS EVENT</h1>
                </div>

                <div className={classes.event}>
                    <div className={classes.eventHolder}>
                        <img src={Event}/>
                    </div>
                    <div className={classes.UpComing}>
                        <h2>UPCOMING</h2>

                        <p>cedtalks permbylli edicionin e saj te #1 me teme "Programi- mi dhe e ardhmja", me nje interesim te jashtezakonshem per boten e programimit.</p>
                    </div>
                </div>
            </div>
            <VizSensor 
                onChange={(isVisible) => {
                    this.setState({change: isVisible})
                }}>
                <div className={classes.fourthDiv}>
                    <div className={classes.bars}>
                        <div className={classes.box1} id="box1">
                            <div style={{width: "31%", height: "65%", backgroundColor: "white"}}></div>
                            <div style={{width: "39%", height: "75%", backgroundColor: "white"}}><p style={{marginTop: "-20px", marginLeft: "-6px"}}>CedX</p></div>
                            <div style={{width: "25%", height: "62%", backgroundColor: "white"}}></div>
                        </div>
                        <div className={classes.box1} id="box2">
                            <div style={{width: "31%", height: "42%", backgroundColor: "#67C9CF"}}></div>
                            <div style={{width: "42%", height: "46%", backgroundColor: "#67C9CF"}}><p style={{marginTop: "-20px", marginLeft: "-6px"}}>CedX</p></div>
                            <div style={{width: "25%", height: "40%", backgroundColor: "#67C9CF"}}></div>
                        </div>
                        <div className={classes.box1} id="box3">
                            <div style={{width: "10%", height: "56%", backgroundColor: "#E82353"}}></div>
                            <div style={{width: "22%", height: "58%", backgroundColor: "#E82353"}}></div>
                            <div style={{width: "25%", height: "64%", backgroundColor: "#E82353"}}></div>
                            <div style={{width: "42%", height: "73%", backgroundColor: "#E82353"}}><p style={{marginTop: "-20px", marginLeft: "-6px"}}>CedX</p></div>
                        </div>
                        <div className={classes.box1} id="box4">
                            <div style={{width: "20%", height: "73%", backgroundColor: "#F79021"}}></div>
                            <div style={{width: "5%", height: "81%", backgroundColor: "#F79021"}}></div>
                            <div style={{width: "42%", height: "91%", backgroundColor: "#F79021"}}><p style={{marginTop: "-20px", marginLeft: "-6px"}}>CedX</p></div>
                            <div style={{width: "20%", height: "68%", backgroundColor: "#F79021"}}></div>
                        </div>
                    </div>
                    <div className={classes.barEndings}>
                        <div className={classes.end1}>
                            <div style={{width: "31%", height: "12px", backgroundColor: "white"}}></div>
                            <div style={{width: "39%", height: "35px", backgroundColor: "white"}}></div>
                            <div style={{width: "25%", height: "19px", backgroundColor: "white"}}></div>
                        </div>
                        <div className={classes.end1}>
                            <div style={{width: "31%", height: "13px", backgroundColor: "#67C9CF"}}></div>
                            <div style={{width: "42%", height: "25px", backgroundColor: "#67C9CF"}}></div>
                            <div style={{width: "25%", height: "17px", backgroundColor: "#67C9CF"}}></div>
                        </div>
                        <div className={classes.end1}>
                            <div style={{width: "32%", height: "13px", backgroundColor: "#E82353"}}></div>
                            <div style={{width: "42%", height: "30px", backgroundColor: "#E82353"}}></div>
                            <div style={{width: "25%", height: "20px", backgroundColor: "#E82353"}}></div>
                        </div>
                        <div className={classes.end1}>
                            <div style={{width: "20%", height: "5px", backgroundColor: "#F79021"}}></div>
                            <div style={{width: "47%", height: "27px", backgroundColor: "#F79021"}}></div>
                            <div style={{width: "20%", height: "2px", backgroundColor: "#F79021"}}></div>
                        </div>
                    </div>
                </div>
            </VizSensor>
            <Footer />
        </div>
    );
    }
};

export default home;