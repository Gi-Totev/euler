import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const ReciprocalCycles = ({ classes }) => {
  const [endNumber, setEndNumber] = useState("");
  const [result, setResult] = useState("");

  const findNumber = () => {
    let end = parseInt(endNumber);
    let maxLength = 0;
    let largestElement = 0;

    for (let i = end; i > 1; i--) {
      if (maxLength >= i) {
        break;
      }
      let mod = 1;
      let length = 1;
      let oldMod = 0;
      let dividers = new Set();

      do {
        oldMod = mod;
        dividers.add(mod);
        length++;

        mod *= 10;
        mod %= i;

        if (mod === 0 || mod === oldMod || dividers.has(mod)) {
          break;
        }
      } while (mod !== 1);

      if (length > maxLength) {
        maxLength = length;
        largestElement = i;
      }
    }

    return setResult(largestElement);
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
      onClick={findNumber}
      result={result}
      resultText={`The number with the longest sequence from 1 to ${endNumber} is`}
    />
  );
};

export default ReciprocalCycles;
