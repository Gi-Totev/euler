import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const PentagonNumbers = ({ classes }) => {
  const [result, setResult] = useState("");

  const findPentagonNumber = () => {
    let found = false;
    let n = 1;

    while (!found) {
      let i = (n * (3 * n - 1)) / 2;

      for (let j = n - 1; j > 0; j--) {
        let m = (j * (3 * j - 1)) / 2;
        if (checkForPentagonal(i - m) && checkForPentagonal(i + m)) {
          return setResult(i - m);
        }
      }

      n++;
    }
  };

  const checkForPentagonal = (number) => {
    return Math.sqrt(1 + 24 * number) % 6 === 5;
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
      onClick={findPentagonNumber}
      result={result}
      resultText={"Result:"}
    />
  );
};

export default PentagonNumbers;
