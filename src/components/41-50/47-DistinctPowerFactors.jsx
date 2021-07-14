import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const DistinctPowerFactors = ({ classes }) => {
  const [endNumber, setEndNumber] = useState("");
  const [result, setResult] = useState("");

  const findFirstNumber = () => {
    let end = parseInt(endNumber);
    let primes = Array.from(sieve(Math.pow(10, end)));
    let currentNumbers = 0;

    let number = 1;

    for (let j = 0; j < end; j++) {
      number *= primes[j];
    }

    while (currentNumbers !== end) {
      number++;
      let next = number;
      let currentFactors = 0;

      for (let i = 0; i < primes.length; i++) {
        if (Math.pow(primes[i], 2) > next) {
          currentFactors++;
          break;
        }

        let isPrimeFactor = false;

        while (next % primes[i] === 0) {
          isPrimeFactor = true;
          next = next / primes[i];
        }

        if (isPrimeFactor) {
          currentFactors++;
        }

        if (next === 1) {
          break;
        }
      }

      if (currentFactors >= end) {
        currentNumbers++;
        if (currentNumbers === end) {
          return setResult(number - end + 1);
        }
      } else {
        currentNumbers = 0;
      }
    }
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
      onClick={findFirstNumber}
      result={result}
      resultText={`The first number is:`}
    />
  );
};

export default DistinctPowerFactors;
