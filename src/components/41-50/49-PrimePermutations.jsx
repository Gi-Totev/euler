import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const PrimePermutations = ({ classes }) => {
  const [result, setResult] = useState("");

  const findNumber = () => {
    let primes = sieve(10000);
    let arrayPrimes = Array.from(primes).filter(under1k);
    let res = "";

    for (let i = 0; i < arrayPrimes.length; i++) {
      let j = arrayPrimes[i] + 3330;
      if (primes.has(j)) {
        let k = j + 3330;
        if (k > 10000) {
          break;
        }
        if (primes.has(k)) {
          if (checkForPermutations(arrayPrimes[i], j, k)) {
            res = res.concat(arrayPrimes[i] + " " + j + " " + k + " ");
          }
        }
      }
    }

    return setResult(res);
  };

  const checkForPermutations = (i, j, k) => {
    let array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    let temp = i;
    while (temp > 0) {
      array[temp % 10] = array[temp % 10] + 1;
      temp = Math.floor(temp / 10);
    }
    temp = j;
    while (temp > 0) {
      array[temp % 10] = array[temp % 10] - 0.5;
      temp = Math.floor(temp / 10);
    }
    temp = k;
    while (temp > 0) {
      array[temp % 10] = array[temp % 10] - 0.5;
      temp = Math.floor(temp / 10);
    }

    for (let s = 0; s < array.length; s++) {
      if (array[s] !== 0) {
        return false;
      }
    }
    return true;
  };

  const under1k = (number) => {
    return number > 1000;
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
      endNumber={null}
      setEndNumber={null}
      endNumber2={null}
      setEndNumber2={null}
      label={null}
      input={null}
      label2={null}
      input2={null}
      onClick={findNumber}
      result={result}
      resultText={"Result"}
    />
  );
};

export default PrimePermutations;
