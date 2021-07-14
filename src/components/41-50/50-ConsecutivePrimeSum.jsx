import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const ConsecutivePrimeSum = ({ classes }) => {
  const [endNumber, setEndNumber] = useState("");
  const [result, setResult] = useState("");

  const findPrime = () => {
    let end = parseInt(endNumber);
    let primes = sieve(end);
    let primeArr = Array.from(primes);
    let sum = 0;

    for (let i = 0; i < primeArr.length; i++) {
      if (sum + primeArr[i] < end) {
        sum += primeArr[i];
      }
    }

    let index = 0;

    while (!primes.has(sum)) {
      sum -= primeArr[index];
      index++;
    }

    return setResult(sum);
  };

  const sieve = (end) => {
    let primesSet = new Set();
    primesSet.add(2);

    for (let i = 3; i <= end; i += 2) {
      primesSet.add(i);
    }

    for (let i = 3; i < Math.sqrt(end); i++) {
      for (let j = i * 2; j < end; j += i) {
        primesSet.delete(j);
      }
    }

    return primesSet;
  };

  return (
    <InputBox
      classes={classes}
      endNumber={endNumber}
      setEndNumber={setEndNumber}
      endNumber2={null}
      setEndNumber2={null}
      label={"Enter MAX Number"}
      input={"Number"}
      label2={null}
      input2={null}
      onClick={findPrime}
      result={result}
      resultText={"Result:"}
    />
  );
};

export default ConsecutivePrimeSum;
