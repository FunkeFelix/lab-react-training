import React from 'react';
import ReactDOM from 'react-dom';
import './Greetings.css';

class Greetings extends React.Component {
  state = {
    greetings: {
      de: 'Hallo',
      en: 'Hello',
      es: 'Hola',
      fr: 'Bonjour',
    },
  };
  render() {
    return (
      <div>
        <h1>
          {this.state.greetings[this.props.lang]} {this.props.children}
        </h1>
      </div>
    );
  }
}

export default Greetings;
