import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const CombinatoricSelections = ({ classes }) => {
  const [endNumber, setEndNumber] = useState("");
  const [result, setResult] = useState("");

  const findCombinations = () => {
    let end = parseInt(endNumber);
    let count = 0;

    for (let i = 1; i <= 100; i++) {
      let limit = Math.ceil(i / 2);
      for (let j = 1; j <= limit; j++) {
        let difference = i - j;
        let res = factorialize(i, j) / factorialize(difference, 1);
        if (res >= end) {
          count += 2;
          if (j === limit || (j === limit - 1 && i % 2 !== 0)) {
            count--;
          }
        }
      }
    }

    return setResult(count);
  };

  const factorialize = (number, Paper) => {
    let res = 1;
    while (number > Paper) {
      res *= number;
      number--;
    }

    return res;
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
      onClick={findCombinations}
      result={result}
      resultText={"Result:"}
    />
  );
};

export default CombinatoricSelections;
