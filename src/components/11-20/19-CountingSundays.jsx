import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const CountingSundays = ({ classes }) => {
  const [startNumber, setStartNumber] = useState();
  const [endNumber, setEndNumber] = useState();
  const [result, setResult] = useState();

  const findSundays = () => {
    let currentDay = 1;
    const startingYear = parseInt(startNumber);
    const endingYear = parseInt(endNumber);
    let months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let leapYear = false;
    let sundays = 0;

    if (startingYear > 1900) {
      currentDay += (startingYear - 1900) * 365;
      for (let i = 1900; i <= startingYear; i++) {
        leapYear = isLeapYear(i);
        if (leapYear) {
          currentDay++;
        }
      }
    }

    leapYear = false;

    for (let i = startingYear; i <= endingYear; i++) {
      leapYear = isLeapYear(i);

      for (let j = 1; j < months.length; j++) {
        if (currentDay % 7 === 0) {
          sundays++;
        }
        if (leapYear && j === 2) {
          currentDay++;
        }
        currentDay += months[j];
      }
    }

    return setResult(sundays);
  };

  const isLeapYear = (year) => {
    if (year % 4 === 0 && year % 100 !== 0) {
      return true;
    } else if (year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <InputBox
      classes={classes}
      endNumber={startNumber}
      setEndNumber={setStartNumber}
      endNumber2={endNumber}
      setEndNumber2={setEndNumber}
      label={"Starting Year"}
      input={"Number"}
      label2={"Ending Year"}
      input2={"Number"}
      onClick={findSundays}
      result={result}
      resultText={`The number of Sundays on the 1st of the month from 1.Jan.${startNumber} to 31.Dec.${endNumber} is:`}
    />
  );
};

export default CountingSundays;
