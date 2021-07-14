import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const NumberSpiralDiagonals = ({ classes }) => {
  const [endNumber, setEndNumber] = useState("");
  const [result, setResult] = useState("");

  const findDiagonalSum = () => {
    let diagonalLength = parseInt(endNumber);
    diagonalLength = (diagonalLength - 1) / 2;
    let sum = 1;

    for (let i = 1; i <= diagonalLength; i++) {
      sum += 4 * i * i + 4 * i + 1;
      sum += 4 * i * i + 2 * i + 1;
      sum += 4 * i * i + 1;
      sum += 4 * i * i - 2 * i + 1;
    }

    return setResult(sum);
  };

  return (
    <InputBox
      classes={classes}
      endNumber={endNumber}
      setEndNumber={setEndNumber}
      endNumber2={null}
      setEndNumber2={null}
      label={"Enter an odd number"}
      input={"Number"}
      label2={null}
      input2={null}
      onClick={findDiagonalSum}
      result={result}
      resultText={`The sum of the diagonals of a ${endNumber}x${endNumber} spiral is:`}
    />
  );
  // return (
  //   <Container className="multiples35">
  //     <Paper className="form-control project-top">
  //       <label htmlFor="input">Enter an odd number</label>
  //       <input
  //         type="text"
  //         className="multiples-35-input"
  //         placeholder="Number"
  //         value={endNumber}
  //         onChange={(e) => setEndNumber(e.target.value)}
  //       />
  //       <Button
  //         variant="contained"
  //         color="primary"
  //         className="submit-btn"
  //         type="submit"
  //         onClick={findDiagonalSum}
  //       >
  //         Go
  //       </Button>
  //     </Paper>
  //     <Paper className="project-bot">
  //       <p className="result">
  //         The sum of the diagonals of a {endNumber}x{endNumber} spiral is:{" "}
  //         {result}{" "}
  //       </p>
  //     </Paper>
  //   </Container>
  // );
};

export default NumberSpiralDiagonals;
