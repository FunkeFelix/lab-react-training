import React from 'react';
import ReactDOM from 'react-dom';
import './Rating.css';

export default function Rating(props) {
  const rate = Math.round(props.children);
  console.log(rate);
  if (rate === 0) {
    return (
      <div>
        <span>☆☆☆☆☆</span>
      </div>
    );
  } else if (rate === 1) {
    return (
      <div>
        <span>⭑☆☆☆☆</span>
      </div>
    );
  } else if (rate === 2) {
    return (
      <div>
        <span>⭑⭑☆☆☆</span>
      </div>
    );
  } else if (rate === 3) {
    return (
      <div>
        <span>⭑⭑⭑☆☆</span>
      </div>
    );
  } else if (rate === 4) {
    return (
      <div>
        <span>⭑⭑⭑⭑☆</span>
      </div>
    );
  } else if (rate === 5) {
    return (
      <div>
        <span>⭑⭑⭑⭑⭑</span>
      </div>
    );
  }
}
