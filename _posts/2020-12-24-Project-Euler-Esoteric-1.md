---
layout: post
title: Project Euler - Problem 1 (Esoteric)
subtitle: How I solved Problem 1 in esoteric languages
tags: ["project-euler", "esoteric"]
cover-img: "https://i.ibb.co/nQRv4cg/pe-one-e.png"
thumbnail-img: "https://i.ibb.co/CzsMKhT/pe-one-e-thumb.png"
---

If you want to solve the Project Euler problems on your own, stop here. The answer is spoiled in this article.

For more detailed information on the solution and on Project Euler, go to the non-esoteric solution article [here](https://kgerot.github.io/2020-12-24-Project-Euler-1/).

## Problem

> If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6, and 9. The sum of these multiples is 23.
>
> Find the sum of all the multiples of 3 or 5 below 1000.

[Brainf\*ck](#brainfck)

[Unary](#unary)

## Brainf\*ck

[Esolangs Wiki's article on Brainf\*ck](https://esolangs.org/wiki/Brainfuck)

[Code Snippet (Repl.it)](https://repl.it/@KatieGerot/pe-1-bf)

*Note: the repl has similar comments as written in this article*

Instead of printing the number I need, my implementation stores the answer in the first cell of the tape. The Repl above shows the first few cells and their values, which is how I know I have the correct answer. Furthermore, the repl.it compiler does not restrict the cell size as is common in other implementations. I will use the notation `cell01`, `cell02`, ... to mean cell 1, cell 2, ...

To begin, let's add all the multiples of 3 under 1000

We need to fill a cell with the total number of multiples (1000/3 = 333). We can do this using some rudimentary multiplication.

We set `cell02` to 30 by first setting `cell03` to 6 and then adding 5 to `cell02` until `cell03` equals 0.

```brainfuck
>
[
  <<+
  >>-
]
<<
```

Next, we multiply `cell02` by 10 and store the result in `cell01` and add 3 after that. We now have 333 in `cell01 `. 

*At this point, Jekyll has decided that most of my code is comments and is formatting as such*

```brainfuck
[
  <+++++++++++
  >-
]
<+++
```

The following code is a little more complicated

Essentially it will take every third number (starting at 3) and add
it to a subtotal. The 333 we created in previous steps will act as our loop counter.

The end result will be 166833 in `cell03` and 999 (the last digit divisible
by 3 below 1000) in `cell02`

In order to illumiate the process a little more I added line by line
comments

```brainfuck
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

```brainfuck
[-]
```

BNow we can move on to the multiples of 5 using a very similar process to above. The total number of multiples is 1000/5 = 199.

We can use multiplication to set `cell02` to 20 by setting `cell01` to 5 and then adding 4 to `cell02` until `cell01` is 0

```brainfuck
<+++++
[
  >++++
  <-
]
>
```

Then we can multiply the 20 in `cell04` by 10 and store the resulting 200 in `cell01`. After, we can subtract 1 to get 199

```brainfuck
[
  <++++++++++
  >-
]
<-
```

Similarly to above, we will now add every fifth integer to `cell03` to get a subtotal of 266333.

```brainfuck
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
```

We know the lcm of 5 and 3 is 15, so now we are going to use the
same process as above to subtract the mutliples of 15.

Set `cell01` to 66

```brainfuck
+++++++++++
[
  <++++++
  >-
]
```

Subtract every 15th number

```brainfuck
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
```

And finally we can move the correct answer (233168) into `cell01`

```brainfuck
>
[
  <<+
  >>-
]
<<
```

The final formatted code is 

```brainfuck
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

```brainfuck
>>++++++[<+++++>-]<[<+++++++++++>-]<+++[>+++[>+>+<<-]>>[<<+>>-]<<<-]>[-]<+++++[>++++<-]>[<++++++++++>-]<-[>+++++[>+>+<<-]>>[<<+>>-]<<<-]>[-]+++++++++++[<++++++>-]<[>+++++++++++++++[>->+<<-]>>[<<+>>-]<<<-]>[-]>[<<+>>-]<<
```

## Unary

[Esolangs Wiki's article on Unary](https://esolangs.org/wiki/Unary)

Unary is programmed by

1. Writing the code in Brainf\*ck
2. Converting the Brainf\*ck code to binary using the following table

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

3. Concatenate all the binary numbers an prepend a 1 to the whole binary number
4. Convert to unary using the digit 0

### Example

Let's take the simple program that clears a cell

```brainfuck
[-]
```

Convert this to binary

`110 011 111`

Concatenate them and prepend a 1

`1110001111`

Convert to Unary using the process detailed [here](https://esolangs.org/wiki/Binary_to_unary_conversion). I will first convert it to all periods (.) and then switch those to zeros.

```
1110001111 -> 0.0.0.0000.0.0.0.
0.0.0.0000.0.0.0. -> 00..0..0..0000..0..0...
00..0..0..0000..0..0... -> 00.0...0...0..000.0...0.....
00.0...0...0..000.0...0..... -> 000....0....0...0..000....0.......
000....0....0...0..000....0....... -> 000...0.....0....0...0..00...0.........
000...0.....0....0...0..00...0......... -> 000..0......0.....0....0...0..0..0...........
000..0......0.....0....0...0..0..0........... -> 000.0.......0......0.....0....0...0...0.............
000.0.......0......0.....0....0...0...0............. -> 0000........0.......0......0.....0....0....0...............

a bunch more calculations

.................................................................................................
.................................................................................................
.................................................................................................
.................................................................................................
.................................................................................................
.................................................................................................
.................................................................................................
.................................................................................................
.................................................................................................
......................................
```

This then converts to 911 zeros

```
0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
00000000000000000000000000000000000000
```

This is one of the simplest functions and yest there are almost a thousand zeros. It becomes impractical to write out all the zeros, so it is standard to just write the number of zeros in the program. An easy way to calculate this is to 

1. Convert the Brainf\*ck program to octal (><+-.,\[\] to 01234567)
2. Prepend a 1 to the octal string to prevent any leading zeroes
3. Convert to decimal

So, the solution for problem 1 of Project Euler is

```
1002222226122222037161222222222220371222602226020211370061120037111370637122222602222137061222222
2222037136022222602021137006112003711137063722222222222612222220371602222222222222226030211370061
12003711137063706112003711 

= (1 × 8²¹⁹) + (0 × 8²¹⁸) + (0 × 8²¹⁷) + (2 × 8²¹⁶) + (2 × 8²¹⁵) + (2 × 8²¹⁴) + (2 × 8²¹³)
+ (2 × 8²¹²) + (2 × 8²¹¹) + (6 × 8²¹⁰) + (1 × 8²⁰⁹) + (2 × 8²⁰⁸) + (2 × 8²⁰⁷) + (2 × 8²⁰⁶)
+ (2 × 8²⁰⁵) + (2 × 8²⁰⁴) + (0 × 8²⁰³) + (3 × 8²⁰²) + (7 × 8²⁰¹) + (1 × 8²⁰⁰) + (6 × 8¹⁹⁹)
+ (1 × 8¹⁹⁸) + (2 × 8¹⁹⁷) + (2 × 8¹⁹⁶) + (2 × 8¹⁹⁵) + (2 × 8¹⁹⁴) + (2 × 8¹⁹³) + (2 × 8¹⁹²)
+ (2 × 8¹⁹¹) + (2 × 8¹⁹⁰) + (2 × 8¹⁸⁹) + (2 × 8¹⁸⁸) + (2 × 8¹⁸⁷) + (0 × 8¹⁸⁶) + (3 × 8¹⁸⁵)
+ (7 × 8¹⁸⁴) + (1 × 8¹⁸³) + (2 × 8¹⁸²) + (2 × 8¹⁸¹) + (2 × 8¹⁸⁰) + (6 × 8¹⁷⁹) + (0 × 8¹⁷⁸)
+ (2 × 8¹⁷⁷) + (2 × 8¹⁷⁶) + (2 × 8¹⁷⁵) + (6 × 8¹⁷⁴) + (0 × 8¹⁷³) + (2 × 8¹⁷²) + (0 × 8¹⁷¹)
+ (2 × 8¹⁷⁰) + (1 × 8¹⁶⁹) + (1 × 8¹⁶⁸) + (3 × 8¹⁶⁷) + (7 × 8¹⁶⁶) + (0 × 8¹⁶⁵) + (0 × 8¹⁶⁴)
+ (6 × 8¹⁶³) + (1 × 8¹⁶²) + (1 × 8¹⁶¹) + (2 × 8¹⁶⁰) + (0 × 8¹⁵⁹) + (0 × 8¹⁵⁸) + (3 × 8¹⁵⁷)
+ (7 × 8¹⁵⁶) + (1 × 8¹⁵⁵) + (1 × 8¹⁵⁴) + (1 × 8¹⁵³) + (3 × 8¹⁵²) + (7 × 8¹⁵¹) + (0 × 8¹⁵⁰)
+ (6 × 8¹⁴⁹) + (3 × 8¹⁴⁸) + (7 × 8¹⁴⁷) + (1 × 8¹⁴⁶) + (2 × 8¹⁴⁵) + (2 × 8¹⁴⁴) + (2 × 8¹⁴³)
+ (2 × 8¹⁴²) + (2 × 8¹⁴¹) + (6 × 8¹⁴⁰) + (0 × 8¹³⁹) + (2 × 8¹³⁸) + (2 × 8¹³⁷) + (2 × 8¹³⁶)
+ (2 × 8¹³⁵) + (1 × 8¹³⁴) + (3 × 8¹³³) + (7 × 8¹³²) + (0 × 8¹³¹) + (6 × 8¹³⁰) + (1 × 8¹²⁹)
+ (2 × 8¹²⁸) + (2 × 8¹²⁷) + (2 × 8¹²⁶) + (2 × 8¹²⁵) + (2 × 8¹²⁴) + (2 × 8¹²³) + (2 × 8¹²²)
+ (2 × 8¹²¹) + (2 × 8¹²⁰) + (2 × 8¹¹⁹) + (0 × 8¹¹⁸) + (3 × 8¹¹⁷) + (7 × 8¹¹⁶) + (1 × 8¹¹⁵)
+ (3 × 8¹¹⁴) + (6 × 8¹¹³) + (0 × 8¹¹²) + (2 × 8¹¹¹) + (2 × 8¹¹⁰) + (2 × 8¹⁰⁹) + (2 × 8¹⁰⁸)
+ (2 × 8¹⁰⁷) + (6 × 8¹⁰⁶) + (0 × 8¹⁰⁵) + (2 × 8¹⁰⁴) + (0 × 8¹⁰³) + (2 × 8¹⁰²) + (1 × 8¹⁰¹)
+ (1 × 8¹⁰⁰) + (3 × 8⁹⁹) + (7 × 8⁹⁸) + (0 × 8⁹⁷) + (0 × 8⁹⁶) + (6 × 8⁹⁵) + (1 × 8⁹⁴) + (1 × 8⁹³)
+ (2 × 8⁹²) + (0 × 8⁹¹) + (0 × 8⁹⁰) + (3 × 8⁸⁹) + (7 × 8⁸⁸) + (1 × 8⁸⁷) + (1 × 8⁸⁶) + (1 × 8⁸⁵)
+ (3 × 8⁸⁴) + (7 × 8⁸³) + (0 × 8⁸²) + (6 × 8⁸¹) + (3 × 8⁸⁰) + (7 × 8⁷⁹) + (2 × 8⁷⁸) + (2 × 8⁷⁷)
+ (2 × 8⁷⁶) + (2 × 8⁷⁵) + (2 × 8⁷⁴) + (2 × 8⁷³) + (2 × 8⁷²) + (2 × 8⁷¹) + (2 × 8⁷⁰) + (2 × 8⁶⁹)
+ (2 × 8⁶⁸) + (6 × 8⁶⁷) + (1 × 8⁶⁶) + (2 × 8⁶⁵) + (2 × 8⁶⁴) + (2 × 8⁶³) + (2 × 8⁶²) + (2 × 8⁶¹)
+ (2 × 8⁶⁰) + (0 × 8⁵⁹) + (3 × 8⁵⁸) + (7 × 8⁵⁷) + (1 × 8⁵⁶) + (6 × 8⁵⁵) + (0 × 8⁵⁴) + (2 × 8⁵³)
+ (2 × 8⁵²) + (2 × 8⁵¹) + (2 × 8⁵⁰) + (2 × 8⁴⁹) + (2 × 8⁴⁸) + (2 × 8⁴⁷) + (2 × 8⁴⁶) + (2 × 8⁴⁵)
+ (2 × 8⁴⁴) + (2 × 8⁴³) + (2 × 8⁴²) + (2 × 8⁴¹) + (2 × 8⁴⁰) + (2 × 8³⁹) + (6 × 8³⁸) + (0 × 8³⁷)
+ (3 × 8³⁶) + (0 × 8³⁵) + (2 × 8³⁴) + (1 × 8³³) + (1 × 8³²) + (3 × 8³¹) + (7 × 8³⁰) + (0 × 8²⁹)
+ (0 × 8²⁸) + (6 × 8²⁷) + (1 × 8²⁶) + (1 × 8²⁵) + (2 × 8²⁴) + (0 × 8²³) + (0 × 8²²) + (3 × 8²¹)
+ (7 × 8²⁰) + (1 × 8¹⁹) + (1 × 8¹⁸) + (1 × 8¹⁷) + (3 × 8¹⁶) + (7 × 8¹⁵) + (0 × 8¹⁴) + (6 × 8¹³)
+ (3 × 8¹²) + (7 × 8¹¹) + (0 × 8¹⁰) + (6 × 8⁹) + (1 × 8⁸) + (1 × 8⁷) + (2 × 8⁶) + (0 × 8⁵) + (0 × 8⁴)
+ (3 × 8³) + (7 × 8²) + (1 × 8¹) + (1 × 8⁰)

= 60067791343660773572262032436683172366814950097798487931195820848870525803770097446916452184853281
7414535340560172596551169832045969986967786983998906954271212278986415166831421519312167985153050569
```

The final program has about 6.007e29 zeros
