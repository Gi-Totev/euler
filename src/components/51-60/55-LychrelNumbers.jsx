import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const LychrelNumbers = ({ classes }) => {
  const [endNumber, setEndNumber] = useState("");
  const [result, setResult] = useState("");

  const findLychrelNumber = () => {
    let end = parseInt(endNumber);
    let res = 0;

    for (let i = 10; i < end; i++) {
      let sum = i;
      let hasPalindrome = false;

      for (let j = 0; j < 50; j++) {
        let sumReversed = `${sum}`.split("").reverse().join("");
        sum += parseInt(sumReversed);
        let sumStr = `${sum}`;
        let reversed = sumStr.split("").reverse().join("");
        if (parseInt(reversed) === sum) {
          hasPalindrome = true;
          break;
        }
      }

      if (!hasPalindrome) {
        res++;
      }
    }
    return setResult(res);
  };

  return (
    <InputBox
      classes={classes}
      endNumber={endNumber}
      setEndNumber={setEndNumber}
      endNumber2={null}
      setEndNumber2={null}
      label={"Enter MAX Number"}
      input={"Number"}
      label2={null}
      input2={null}
      onClick={findLychrelNumber}
      result={result}
      resultText={"Result:"}
    />
  );
};

export default LychrelNumbers;
