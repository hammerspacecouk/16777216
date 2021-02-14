import {useGameState} from "../../contexts/GameContext/GameContext";
import {IVoter} from "../../contexts/GameContext/gameState";
import styled from "styled-components";
import {GRID} from "../../styles/variables";

const chunk = (input: any[], chunkSize: number) => {
    return Array.from(Array(Math.ceil(input.length/chunkSize)), (_,i)=>input.slice(i*chunkSize,i*chunkSize+chunkSize));
}

export const Districts = () => {
    const {state} = useGameState();

    return (
      <StyledTable>
          <tbody>
          {chunk(state.voters, 11).map((row: IVoter[], i) => (
              <tr key={i}>
                  {row.map((voter) => (
                      <Voter key={voter.id}>{voter.id}</Voter>
                  ))}
              </tr>
          ))}
          </tbody>
      </StyledTable>
    );
};

const StyledTable = styled.table`
    width: 100%;
    table-layout: fixed;
    tr:first-child > td {
        border-top-color: #ccc;
    }
    tr:last-child > td {
        border-bottom-color: #ccc;
    }
    td:first-child {
        border-left-color: #ccc;
    }
    td:last-child {
        border-right-color: #ccc;
    }
`;

const Voter = styled.td`
    background: #222;
    padding: ${GRID.DOUBLE} ${GRID.UNIT};
    border: solid 2px #333;
    
    border-right-color: #ccc;
`;