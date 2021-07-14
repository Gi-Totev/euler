import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const DigitCancellingFractions = ({ classes }) => {
  const [result, setResult] = useState("");

  const findFractions = () => {
    let prod = 1;

    for (let i = 9; i > 0; i--) {
      for (let d = i - 1; d > 0; d--) {
        for (let n = d - 1; n > 0; n--) {
          let res = (10 * n + i) / (10 * i + d);

          if (res === n / d) {
            let gd = gcd(n, d);
            prod *= d / gd / (n / gd);
          }
        }
      }
    }

    return setResult(prod);
  };

  const gcd = (n, d) => {
    for (let i = n; i > 0; i--) {
      if (n % i === 0 && d % i === 0) {
        return i;
      }
    }
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
      onClick={findFractions}
      result={result}
      resultText={"Result:"}
    />
  );
};

export default DigitCancellingFractions;
