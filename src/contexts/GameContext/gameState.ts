import {Reducer} from "react";
import {AdjustScoreRateAction, adjustScoreRate, AddToScoreAction, addToScore} from "./actions/adjustScoreRate";

export enum Action {
    ADD_TO_SCORE,
    ADJUST_SCORE_RATE,
}

export interface IScore {
    value: number;
    rate: number;
    calculationTime: number;
}

export interface IGameState {
    score: {
        red: IScore;
        green: IScore;
        blue: IScore;
    }
}

export const emptyGameState: IGameState = {
    score: {
        red: { value: 0, rate: 0, calculationTime: 0},
        green: { value: 0, rate: 0, calculationTime: 0},
        blue: { value: 0, rate: 0, calculationTime: 0},
    }
};

export type GameAction =
    | AddToScoreAction
    | AdjustScoreRateAction

export const gameStateReducer: Reducer<IGameState, GameAction> = (state, action: GameAction) => {
    switch (action.type) {
        case Action.ADD_TO_SCORE:
            return addToScore(state, action);
        case Action.ADJUST_SCORE_RATE:
            return adjustScoreRate(state, action);
    }
    return state;
}
