import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const LexicographicPermutations = ({ classes }) => {
  const [endNumber, setEndNumber] = useState("");
  const [result, setResult] = useState("");

  let number = [];
  let unused = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const findPermutation = () => {
    let end = parseInt(endNumber);
    let limits = [362880, 40320, 5040, 720, 120, 24, 6, 2, 1];

    for (let i = 0; i < 10; i++) {
      end = calculateNumber(limits[i], end);
    }

    let temp = number[number.length - 1];
    number[number.length - 1] = number[number.length - 2];
    number[number.length - 2] = temp;

    return setResult(number);
  };

  const calculateNumber = (limit, end) => {
    let counter = 0;

    while (end > limit) {
      end -= limit;
      counter++;
    }

    number.push(unused[counter]);
    unused.splice(counter, 1);
    return end;
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
      onClick={findPermutation}
      result={result}
      resultText={`Lexicographic permutation #${endNumber} is:`}
    />
  );
};

export default LexicographicPermutations;
