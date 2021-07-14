import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const PermutedMultiples = ({ classes }) => {
  const [result, setResult] = useState("");

  const findNumber = () => {
    let number = 1;
    let found = false;

    while (!found) {
      for (let i = number; i < (number * 10) / 6; i++) {
        found = true;
        for (let j = 2; j <= 6; j++) {
          if (!checkForPermutation(i, i * j)) {
            found = false;
            break;
          }
        }
        if (found) {
          return setResult(i);
        }
      }

      number *= 10;
    }
  };

  const checkForPermutation = (num1, num2) => {
    let digits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    let temp = num1;
    while (temp > 0) {
      digits[temp % 10] += 1;
      temp = Math.floor(temp / 10);
    }

    temp = num2;
    while (temp > 0) {
      digits[temp % 10] -= 1;
      temp = Math.floor(temp / 10);
    }

    for (let i = 0; i < digits.length; i++) {
      if (digits[i] !== 0) {
        return false;
      }
    }

    return true;
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
      onClick={findNumber}
      result={result}
      resultText={"Result:"}
    />
  );
};

export default PermutedMultiples;
