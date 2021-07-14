import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const NumberLetterCounts = ({ classes }) => {
  const [endNumber, setEndNumber] = useState();
  const [result, setResult] = useState();
  const dictionary = [
    0, 3, 3, 5, 4, 4, 3, 5, 5, 4, 3, 6, 6, 8, 8, 7, 7, 9, 8, 8,
  ];
  const doubleDigits = [6, 6, 5, 5, 5, 7, 6, 6];

  const findNumberCount = () => {
    let letterCount = 0;
    let end = parseInt(endNumber);
    let current = 1;
    let sum9 = 36;
    let sum1019 = 70;
    let sum99 = 854;

    if (end <= 19) {
      for (let i = 1; i <= end; i++) {
        letterCount += dictionary[i];
        current++;
      }
    } else {
      current = 19;
    }

    if (end > 19 && end <= 99) {
      letterCount = sum9 + sum1019;
      let limit = Math.floor(end / 10);

      for (let i = 2; i <= limit; i++) {
        if (i === limit) {
          let leftover = end - current;

          letterCount +=
            doubleDigits[i - 2] * leftover + firstNineTeen(leftover - 1, 1);

          break;
        }
        letterCount += doubleDigits[i - 2] * 10 + 36;
        current += 10;
      }
    } else {
      current = 99;
    }

    if (end > 99) {
      letterCount = sum99;
      let limit = Math.floor(end / 100);

      for (let i = 1; i <= limit; i++) {
        if (i === limit) {
          let leftover = end - current;
          letterCount += 6 * leftover + firstNineTeen(leftover, 1);
          break;
        }
        letterCount += (dictionary[i] + 7) * 100 + 3 * 99 + sum99;
        current += 100;
      }
    }

    if (end === 1000) {
      letterCount += 11;
    }

    return setResult(letterCount);
  };

  const firstNineTeen = (max, current) => {
    let count = 0;

    for (let i = current; i <= max; i++) {
      count += dictionary[i];
      current++;
    }
    alert(count);
    return count;
  };

  return (
    <InputBox
      classes={classes}
      endNumber={endNumber}
      setEndNumber={setEndNumber}
      endNumber2={null}
      setEndNumber2={null}
      label={"Enter MAX number (1000 or less)"}
      input={"Number"}
      label2={null}
      input2={null}
      onClick={findNumberCount}
      result={result}
      resultText={`The sum of the letters of the numbers from 1 to ${endNumber} is:`}
    />
  );
};

export default NumberLetterCounts;
