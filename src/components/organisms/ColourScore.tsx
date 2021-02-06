import {Action, IGameState} from "../../contexts/GameContext/gameState";
import {useGameState} from "../../contexts/GameContext/GameContext";
import styled from "styled-components";
import {GRID} from "../../styles/variables";

interface IProps {
    colour: keyof IGameState['score'];
}

export const ColourScore = ({colour}: IProps) => {
    const {state, dispatch} = useGameState();
    return (
        <div>
            <h2>{(state.score[colour].value / 100000).toLocaleString(undefined, { maximumFractionDigits: 5, minimumFractionDigits: 5 })}</h2>
            <p>
                <StyledButton
                    $colour={colour}
                    onClick={(evt) => {
                        dispatch({type: Action.ADD_TO_SCORE, colour, incrementBy: 1});
                    }}
                >
                    +1
                </StyledButton>
            </p>
        </div>
    );
};

const getColour = (colour: keyof IGameState['score']) => {
    switch (colour) {
        case "red":
            return '#622';
        case "green":
            return '#262';
        case 'blue':
            return '#226';
    }
}

const StyledButton = styled.button<{$colour: keyof IGameState['score']}>`
    margin-top: ${GRID.UNIT};
    border: 0;
    background: ${({$colour}) => getColour($colour)};
    color: #fff;
    padding: ${GRID.HALF} ${GRID.UNIT};
`;
