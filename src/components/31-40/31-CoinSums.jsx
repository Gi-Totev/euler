import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const CoinSums = ({ classes }) => {
  const [endNumber, setEndNumber] = useState("");
  const [result, setResult] = useState("");

  const findPermutations = () => {
    let target = parseInt(endNumber);
    let coins = [1, 2, 5, 10, 20, 50, 100, 200];
    let table = new Array(target + 1);

    for (let i = 0; i <= target; i++) {
      table[i] = new Array(coins.length);
      table[i][0] = 1;
    }

    for (let i = 0; i <= target; i++) {
      for (let j = 1; j < coins.length; j++) {
        table[i][j] = table[i][j - 1];
        if (coins[j] <= i) table[i][j] += table[i - coins[j]][j];
      }
    }
    return setResult(table[target][coins.length - 1]);
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
      onClick={findPermutations}
      result={result}
      resultText={"Result:"}
    />
  );
};

export default CoinSums;
