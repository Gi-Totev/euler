import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const SquareRootConvergents = ({ classes }) => {
  const [endNumber, setEndNumber] = useState("");
  const [result, setResult] = useState("");

  const findExpansions = () => {
    let n = parseInt(endNumber);

    let numerator = 3n;
    let denominator = 2n;
    let moreDigitsInNumerator = 0;
    for (let i = 2; i <= n; i++) {
      [numerator, denominator] = [
        numerator + 2n * denominator,
        denominator + numerator,
      ];
      if (countDigits(numerator) > countDigits(denominator)) {
        moreDigitsInNumerator++;
      }
    }
    return setResult(moreDigitsInNumerator);
  };

  const countDigits = (number) => {
    let counter = 0;
    while (number > 0) {
      counter++;
      number = number / 10n;
    }
    return counter;
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
      onClick={findExpansions}
      result={result}
      resultText={"Result:"}
    />
  );
};

export default SquareRootConvergents;
