import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const PowerfulDigitSum = ({ classes }) => {
  const [result, setResult] = useState("");

  const findLargestSum = () => {
    let res = 0;

    for (let m = 99; m > 1; m--) {
      let digits = [];
      digits.push(m % 10);
      digits.push(Math.floor(m / 10));

      for (let i = 1; i < 99; i++) {
        let carryOver = 0;
        for (let j = 0; j < digits.length; j++) {
          let multiple = digits[j] * m + carryOver;
          digits[j] = multiple % 10;
          carryOver = Math.floor(multiple / 10);
        }
        while (carryOver > 0) {
          digits.push(carryOver % 10);
          carryOver = Math.floor(carryOver / 10);
        }
        let sum = 0;
        for (let k = 0; k < digits.length; k++) {
          sum += digits[k];
        }

        if (sum > res) {
          res = sum;
        }
      }
    }

    return setResult(res);
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
      onClick={findLargestSum}
      result={result}
      resultText={"Result:"}
    />
  );
};

export default PowerfulDigitSum;
