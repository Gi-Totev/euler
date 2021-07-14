import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const IntegerRightTriangles = ({ classes }) => {
  const [endNumber, setEndNumber] = useState("");
  const [result, setResult] = useState("");

  const findValueForMaxSolutions = () => {
    let end = parseInt(endNumber);
    let sums = new Set();
    let maxCount = 0;
    let maxNumber = 0;

    let a = 3,
      b = 4,
      c = 5;
    let currentSum = a + b + c;

    while (currentSum < end) {
      sums.add(currentSum);
      a += 1;
      if (a % 2 === 0) {
        b = Math.pow(a / 2, 2) - 1;
        c = Math.pow(a / 2, 2) + 1;
      } else {
        b = Math.pow(a, 2) / 2 - 0.5;
        b = Math.pow(a, 2) / 2 + 0.5;
      }
      currentSum = a + b + c;
    }

    for (let i = 12; i <= end; i++) {
      let currentCount = 0;
      sums.forEach(function callback(value) {
        if (value > i) {
          return;
        }
        if (i % value === 0) {
          currentCount++;
        }
      });
      if (currentCount >= maxCount) {
        maxCount = currentCount;
        maxNumber = i;
      }
    }

    return setResult(maxNumber);
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
      onClick={findValueForMaxSolutions}
      result={result}
      resultText={`The value from 1 to ${endNumber} that has the max number of solutions is:`}
    />
  );
};

export default IntegerRightTriangles;
