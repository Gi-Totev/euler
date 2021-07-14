import { useState } from "react";
import { names } from "./22-input";
import InputBox from "../InputBox/InputBox";

const arrayOfNames = [...names];

const NamesScores = ({ classes }) => {
  const [result, setResult] = useState();

  const findSum = () => {
    arrayOfNames.sort();
    let sum = 0;
    for (let i = 0; i < arrayOfNames.length; i++) {
      let currentNameSum = 0;
      for (let j = 0; j < arrayOfNames[i].length; j++) {
        currentNameSum += arrayOfNames[i].charCodeAt(j) - 64;
      }
      sum += currentNameSum * (i + 1);
    }

    return setResult(sum);
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
      onClick={findSum}
      result={result}
      resultText={"Result:"}
    />
  );
};

export default NamesScores;
