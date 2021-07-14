import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const NonAbundantSums = ({ classes }) => {
  const [endNumber, setEndNumber] = useState("");
  const [result, setResult] = useState();

  const findSum = () => {
    let end = parseInt(endNumber);
    let sum = 0;
    let abundant = new Set();
    let abundantSums = new Set();

    if (end > 28124) {
      end = 28124;
    }

    for (let i = 12; i <= end; i++) {
      let sumOfPaperizors = 1;
      for (let j = 2; j < Math.floor(i / 2 + 1); j++) {
        if (i % j === 0) {
          sumOfPaperizors += j;
        }
      }
      if (sumOfPaperizors > i) {
        abundant.add(i);
      }
    }

    for (const val1 of abundant) {
      for (const val2 of abundant) {
        let sumAb = val1 + val2;
        if (sumAb < 28124) {
          abundantSums.add(val1 + val2);
        }
      }
    }

    for (let j = 1; j <= end; j++) {
      if (!abundantSums.has(j)) {
        sum += j;
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
      label={"Enter MAX number"}
      input={"Number"}
      label2={null}
      input2={null}
      onClick={findSum}
      result={result}
      resultText={` The sum of all abundant numbers that are less than ${endNumber} is:`}
    />
  );
};

export default NonAbundantSums;
