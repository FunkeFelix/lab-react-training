import React from 'react';
import ReactDOM from 'react-dom';
import './CreditCard.css';

class CreditCard extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: `${this.props.bgColor}` }}>
        <div className="creditType"> {this.props.type}</div>
        <div className="">
          ############{this.props.number.toString().slice(12)}
        </div>
        <div>
          <p>
            Expires {this.props.expirationMonth}/
            {this.props.expirationYear.toString().slice(2)} {this.props.bank}
          </p>
        </div>
        <div>
          <p> {this.props.owner}</p>
        </div>
      </div>
    );
  }
}

export default CreditCard;
