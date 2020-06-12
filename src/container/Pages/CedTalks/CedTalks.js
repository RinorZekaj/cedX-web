import React from 'react';
import anime from 'animejs';
import $ from 'jquery';

import classes from './CedTalks.module.css'

class cedtalks extends React.Component {

  state = {
    card: 2,
    progress: 80
  }

  next = () => {
    if(this.state.card >= 2 && this.state.card < 6){
    console.log("working")
    let progress = this.state.progress - 20;
    anime({
      targets: [document.getElementById(`topRightCard_${this.state.card}`),document.getElementById(`bottom1Card_${this.state.card}`),document.getElementById(`bottom4Card_${this.state.card}`)],
      width: '100%', // -> from '28px' to '100%',
      easing: 'easeInOutSine',
      direction: 'alternate',
      duration: 600,
      loop: false
    });
    anime({
        targets: [document.getElementById(`topLeftCard_${this.state.card}`), document.getElementById(`bottom2Card_${this.state.card}`)],
        height: '100%', // -> from '28px' to '100%',
        easing: 'easeInOutSine',
        direction: 'alternate',
        duration: 600,
        loop: false
    });
    anime({
        targets: [document.getElementById('progress'), document.getElementById('progressValue'), document.getElementById('progressValueAll')],
        right: progress+'%',
        easing: 'easeInOutSine',
        direction: 'alternate',
        duration: 600,
        loop: false
    })
    this.setState({
        card: this.state.card + 1,
        progress: this.state.progress - 20
    })
    }
  }

  prev = () => {
    if(this.state.card > 2 && this.state.card <= 6){
    let progress = this.state.progress + 20;
    anime({
      targets: [document.getElementById(`topRightCard_${this.state.card - 1}`),document.getElementById(`bottom1Card_${this.state.card - 1}`),document.getElementById(`bottom4Card_${this.state.card - 1}`)],
      width: '0%', // -> from '28px' to '100%',
      easing: 'easeInOutSine',
      direction: 'alternate',
      duration: 600,
      loop: false
    });
    anime({
        targets: [document.getElementById(`topLeftCard_${this.state.card - 1}`), document.getElementById(`bottom2Card_${this.state.card - 1}`)],
        height: '0%', // -> from '28px' to '100%',
        easing: 'easeInOutSine',
        direction: 'alternate',
        duration: 600,
        loop: false
    });
    this.setState({
        card: this.state.card - 1,
        progress: this.state.progress + 20
    })
    anime({
        targets: [document.getElementById('progress'), document.getElementById('progressValue'), document.getElementById('progressValueAll')],
        right: progress+'%',
        easing: 'easeInOutSine',
        direction: 'alternate',
        duration: 600,
        loop: false
    })
    }
  }

  render(){

  /////////-------////////

        return (
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    <div className={classes.TopRow}>
                        <div className={classes.topLeft}>
                            <div className={classes.topLeftCard_1} id="topLeftCard_1"></div>
                            <div className={classes.topLeftCard_2} id="topLeftCard_2"></div>
                            <div className={classes.topLeftCard_3} id="topLeftCard_3"></div>
                            <div className={classes.topLeftCard_4} id="topLeftCard_4"></div>
                            <div className={classes.topLeftCard_5} id="topLeftCard_5"></div>
                        </div>
                        <div className={classes.topRight}>
                            <div className={classes.topRightCard_1} id="topRightCard_1"></div>
                            <div className={classes.topRightCard_2} id="topRightCard_2"></div>
                            <div className={classes.topRightCard_3} id="topRightCard_3"></div>
                            <div className={classes.topRightCard_4} id="topRightCard_4"></div>
                            <div className={classes.topRightCard_5} id="topRightCard_5"></div>
                        </div>
                    </div>
                    <div className={classes.BottomRow}>
                        <div className={classes.bottom1}>
                            <div className={classes.bottom1Card_1} id="bottom1Card_1"></div>
                            <div className={classes.bottom1Card_2} id="bottom1Card_2"></div>
                            <div className={classes.bottom1Card_3} id="bottom1Card_3"></div>
                            <div className={classes.bottom1Card_4} id="bottom1Card_4"></div>
                            <div className={classes.bottom1Card_5} id="bottom1Card_5"></div>
                        </div>
                        <div className={classes.bottom2}>
                            <div className={classes.bottom2Card_1} id="bottom2Card_1"></div>
                            <div className={classes.bottom2Card_2} id="bottom2Card_2"></div>
                            <div className={classes.bottom2Card_3} id="bottom2Card_3"></div>
                            <div className={classes.bottom2Card_4} id="bottom2Card_4"></div>
                            <div className={classes.bottom2Card_5} id="bottom2Card_5"></div>
                        </div>
                        <div className={classes.bottom3}>
                            <div className={classes.progressWrapper}>
                                <div className={classes.progressValue} id="progressValue">{this.state.card - 1}</div>
                                <div className={classes.progressBar}>
                                    <div className={classes.progress} id="progress"></div>
                                </div>
                                <div className={classes.progressValueAll} id="progressValueAll">5</div>
                            </div>
                            <div className={classes.controler}>
                                <button id="prevBtn" onClick={this.prev}>prev</button>
                                <button id="nextBtn" onClick={this.next}>next</button>
                            </div>
                        </div>
                        <div className={classes.bottom4}>
                            <div className={classes.bottom4Card_1} id="bottom4Card_1"></div>
                            <div className={classes.bottom4Card_2} id="bottom4Card_2"></div>
                            <div className={classes.bottom4Card_3} id="bottom4Card_3"></div>
                            <div className={classes.bottom4Card_4} id="bottom4Card_4"></div>
                            <div className={classes.bottom4Card_5} id="bottom4Card_5"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default cedtalks;