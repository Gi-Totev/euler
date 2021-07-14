import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const SmallestMultiple = ({ classes }) => {
  const [endNumber, setEndNumber] = useState();
  const [result, setResult] = useState();

  const findMultiple = () => {
    let maxLCM = 1;

    for (let i = 2; i <= endNumber; i++) {
      maxLCM = lcm(maxLCM, i);
    }
    return setResult(maxLCM);
  };

  const lcm = (maxLCM, i) => {
    return (maxLCM * i) / gcd(maxLCM, i);
  };

  const gcd = (maxLCM, i) => {
    if (i === 0) return maxLCM;
    return gcd(i, maxLCM % i);
  };

  return (
    <InputBox
      classes={classes}
      endNumber={endNumber}
      setEndNumber={setEndNumber}
      endNumber2={null}
      setEndNumber2={null}
      label={"Enter MAX number"}
      input={"Number"}
      label2={null}
      input2={null}
      onClick={findMultiple}
      result={result}
      resultText={`Smallest multiple of all of the numbers from 1 to ${endNumber} is:`}
    />
  );
};

export default SmallestMultiple;
