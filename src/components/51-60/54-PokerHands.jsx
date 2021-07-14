import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const PokerHands = ({ classes }) => {
  const [result, setResult] = useState("");
  const testArr = [
    "8C TS KC 9H 4S 7D 2S 5D 3S AC",
    "5C AD 5D AC 9C 7C 5H 8D TD KS",
    "3H 7H 6S KC JS QH TD JC 2D 8S",
    "TH 8H 5C QS TC 9H 4D JC KS JS",
    "7C 5H KC QH JD AS KH 4C AD 4S",
  ];

  const findWinner = () => {
    let output = "";

    for (let i = 0; i < testArr.length; i++) {
      let cards = testArr[i].split(" ");
      let player1 = [cards[0], cards[1], cards[2], cards[3], cards[4]];
      let player2 = [cards[5], cards[6], cards[7], cards[8], cards[9]];

      let player1Power = calcPower(player1);
      let player2Power = calcPower(player2);

      let winner =
        player1Power > player2Power ? "Player 1 wins" : "Player 2 wins";
      output = output.concat(winner + "\n");
    }

    return setResult(output);
  };

  const calcPower = (player) => {
    let highCard = 0;
    let suits = { "S": 0, "C": 0, "H": 0, "D": 0 };
    let cardValues = {
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "T": 0,
      "J": 0,
      "Q": 0,
      "K": 0,
      "A": 0,
    };
    let pairs = 0;
    let pairValues = [];
    let three = 0;
    let threeValue = 0;
    let four = 0;
    let fourValue = 0;
    let flush = 0;

    for (let i = 0; i < player.length; i++) {
      let cardValue = player[i].substr(0, 1);
      let cardSuit = player[i].substr(1, 1);
      cardValues[cardValue] += 1;
      suits[cardSuit] += 1;
    }

    Object.keys(suits).forEach((key) => {
      if (suits[key] === 5) {
        flush = 1;
      }
    });

    if (flush === 1) {
      return findFlush(cardValues);
    }

    let start = 2;
    Object.keys(cardValues).forEach((key) => {
      if (cardValues[key] === 1) {
        highCard = start;
      }
      if (cardValues[key] === 2) {
        pairs += 1;
        pairValues.push(start);
      }
      if (cardValues[key] === 3) {
        three += 1;
        threeValue = start;
      }
      if (cardValues[key] === 4) {
        four += 1;
        fourValue = start;
      }
      start++;
    });

    if (four > 0) {
      return fourValue * 4000 + highCard;
    }
    if (three > 0) {
      if (pairs > 0) {
        return (threeValue * 30 + pairValues[0] * 20) * 1000;
      } else {
        return threeValue * 300 + highCard;
      }
    }
    if (pairs > 0) {
      if (pairs === 2) {
        return pairValues[0] * 20 + pairValues[1] * 20 + highCard;
      } else if (pairs === 1) {
        return pairValues[0] * 20 + highCard;
      }
    }
    return highCard;
  };

  const findFlush = (cardValues) => {
    let prod = 0;
    let start = 2;
    let inRow = 0;
    let lastCard = start;

    Object.keys(cardValues).forEach((key) => {
      if (cardValues[key] === 1) {
        prod *= start;
        inRow++;
      } else {
        inRow = 0;
      }
      if (inRow === 5) {
        lastCard = start;
        return;
      }
      start++;
    });

    if (lastCard === 14 && inRow === 5) {
      return prod * lastCard * 100000;
    } else if (inRow === 5) {
      return prod * lastCard * 10000;
    } else {
      return prod * lastCard * 1000;
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
      onClick={findWinner}
      result={result}
      resultText={"Player 1 wins:"}
    />
  );
};

export default PokerHands;
