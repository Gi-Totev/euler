import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const PrimeDigitReplacements = ({ classes }) => {
  const [result, setResult] = useState("");

  const findNumber = () => {
    const primes = sieve(1000000);
    const array = Array.from(primes);
    let pattern = [
      [false, false, true, true, true, false],
      [false, true, false, true, true, false],
      [false, true, true, false, true, false],
      [false, true, true, true, false, false],
      [true, false, false, true, true, false],
      [true, false, true, false, true, false],
      [true, false, true, true, false, false],
      [true, true, false, false, true, false],
      [true, true, false, true, false, false],
      [true, true, true, false, false, false],
    ];

    // for (let i = 0; i < array.length; i++) {
    //   let current = array[i];
    //   for (let j = 0; j < pattern.length; j++) {
    //     if(testForPattern(current, pattern[j])) {

    //     }
    //   }
    // }

    return setResult("Unfinished");
  };

  const testForPattern = (number, pattern) => {
    let digitSet = new Set();
    let str = `${number}`.split("");

    for (let i = 0; i < pattern.length; i++) {
      if (pattern[i]) {
        digitSet.add(str[i]);
      }
    }

    return digitSet.size === 1;
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

    primesSet.forEach(function removeSmallerThan50k(value) {
      if (value <= 99999) {
        primesSet.delete(value);
      }
    });

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
      resultText={"Unfinished"}
    />
  );
};

export default PrimeDigitReplacements;
