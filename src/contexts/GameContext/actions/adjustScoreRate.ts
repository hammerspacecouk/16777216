import {Action, IGameState} from "../gameState";

export type AdjustScoreRateAction = {
    type: Action.ADJUST_SCORE_RATE;
    colour: keyof IGameState['score'];
    valuePerSecond: number;
}

export const adjustScoreRate = (state: IGameState, action: AdjustScoreRateAction): IGameState => {
    // calculate score until now, then add the new rate
    return { ...state };
}

export type AddToScoreAction = {
    type: Action.ADD_TO_SCORE;
    colour: keyof IGameState['score'];
    incrementBy: number;
}

export const addToScore = (state: IGameState, action: AddToScoreAction): IGameState => {
    const score = JSON.parse(JSON.stringify(state.score)) as IGameState['score'];
    score[action.colour].value = score[action.colour].value + action.incrementBy;
    return { ...state, score };
}
