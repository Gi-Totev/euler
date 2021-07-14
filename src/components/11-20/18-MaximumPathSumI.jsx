import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const MaximumPathSumI = ({ classes }) => {
  const [result, setResult] = useState(0);

  const triangle = [
    [75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [95, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [17, 47, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [18, 35, 87, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [20, 4, 82, 47, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [19, 1, 23, 75, 3, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [88, 2, 77, 73, 7, 63, 67, 0, 0, 0, 0, 0, 0, 0, 0],
    [99, 65, 4, 28, 6, 16, 70, 92, 0, 0, 0, 0, 0, 0, 0],
    [41, 41, 26, 56, 83, 40, 80, 70, 33, 0, 0, 0, 0, 0, 0],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29, 0, 0, 0, 0, 0],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14, 0, 0, 0, 0],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57, 0, 0, 0],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48, 0, 0],
    [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 4, 31, 0],
    [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
  ];

  const findMaxSum = () => {
    for (let i = triangle.length - 2; i >= 0; i--) {
      for (let j = 0; j < triangle[i].length; j++) {
        if (triangle[i][j] === 0) {
          break;
        }
        triangle[i][j] =
          triangle[i][j] + Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
      }
    }

    return setResult(triangle[0][0]);
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
      onClick={findMaxSum}
      result={result}
      resultText={`The maximum total from top to bottom of the triangle is`}
    />
  );
};

export default MaximumPathSumI;
