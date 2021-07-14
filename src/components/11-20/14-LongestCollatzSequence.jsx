import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const LongestCollatzSequence = ({ classes }) => {
  const [endNumber, setEndNumber] = useState();
  const [result, setResult] = useState();

  const getCollatz = () => {
    let end = parseInt(endNumber);
    let maxSteps = 1;
    let dictionary = [0, 1];
    let index = 1;

    for (let i = 2; i < end; i++) {
      let currentNumber = i;
      let steps = 0;

      steps = processNumber(currentNumber, steps, dictionary, i);
      dictionary.push(steps);

      if (steps > maxSteps) {
        maxSteps = steps;
        index = i;
      }
    }

    return setResult(
      `Number ${index} took ${dictionary[index]} steps to reach 1`
    );
  };

  const processNumber = (currentNumber, steps, dictionary, i) => {
    while (currentNumber !== 1) {
      steps++;
      if (currentNumber % 2 === 0) {
        currentNumber /= 2;
      } else {
        currentNumber = 3 * currentNumber + 1;
      }
      if (dictionary[i] !== undefined) {
        steps += dictionary[i];
        return steps;
      }
    }
    return steps;
  };

  return (
    <InputBox
      classes={classes}
      endNumber={endNumber}
      setEndNumber={setEndNumber}
      endNumber2={null}
      setEndNumber2={null}
      label={"Enter MAX number"}
      input={"Number"}
      label2={null}
      input2={null}
      onClick={getCollatz}
      result={result}
      resultText={`Result: `}
    />
  );
};

export default LongestCollatzSequence;
