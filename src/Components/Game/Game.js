import React, { Component } from "react";
import "./Game.css";
var cardsJson = require("./../../cards.json");
var shuffle = require("shuffle-array");

export default class Game extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    var deck = cardsJson.cards;
    shuffle(deck);
    var people = [{ hand: [] }, { hand: [] }, { hand: [] }];
    for (var i = 0; i < people.length; i++) {
      var hand = deck.splice(0, 5);
      people[i].hand.push(hand);
    }
    console.log(people);
    var cards = deck.map(card => {
      if (card.number === "+4" || card.number === "Wild") {
        return (
          <div className={`card-wild`}>
            <div className="left-corner">{card.number}</div>
            <div className="middle-circle">
              <div className="middle">{card.number}</div>
            </div>
            <div className="right-corner">{card.number}</div>
          </div>
        );
      } else {
        return (
          <div className={`card`} style={{ backgroundColor: card.color }}>
            <div className="left-corner">{card.number}</div>
            <div className="middle-circle">
              <div className="middle">{card.number}</div>
            </div>
            <div className="right-corner">{card.number}</div>
          </div>
        );
      }
    });
    return (
      <div>
        <div className="cards">{cards}</div>
      </div>
    );
  }
}
