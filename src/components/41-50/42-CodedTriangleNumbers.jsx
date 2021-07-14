import { useState } from "react";
import InputBox from "../InputBox/InputBox";
import { words } from "./42-WordsData";

const CodedTriangleNumbers = ({ classes }) => {
  const [result, setResult] = useState("");

  const findTriangleWords = () => {
    let count = 0;
    let triangleNumbers = new Set();

    for (let i = 1; i < 50; i++) {
      triangleNumbers.add((i / 2) * (i + 1));
    }

    for (let i = 0; i < words.length; i++) {
      let sum = 0;
      for (let j = 0; j < words[i].length; j++) {
        sum += words[i].charCodeAt(j) - 64;
      }
      if (triangleNumbers.has(sum)) {
        count++;
      }
    }

    return setResult(count);
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
      onClick={findTriangleWords}
      result={result}
      resultText={`The number of triangle words in the array is:`}
    />
  );
};

export default CodedTriangleNumbers;
