import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const SpiralPrimes = ({ classes }) => {
  const [endNumber, setEndNumber] = useState("");
  const [result, setResult] = useState("");

  const findSpiralLength = () => {
    let length = 7;
    let i = 4;
    let percentage = parseInt(endNumber);
    let currentPercentage = 62;
    let primes = 8;
    let total = 13;
    let top = 0n;
    let left = 0n;
    let right = 0n;

    while (currentPercentage > percentage) {
      total += 4;
      length += 2;

      top = Math.pow(2 * i, 2) + 1;
      left = 4 * i * i + 2 * i + 1;
      right = 4 * i * i - 2 * i + 1;

      if (checkPrime(top)) {
        primes++;
      }
      if (checkPrime(left)) {
        primes++;
      }
      if (checkPrime(right)) {
        primes++;
      }

      currentPercentage = (primes / total) * 100;
    }

    return setResult(length);
  };

  const checkPrime = (number) => {
    if (number % 2 === 0 || number % 3 === 0) {
      return false;
    }
    let i = 5;
    while (Math.pow(i, 2) < number) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }

    return true;
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
      onClick={findSpiralLength}
      result={result}
      resultText={"Spiral Length is:"}
    />
  );
};

export default SpiralPrimes;
