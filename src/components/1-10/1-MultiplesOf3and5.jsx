import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const Multiples35 = ({ classes }) => {
  const [endNumber, setEndNumber] = useState(0);
  const [result, setResult] = useState(0);

  const findMultiples = () => {
    let sum = 0;

    for (let index = 0; index < endNumber; index++) {
      if (index % 3 === 0 || index % 5 === 0) {
        sum += index;
      }
    }

    setResult(sum);
  };

  return (
    <InputBox
      classes={classes}
      endNumber={endNumber}
      setEndNumber={setEndNumber}
      endNumber2={null}
      setEndNumber2={null}
      label={"DOES NOT INCLUDE THE LAST NUMBER"}
      input={"Number"}
      label2={null}
      input2={null}
      onClick={findMultiples}
      result={result}
      resultText={`The sum of all numbers that are multiples of 3 and 5 from 1 to ${endNumber} is:`}
    />
  );
};

export default Multiples35;
