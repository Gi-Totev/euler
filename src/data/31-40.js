import CoinSums from "../components/31-40/31-CoinSums";
import PandigitalProducts from "../components/31-40/32-PandigitalProducts";
import DigitCancellingFractions from "../components/31-40/33-DigitCancellingFractions";
import DigitFactorials from "../components/31-40/34-DigitFactorials";
import CircularPrimes from "../components/31-40/35-CircularPrimes";
import DoubleBasePalindrome from "../components/31-40/36-DoubleBasePalindrome";
import TruncatablePrimes from "../components/31-40/37-TruncatablePrimes";
import PanDigitalMultiples from "../components/31-40/38-PanDigitalMultiples";
import IntegerRightTriangles from "../components/31-40/39-IntegerRightTriangles";
import ChampernowneConstant from "../components/31-40/40-ChampernowneConstant";

const PROBLEMS_31_40 = [
  {
    id: 31,
    name: "Coin Sums",
    desc: " In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation: <br /> 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p). <br /> It is possible to make £2 in the following way: <br /> 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p <br /> How many different ways can n pence be made using any number of coins?",
    expected:
      " f(50) should return 451. <br /> f(100) should return 4563. <br /> f(150) should return 21873. <br /> f(200) should return 73682.",
  },
  {
    id: 32,
    name: "Pandigital Products",
    desc: " We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital. <br /> The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital. <br /> Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through n pandigital. <br /> Hint: Some products can be obtained in more than one way so be sure to only include it once in your sum.",
    expected:
      " f(4) should return 12. <br /> f(6) should return 162. <br /> f(7) should return 0. <br /> f(8) should return 13458. <br /> f(9) should return 45228.",
  },
  {
    id: 33,
    name: "Digit Cancelling Fractions",
    desc: " The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s. <br /> We shall consider fractions like, 30/50 = 3/5, to be trivial examples. <br /> There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator. <br /> If the product of these four fractions is given in its lowest common terms, find the value of the denominator.",
    expected: " f() should return 100.",
  },
  {
    id: 34,
    name: "Digit Factorials",
    desc: " 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145. <br /> Find the numbers and the sum of the numbers which are equal to the sum of the factorial of their digits. <br /> Note: as 1! = 1 and 2! = 2 are not sums they are not included.",
    expected: " f() should return { sum: 40730, numbers: [145, 40585] }.",
  },
  {
    id: 35,
    name: "Circular Primes",
    desc: " The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime. <br /> There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97. <br /> How many circular primes are there below n, whereas 100 ≤ n ≤ 1000000? <br /> Note: Circular primes individual rotation can exceed n.",
    expected:
      " f(100) should return 13. <br /> f(100000) should return 43. <br /> f(250000) should return 45. <br /> f(500000) should return 49. <br /> f(750000) should return 49. <br /> f(1000000) should return 55.",
  },
  {
    id: 36,
    name: "Double Base Palindrome",
    desc: " The decimal number, 585 = 10010010012 (binary), is palindromic in both bases. <br /> Find the sum of all numbers, less than n, whereas 1000 ≤ n ≤ 1000000, which are palindromic in base 10 and base 2. <br /> (Please note that the palindromic number, in either base, may not include leading zeros.)",
    expected:
      " f(1000) should return 1772. <br /> f(50000) should return 105795. <br /> f(500000) should return 286602. <br /> f(1000000) should return 872187.",
  },
  {
    id: 37,
    name: "Truncatable Primes",
    desc: " The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3. <br /> Find the sum of the only n (8 ≤ n ≤ 11) primes that are both truncatable from left to right and right to left. <br /> NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.",
    expected:
      " f(8) should return 1986. <br /> f(9) should return 5123. <br /> f(10) should return 8920. f(11) should return 748317.",
  },
  {
    id: 38,
    name: "Pandigital Multiples",
    desc: " Take the number 192 and multiply it by each of 1, 2, and 3: <br /> &nbsp; &nbsp; 192×1=192 <br /> &nbsp; &nbsp; 192×2=384 192×3=576 <br /> By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1, 2, 3). <br /> The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1, 2, 3, 4, 5). <br /> What is the largest 1 to k pandigital k-digit number that can be formed as the concatenated product of an integer with (1, 2, ..., n) where n > 1?",
    expected:
      " f(8) should return 78156234. <br /> f(9) should return 932718654.",
  },
  {
    id: 39,
    name: "Integer Right Triangles",
    desc: " If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120. <br /> {20,48,52}, {24,45,51}, {30,40,50} <br /> For which value of p ≤ n, is the number of solutions maximized?",
    expected:
      " f(500) should return 420. <br /> f(800) should return 720. <br /> f(900) should return 840. <br /> f(1000) should return 840.",
  },
  {
    id: 40,
    name: "Champernowne's Constant",
    desc: "An irrational decimal fraction is created by concatenating the positive integers: <br /> &nbsp; 0.123456789101112131415161718192021... <br /> It can be seen that the 12th digit of the fractional part is 1. <br /> If dn represents the nth digit of the fractional part, find the value of the following expression. <br /> &nbsp; d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000",
    expected:
      " f(100) should return 5. <br /> f(1000) should return 15. <br /> f(1000000) should return 210.",
  },
];

const SOLUTIONS_31_40 = [
  CoinSums,
  PandigitalProducts,
  DigitCancellingFractions,
  DigitFactorials,
  CircularPrimes,
  DoubleBasePalindrome,
  TruncatablePrimes,
  PanDigitalMultiples,
  IntegerRightTriangles,
  ChampernowneConstant,
];

export { PROBLEMS_31_40, SOLUTIONS_31_40 };
