import AmicableNumbers from "../components/21-30/21-AmicableNumbers";
import NamesScores from "../components/21-30/22-NamesScores";
import NonAbundantSums from "../components/21-30/23-NonAbundantSums";
import LexicographicPermutations from "../components/21-30/24-LexicographicPermutations";
import ThousandDigitFibonnaciNumber from "../components/21-30/25-ThousandDigitFibonnaciNumber";
import ReciprocalCycles from "../components/21-30/26-ReciprocalCycles";
import QuadraticPrimes from "../components/21-30/27-QuadraticPrimes";
import NumberSpiralDiagonals from "../components/21-30/28-NumberSpiralDiagonals";
import DistinctPowers from "../components/21-30/29-DistinctPowers";
import DigitNPowers from "../components/21-30/30-DigitNPowers";

const PROLBEMS_TWENTYONE_THIRTY = [
  {
    id: 21,
    name: "Amicable Numbers",
    desc: " Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n). <br /> If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers. <br /> For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220. <br /> Evaluate the sum of all the amicable numbers under n.",
    expected:
      " f(1000) should return 504. <br /> f(2000) should return 2898. <br /> f(5000) should return 8442. <br /> f(10000) should return 31626.",
  },
  {
    id: 22,
    names: "Names Scores",
    desc: " Using names, an array defined in the background containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score. <br /> For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714. <br /> What is the total of all the name scores in the array?",
    expected: " f(names) should return 871198282",
  },
  {
    id: 23,
    name: "Non Abundant Sums",
    desc: " A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number. <br /> A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n. <br /> As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit. <br /> Find the sum of all positive integers <= n which cannot be written as the sum of two abundant numbers.",
    expected:
      " f(10000) should return 3731004. <br /> f(15000) should return 4039939. <br /> f(20000) should return 4159710. <br /> f(28123) should return 4179871.",
  },
  {
    id: 24,
    name: "Lexicographic Permutations",
    desc: " A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are: <br /> &nbsp; 012   021   102   120   201   210 <br /> What is the nth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?",
    expected:
      " f(699999) should return 1938246570. <br /> f(899999) should return 2536987410. <br /> f(900000) should return 2537014689. <br /> f(999999) should return 2783915460.",
  },
  {
    id: 25,
    name: "1000 Digit Fibonnaci Number",
    desc: " The Fibonacci sequence is defined by the recurrence relation: <br /> Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1. <br /> &nbsp; Hence the first 12 terms will be: <br /> &nbsp; &nbsp; F1 = 1 <br /> &nbsp; &nbsp; F2 = 1 <br /> &nbsp; &nbsp; F3 = 2 <br /> &nbsp; &nbsp; F4 = 3 <br /> &nbsp; &nbsp; F5 = 5 <br /> &nbsp; &nbsp; F6 = 8 <br /> &nbsp; &nbsp; F7 = 13 <br /> &nbsp; &nbsp; F8 = 21 <br /> &nbsp; &nbsp; F9 = 34 <br /> &nbsp; &nbsp; F10 = 55 <br /> &nbsp; &nbsp; F11 = 89 <br /> &nbsp; &nbsp; F12 = 144 <br /> The 12th term, F12, is the first term to contain three digits. <br /> What is the index of the first term in the Fibonacci sequence to contain n digits?",
    expected:
      " f(5) should return 21. <br /> f(10) should return 45. <br /> f(15) should return 69. <br /> f(20) should return 93.",
  },
  {
    id: 26,
    name: "Reciprocal Cycles",
    desc: " A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given: <br /> &nbsp; 1/2 = 0.5 <br /> &nbsp; 1/3 = 0.(3) <br /> &nbsp; 1/4 = 0.25 <br /> &nbsp; 1/5 = 0.2 <br /> &nbsp; 1/6 = 0.1(6) <br /> &nbsp; 1/7 = 0.(142857) <br /> &nbsp; 1/8 = 0.125 <br /> &nbsp; 1/9 = 0.(1) <br /> &nbsp; 1/10 = 0.1 <br /> Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle. <br /> Find the value of d < n for which 1/d contains the longest recurring cycle in its decimal fraction part.",
    expected:
      " f(700) should return 659. <br /> f(800) should return 743. <br /> f(900) should return 887. <br /> f(1000) should return 983.",
  },
  {
    id: 27,
    name: "Quadratic Primes",
    desc: " Euler discovered the remarkable quadratic formula: <br /> &nbsp; n2+n+41 <br /> It turns out that the formula will produce 40 primes for the consecutive integer values  0≤n≤39 . However, when  n=40,402+40+41=40(40+1)+41  is divisible by 41, and certainly when  n=41,412+41+41  is clearly divisible by 41. <br /> The incredible formula  n2−79n+1601  was discovered, which produces 80 primes for the consecutive values  0≤n≤79 . The product of the coefficients, −79 and 1601, is −126479. <br /> Considering quadratics of the form: <br /> &nbsp; n2+an+b , where  |a|<range  and  |b|≤range <br /> &nbsp; where  |n|  is the modulus/absolute value of  n <br /> &nbsp; e.g.  |11|=11  and  |−4|=4 <br /> Find the product of the coefficients,  a  and  b , for the quadratic expression that produces the maximum number of primes for consecutive values of  n , starting with  n=0 .",
    expected:
      " f(200) should return -4925. <br /> f(500) should return -18901. <br /> f(800) should return -43835. <br /> f(1000) should return -59231.",
  },
  {
    id: 28,
    name: "Number Spiral Diagonals",
    desc: " Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows: <br /> &nbsp; &nbsp; 21 22 23 24 25 <br /> &nbsp; &nbsp; 20  7  8  9 10 <br /> &nbsp; &nbsp; 19  6  1  2 11 <br /> &nbsp; &nbsp; 18  5  4  3 12 <br /> &nbsp; &nbsp; 17 16 15 14 13 <br /> It can be verified that the sum of the numbers on the diagonals is 101. <br /> What is the sum of the numbers on the diagonals in an n by n spiral formed in the same way?",
    expected:
      " f(101) should return 692101. <br /> f(303) should return 18591725. <br /> f(505) should return 85986601. <br /> f(1001) should return 669171001.",
  },
  {
    id: 29,
    name: "Distinct Powers",
    desc: " Consider all integer combinations of ab for 2 ≤ a ≤ 5 and 2 ≤ b ≤ 5: <br /> &nbsp; 22=4, 23=8, 24=16, 25=32 <br /> &nbsp; 32=9, 33=27, 34=81, 35=243 <br /> &nbsp; 42=16, 43=64, 44=256, 45=1024 <br /> &nbsp; 52=25, 53=125, 54=625, 55=3125 <br /> If they are then placed in numerical order, with any repeats removed, we get the following sequence of 15 distinct terms: <br /> &nbsp; 4, 8, 9, 16, 25, 27, 32, 64, 81, 125, 243, 256, 625, 1024, 3125 <br /> How many distinct terms are in the sequence generated by ab for 2 ≤ a ≤ n and 2 ≤ b ≤ n?",
    expected:
      " f(15) should return 177. <br /> f(20) should return 324. <br /> f(25) should return 519. <br /> f(30) should return 755.",
  },
  {
    id: 30,
    name: "Digit N Powers",
    desc: " Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits: <br /> &nbsp; &nbsp; 1634 = 1^4 + 6^4 + 3^4 + 44 <br /> &nbsp; &nbsp; 8208 = 8^4 + 2^4 + 0^4 + 8^4 <br /> &nbsp; &nbsp; 9474 = 9^4 + 4^4 + 7^4 + 4^4 <br />  As 1 = 1^4 is not a sum it is not included. <br /> The sum of these numbers is 1634 + 8208 + 9474 = 19316. <br /> Find the sum of all the numbers that can be written as the sum of n powers of their digits.",
    expected:
      " f(2) should return 0. <br /> f(3) should return 1301. <br /> f(4) should return 19316. <br /> f(5) should return 443839.",
  },
];

const SOLUTIONS_TWENTYONE_THIRTY = [
  AmicableNumbers,
  NamesScores,
  NonAbundantSums,
  LexicographicPermutations,
  ThousandDigitFibonnaciNumber,
  ReciprocalCycles,
  QuadraticPrimes,
  NumberSpiralDiagonals,
  DistinctPowers,
  DigitNPowers,
];

export { PROLBEMS_TWENTYONE_THIRTY, SOLUTIONS_TWENTYONE_THIRTY };
