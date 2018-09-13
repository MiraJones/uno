import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import JoinGame from "./Components/JoinGame/JoinGame";
import StartGame from "./Components/StartGame/StartGame";
import Game from "./Components/Game/Game";

export default (
  <HashRouter>
    <Switch>
      <Route component={Landing} exact path="/" />
      <Route component={JoinGame} exact path="/join-game" />
      <Route component={StartGame} exact path="/start-game" />
      <Route component={Game} exact path="/game" />
    </Switch>
  </HashRouter>
);
