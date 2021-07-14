import { useState } from "react";
import InputBox from "../InputBox/InputBox";

const PrimePairSets = ({ classes }) => {
  const [result, setResult] = useState("");

  const findSum = () => {
    let primes = sieve(10000);
    let values = Array.from(primes);
    let minSum = 1000000;

    for (let a = 0; a < values.length; a++) {
      for (let b = a + 1; b < values.length; b++) {
        let ab = `${values[a]}${values[b]}`;
        let ba = `${values[b]}${values[a]}`;

        if (primes.has(parseInt(ab)) && primes.has(parseInt(ba))) {
          for (let c = b + 1; c < values.length; c++) {
            let ac = `${values[a]}${values[c]}`;
            let bc = `${values[b]}${values[c]}`;
            let ca = `${values[c]}${values[a]}`;
            let cb = `${values[c]}${values[b]}`;

            if (
              primes.has(parseInt(ac)) &&
              primes.has(parseInt(bc)) &&
              primes.has(parseInt(ca)) &&
              primes.has(parseInt(cb))
            ) {
              for (let d = c + 1; d < values.length; d++) {
                let ad = `${values[a]}${values[d]}`;
                let bd = `${values[b]}${values[d]}`;
                let cd = `${values[c]}${values[d]}`;
                let da = `${values[d]}${values[a]}`;
                let db = `${values[d]}${values[b]}`;
                let dc = `${values[d]}${values[c]}`;

                if (
                  primes.has(parseInt(ad)) &&
                  primes.has(parseInt(bd)) &&
                  primes.has(parseInt(cd)) &&
                  primes.has(parseInt(da)) &&
                  primes.has(parseInt(db)) &&
                  primes.has(parseInt(dc))
                ) {
                  for (let e = d + 1; e < values.length; e++) {
                    let ae = `${values[a]}${values[e]}`;
                    let be = `${values[b]}${values[e]}`;
                    let ce = `${values[c]}${values[e]}`;
                    let de = `${values[d]}${values[e]}`;
                    let ea = `${values[e]}${values[a]}`;
                    let eb = `${values[e]}${values[b]}`;
                    let ec = `${values[e]}${values[c]}`;
                    let ed = `${values[e]}${values[d]}`;
                    if (
                      primes.has(parseInt(ae)) &&
                      primes.has(parseInt(be)) &&
                      primes.has(parseInt(ce)) &&
                      primes.has(parseInt(de)) &&
                      primes.has(parseInt(ea)) &&
                      primes.has(parseInt(eb)) &&
                      primes.has(parseInt(ec)) &&
                      primes.has(parseInt(ed))
                    ) {
                      let sum =
                        values[a] +
                        values[b] +
                        values[c] +
                        values[d] +
                        values[e];
                      if (sum < minSum) {
                        minSum = sum;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      return setResult(minSum);
    }
  };

  const sieve = (end) => {
    let primesSet = new Set();

    for (let i = 3; i <= end; i += 2) {
      primesSet.add(i);
    }

    for (let i = 3; i < Math.sqrt(end); i++) {
      for (let j = i * 2; j < end; j += i) {
        primesSet.delete(j);
      }
    }

    return primesSet;
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
      onClick={findSum}
      result={result}
      resultText={"Sum is: "}
    />
  );
};

export default PrimePairSets;
