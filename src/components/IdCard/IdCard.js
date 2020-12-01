import React from 'react';
import ReactDOM from 'react-dom';
import './IdCard.css';

class IdCard extends React.Component {
  render() {
    return (
      <>
        <div className="idCardContainer">
          <img className="idCardImage" src={this.props.picture} />
          <div className="idCardData">
            <p>
              <strong>First Name:</strong> {this.props.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {this.props.lastName}
            </p>
            <p>
              <strong>Gender:</strong> {this.props.gender}
            </p>
            <p>
              <strong>Height:</strong> {this.props.height}
            </p>
            <p>
              <strong>Birthdate:</strong>{' '}
              {this.props.birth.toString().slice(0, 15)}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default IdCard;
