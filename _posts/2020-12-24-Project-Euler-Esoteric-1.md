---
layout: post
title: Project Euler - Problem 1 (Esoteric)
subtitle: Solution to Problem 1 in brainf, P", and Unary
tags: ["project-euler", "esoteric", "brainf"]
cover-img: "https://i.ibb.co/nQRv4cg/pe-one-e.png"
usemathjax: true
---

If you want to solve the Project Euler problems on your own, stop here. The answer is spoiled in this article.

For more detailed information on the solution and on Project Euler, go to the non-esoteric solution article [here](https://kgerot.github.io/2020/12/24/Project-Euler-1/).

## Problem

> If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6, and 9. The sum of these multiples is 23.
>
> Find the sum of all the multiples of 3 or 5 below 1000.

[Brainf](#brainf)

[P\"](#p)

[Unary](#unary)

[Musical Notes](https://kgerot.github.io/2020/12/25/PE-1-Musical-Notes.md) *separate post*

## brainf

[Esolangs Wiki's article on brainf](https://esolangs.org/wiki/Brainfuck)

[Code Snippet (Repl.it)](https://repl.it/@KatieGerot/pe-1-bf)

*Note: the repl has similar comments as written in this article*

Instead of printing the number I need, my implementation stores the answer in the first cell of the tape. The Repl above shows the first few cells and their values, which is how I know I have the correct answer. Furthermore, the repl.it compiler does not restrict the cell size as is common in other implementations. I will use the notation `cell01`, `cell02`, ... to mean cell 1, cell 2, ...

To begin, let's add all the multiples of 3 under 1000

We need to fill a cell with the total number of multiples (1000/3 = 333). We can do this using some rudimentary multiplication.

We set `cell02` to 30 by first setting `cell03` to 6 and then adding 5 to `cell02` until `cell03` equals 0.

```text
>[<<+>>-]<<
```

Next, we multiply `cell02` by 10 and store the result in `cell01` and add 3 after that. We now have 333 in `cell01 `. 

```text
[<+++++++++++>-]<+++
```

The following code is a little more complicated

Essentially it will take every third number (starting at 3) and add
it to a subtotal. The 333 we created in previous steps will act as our loop counter.

The end result will be 166833 in `cell03` and 999 (the last digit divisible
by 3 below 1000) in `cell02`

In order to illumiate the process a little more I added line by line
comments

```text
[         while cell01 is not 0
  >+++    add 3 to cell02
  [       while cell02 is not 0
    >+      add 1 to cell03
    >+      add 1 to cell04
    <<-     subtract 1 from cell02
  ]
  >>      move to cell04
  [       while cell04 is not 0
    <<+     add 1 to cell02
    >>-     subtract 1 from cell04
  ]
  <<<-    subtract 1 from cell01
]
>
```

This code simply clears the current cell which is `cell02`

```text
[-]
```

BNow we can move on to the multiples of 5 using a very similar process to above. The total number of multiples is 1000/5 = 199.

We can use multiplication to set `cell02` to 20 by setting `cell01` to 5 and then adding 4 to `cell02` until `cell01` is 0

```text
<+++++[>++++<-]>
```

Then we can multiply the 20 in `cell04` by 10 and store the resulting 200 in `cell01`. After, we can subtract 1 to get 199

```text
[<++++++++++>-]
<-
```

Similarly to above, we will now add every fifth integer to `cell03` to get a subtotal of 266333.

```text
[>+++++[>+>+<<-]>>[<<+>>-]<<<-]>[-]
```

We know the lcm of 5 and 3 is 15, so now we are going to use the
same process as above to subtract the mutliples of 15.

Set `cell01` to 66

```text
+++++++++++[<++++++>-]
```

Subtract every 15th number

```text
<[>+++++++++++++++[>->+<<-]>>[<<+>>-]<<<-]>[-]
```

And finally we can move the correct answer (233168) into `cell01`

```text
>[<<+>>-]<<
```

The final formatted code is 

```text
>>++++++
[
  <+++++
  >-
]
<
[
  <+++++++++++
  >-
]
<+++
[         
  >+++    
  [      
    >+     
    >+     
    <<- 
  ]
  >>      
  [       
    <<+   
    >>-   
  ]
  <<<- 
]
>
[-]
<+++++
[
  >++++
  <-
]
>
[
  <++++++++++
  >-
]
<-
[
  >+++++
  [
    >+
    >+
    <<-
  ]
  >>
  [
    <<+
    >>-
  ]
  <<<-
]
>
[-]
+++++++++++
[
  <++++++
  >-
]
<
[
  >+++++++++++++++
  [
    >-
    >+
    <<-
  ]
  >>
  [
    <<+
    >>-
  ]
  <<<-
]
>
[-]
>
[
  <<+
  >>-
]
<<
```

And condensed code is

```text
>>++++++[<+++++>-]<[<+++++++++++>-]<+++[>+++[>+>+<<-]>>[<<+>>-]<<<-]>[-]<+++++[>++++<-]>[<++++++++++>-]<-[>+++++[>+>+<<-]>>[<<+>>-]<<<-]>[-]+++++++++++[<++++++>-]<[>+++++++++++++++[>->+<<-]>>[<<+>>-]<<<-]>[-]>[<<+>>-]<<
```

## P\"

[Esolangs Wiki's article on P\"](https://esolangs.org/wiki/P′′)

[Wikipedia Article on P\"](https://en.wikipedia.org/wiki/P%E2%80%B2%E2%80%B2)

Easily enough, P" uses instructions equivalent to all brainf instructions excluding I/O. I don't use any I/O in my code above. *Note: P\" came first and no one is sure if brainf is derivative or developed on its own.*

P\" has four symbols in its alphabet--- \\(\{ R, \lambda, \(, \) \} \\). This alphabet can form the words \\(r, r', L, R\\) where \\(r \equiv \lambda R\\), \\(r' \equiv r^n\\) (where \\(r^n\\) is the \\(n\\)th iterate of \\(r\\)), \\(: \equiv r'\lambda\\) 

Here are the translations from brainf instructions to P\" words:

| brainf | P\"       |
| :----------: | :-------: |
| >            | \\(R\\)   |
| <            | \\(L\\)   |
| +            | \\(r\\)   |
| -            | \\(r'\\)  |
| \[           | \\(\(\\)  |
| \]           | \\(\)\\)  |

So the translation of my brainf program to P\" is:


\\(RRrrrrrr(LrrrrrRr')L(LrrrrrrrrrrrRr')Lrrr(Rrrr(RrRrLLr')RR(LLrRRr')LLLr')R(r')\\)
\\(Lrrrrr(RrrrrLr')R(LrrrrrrrrrrRr')Lr'(Rrrrrr(RrRrLLr')RR(LLrRRr')LLLr')R(r')\\)
\\(rrrrrrrrrrr(LrrrrrrRr')L(Rrrrrrrrrrrrrrrr(Rr'RrLLr')RR(LLrRRr')LLLr')R(r')R(LLrRRr')LL\\)

Although it isn't standard, I like to represent repeated P\" variables with exponents to make the syntax more concise. This isn't going into a compiler anyway

\\(R^2r^6(Lr^5Rr')L(Lr^{11}Rr')Lr^3(Rr^3(RrRrL^2r')R^2(L^2rR^2r')L^2r')R(r')\\)
\\(Lr^5(Rr^4Lr')R(Lr^{10}Rr')Lr'(Rr^5(RrRrL^2r')R^2(L^2rR^2r')L^3r')R(r')\\)
\\(r^{11}(Lr^6Rr')L(Rr^{15}(Rr'RrL^2r')R^2(L^2rR^2r')L^3r')R(r')R(L^2rR^2r')L^2\\)

## Unary

[Esolangs Wiki's article on Unary](https://esolangs.org/wiki/Unary)


Unary is programmed by

1. Writing the code in brainf
2. Converting the brainf code to binary using the table below
3. Concatenate all the binary numbers an prepend a 1 to the whole binary number
4. Convert to unary using the digit 0

| symbol |decimal | binary |
| :----- |:-----: | :----: |
| >  | 0 | 000 |
| <  | 1 | 001 |
| +  | 2 | 010 |
| -  | 3 | 011 |
| .  | 4 | 100 |
| ,  | 5 | 101 |
| \[ | 6 | 110 |
| \] | 7 | 111 |

### Example

Let's take the simple program that clears a cell

```text
[-]
```

Convert this to binary

`110 011 111`

Concatenate them and prepend a 1

`1110001111`

Convert to Unary using the process detailed [here](https://esolangs.org/wiki/Binary_to_unary_conversion) gives 911 zeros.

```
0000000000000000000000000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000000000000000000000000000000
0
```

This is one of the simplest functions and yet there are almost a thousand zeros. It becomes impractical to write out all the zeros, so it is standard to just write the number of zeros in the program. An easy way to calculate this is to 

1. Convert the Brainf\*ck program to octal (><+-.,\[\] to 01234567)
2. Prepend a 1 to the octal string to prevent any leading zeroes
3. Convert to decimal

So, the solution for problem 1 of Project Euler is

```
6006779134366077357226203243668317236681495009779848793119582084887052
5803770097446916452184853281741453534056017259655116983204596998696778
6983998906954271212278986415166831421519312167985153050569
```

Which means the final program has about 6.007e29 zeros

