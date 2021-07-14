import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const TriangularPentagonalHexagonal = ({ classes }) => {
  const [result, setResult] = useState("");

  const findtripentahexa = () => {
    let resArray = [];
    let i = 1;

    while (true) {
      let hex = i * (2 * i - 1);
      if (checkForPentagonal(hex)) {
        if (checkForTriangle(hex)) {
          resArray.push(hex);
          if (resArray.length === 3) {
            return setResult(resArray[resArray.length - 1]);
          }
        }
      }
      i++;
    }
  };

  const checkForPentagonal = (number) => {
    return Math.sqrt(1 + 24 * number) % 6 === 5;
  };

  const checkForTriangle = (number) => {
    return Math.sqrt(1 + 8 * number) % 1 === 0;
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
      onClick={findtripentahexa}
      result={result}
      resultText={`Result:`}
    />
  );
};

export default TriangularPentagonalHexagonal;
