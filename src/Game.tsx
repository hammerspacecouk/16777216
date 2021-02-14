import styled from "styled-components";
import {GRID} from "./styles/variables";
import {ColourScore} from "./components/organisms/ColourScore";
import {SIZES} from "./styles/typography";
import {useGameState} from "./contexts/GameContext/GameContext";
import {Districts} from "./components/organisms/Districts";

export const Game = () => {
    const {state} = useGameState();

    return (
        <div>
            <BigScore>{
                (((state.score.red.value / 1000) *
                (state.score.green.value / 1000) *
                (state.score.blue.value / 1000)) / 1000000)
                    .toLocaleString(undefined, { maximumFractionDigits: 5, minimumFractionDigits: 5 })}</BigScore>
            <StyledItems>
                <ColourScore colour="red" />
                <ColourScore colour="green" />
                <ColourScore colour="blue" />
            </StyledItems>
            <Districts />
        </div>
    );
};

const BigScore = styled.h1`
    ${SIZES.A};
    margin-bottom: ${GRID.DOUBLE};
`;

const StyledItems = styled.div`
    margin: ${GRID.UNIT} 0;
    display: flex;
    justify-content: center;
    > * {
        margin: 0 ${GRID.UNIT};
    }
`;