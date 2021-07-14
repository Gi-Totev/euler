import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const HighlyDivisibleTriangleNumber = ({ classes }) => {
  const [numberOfDividers, SetNumberOfDividers] = useState();
  const [result, setResult] = useState();

  const findNumber = () => {
    let number = 1;
    let current = 1;
    let dividers = 1;
    let limit = parseInt(numberOfDividers);

    while (dividers < limit) {
      current = ((1 + number) / 2) * number;
      dividers = testDividers(current, limit);
      number++;
    }

    return setResult(current);
  };

  const testDividers = (number, limit) => {
    let count = 0;

    for (let i = 1; count <= limit && i < number; i++) {
      if (number % i === 0) {
        count++;
      }
    }
    return count;
  };

  return (
    <InputBox
      classes={classes}
      endNumber={numberOfDividers}
      setEndNumber={SetNumberOfDividers}
      endNumber2={null}
      setEndNumber2={null}
      label={"Enter number of dividers"}
      input={"Number"}
      label2={null}
      input2={null}
      onClick={findNumber}
      result={result}
      resultText={"Result:"}
    />
  );
};

export default HighlyDivisibleTriangleNumber;
