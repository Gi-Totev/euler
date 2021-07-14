import PrimeDigitReplacements from "../components/51-60/51-PrimeDigitReplacements";
import PermutedMultiples from "../components/51-60/52-PermutedMultiples";
import CombinatoricSelections from "../components/51-60/53-CombinatoricSelections";
import PokerHands from "../components/51-60/54-PokerHands";
import LychrelNumbers from "../components/51-60/55-LychrelNumbers";
import PowerfulDigitSum from "../components/51-60/56-PowerfulDigitSum";
import SquareRootConvergents from "../components/51-60/57-SquareRootConvergents";
import SpiralPrimes from "../components/51-60/58-SpiralPrimes";
import XOR from "../components/51-60/59-XOR";
import PrimePairSets from "../components/51-60/60-PrimePairSets";

const PROBLEMS_51_60 = [
  {
    id: 51,
    name: "Prime Digit Replacements",
    desc: " By replacing the 1st digit of the 2-digit number *3, it turns out that six of the nine possible values: 13, 23, 43, 53, 73, and 83, are all prime. <br /> By replacing the 3rd and 4th digits of 56**3 with the same digit, this 5-digit number is the first example having seven primes among the ten generated numbers, yielding the family: 56003, 56113, 56333, 56443, 56663, 56773, and 56993. Consequently 56003, being the first member of this family, is the smallest prime with this property. <br /> Find the smallest prime which, by replacing part of the number (not necessarily adjacent digits) with the same digit, is part of an n prime value family.",
    expected:
      " f(6) should return 13. <br /> f(7) should return 56003.<br /> f(8) should return 121313.",
  },
  {
    id: 52,
    name: "Permuted Multiples",
    desc: " It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order. <br /> Find the smallest positive integer, such that multiplied by integers  {2,3,…,n} , contain the same digits.",
    expected: " f(2) should return 125874. <br /> f(6) should return 142857.",
  },
  {
    id: 53,
    name: "Combinatoric Selections",
    desc: " There are exactly ten ways of selecting three from five, 12345: <br /> &nbsp; 123, 124, 125, 134, 135, 145, 234, 235, 245, and 345 <br /> In combinatorics, we use the notation,  (5 3)=10 <br /> In general,  (n r)=n!r!(n−r)! , where  r≤n ,  n!=n×(n−1)×...×3×2×1 , and  0!=1 . <br /> It is not until  n=23 , that a value exceeds one-million:  (23 10)=1144066 . <br /> How many, not necessarily distinct, values of  (n r)  for  1≤n≤100 , are greater than one-million?",
    expected:
      " f(1000) should return 462. <br /> f(10000) should return 4431. <br /> f(100000) should return 4255. <br /> f(1000000) should return 4075.",
  },
  {
    id: 54,
    name: "Poker Hands",
    desc: " In the card game poker, a hand consists of five cards and are ranked, from lowest to highest, in the following way: <br /> &nbsp; &nbsp; High Card: Highest value card. <br /> &nbsp; &nbsp; One Pair: Two cards of the same value. <br /> &nbsp; &nbsp; Two Pairs: Two different pairs. <br /> &nbsp; &nbsp; Three of a Kind: Three cards of the same value. <br /> &nbsp; &nbsp; Straight: All cards are consecutive values. <br /> &nbsp; &nbsp; Flush: All cards of the same suit. <br /> &nbsp; &nbsp; Full House: Three of a kind and a pair. <br /> &nbsp; &nbsp; Four of a Kind: Four cards of the same value. <br /> &nbsp; &nbsp; Straight Flush: All cards are consecutive values of same suit. <br /> &nbsp; &nbsp; Royal Flush: Ten, Jack, Queen, King, Ace, in same suit. <br /> The cards are valued in the order: 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace. <br /> If two players have the same ranked hands then the rank made up of the highest value wins; for example, a pair of eights beats a pair of fives. But if two ranks tie, for example, both players have a pair of queens, then highest cards in each hand are compared; if the highest cards tie then the next highest cards are compared, and so on. <br /> The  array (testArr) passed to the function, contains five random hands dealt to two players. Each line of the file contains ten cards (separated by a single space): the first five are Player 1's cards and the last five are Player 2's cards. You can assume that all hands are valid (no invalid characters or repeated cards), each player's hand is in no specific order, and in each hand there is a clear winner. <br /> How many hands does Player 1 win?",
    expected: " f() should return 2.",
  },
  {
    id: 55,
    name: "Lychrel Numbers",
    desc: " If we take 47, reverse and add, 47 + 74 = 121, which is palindromic. <br /> Not all numbers produce palindromes so quickly. For example, <br /> &nbsp; &nbsp; 349 + 943 = 1292, <br /> &nbsp; &nbsp; 1292 + 2921 = 4213 <br /> <br /> &nbsp; 4213 + 3124 = 7337 <br /> That is, 349 took three iterations to arrive at a palindrome. <br /> Although no one has proved it yet, it is thought that some numbers, like 196, never produce a palindrome. A number that never forms a palindrome through the reverse and add process is called a Lychrel number. Due to the theoretical nature of these numbers, and for the purpose of this problem, we shall assume that a number is Lychrel until proven otherwise. In addition you are given that for every number below ten-thousand, it will either (i) become a palindrome in less than fifty iterations, or, (ii) no one, with all the computing power that exists, has managed so far to map it to a palindrome. In fact, 10677 is the first number to be shown to require over fifty iterations before producing a palindrome: 4668731596684224866951378664 (53 iterations, 28-digits). <br /> Surprisingly, there are palindromic numbers that are themselves Lychrel numbers; the first example is 4994. <br /> How many Lychrel numbers are there below N?",
    expected:
      "f(1000) should return 13. <br /> f(3243) should return 39. <br /> f(5000) should return 76. <br /> f(7654) should return 140. <br /> f(10000) should return 249.",
  },
  {
    id: 56,
    name: "Powerful Digit Sum",
    desc: " A googol ( 10100 ) is a massive number: one followed by one-hundred zeros;  100100  is almost unimaginably large: one followed by two-hundred zeros. Despite their size, the sum of the digits in each number is only 1. <br /> Considering natural numbers of the form,  a^b , where a, b < n, what is the maximum digital sum?",
    expected:
      " f(3) should return 4. <br /> f(10) should return 45. <br /> f(50) should return 406. <br /> f(75) should return 684. <br /> f(100) should return 972.",
  },
  {
    id: 57,
    name: "Square Root Convergents",
    desc: " It is possible to show that the square root of two can be expressed as an infinite continued fraction. <br /> √2=1+(1/(2+1/(2+1/(2+…))) <br /> By expanding this for the first four iterations, we get: <br /> &nbsp; &nbsp; 1+1/2=3/2=1.5 <br /> &nbsp; &nbsp; 1+1/(2+1/2)=7/5=1.4 <br /> &nbsp; &nbsp; 1+1/(2+1/(2+1/2))=17/12=1.41666… <br /> &nbsp; &nbsp; 1+1/(2+1/(2+1/(2+1/2)))=4129=1.41379… <br /> The next three expansions are  9970 ,  239169 , and  577408 , but the eighth expansion,  1393985 , is the first example where the number of digits in the numerator exceeds the number of digits in the denominator. <br /> In the first n expansions, how many fractions contain a numerator with more digits than denominator?",
    expected: "",
  },
  {
    id: 58,
    name: "Spiral Primes",
    desc: " Starting with 1 and spiralling anticlockwise in the following way, a square spiral with side length 7 is formed. <br /> &nbsp; &nbsp; 37 36 35 34 33 32 31 <br /> &nbsp; &nbsp; 38 17 16 15 14 13 30 <br /> &nbsp; &nbsp; 39 18  5  4  3 12 29 <br /> &nbsp; &nbsp; 40 19  6  1  2 11 28 <br /> &nbsp; &nbsp; 41 20  7  8  9 10 27 <br /> &nbsp; &nbsp; 42 21 22 23 24 25 26 <br /> &nbsp; &nbsp; 43 44 45 46 47 48 49 <br /> It is interesting to note that the odd squares lie along the bottom right diagonal, but what is more interesting is that 8 out of the 13 numbers lying along both diagonals are prime; that is, a ratio of 8/13 ≈ 62%. <br /> If one complete new layer is wrapped around the spiral above, a square spiral with side length 9 will be formed. If this process is continued, what is the side length of the square spiral for which the percent of primes along both diagonals first falls below percent?",
    expected:
      " f(50) should return 11. <br /> f(15) should return 981. <br /> f(10) should return 26241.",
  },
  { id: 59, name: " ", desc: " ", expected: "" },
  {
    id: 60,
    name: "Prime Pair Sets",
    desc: " The primes 3, 7, 109, and 673, are quite remarkable. By taking any two primes and concatenating them in any order the result will always be prime. For example, taking 7 and 109, both 7109 and 1097 are prime. The sum of these four primes, 792, represents the lowest sum for a set of four primes with this property. <br /> Find the lowest sum for a set of five primes for which any two primes concatenate to produce another prime.",
    expected: " f() should return 26033.",
  },
];

const SOLUTIONS_51_60 = [
  PrimeDigitReplacements,
  PermutedMultiples,
  CombinatoricSelections,
  PokerHands,
  LychrelNumbers,
  PowerfulDigitSum,
  SquareRootConvergents,
  SpiralPrimes,
  XOR,
  PrimePairSets,
];

export { PROBLEMS_51_60, SOLUTIONS_51_60 };
