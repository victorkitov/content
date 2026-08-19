---
description: Интерпретация весов логистической регрессии.
keywords:
- логистическая регрессия
- интерпретируемое машинное обучение
- интерпретация моделей машинного обучения
---

# Интерпретация логистической регрессии

Рассмотрим модель [логистической регрессии](../Linear-classification/Binary-logistic-regression) для решения задачи бинарной классификации, когда $y\in\left\{ -1,+1\right\}$. В модели предполагается, что 

$$
\begin{aligned}
p\left(y=+1|\mathbf{x}\right) &= \frac{1}{1+e^{-\mathbf{w}^{T}\mathbf{x}}} \\
p\left(y=-1|\mathbf{x}\right) &= 1-p\left(y=+1|\mathbf{x}\right) = \frac{1}{1+e^{\mathbf{w}^{T}\mathbf{x}}}
\end{aligned}
$$

Здесь так же, как и для линейной регрессии, по знаку коэффициента можно судить о направлении влияния признака на прогноз: 

- признак с положительным коэффициентом увеличивает вероятность положительного класса,

- признак с отрицательным коэффициентом - уменьшает.

Величину коэффициента можно проинтерпретировать следующим образом:

$$
\begin{gathered}
1+e^{-\mathbf{w}^{T}\mathbf{x}}=\frac{1}{p\left(y=+1|\mathbf{x}\right)} \\
e^{-\mathbf{w}^{T}\mathbf{x}}=\frac{1}{p\left(y=+1|\mathbf{x}\right)}-\frac{p\left(y=+1|\mathbf{x}\right)}{p\left(y=+1|\mathbf{x}\right)}=\frac{p\left(y=-1|\mathbf{x}\right)}{p\left(y=+1|\mathbf{x}\right)}\\
e^{\mathbf{w}^{T}\mathbf{x}}=\frac{p\left(y=+1|\mathbf{x}\right)}{p\left(y=-1|\mathbf{x}\right)}=\text{odds ratio}
\end{gathered}

$$

Последняя величина (отношение вероятностей классов) называется **odds ratio**, и увеличение i-го признака на 1 приводит к увеличению её значения в $e^{w_{i}}$ раз.
