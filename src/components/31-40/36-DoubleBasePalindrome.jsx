import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const DoubleBasePalindrome = ({ classes }) => {
  const [endNumber, setEndNumber] = useState("");
  const [result, setResult] = useState("");

  const findBasePalindromes = () => {
    let end = parseInt(endNumber);
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      let odd = i % 2 === 0;
      for (let j = 1; j < end; j++) {
        let number = createPalindrome(j, odd);
        if (number > end) {
          break;
        }
        let numberIn2 = number.toString(2);
        let reversed = `${numberIn2}`.split("").reverse().join("");
        if (numberIn2 === reversed) {
          sum += number;
        }
      }
    }

    return setResult(sum);
  };

  const createPalindrome = (i, odd) => {
    let current = i;
    let palindrome = i;

    if (odd) {
      current = Math.floor(current / 10);
    }

    while (current > 0) {
      palindrome = palindrome * 10 + (current % 10);
      current = Math.floor(current / 10);
    }

    return palindrome;
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
      onClick={findBasePalindromes}
      result={result}
      resultText={`Result:`}
    />
  );
};

export default DoubleBasePalindrome;
