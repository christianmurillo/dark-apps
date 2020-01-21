import React from "react";
import "./card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-icon">
          <i class="fa fa-clock-o" aria-hidden="true" />
        </div>
        <div className="card-desc">
          <h2>INTERVAL TIMER</h2>
          <p>Programmable interval timer for interval based workouts.</p>
        </div>
      </div>
    );
  }
}

export default Card;
