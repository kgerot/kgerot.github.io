---
layout: post
title: Introduction to Vector Spaces
header-img: img/pixabay-geometria.png
tags: ["linear algebra", "vecotors", "math", "explanations"]
usemathjax: true
---

<!-- This page will go over an introduction to vector spaces. For more on vector spaces see the following posts:

Finite Dimensional Vector Spaces [In Progress]

The Vector Space of Linear Maps [In Progress]

Isomorphic Vector Spaces [In Progess] -->


This post will go over

1. $$\mathcal{R}^n$$ and $$\mathcal{C}^n$$
2. What is Vector Space?
3. Subspaces

---
#  $$\mathcal{R}^n$$ and $$\mathcal{C}^n$$

Two major sets are $$\mathcal{R}$$ (all real numbers) and $$\mathcal{C}$$ (all complex numbers). Real numbers, as you likely already know, are all rational and irrational numbers. Complex numbers are all numbers $$c$$ such that $$c=a+bi$$ where $$(a,b)\in\mathcal{R}$$ and $$i=\sqrt{-1}$$. All real numbers are also complex numbers as a real number $$r$$ just equals $$r+0i$$.

Complex numbers follow the following rules for addition and multiplication:

\\((a+bi)+(c+di) = (a+c)+(b+d)i\\)

\\((a+bi)(c+di) = (ac-bd)+(ad+bc)i\\)

Knowing that $$i^2=-1$$, you can also just use normal arithmetic to solve a multiplication problem.

Other properties of complex arithmetic include commutativity, associativity, additive and multiplicative identities, additive and multiplicative inverses, and the distributive property.

$$\mathcal{R}$$ and $$\mathcal{C}$$ are also referred to as fields (and can thus are sometimes generalized using the notation $$\mathcal{F}$$). Each element of a field $$\mathcal{F}$$ is a scalar (or number).

$$\mathcal{R}^2$$ and $$\mathcal{R}^3$$ are both probably familiar to you.

$$\mathcal{R}^2$$ is the set of all real ordered pairs (as if on a plane), also denoted by

\\(\mathcal{R}^2 = \{(x,y)\;:\; x,y\in\mathcal{R}.\}\\)

$$\mathcal{R}^2$$ is the set of all real ordered triples (as if in ordinary space), also denoted by

\\(\mathcal{R}^3 = \{(x,y,z)\;:\; x,y,z\in\mathcal{R}.\}\\)

Moving into higher dimensions, we can define $$\mathcal{R}^n$$ and $$\mathcal{C}^n$$ (generalized as $$\mathcal{F}^n$$) as follows

> $$\mathcal{R}^n$$