import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const LargesPalindromeProduct = ({ classes }) => {
  const [digit, setDigit] = useState();
  const [result, setResult] = useState();

  const getPalindrome = () => {
    let max = 0;
    for (let i = 0; i < digit; i++) {
      max += 9 * Math.pow(10, i);
    }
    let min = (max + 1) / 10;
    let first = max;
    let second = max - 1;

    for (let i = first; i > min; i--) {
      for (let j = second; j > min * 9; j--) {
        if (i % 11 !== 0 && j % 11 !== 0) {
          continue;
        } else {
          if (checkForPalindrome(i * j)) {
            return setResult(i * j);
          }
        }
      }
    }
  };

  const checkForPalindrome = (num) => {
    let digits = `${num}`;
    for (let i = 0; i < Math.floor(digits.length / 2); i++) {
      if (digits[i] !== digits[digits.length - 1 - i]) {
        return false;
      }
    }
    return true;
  };

  return (
    <InputBox
      classes={classes}
      endNumber={digit}
      setEndNumber={setDigit}
      endNumber2={null}
      setEndNumber2={null}
      label="Enter palindrome length (2 - 8)"
      input="Number"
      label2={null}
      input2={null}
      onClick={getPalindrome}
      result={result}
      resultText={`Largest Palindrome Product for a number with the length of ${digit} is:`}
    />
  );
  // return (
  //   <Container className="multiples35">
  //     <Paper className="form-control project-top">
  //       <input
  //         type="text"
  //         className="multiples-35-input"
  //         placeholder="Enter digits"
  //         onChange={(e) => setDigit(e.target.value)}
  //       />
  //       <Button
  //         variant="contained"
  //         color="primary"
  //         className="submit-btn"
  //         type="submit"
  //         onClick={getPalindrome}
  //       >
  //         Go
  //       </Button>
  //     </Paper>
  //     <Paper className="project-bot">
  //       <p className="result">{result}</p>
  //     </Paper>
  //   </Container>
  // );
};

export default LargesPalindromeProduct;
