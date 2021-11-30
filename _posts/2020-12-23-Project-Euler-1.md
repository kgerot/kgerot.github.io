---
layout: post
title: Project Euler - Problem 1 
subtitle: How I solved Problem 1 in a variety of languages
tags: ["project-euler"]
usemathjax: true
---

If you want to solve the Project Euler problems on your own, stop here. The answer is spoiled in this article.

I've also completed Problem One in a few esoteric languages. These are by no means practical, but they are fun! See [here](https://kgerot.github.io/2020/12/24/Project-Euler-Esoteric-1/) for my article on them.

## Project Euler

[Project Euler](https://projecteuler.net/about) contains (to-date) 739 math problems of varying difficulty to be solved with programming. It is a good challenge for those trying out new languages or, especially with higher difficulty problems, those testing their mathematics problem-solving skills. Each problem has a forum with answers other people came up with that is only unlocked once you get the correct answer. It is easy to want to search for the answers online, but solving the problems is much more satisfying. 

## Problem 1

Problem one asks competitors to complete the following mathematical question:

> If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6, and 9. The sum of these multiples is 23.
>
> Find the sum of all the multiples of 3 or 5 below 1000.

Mathematically speaking, this problem is pretty easy. 


First, we'll need to find all the numbers from 3 to 1000 that are divisible by 3 and all the numbers from 5 to 1000 that are divisible from 5.

There are 333 terms from 1 to 1000 non-inclusive that are divisible by 3 (truncated \\(1000/3\\)). Their sum is 

\\[
  3 \cdot 333 \cdot \frac{333 + 1}{2} = 166833
\\]

There are 199 terms from 1 to 1000 non-inclusive that are divisible by 5. Their sum is 

$$
  5 \cdot 199 \cdot \frac{199 + 1}{2} = 99500
$$

Because the Least Common Multiple of 3 and 5 is 15, every number that divides 15 has been counted twice.

There are 66 terms from 1 to 1000 (non-inclusive) that are divisible by 15. Their sum is

$$
  15 \cdot 66 \cdot \frac{66 + 1}{2} = 33165
$$

Thus, our final answer is 
<details>
  <summary>Answer spoiler warning</summary>
  
$$
  166833 + 99500 - 33165 = 233168
$$

</details>

Besides esoteric languages, I've solved this problem (as of 12/23/2020) in C, Python, Clojure, Haskell, and Swift. You can see these solutions below

[C Solution](#c-solution)

[Python Solution](#python-solution)

[Clojure Solution](#clojure-solution)

[Haskell Solution](#haskell-solution)

[Swift Solution](#swift-solution)


## C Solution

Link to solution 1 repl.it : [C Repl Sol 1 - Problem 1 - Project Euler](https://repl.it/@KatieGerot/pe1-c-iterative)

Link to solution 2 repl.it : [C Repl Sol 2 - Problem 1 - Project Euler](https://repl.it/@KatieGerot/pe1-c-math)

Link to solution on Github : [C Blob - Problem 1 - Project Euler](https://github.com/kgerot/Project-Euler/blob/master/C/1.c)

### Solution 1

The first solution in C is simple. It takes one for-loop that traverses from 3 to 1000 and adds `i` to `result` if `i` is divisible by 3 or 5.

```c
#include <stdio.h>

int main() {
  int n = 1000;
  int a = 5;
  int b = 3;
  
  int result = 0;
  for(int i = 1; i < n; i++) {
    result += (i % a == 0 || i % b == 0) ? i : 0;
  }
  printf("%d\n", result);

  return 0;
}
```

The complexity is O(n)

### Solution 2

The second solution in C follows the logic detailed at the top of this article. The program computes the general case of summing the numbers divisible by two integers to a limit `n`.

The program first computes the LCM (Largest Common Multiplier) in order to account for numbers that have been counted twice. The LCM formula is found by knowing some facts about prime factorization.

```c
int lcm = (a * b) / gcd(a, b);

// Euclidean Algorithm
int gcd(int a, int b) 
{
    if (a == 0) 
        return b; 
    return gcd(b % a, a); 
} 
```

Let's first define two arbitrary numbers \\(a\\) and \\(b\\) such that

$$
  a = p^{m _ 1} _ {1}\cdot p^{m _ 2} _ {2}\cdot\dots\cdot p^{m _ k} _ {k}
$$

$$
  b = p^{n _ 1} _ {1}\cdot p^{n _ 2} _ {2}\cdot\dots\cdot p^{n _ k} _ {k}
$$

where \\(k\\) is the number of prime factors, \\(m _ i, n _ i\\) are integers such that \\(m _ i, n _ i \ge 0\\) and \\(0 < i \le k\\), and \\(p\\) is a unique prime number.

By definition, the prime factorization of the LCM is

$$
  lcm(a, b) = p^{max(m _ 1, n _ 1)} _ {1} \cdot p^{max(m _ 2, n _ 2)} _ {2} \cdot\dots\cdot p^{max(m _ k, n _ k)} _ {k}
$$

and the prime factorization of the GCD is

$$
  gcd(a, b) = p^{min(m _ 1, n _ 1)} _ {1}\cdot p^{min(m _ 2, n _ 2)} _ {2}\cdot\dots\cdot p^{min(m _ k, n _ k)} _ {k}
$$

Now, when we multiply the GCD and LCM together, we get

$$
  lcm(a,b)gcd(a, b) = p^{max(m _ 1, n _ 1) + min(m _ 1, n _ 1)} _ {1}\cdot p^{max(m _ 2, n _ 2) + min(m _ 2, n _ 2)} _ {2}\cdot\dots\cdot p^{max(m _ k, n _ k) + min(m _ k, n _ k)} _ {k}
$$

Knowing that, for any \\(x\\) and \\(y\\), \\(max(x, y) +  min(x,y) = x + y\\), we can simplify that formula to 

\begin{align\*}
  lcm(a,b)gcd(a, b) &= p^{m _ 1 + n _ 1} _ {1}\cdot p^{m _ 2 + n _ 2} _ {2}\cdot\dots\cdot p^{m _ k + n _ k} _ {k} \newline
&= \left(p^{m _ 1} _ {1}\cdot p^{m _ 2} _ {2}\cdot\dots\cdot p^{m _ k} _ {k}\right)\left(p^{n _ 1} _ {1}\cdot p^{n _ 2} _ {2}\cdot\dots\cdot p^{n _ k} _ {k}\right) \newline
&= ab
\end{align\*}

Rearranging the equation, we get \\(lcm(a,b)gcd(a, b) = ab \implies lcm(a,b) = ab/gcd(a,b)\\).

Next, the program computers the largest number under the limit that divisible by `a`, `b`, and `lcm`.

```c
int greatest_multiple_a = n % a == 0 ? n - a : n - (n % a);
int greatest_multiple_b = n % b == 0 ? n - b : n - (n % b);
int greatest_multiple_lcm = n % lcm == 0 ? n - lcm : n - (n % lcm);
```

The ternary is required because the program is not inclusive of the limit `n`.

Next, we compute the total number of integers that divide `a`, `b`, and `lcm` respectively.

```c
int total_div_a = greatest_multiple_a / a;
int total_div_b = greatest_multiple_b / b;
int total_div_lcm = greatest_multiple_lcm / lcm;
```

And lastly, using all the numbers we've calculated, we can compute the sums

```c
int sum_a = greatest_multiple_a * (total_div_a + 1)/2;
int sum_b = greatest_multiple_b * (total_div_b + 1)/2;
int sum_lcm = greatest_multiple_lcm * (total_div_lcm + 1)/2;

int result = sum_a + sum_b - sum_lcm;

printf("%d\n", result);
```

Put this all together and you get

```c
#include <stdio.h>

int gcd(int, int);

int main(int argc, char** argv)
{
  int n = 1000;
  int a = 5;
  int b = 3;
  
  int lcm = (a * b) / gcd(a, b);

  int greatest_multiple_a = n % a == 0 ? n - a : n - (n % a);
  int greatest_multiple_b = n % b == 0 ? n - b : n - (n % b);
  int greatest_multiple_lcm = n % lcm == 0 ? n - lcm : n - (n % lcm);
  
  int total_div_a = greatest_multiple_a / a;
  int total_div_b = greatest_multiple_b / b;
  int total_div_lcm = greatest_multiple_lcm / lcm;
  
  int sum_a = greatest_multiple_a * (total_div_a + 1)/2;
  int sum_b = greatest_multiple_b * (total_div_b + 1)/2;
  int sum_lcm = greatest_multiple_lcm * (total_div_lcm + 1)/2;
  
  int result = sum_a + sum_b - sum_lcm;
  
  printf("%d\n", result);
  return 0;
}

// Euclidean Algorithm
int gcd(int a, int b) 
{
    if (a == 0) 
        return b; 
    return gcd(b % a, a); 
} 
```

The complexity is O(log(min(a, b))). If you already know the Lowest Common Multiplier of the numbers (as we do in this problem), the complexity becomes O(1) as the Euclidean Algorithm can be excluded.

## Python Solution

Link to solution on repl.it : [Python Repl - Problem 1 - Project Euler](https://repl.it/@KatieGerot/pe1-py)

Link to solution on Github : [Python Blob - Problem 1 - Project Euler](https://github.com/kgerot/Project-Euler/blob/master/Python/1.py)

```python
sum = 0
for i in range(3, 1000):
  sum += (i if (i % 3 == 0 or i % 5 == 0) else 0)
print(sum)
```

## Clojure Solution

Link to solution on repl.it : [Clojure Repl - Problem 1 - Project Euler](https://repl.it/@KatieGerot/pe1-clj)

Link to solution on Github : [Clojure Blob - Problem 1 - Project Euler](https://github.com/kgerot/Project-Euler/blob/master/Clojure/1.clj)

```clojure
(defn sum-nums [] (->> (range 1000)
     (filter #(or (= 0 (rem %1 5)) (= 0 (rem %1 3))))
     (apply +)))
(sum-nums)
```

## Haskell Solution

Link to solution on repl.it : [Haskell Repl - Problem 1 - Project Euler](https://repl.it/@KatieGerot/pe1-hs)

Link to solution on Github : [Haskell Blob - Problem 1 - Project Euler](https://github.com/kgerot/Project-Euler/blob/master/Haskell/1.hs)

```haskell
main :: IO ()
main = putStrLn $ "" ++ show (mult 999)
mult n = foldl1 (\ct x -> ct + x) (rmdups([3,6..n] ++ [5,10..n]))
rmdups = foldl (\f x -> if x `elem` f then f else f ++ [x]) []
```

## Swift Solution

Link to solution on repl.it : [Swift Repl - Problem 1 - Project Euler](https://repl.it/@KatieGerot/pe1-swift)

Link to solution on Github : [Swift Blob - Problem 1 - Project Euler](https://github.com/kgerot/Project-Euler/blob/master/Swift/1.swift)

```swift
sum = 0;
for i in 3..<1000 where (i % 3 == 0 || i % 5 == 0) {
  sum += i;
}
print(sum);
```
