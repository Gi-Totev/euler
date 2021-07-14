import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const LargestPrimeFactor = ({ classes }) => {
  const [input, setInput] = useState(0);
  const [result, setResult] = useState();

  const findLPF = () => {
    let largestPrime = 1;
    let number = parseInt(input);
    if (number % 2 === 0) largestPrime = 2;

    while (number % 2 === 0) {
      number /= 2;
    }

    for (let i = 3; i <= Math.sqrt(number); i += 2) {
      if (number % i === 0) {
        largestPrime = i;
        number /= i;
      }
    }

    if (number > 2) {
      largestPrime = number;
    }

    return setResult(largestPrime);
  };

  return (
    <InputBox
      classes={classes}
      endNumber={input}
      setEndNumber={setInput}
      endNumber2={null}
      setEndNumber2={null}
      label={"Type a number to get it's largest prime factor"}
      input="Number"
      label2={null}
      input2={null}
      onClick={findLPF}
      result={result}
      resultText={`The largest prime factor of ${input} is:`}
    />
  );
};

export default LargestPrimeFactor;
