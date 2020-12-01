import React from 'react';
import ReactDOM from 'react-dom';
import './BoxColor.css';

class BoxColor extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: `rgb(
            ${this.props.r} ,${this.props.g}, ${this.props.b}
          )`,
        }}
      >
        <p>
          The color is : {this.props.r} ,{this.props.g}, {this.props.b}
        </p>
      </div>
    );
  }
}

export default BoxColor;
