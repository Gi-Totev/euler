import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const TenThousandFirstPrime = ({ classes }) => {
  const [endNumber, setEndNumber] = useState();
  const [result, setResult] = useState();

  const generatePrime = () => {
    let primes = [2];
    let end = parseInt(endNumber);
    let num = 3,
      isPrime = true;

    while (primes.length < end) {
      let max = Math.ceil(Math.sqrt(num));

      for (let i = 0; primes[i] <= max; i++) {
        if (num % primes[i] === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        primes.push(num);
      }

      isPrime = true;
      num += 2;
    }

    return setResult(primes[primes.length - 1]);
  };

  return (
    <InputBox
      classes={classes}
      endNumber={endNumber}
      setEndNumber={setEndNumber}
      endNumber2={null}
      setEndNumber2={null}
      label={"Enter number"}
      input={"Number"}
      label2={null}
      input2={null}
      onClick={generatePrime}
      result={result}
      resultText={`The ${endNumber} prime number is:`}
    />
  );
};

export default TenThousandFirstPrime;
