import React, { Component } from "react";
import "./Landing.css";
import { Link } from "react-router-dom";


export default class Landing extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="landing-page">
        <div className="game-title">DOS</div>
        <Link to="/join-game">
          <button>Join Game</button>
        </Link>
        <Link to="/start-game">
          <button>Start Game</button>
        </Link>
      </div>
    );
  }
}
