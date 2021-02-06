import {createContext, Dispatch, FC, useContext, useReducer} from "react";
import {emptyGameState, GameAction, gameStateReducer, IGameState} from "./gameState";

interface IGameContext {
  state: IGameState;
  dispatch: Dispatch<GameAction>;
}

const GameContext = createContext({});

// hook to use for getting at the game session context
export const useGameState = (): IGameContext => {
  const context = useContext(GameContext) as IGameContext;
  if (!context) {
    throw new Error("useGameSessionContext called outside of the provider");
  }
  return context;
};


// responsible for being the session provider
export const GameContextComponent: FC = ({ children }) => {
  const [state, dispatch] = useReducer(
      gameStateReducer,
      emptyGameState
  );
  return (
      <GameContext.Provider value={{state, dispatch}}>
        {children}
      </GameContext.Provider>
  );
};

