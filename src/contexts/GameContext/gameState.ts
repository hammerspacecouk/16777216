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

export interface IVoter {
    id: number;
    party: 'red' | 'green' | 'blue' | null;
}

export interface IGameState {
    score: {
        red: IScore;
        green: IScore;
        blue: IScore;
    },
    voters: IVoter[];
}

export const emptyGameState: IGameState = {
    score: {
        red: { value: 100000, rate: 0, calculationTime: 0},
        green: { value: 100000, rate: 0, calculationTime: 0},
        blue: { value: 100000, rate: 0, calculationTime: 0},
    },
    voters: Array.from({length: 121}, (item, index) => ({
        id: index,
        party: null,
    })),
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
