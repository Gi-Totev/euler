import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const SelfPowers = ({ classes }) => {
  const [endNumber, setEndNumber] = useState("");
  const [endDigits, setEndDigits] = useState("");
  const [result, setResult] = useState("");

  const calculateDigits = () => {
    let end = parseInt(endNumber);
    let digits = parseInt(endDigits);
    let res = 0;

    for (let i = 1; i <= end; i++) {
      res += powerFunc(i, digits);
      let str = `${res}`.slice(-digits);
      res = parseInt(str);
    }

    return setResult(res);
  };

  const powerFunc = (num, digits) => {
    let power = 1;
    for (let i = 1; i <= num; i++) {
      power *= num;
      let str = `${power}`.slice(-digits);
      power = parseInt(str);
    }
    return power;
  };

  return (
    <InputBox
      classes={classes}
      endNumber={endNumber}
      setEndNumber={setEndNumber}
      endNumber2={endDigits}
      setEndNumber2={setEndDigits}
      label={"Enter MAX Number"}
      input={"Number"}
      label2={"Enter how many digits should be displayed"}
      input2={"Number"}
      onClick={calculateDigits}
      result={result}
      resultText={`The last ${endDigits} of the series from 1 to ${endNumber} are:`}
    />
  );
};

export default SelfPowers;
