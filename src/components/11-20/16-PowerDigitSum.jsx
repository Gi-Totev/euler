import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const PowerDigitSum = ({ classes }) => {
  const [endNumber, setEndNumber] = useState(0);
  const [result, setResult] = useState();

  const getPowerDigitSum = () => {
    const power = parseInt(endNumber);
    let array = [1];

    for (let i = 0; i < power; i++) {
      let carry = 0;

      for (let j = 0; j <= array.length - 1; j++) {
        let product = 2 * array[j] + carry;
        array[j] = product % 10;
        carry = parseInt(product / 10);

        if (j === array.length - 1 && carry > 0) {
          array.push(carry);
          break;
        }
      }
    }
    let result = 0;
    array.forEach((item) => (result += item));
    return setResult(result);
  };

  return (
    <InputBox
      classes={classes}
      endNumber={endNumber}
      setEndNumber={setEndNumber}
      endNumber2={null}
      setEndNumber2={null}
      label={"Enter number"}
      input={"Number"}
      label2={null}
      input2={null}
      onClick={getPowerDigitSum}
      result={result}
      resultText={`The sum of the digits of 2^${endNumber} is:`}
    />
  );
};

export default PowerDigitSum;
