import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const SpecialPythagoreanTriplet = ({ classes }) => {
  const [endNumber, setEndNumber] = useState();
  const [result, setResult] = useState();

  const findTriplet = () => {
    let a = 3,
      b = 4,
      c = 5;
    let sum = a + b + c;
    let endSum = parseInt(endNumber);

    while (endSum % sum !== 0) {
      a++;
      if (a % 2 !== 0) {
        b = (a * a - 1) / 2;
        c = (a * a + 1) / 2;
      } else {
        let n = a / 2;
        b = n * n - 1;
        c = n * n + 1;
      }
      sum = a + b + c;
    }
    let multiple = endSum / sum;
    a *= multiple;
    b *= multiple;
    c *= multiple;
    let product = a * b * c;
    return setResult(product);
  };

  return (
    <InputBox
      classes={classes}
      endNumber={endNumber}
      setEndNumber={setEndNumber}
      endNumber2={null}
      setEndNumber2={null}
      label={"Enter number "}
      input={"Number"}
      label2={null}
      input2={null}
      onClick={findTriplet}
      result={result}
      resultText={"Result:"}
    />
  );
};

export default SpecialPythagoreanTriplet;
