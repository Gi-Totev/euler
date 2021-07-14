import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const PandigitalProducts = ({ classes }) => {
  const [result, setResult] = useState("");

  const findProduct = () => {
    let products = new Set();
    let aLimit = Math.pow(10, 4);
    let unmodifiedSet = new Set();

    for (let i = 1; i < 10; i++) {
      unmodifiedSet.add(i);
    }

    for (let a = 1; a < aLimit; a++) {
      let aLength = `${a}`.length;
      let bLimit = Math.pow(10, Math.floor((9 - aLength) / 2));
      let bStart = bLimit / 10;

      for (let b = bStart; b < bLimit; b++) {
        let prod = a * b;
        let str = `${a}${b}${prod}`;

        let isPandigital = new Set();

        if (str.length === 9) {
          for (let index = 0; index < 9; index++) {
            if (str.charAt(index) !== 0) {
              isPandigital.add(str.charAt(index));
            }
          }

          if (isPandigital.size === 9) {
            products.add(prod);
          }
        }
      }
    }

    let array = Array.from(products);
    let sum = array.reduce((a, b) => a + b);

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
      onClick={findProduct}
      result={result}
      resultText={"The sum of all pandigital products is:"}
    />
  );
};

export default PandigitalProducts;
