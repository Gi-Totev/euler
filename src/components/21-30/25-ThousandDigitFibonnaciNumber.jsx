import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const ThousandDigitFibonnaciNumber = ({ classes }) => {
  const [endNumber, setEndNumber] = useState("");
  const [result, setResult] = useState("");

  const findIndex = () => {
    let current = 1;
    let last = 0;
    let index = 1;

    while (`${current}`.length !== endNumber) {
      let temp = last;
      last = current;
      current += temp;
      index++;
    }

    return setResult(index);
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
      onClick={findIndex}
      result={result}
      resultText={`The index of the first fibonnaci number that has ${endNumber} digits is`}
    />
  );
};

export default ThousandDigitFibonnaciNumber;
