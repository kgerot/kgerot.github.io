---
layout: post
title: Project Euler - Problem 1 (Musical Notes)
header-img: https://github.com/kgerot/kgerot.github.io/blob/main/img/unsplash-music.jpg?raw=true
usemathjax: false
---

For more information on Project Euler - Problem 1 see my other posts:
- [Problem 1](https://kgerot.github.io/2020/12/23/Project-Euler-1/)
- [Problem 1 - Brainf, P\", and Unary](https://kgerot.github.io/2020/12/24/Project-Euler-Esoteric-1/)

## Problem 1

## Musical Notes
[Esolangs Wiki's article on Musical Notes](https://esolangs.org/wiki/Musical_notes)

The language was created by Tom Price-Nicholson in 2014

## Solution

This language is written entirely using quarter notes (crotchet), half notes (minim), dotted
half notes (dotted minim), and whole notes (semibreve) of various pitches. There isn't a lot of
information, so the following is what I have gathered. If you see an error, please email me and
I will fix it.

#### Bar

Each bar contains one instruction and one number which indicates how many times it should be
repeated. The instructions are similar to brainf and the comparison chart is below. If a note
does not factor into an instruction, it can be added for interest's sake. (e.g. if a bar's instructions
are only for the beginning of a loop, then other notes may be added in the bar without changing the code)

| brainf | musical notes |
| :----- | -----: |
| >  | C4 |
| <  | D4 |
| +  | E4 |
| -  | F4 |
| .  | G4 |
| ,  | A4 |
| \[ | B4 |
| \] | C5 |


And the notes above C5 combine with the type of note to denote how many times the instruction is to
be repeated. 


#### Base-5 Conversion of Notes
| note | base 5 |
| :--- | ----: |
| D5 crotchet | 00001 | 
| D5 minim    | 00002 |  
| D5 dotted minim  | 00003 |
| D5 semibreve | 00004 |
| E5 crotchet | 00010 |
| E5 minim    | 00020 |
| E5 dotted minim  | 00030 |
| E5 semibreve | 00040 |
| F5 crotchet | 00100 |
| F5 minim    | 00200 |
| F5 dotted minim  | 00300 |
| F5 semibreve | 00400 | 
| G5 crotchet | 01000 |
| G5 minim | 02000 |
| G5 dotted minim | 03000 |
| G5 semibreve | 04000 |
| A5 crotchet | 10000 | 
| A5 minim | 20000 |
| A5 dotted minim | 30000 |
| A5 semibreve | 40000 |


**Example**: I want to add 333 to the current cell

The add instruction is an E4 of any note type

333 in base 5 is 2313 which translates to the notes (using american terminology)

- G5 half-note (2 beats)
- F5 dotted half-note (3 beats)
- E5 quarter note (1 beat)
- D5 dotted half-note (3 beats)

### Solution

In order to minimize the number of beats per bar, I will make notes of the same length into a chord.
This leads to a maximum of 10 beats per measure excluding the instruction. I will use 4/4 time and
split up instructions that have durations beyond that or condense into a chord. Order doesn't matter
with the notes inside a bar because each has only one meaning that is context-free. But, in order to
keep this problem as simple as possible, I did not alter the order or add more notes to a bar.

Applying this to my brainf program above, I get the following score where `o` represents a
whole note (semibreve), `d` represents a quarter note (crotchet), `h` represents a half-note (minim),
and `h.` represents a dotted half. Only the notes where duration matters are labelled.

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
