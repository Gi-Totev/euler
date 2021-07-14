import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const SummationOfPrimes = ({ classes }) => {
  const [endNumber, setEndNumber] = useState(0);
  const [result, setResult] = useState();

  const sumPrimes = () => {
    let end = parseInt(endNumber);
    let start = 2;
    let array = [];

    for (let i = 1; i < end; i++) {
      array.push(i);
    }

    array[1] = 0;

    for (let i = start; i < end; i++) {
      if (array[i] !== 0 && i * i <= end) {
        for (let j = i * i; j < end; j += i) {
          array[j] = 0;
        }
      }
    }

    let sum = 0;
    while (array.length > 0) {
      sum += array.pop();
    }
    // for(let i = 0; i < array.length; i++) {
    //   sum += array[i];
    // }

    return setResult(sum);
  };

  return (
    <InputBox
      classes={classes}
      endNumber={endNumber}
      setEndNumber={setEndNumber}
      endNumber2={null}
      setEndNumber2={null}
      label={"Enter N"}
      input={"Number"}
      label2={null}
      input2={null}
      onClick={sumPrimes}
      result={result}
      resultText={`The sum of all prime numbers from 2 to ${endNumber} is:`}
    />
  );
};

export default SummationOfPrimes;
