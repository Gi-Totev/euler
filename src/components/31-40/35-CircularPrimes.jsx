import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const CircularPrimes = ({ classes }) => {
  const [endNumber, setEndNumber] = useState("");
  const [result, setResult] = useState(0);

  let primes = new Set();
  let count = 0;

  const checkForCircularPrime = (value) => {
    let digits = `${value}`.split("");

    if (value < 10) {
      count++;
      return;
    }

    for (let i = 0; i < digits.length; i++) {
      if (digits[i] % 2 === 0 || digits[i] === 5) {
        return;
      }
    }

    let testNumber = value;

    for (let i = 0; i < digits.length; i++) {
      let temp = testNumber % 10;
      testNumber =
        temp * Math.pow(10, digits.length - 1) + Math.floor(testNumber / 10);

      if (!primes.has(testNumber)) {
        return;
      }
    }

    count++;
  };

  const findCircularPrimes = () => {
    let end = parseInt(endNumber);
    primes = sieve(end);

    primes.forEach(checkForCircularPrime);

    return setResult(count);
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
      label={"Enter Number"}
      input={"Number"}
      label2={null}
      input2={null}
      onClick={findCircularPrimes}
      result={result}
      resultText={`The number of circular primes less than ${endNumber} is:`}
    />
  );
};

export default CircularPrimes;
