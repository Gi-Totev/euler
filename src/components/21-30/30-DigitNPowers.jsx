import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const DigitNPowers = ({ classes }) => {
  const [endNumber, setEndNumber] = useState("");
  const [result, setResult] = useState("");

  const findSum = () => {
    let end = parseInt(endNumber);
    let start = Math.pow(10, end - 1);
    let limit = Math.pow(10, end + 1);
    let sum = 0;

    for (let i = start; i < limit; i++) {
      let currentSum = 0;
      let currentNum = i;

      while (currentNum > 0) {
        let digit = currentNum % 10;
        currentNum = Math.floor(currentNum / 10);
        currentSum += Math.pow(digit, end);
      }

      if (currentSum === i) {
        sum += i;
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
      label={"Enter Number"}
      input={"Number"}
      label2={null}
      input2={null}
      onClick={findSum}
      result={result}
      resultText={"The sum is:"}
    />
  );
};

export default DigitNPowers;
