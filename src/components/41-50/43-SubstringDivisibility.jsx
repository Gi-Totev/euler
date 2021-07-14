import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const SubstringDivisibility = ({ classes }) => {
  const [result, setResult] = useState("");

  const findPandigitNumbers = () => {
    let str = "";
    let divisibleBy17 = calculateSubString(17);
    // let divisibleBy13 = calculateSubString(13);
    // let divisibleBy11 = calculateSubString(11);
    let divisibleBy7 = calculateSubString(7);
    // let divisibleBy5 = calculateSubString(5);
    // let divisibleBy3 = calculateSubString(3);
    let divisibleBy2 = calculateSubString(2);

    for (let i = 0; i < divisibleBy17.length; i++) {
      let numbers = [];
      let seventeen = divisibleBy17[i];
      numbers.push(seventeen);
      let digits = seventeen.split("");
      let seven = findNumbers(divisibleBy7, digits, 7);
      for (let j = 0; j < seven.length; j++) {
        let digit7 = seven[j].split("");
        digit7.push(digits[0]);
        digit7.push(digits[1]);
        digit7.push(digits[2]);
        let test13 = `${seven[j]}${seventeen}`.split("");
        let number13 =
          parseInt(test13[2]) * 100 +
          parseInt(test13[3]) * 10 +
          parseInt(test13[4]);
        if (number13 % 13 === 0) {
          let number11 =
            parseInt(test13[1]) * 100 +
            parseInt(test13[2]) * 10 +
            parseInt(test13[3]);
          if (number11 % 11 === 0) {
            let two = findNumbers(divisibleBy2, digit7, 2);
            let log = "";
            for (let s = 0; s < digits.length; s++) {
              log = log.concat(digits[s]);
            }
            console.log(log);
            console.log("------------");
            for (let k = 0; k < two.length; k++) {
              let test5 = `${two[k]}${seven[j]}`.split("");
              let digit5 = [...test5];
              digit5.push(digits[0]);
              digit5.push(digits[1]);
              digit5.push(digits[2]);
              let number5 = parseInt(test5[4]);
              if (number5 % 5 === 0) {
                console.log("5 entered");
                let number3 =
                  parseInt(test5[1]) * 100 +
                  parseInt(test5[2]) * 10 +
                  parseInt(test5[3]);
                if (number3 % 3 === 0) {
                  console.log("3 entered");
                  let strRes = `${two[k]}${seven[j]}${seventeen}`;
                  for (let i = 1; i < 10; i++) {
                    if (!strRes.includes(i)) {
                      console.log(i + " " + strRes);
                      str = str.concat(`${i}${strRes}`);
                      str = str.concat("\n");
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    return setResult(str);
  };

  const findNumbers = (divisible, digits, step) => {
    let candidates = [];
    for (let i = 0; i < divisible.length; i++) {
      let current = `${divisible[i]}`;
      let flag = false;

      for (let j = 0; j < digits.length; j++) {
        if (current.includes(digits[j])) {
          flag = true;
        }
      }
      if (!flag) {
        candidates.push(current);
      }
    }
    return candidates.length === 0 ? null : candidates;
  };

  const calculateSubString = (divisor) => {
    let array = [];
    for (let i = divisor; i < 987; i += divisor) {
      let temp = `${i}`;
      if (
        temp.charAt(0) !== temp.charAt(1) &&
        temp.charAt(0) !== temp.charAt(2) &&
        temp.charAt(1) !== temp.charAt(2)
      ) {
        let current = ``;
        if (i < 100 && i > 10) {
          if (!`${i}`.includes(0)) {
            current = `0${i}`;
          }
        } else if (i > 100) {
          current = temp;
        }
        array.push(current);
      }
    }
    return array;
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
      onClick={findPandigitNumbers}
      result={result}
      resultText={"Result:"}
    />
  );
};

export default SubstringDivisibility;
