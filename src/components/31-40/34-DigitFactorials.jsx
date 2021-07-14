import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const DigitFactorials = ({ classes }) => {
  const [result, setResult] = useState("");

  const findFactorials = () => {
    let factorials = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
    let sum = 0;
    let output = "";

    for (let i = 10; i < 1999999; i++) {
      let digits = `${i}`.split("");
      let digitSum = 0;

      for (let j = 0; j < digits.length; j++) {
        digitSum += factorials[digits[j]];
      }

      if (digitSum === i) {
        sum += i;
        output = output.concat(`${i} `);
      }
    }

    output = output.concat(`Sum = ${sum}`);
    return setResult(output);
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
      onClick={findFactorials}
      result={result}
      resultText={"Result:"}
    />
  );
};

export default DigitFactorials;
