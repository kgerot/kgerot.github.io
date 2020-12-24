---
layout: post
title: Project Euler - Problem 1 (Esoteric)
subtitle: Solution to Problem 1 in Brainf*ck and derivative languages
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

[Musical Notes](#musical-notes)

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
2. Converting the Brainf\*ck code to binary using the table below
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

```brainfuck
[-]
```

Convert this to binary

`110 011 111`

Concatenate them and prepend a 1

`1110001111`

Convert to Unary using the process detailed [here](https://esolangs.org/wiki/Binary_to_unary_conversion) gives 911 zeros.

`
00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
`

This is one of the simplest functions and yest there are almost a thousand zeros. It becomes impractical to write out all the zeros, so it is standard to just write the number of zeros in the program. An easy way to calculate this is to 

1. Convert the Brainf\*ck program to octal (><+-.,\[\] to 01234567)
2. Prepend a 1 to the octal string to prevent any leading zeroes
3. Convert to decimal

So, the solution for problem 1 of Project Euler is

`
600677913436607735722620324366831723668149500977984879311958208488705258037700974469164521848532817414535340560172596551169832045969986967786983998906954271212278986415166831421519312167985153050569
`

Which means the final program has about 6.007e29 zeros

## Musical Notes

[Esolangs Wiki's article on Musical Notes](https://esolangs.org/wiki/Brainfuck)

[Musical Note Problem 1]()

This language is written entirely using quarter notes (crotchet), half notes (minim), dotted half notes (dotted minim), and whole notes (semibreve) of various pitches. There isn't a lot of information, so the following is what I have gathered. If you see an error, please email me and I will fix it.

#### Bar

Each bar contains one instruction and one number which indicates how many times it should be repeated. The instructions are similar to brainf\*ck and the comparison chart is below. If a note does not factor into an instruction, it can be added for interest's sake. (e.g. if a bar's instructions are only for the beginning of a loop, then other notes may be added in the bar without changing the code)

| brainf\*ck | musical notes |
| :----- | -----: |
| >  | C4 |
| <  | D4 |
| +  | E4 |
| -  | F4 |
| .  | G4 |
| ,  | A4 |
| \[ | B4 |
| \] | C5 |

And the notes above C5 combine with the type of note to denote how many times the instruction is to be repeated. 

| note | base 5 | decimal | note | base 5 | decimal |
| :--- | :----: | ------: | :--- | :----: | ------: |
| D5 crotchet | 00001 | 1 | G5 crotchet | 01000 | 125 |
| D5 minim    | 00002 | 2 | G5 minim | 02000 | 250 |
| D5 dotted minim  | 00003 | 3 | G5 dotted minim | 03000 | 375 |
| D5 semibreve | 00004 | 4 | G5 semibreve | 04000 | 500 |
| E5 crotchet | 00010 | 5 | A5 crotchet | 10000 | 500 |
| E5 minim    | 00020 | 10 | A5 minim | 20000 | 1250 |
| E5 dotted minim  | 00030 | 15 | A5 dotted minim | 30000 | 1875 |
| E5 semibreve | 00040 | 20 | A5 semibreve | 40000 | 2500 |
| F5 crotchet | 00100 | 25 |
| F5 minim    | 00200 | 50 |
| F5 dotted minim  | 00300 | 75 |
| F5 semibreve | 00400 | 100 | 


e.g. I want to add 333 to the current cell

The add instruction is an E4 of any note type

333 in base 5 is 2313 which translates to the notes (using american terminology)

- G5 half-note (2 beats)
- F5 dotted half-note (3 beats)
- E5 quarter note (1 beat)
- D5 dotted half-note (3 beats)

In order to minimize the number of beats per bar, I will make notes of the same length into a chord. This leads to a maximum of 10 beats per measure excluding the instruction. I will use 4/4 time and split up instructions that have durations beyond that or dondense into a chord. Order doesn't matter with the notes inside a bar because each has only one meaning that is context-free.

So, applying this to my brainf\*ck program above, I get the following score where `o` represents a whole note (semibreve), `c` represents a quarter note (crotchet), `h` represents a half-note (minim), and `h.` represents a dotted half. Only the notes where duration matters are labelled.

```
E4 G5h E5d
E4 F5h. D5h.
B4
C4 D5d
E4 D5h.
B4
C4 D5d
E4 D5d
C4 D5d
E4 D5d
D4 D5h
F4 D5d
C5
C4 D5h
B4
D4 D5h
E4 D5d
C4 D5h
F4 D5d
C5
D4 D5h.
F4 D5d
C5
C4 D5d
B4 D5d
F4 D5d
C5 D5d
C4 D5d
E4 E5o D5o
E4 G5d F5h
B4
C4 D5d
E4 E5d
B4
C4 D5d
E4 D5d
C4 D5d
E4 D5d
D4 D5h
F4 D5d
C5
C4 D5h
B4
D4 D5h
E4 D5d
C4 D5h
F4 D5d
C5
D4 D5h.
F4 D5d
C5
C4 D5d
B4 D5d
F4 D5d
C5 D5d
E4 F5h D5d
E4 E5h.
D4 D5d
B4
C4 D5d
E4 E5h.
B4
C4 D5d
F4 D5d
C4 D5d
E4 D5d
D4 D5h
F4 D5d
C5
C4 D5h
B4
D4 D5h
E4 D5d
C4 D5h
F4 D5d
C5
D4 D5h.
F4 D5d
C5
C4 D5d
B4
F4 D5d
C5
C4 D5d
B4
D4 D5h
E4 D5d
C4 D5h
F4 D5d
C5
D4 D5h
```


