import React from 'react';
import styles from '../util/Overlay.module.css';
import Typist from 'react-typist';

class Overlay extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      time: 0,
      isOn: false,
      start: 0
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  startTimer() {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    })
    setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 1);
  }

  render() {
    const time = this.state.time;
    return (
      <center id={styles.overlay} className={time < 6500 ? styles.visible : styles.hidden} >
        <Typist cursor={{ show: false }}>
          <span>
            nomads living month-to-month in different cities.
          </span>
        </Typist>
        <br />
        <br />
        <br />
        <Typist cursor={{ show: false }} avgTypingDelay={100}>
          <Typist.Delay ms={4000} />
          <span style={{ "fontSize": "60px" }}>
            covilla
          </span>
        </Typist>
      </center>
    );
  }
}

export default Overlay;
