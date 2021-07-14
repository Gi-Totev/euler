import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const FactorialDigitSum = ({ classes }) => {
  const [endNumber, setEndNumber] = useState();
  const [result, setResult] = useState(0);

  const calculateFactorialDigitSum = () => {
    let array = [1];
    let end = parseInt(endNumber);

    for (let i = 2; i <= end; i++) {
      let carryOver = 0;
      if (array[0] === 0) {
        array.shift();
      }
      for (let j = 0; j < array.length; j++) {
        let product = array[j] * i + carryOver;

        if (product >= 10) {
          array[j] = product % 10;
          carryOver = Math.floor(product / 10);
        } else {
          array[j] = product;
          carryOver = 0;
        }
        if (j === array.length - 1 && carryOver > 0) {
          while (carryOver !== 0) {
            array.push(carryOver % 10);
            carryOver = Math.floor(carryOver / 10);
          }
          break;
        }
      }
    }

    let sum = array.reduce((sum, item) => sum + item, 0);

    return setResult(sum);
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
      onClick={calculateFactorialDigitSum}
      result={result}
      resultText={null}
    />
  );
};

export default FactorialDigitSum;
