import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const PanDigitalMultiples = ({ classes }) => {
  const [result, setResult] = useState("");

  const findPanDigitNumber = () => {
    let res = 0;

    for (let i = 9487; i > 9234; i--) {
      let str = `${i}${2 * i}`;
      if (checkForPandigit(str)) {
        let toNumber = parseInt(str);
        if (res < toNumber) {
          res = toNumber;
        }
      }
    }

    return setResult(res);
  };

  const checkForPandigit = (str) => {
    let digits = new Set();
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 0) {
        return false;
      }
      digits.add(str[i]);
    }
    if (digits.size === 9) {
      return true;
    }

    return false;
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
      onClick={findPanDigitNumber}
      result={result}
      resultText={`Result:`}
    />
  );
};

export default PanDigitalMultiples;
