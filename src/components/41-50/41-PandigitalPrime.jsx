import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const PandigitalPrime = ({ classes }) => {
  const [endNumber, setEndNumber] = useState("");
  const [result, setResult] = useState("");

  const findPanDigPrime = () => {
    let digit = parseInt(endNumber);
    let end = Math.pow(10, digit - 1);
    let start = Math.pow(10, digit - 2);
    let primesSet = new Set();
    let limit = start * digit;
    let max = 0;

    for (let i = 3; i <= end; i += 2) {
      if (i > limit) {
        primesSet.add(i);
      }
    }

    for (let i = 3; i < Math.sqrt(end); i++) {
      for (let j = i * 2; j < end; j += i) {
        primesSet.delete(j);
      }
    }

    primesSet.forEach(function callback(value) {
      let digitSet = new Set();
      let temp = value;
      for (let i = 0; i <= digit; i++) {
        if (temp % 10 > digit) {
          return;
        }
        digitSet.add(temp % 10);
        temp = Math.floor(temp / 10);
      }
      if (digitSet.size < 7) {
        return;
      } else if (value > max) {
        max = value;
      }
    });

    return setResult(max);
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
      onClick={findPanDigPrime}
      result={result}
      resultText={`Largest ${endNumber}-length pandigital prime is:`}
    />
  );
};

export default PandigitalPrime;
