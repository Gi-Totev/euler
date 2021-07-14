import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const SumSquareDifference = ({ classes }) => {
  const [endNumber, setEndNumber] = useState();
  const [result, setResult] = useState();

  const findSquareSum = () => {
    let end = parseInt(endNumber);
    let sumOfSquares = getSumOfSquares(end);
    let squareOfSum = getSquareOfSum(end);

    setResult(squareOfSum - sumOfSquares);
  };

  const getSumOfSquares = (end) => {
    let ret = 0;
    for (let i = 1; i <= end; i++) {
      ret += Math.pow(i, 2);
    }
    return ret;
  };

  const getSquareOfSum = (end) => {
    return Math.pow(((1 + end) / 2) * end, 2);
  };

  return (
    <InputBox
      classes={classes}
      endNumber={endNumber}
      setEndNumber={setEndNumber}
      endNumber2={null}
      setEndNumber2={null}
      label={"Enter MAX number"}
      input={"Number"}
      label2={null}
      input2={null}
      onClick={findSquareSum}
      result={result}
      resultText={`The Sum square difference of the numbers 1 to ${endNumber} is:`}
    />
  );
};

export default SumSquareDifference;
