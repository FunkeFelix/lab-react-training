import React from 'react';
import ReactDOM from 'react-dom';
import './Random.css';

class Random extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <p>
            Random value between {this.props.min} and {this.props.max}
          </p>
          {Math.floor(Math.random() * (this.props.max - this.props.min + 1)) +
            this.props.min}
        </h1>
      </div>
    );
  }
}

export default Random;
