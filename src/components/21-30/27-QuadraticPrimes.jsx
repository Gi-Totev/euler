import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const QuadraticPrimes = ({ classes }) => {
  const [endNumber, setEndNumber] = useState("");
  const [result, setResult] = useState("");

  const primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
    157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
    239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
    331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419,
    421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503,
    509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607,
    613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701,
    709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811,
    821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911,
    919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997,
  ];

  const findProduct = () => {
    const limit = parseInt(endNumber);
    let maxC = 0;
    let maxAB = 0;

    for (let a = -999; a <= 1; a += 2) {
      for (let i = 0; i < primes.length; i++) {
        let b = primes[i];
        if (b > limit) {
          break;
        }
        let c = countConsecutivePrimes(a - (i === 0 ? 1 : 0), b);
        if (c > maxC) {
          maxC = c;
          maxAB = a * b;
        }
      }
    }

    return setResult(maxAB);
  };

  function isPrime(n) {
    if (n < 2) return false;

    if (n % 2 === 0) return n === 2;

    if (n % 3 === 0) return n === 3;

    var h = Math.floor(1 + Math.sqrt(n));
    var i = 5;

    while (i <= h) {
      if (n % i === 0) return false;
      if (n % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  }

  function countConsecutivePrimes(a, b) {
    for (let n = 0; ; n++) {
      let t = n * n + a * n + b;
      if (!isPrime(t)) {
        return n;
      }
    }
  }

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
      onClick={findProduct}
      result={result}
      resultText={`Result:`}
    />
  );
};

export default QuadraticPrimes;
