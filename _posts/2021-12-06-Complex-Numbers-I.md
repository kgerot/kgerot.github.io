---
layout: post
title: Complex Numbers Part I
description: Definitions, Features, Plotting, and Algebra
header-img: img/pixabay-trees.jpg
tags: ["mathematics", "explanations"]
header-mask: true
usemathjax: true
---

# What is a Complex Number?

A complex number $z$ consists of two added parts: a real number $a$ and a real number multiplied by $i$ ($bi$). The symbol $i$ represents $\sqrt{-1}$ and $\mathbb{C}$ represents the set of all complex numbers.

Examples of complex numbers include $\pi - i$, $3+4i$, $12i$, and $5$ (All real numbers $x$ are complex numbers of the form $x + 0i$).

# Features of Complex Numbers

Complex numbers have a multitude of other defined features. For a complex number $z = a + bi$:

- The **complex conjugate** is $\bar{z} = a- bi$.
- The **modulus** is $\lvert z\rvert = \sqrt{a^2+b^2}$ which is $z$'s distance from the origin.
- The **argument** is is  angle $\theta$ of the vector defined by $z$ and the real axis. Technically each complex number has an infinite number of arguments, but the **principal argument** ($arg(z)$) is $\theta\in[-\pi,\pi]$
- The **polar form** is $z = r\cos(\theta) + ir\sin(\theta)$ such that $\lvert z\rvert = r$, $a = r\cos(\theta)$, and $b = r\sin(\theta)$.

# Plotting Complex Numbers

![blank complex number graph](img/graphs/blank-complex)

When plotting complex numbers, we need to use a graph with an imaginary *and* a real number line as shown above. 

Let's plot the following complex numbers:
- $5+i$
- $2i$
- $1$
- $\pi - i$
- $-2-2i$

![complex number graph with plotted points](img/graphs/plotted-complex)

Each of these creates a vector from the origin as shown:

![complex number graph with vectors](img/graphs/vector-complex)

# Algebra of Complex Numbers

Algebra works a little differently when dealing with complex numbers. 

Let's take two complex numbers $z_1 = a_1+b_1 i$ and $z_2 = a_2+b_2 i$.

**Addition**

\\(z_1+z_2 = (a_1 + a_2) + (b_1 + b_2)i\\)

**Subtraction**

\\(z_1-z_2 = (a_1 - a_2) + (b_1 - b_2)i\\)

**Multiplication**

\\(z_1\cdot z_2 = (a_1a_2 - b_1b_2) + (a_1b_2 - a_2b_1)i\\)

**Division**

\\(z_1 / z_2 = \frac{a_1a_2 - b_1b_2}{a_2^2 + b_2^2} + \frac{a_2b_1 - a_1b_2}{a_2^2 + b_2^2}i\\)

**Other Rules**

Complex numbers follow the commutative, associative, and distributive properties just like real numbers.