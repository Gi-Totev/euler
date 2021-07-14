import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const EvenFibonacciNumbers = ({ classes }) => {
  const [endNumber, setEndNumber] = useState(0);
  const [result, setResult] = useState();

  const findSum = () => {
    let sum = 0;
    let i = 1;
    let number = 2;

    while (number <= endNumber) {
      if (number % 2 === 0) {
        sum += number;
      }
      let temp = number;
      number += i;
      i = temp;
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
      label={"Enter MAX number:"}
      input={"Number"}
      label2={null}
      input2={null}
      onClick={findSum}
      result={result}
      resultText={`The sum of all even fibonacci numbers up to ${endNumber} is:`}
    />
  );
};

export default EvenFibonacciNumbers;
