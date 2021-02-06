import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyles} from "./styles/GlobalStyles";
import {Game} from "./Game";
import {GameContextComponent} from "./contexts/GameContext/GameContext";

ReactDOM.render(
  <React.StrictMode>
      <GameContextComponent>
        <GlobalStyles />
        <Game />
      </GameContextComponent>
  </React.StrictMode>,
  document.getElementById('root')
);
