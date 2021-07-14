import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const DistinctPowers = ({ classes }) => {
  const [endNumber, setEndNumber] = useState("");
  const [result, setResult] = useState("");

  const findPowers = () => {
    let end = parseInt(endNumber);
    let powers = new Set();

    for (let a = 2; a <= end; a++) {
      for (let b = 2; b <= end; b++) {
        powers.add(Math.pow(a, b));
      }
    }

    let size = powers.size;
    powers.clear();
    return setResult(size);
  };

  return (
    <InputBox
      classes={classes}
      endNumber={endNumber}
      setEndNumber={setEndNumber}
      endNumber2={null}
      setEndNumber2={null}
      label={"Enter Number"}
      input={"Number"}
      label2={null}
      input2={null}
      onClick={findPowers}
      result={result}
      resultText={`The number of unique powers from 2 to ${endNumber} is:`}
    />
  );

  // return (
  //   <Container className="multiples35">
  //     <Paper className="form-control project-top">
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
  //         onClick={findPowers}
  //       >
  //         Go
  //       </Button>
  //     </Paper>
  //     <Paper className="project-bot">
  //       <p className="result">
  //         The number of unique powers from 2 to {endNumber} is: {result}{" "}
  //       </p>
  //     </Paper>
  //   </Container>
  // );
};

export default DistinctPowers;
