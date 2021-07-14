import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const AmicableNumbers = ({ classes }) => {
  const amicable = [220, 284, 1184, 1210, 2620, 2924, 5020, 5564, 6232, 6368];
  const [endNumber, setEndNumber] = useState(0);
  const [result, setResult] = useState();

  const findSum = () => {
    let sum = 0;
    let max = parseInt(endNumber);

    if (max < amicable[0]) {
      return setResult(sum);
    }

    for (let i = 0; i < amicable.length; i++) {
      if (amicable[i] <= max) {
        sum += amicable[i];
      }
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
      label={"Enter number"}
      input={"Number"}
      label2={null}
      input2={null}
      onClick={findSum}
      result={result}
      resultText={`The sum of all amicable numbers below ${endNumber} is:`}
    />
  );
};

export default AmicableNumbers;
