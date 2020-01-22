import React from "react";
import "./card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <a href={this.props.appUrl} rel="noopener noreferrer" target="_blank">
          <div className="card-icon">
            <br />
            <br />
            <i className={this.props.appFaIcon} aria-hidden="true" />
          </div>
          <div className="card-desc">
            <h2>{this.props.appName}</h2>
            <p>{this.props.appDesc}</p>
          </div>
        </a>
      </div>
    );
  }
}

export default Card;
