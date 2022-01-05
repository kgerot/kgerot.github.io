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

Other properties of complex arithmetic include:

- Commutativity: $$\alpha + \beta = \beta + \alpha \forall \alpha, \beta\in\mathcal{C}$$
- Associativity: $$(\alpha + \beta) + \gamma = \alpha + (\beta + \gamma)\forall \alpha, \beta,\gamma\in\mathcal{C}$$
- Identity: $$\alpha + 0 = \alpha$$ and $$\alpha\cdot 1 = \alpha\forall \alpha\in\mathcal{C}$$
- Additive Inverse: $$\forall\alpha\in\mathcal{C}\exists$$ a unique $\beta\in\mathcal{C}$ such that $$\alpha + \beta = 0$$
- Multiplicative Inverse: $$\forall\alpha\in\mathcal{C}$$ with $\alpha\neq 0\exists$$ a unique $\beta\in\mathcal{C}$ such that $$\alpha\beta = 1$$