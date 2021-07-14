import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const GoldbachOtherConjecture = ({ classes }) => {
  const [result, setResult] = useState("");

  const findFirstNumber = () => {
    let primes = sieve(10000);
    let primesArray = Array.from(primes);
    let found = false;
    let i = 9;

    while (!found) {
      if (!primes.has(i)) {
        let flag = false;
        for (let j = 0; j < primesArray.length; j++) {
          if (i - primesArray[j] <= 0) {
            break;
          } else {
            let diff = i - primesArray[j];
            if (Math.sqrt(diff / 2) % 1 === 0) {
              flag = true;
              break;
            }
          }
        }
        if (!flag) {
          return setResult(i);
        }
      }
      i += 2;
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
      endNumber={null}
      setEndNumber={null}
      endNumber2={null}
      setEndNumber2={null}
      label={null}
      input={null}
      label2={null}
      input2={null}
      onClick={findFirstNumber}
      result={result}
      resultText={"Result:"}
    />
  );
};

export default GoldbachOtherConjecture;
