import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const TruncatablePrimes = ({ classes }) => {
  const [endNumber, setEndNumber] = useState("");
  const [result, setResult] = useState("");

  const findTruncPrimes = () => {
    let limit = parseInt(endNumber);
    let sum = 0;

    if (limit > 11) {
      limit = 11;
    }

    let primesSet = new Set();
    primesSet.add(2);

    for (let i = 3; i <= 1000000; i += 2) {
      primesSet.add(i);
    }

    for (let i = 3; i < Math.sqrt(1000000); i++) {
      for (let j = i * 2; j < 1000000; j += i) {
        primesSet.delete(j);
      }
    }

    let leftTrunc = new Set();

    primesSet.forEach(function callback(value) {
      if (value < 10) {
        return;
      }
      let temp = Math.floor(value / 10);
      while (temp > 0) {
        if (!primesSet.has(temp)) {
          return;
        }
        temp = Math.floor(temp / 10);
      }
      leftTrunc.add(value);
    });

    let truncablePrimes = [];

    leftTrunc.forEach(function callback(value) {
      let temp = value;
      let len = `${temp}`.length;
      for (let i = 1; i < len; i++) {
        temp = value % Math.pow(10, i);
        if (!primesSet.has(temp)) {
          return;
        }
      }
      truncablePrimes.push(value);
    });

    for (let i = 0; i < limit; i++) {
      sum += truncablePrimes[i];
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
      label={null}
      input={null}
      label2={null}
      input2={null}
      onClick={findTruncPrimes}
      result={result}
      resultText={"Result:"}
    />
  );
};

export default TruncatablePrimes;
