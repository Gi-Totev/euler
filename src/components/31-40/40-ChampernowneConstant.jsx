import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const ChampernowneConstant = ({ classes }) => {
  const [endNumber, setEndNumber] = useState("");
  const [result, setResult] = useState("");

  const findProductOfDigits = () => {
    let end = parseInt(endNumber);
    let str = "";
    let current = 1;
    let prod = 1;

    while (str.length < 1000000) {
      str = str.concat(current);
      current++;
    }

    for (let i = 1; i <= end; i *= 10) {
      prod *= parseInt(str.charAt(i - 1));
    }

    return setResult(prod);
  };

  return (
    <InputBox
      classes={classes}
      endNumber={endNumber}
      setEndNumber={setEndNumber}
      endNumber2={null}
      setEndNumber2={null}
      label={null}
      input={null}
      label2={null}
      input2={null}
      onClick={findProductOfDigits}
      result={result}
      resultText={"Result:"}
    />
  );
};

export default ChampernowneConstant;
