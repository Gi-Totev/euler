import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const LatticePaths = ({ classes }) => {
  const [endNumber, setEndNumber] = useState();
  const [result, setResult] = useState();

  const findPaths = () => {
    let gridSize = parseInt(endNumber);
    let grid = [];

    for (let i = 0; i < gridSize + 1; i++) {
      grid[i] = [];
      for (let j = 0; j < gridSize + 1; j++) {
        grid[i][j] = 1;
      }
    }

    grid[gridSize - 1][gridSize] = 1;
    grid[gridSize][gridSize - 1] = 1;

    for (let i = gridSize - 1; i >= 0; i--) {
      for (let j = gridSize - 1; j >= 0; j--) {
        grid[i][j] = grid[i + 1][j] + grid[i][j + 1];
      }
    }

    return setResult(grid[0][0]);
  };

  return (
    <InputBox
      classes={classes}
      endNumber={endNumber}
      setEndNumber={setEndNumber}
      endNumber2={null}
      setEndNumber2={null}
      label={"Enter number (grid size)"}
      input={"Number"}
      label2={null}
      input2={null}
      onClick={findPaths}
      result={result}
      resultText={`The possible paths in a ${endNumber} x ${endNumber} grid is:`}
    />
  );
};

export default LatticePaths;
