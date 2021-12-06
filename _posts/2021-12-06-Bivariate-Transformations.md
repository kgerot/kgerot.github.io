---
layout: post
title: Bivariate Transformations
header-img: img/pixabay-rocks.jpg
tags: ["statistics", "explanations"]
header-mask: true
usemathjax: true
---


# Bivariate Transformation Method

How do we find a transformation of variables in statistics?

Given random variables $Y_1$ and $Y_2$ with some joint distribution function $f_{Y_1,Y_2}(y_1,y_2)$ and some transformative functions of $y_1$ and $y_2$ such that

$$
\begin{align*}
    u_1 &= h_1(y_1, y_2) & u_2 &= h_2(y_1,y_2)
\end{align*}
$$

then there are three simple steps to find the joint distribution of $u_1$ and $u_2$

1. Find the inverse functions,
2. Find the Jacobian determinant,
3. Find the joint distribution $f_{U_1,U_2}(u_1,u_2)$.

Throughout this, I'll show the general case and the work for an example given below.

### Example Variables

There are two random variables $Y_1$ and $Y_2$ with joint distribution

$$
    f_{Y_1,Y_2}(y_1,y_2) = \begin{cases}
        2(1-y_1), & 0 \le y_1 \le 1,\; 0 \le y_2 \le 1\\
        0, & \textit{otherwise}
    \end{cases}
$$

and we want to find the distribution of the transformation such that $U_1 = Y_1$ and $U_2 = Y_1Y_2$

## Inverse functions

Given $u_1 = h_1(y_1, y_2)$ and $u_2 = h_2(y_1,y_2)$, we need to find the inverse of these functions such that

$$
\begin{align*}
    y_1 &= h_1^{-1}(u_1, u_2) & y_2 &= h_2^{-1}(u_1,u_2)
\end{align*}
$$

For our example, we would first find the inverse of $u_1$ which is pretty easy. 

$$
    y_1 = y_1 = h_1(y_1,y_2) \implies y_1 = u_1 = h_1^{-1}(u_1,u_2)
$$

Then we can use the fact that $y_1 = u_1$ to write our second inverse function:

$$
    u_2 = y_1y_2 =  h_2(y_1,y_2) \implies y_2 = \frac{u_2}{u_1} = h_2^{-1}(u_1,u_2)
$$

## Jacobian Determinant

Next we need to find the Jacobian determinant of these inverse functions. The Jacobian matrix is simply the partials of $h_1^{-1}(u_1,u_2)$ and $h_2^{-1}(u_1,u_2)$ with respect to both $u_1$ and $u_2$. It looks as follows:

\\(
\begin{bmatrix}
    \frac{\partial h_1^{-1}}{\partial u_1} & \frac{\partial h_1^{-1}}{\partial u_2}\\
    \frac{\partial h_2^{-1}}{\partial u_1} & \frac{\partial h_2^{-1}}{\partial u_2}\\
\end{bmatrix}
\\)

The determinant of this matrix is then the difference of the diagonals:

\\(
    \frac{\partial h_1^{-1}}{\partial u_1}\frac{\partial h_2^{-1}}{\partial u_2} - \frac{\partial h_1^{-1}}{\partial u_2}\frac{\partial h_2^{-1}}{\partial u_1}
\\)

For our example, the Jacobian matrix would be as follows:

\\(
\begin{bmatrix}
    \frac{\partial (u_1)}{\partial u_1} & \frac{\partial (u_1)}{\partial u_2}\\
    \frac{\partial (u_2/u_1)}{\partial u_1} & \frac{\partial (\frac{u_2}{u_1})}{\partial u_2}\\
\end{bmatrix} = 
\begin{bmatrix}
    1 & 0\\
    -u_2/u_1^2 & 1/u_1\\
\end{bmatrix}
\\)

and the determinant would simply be $1(1/u_1)-0(-u_2/u_1^2)=1/u_1$.

## Joint Distribution

Finally we can find the joint distribution of $u_1$ and $u_2$ . The general equation for this distribution is

\\(
    f_{U_1,U_2}(u_1,u_2) = f_{Y_1,Y_2}(h_1^{-1}(u_1,u_2),h_2^{-1}(u_1,u_2))\cdot\left\|J\right\| 
\\)

where $\|J\|$ is the absolute value of the Jacobian matrix.

In our example, this would work out to be

$$
    f_{U_1,U_2}(u_1,u_2) = 2(1-u_1)\cdot \left\|\frac{1}{u_1}\right\|
$$

for $0 \le u_2 \le u_1 \le 1$ and $0$ otherwise.

# Note

Often you will only have one $U$ representing a transformation. This seems to pose a problem with using this method right? Well actually you can just use a helper variable to manipulate the transformation.

Let's say the example above instead said 

> We want to find the distribution of the transformation such that $U = Y_1Y_2$

Then we need to define some $u_1 = h_1(y_1,y_2)$ such that we can find the inverse of $U = U_2 = Y_1Y_2$. 

To find this helper variable $u_2$, we should first try to find the inverse of $u_2$ to see what is missing. If $u_2 = y_1y_2$, then $y_2 = u_2/y_1$. Now $y_2$ cannot be a function of both $u_2$ and $y_1$ for this method to work, so we need to replace $y_1$ with some function of $u$s. The easiest choice would be $u_1 = y_1$ and thus $y_1= u_1$. Then we get $y_2 = u_2/u_1$.

From here we can perform all the steps above in the same way until the end. At that point, we have a joint distribution function of $f_{U_1,U_2}(u_1,u_2)$, but we are just looking for the distribution for $U_2 = U$. So, all we need to do is find the marginal distribution by integrating with respect to $U_1$ to get

$$
    f_{U}(u) = \begin{cases}
        2(u_2-\ln u_2 - 1), & 0 \le u_2 \le 1\\
        0, & \textit{otherwise}
    \end{cases}
$$