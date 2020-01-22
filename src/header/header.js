import React from "react";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Dark Apps</h1>
        <p className="social">
          <a
            href="https://github.com/christianmurillo/dark-apps"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-github fa-lg" aria-hidden="true" />
          </a>
          &nbsp; &nbsp;
          <a
            href="https://www.linkedin.com/in/christian-murillo-1353b098/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-linkedin-square fa-lg" aria-hidden="true" />
          </a>
        </p>
      </div>
    );
  }
}

export default Header;
