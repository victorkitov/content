---
description: Ядерное обобщение гребневой регрессии
keywords:
- kernel method
- kernel ridge regression
- вывод формулы ядерного обобщения для гребневой регрессии
- свойства обобщения гребневой регрессии через ядра
---

# Обобщение гребневой регрессии

Рассмотрим [ядерное обобщение](Kernel-trick) (kernel trick) для [гребневой регрессии](../Linear-regression-extensions/Regularization-in-linear-regression). 

## Базовое решение

Напомним, что решается задача прогнозирования $y\in\mathbb{R}$ по правилу

$$
\widehat{y}\left(\mathbf{x}\right)=\mathbf{w}^{T}\mathbf{x},
$$

где для простоты обозначений мы добавили константный признак $x^0\equiv 1$ в вектор признаков $\mathbf{x}$, чтобы учесть смещение.

Веса $\mathbf{w}$ находятся по правилу

$$
L(\mathbf{w})=\sum_{n=1}^{N}\left(\mathbf{x}_{n}^{T}\mathbf{w}-y_{n}\right)^{2}+\lambda \mathbf{w}^{T}\mathbf{w}\to\min_{\mathbf{w}}
$$

Ранее мы [уже решали эту задачу](../Linear-regression-extensions/Ridge-regression-solution) и нашли аналитическое решение для весов:

$$
\widehat{\mathbf{w}}=(X^{T}X+\lambda I)^{-1}X^{T}Y
$$

Отсюда следует (докажите!), что вычислительная сложность построения прогнозов настроенными весами равна $O(D)$, а сложность нахождения весов равна $O(ND^2+D^3)$.

Заметим, что представленное базовое решение <u>не допускает ядерного обобщения</u>, поскольку в явном виде зависит от $\mathbf{x}$ для вычисления прогноза и от $\{\mathbf{x}_i\}_i$ для вычисления весов.

## Ядерное обобщение метода

Для гребневой регрессии можно получить эквивалентное решение, при котором прогноз строится по правилу

$$
\hat{y}(\mathbf{x}) = \frac{1}{\lambda} \sum_{n=1}^{N} \alpha_n \langle \mathbf{x}_n,\mathbf{x}\rangle
$$

А вектор $\boldsymbol{\alpha}$ находится по формуле 

$$
\boldsymbol{\alpha} = (K+\lambda I)^{-1} \lambda \mathbf{y},
$$

где $K=\{K_{ij}\}_{ij}\in\mathbb{R}^{N\times N}$ - матрица Грамма [[1]](https://ru.wikipedia.org/wiki/%D0%9E%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D0%B5%D0%BB%D1%8C_%D0%93%D1%80%D0%B0%D0%BC%D0%B0) из всевозможных скалярных произведений между объектами:

$$
K_{ij} = \langle \mathbf{x}_i, \mathbf{x}_j \rangle
$$

<details>
<summary>Доказательство для любознательных</summary> 
<p>

Для того, чтобы прогноз гребневой регресии явно выражался через скалярные произведения, перепишем оптимизационную задачу для нахождения весов $\mathbf{w}$ в эквивалентном виде:

$$
\begin{cases}
\frac{1}{2} \sum_{n=1}^{N} z_n^2 + \frac{1}{2} \lambda \mathbf{w}^\top \mathbf{w} \to \min_{\mathbf{w},\mathbf{z}} \\
z_n = y_n - \mathbf{x}_n^\top \mathbf{w}
\end{cases}
$$

Поскольку теперь решается задача оптимизации с ограничениями на равенства, воспользуемся методом множителей Лагранжа [[2]](https://en.wikipedia.org/wiki/Lagrange_multiplier). Для этого составим лагранжиан с двойственными переменными при ограничениях $\alpha_1,\alpha_2,...\alpha_N$:

$$
\mathcal{L}(\mathbf{w}, \mathbf{z}, \boldsymbol{\alpha}) = \frac{1}{2} \sum_{n=1}^{N} z_n^2 + \frac{1}{2} \lambda \mathbf{w}^\top \mathbf{w} + \sum_{n=1}^{N} \alpha_n (y_n - \mathbf{x}_n^\top \mathbf{w} - z_n).
$$

Найдем необходимое условие оптимума, приравняв производные лагранжиана по $\mathbf{w},\mathbf{z}$ к нулю, выразим из этих условий $\mathbf{w},\mathbf{z}$ через $\boldsymbol{\alpha}$, а затем подставим их в ограничения, чтобы найти $\boldsymbol{\alpha}$.

Берём производную лагранжиана по $z_n$:

$$
\frac{\partial \mathcal{L}}{\partial z_n} = \frac{\partial}{\partial z_n} \left( \frac{1}{2} z_n^2 - \alpha_n z_n \right) = z_n - \alpha_n=0,
$$

откуда получаем:

$$
z_n = \alpha_n, \quad \text{ для } n=1,2,...N.
$$

Теперь приравняем производную лагранжиана по $\mathbf{w}$:

$$
\frac{\partial \mathcal{L}}{\partial \mathbf{w}} = \lambda \mathbf{w} - \sum_{n=1}^{N} \alpha_n \mathbf{x}_n = 0 \quad \Rightarrow \quad \mathbf{w} = \frac{1}{\lambda} \sum_{n=1}^{N} \alpha_n \mathbf{x}_n
$$

Ограничения при этом

$$
y_n - \mathbf{x}_n^\top \mathbf{w} - z_n=0, \quad n=1,2,...N.
$$

Подставляя найденные $\mathbf{w},\mathbf{z}$ в ограничения, получим систему уравнений для $\boldsymbol{\alpha}$:

$$
y_n - \mathbf{x}_n^\top \left(\frac{1}{\lambda} \sum_{m=1}^{N} \alpha_m \mathbf{x}_m\right) - \alpha_n=0,
$$

откуда для $n=1,2,...N$:

$$
-\sum_{m=1}^{N} \alpha_m \mathbf{x}_n^T \mathbf{x}_m-\lambda \alpha_n = -\lambda y_n
$$

$$
\sum_{m=1}^{N}  \mathbf{x}_n^T \mathbf{x}_m \alpha_m+\lambda \alpha_n = \lambda y_n
$$

В матричной форме система уравнений запишется следующим образом:

$$
(X X^\top+\lambda I) \boldsymbol{\alpha} = \lambda \mathbf{y},
$$

где $X\in\mathbb{R}^{N\times D}$ - [матрица признаков](../Base-concepts/Function-selection).

Следовательно

$$
\boldsymbol{\alpha} = (X X^\top+\lambda I)^{-1} \lambda \mathbf{y}=(K+\lambda I)^{-1} \lambda \mathbf{y},
$$

где $K\in\mathbb{R}^{N\times N}$ - матрица Грамма из всевозможных скалярных произведений между объектами: 

$$
K_{ij} = \mathbf{x}_i^T \mathbf{x}_j
$$

Найденный оптимум является точкой минимума, поскольку минимизируется выпуклая функция при выпуклых ограничениях. Минимальность решения также видна из неотрицательной определённости матрицы вторых производных лагранжиана по $\mathbf{z},\mathbf{w}$.

Итоговый прогноз вычисляется по следующей формуле: 

$$
\hat{y}(\mathbf{x}) = \mathbf{x}^\top \mathbf{w} = \mathbf{x}^\top \left(\frac{1}{\lambda} \sum_{n=1}^{N} \alpha_n \mathbf{x}_n\right) = \frac{1}{\lambda} \sum_{n=1}^{N} \alpha_n \mathbf{x}_n^T\mathbf{x}
$$

</p>
</details>

:::tip Вычислительная сложность

Хотя мы получили эквивалентное решение, сложность его отличается от базового.

Теперь сложность построения одного прогноза $O(ND)$, а сложность нахождения оптимального вектора $\boldsymbol{\alpha}$ равна $O(N^2 D+N^3)$ (докажите!). 

Таким образом, полученное решение всегда медленнее строит прогноз, чем базовое. Обучение же модели будет медленнее/быстрее в зависимости от того, $D<N$ или $N<D$. Обычно $D<N$ и настройка второго метода также получается медленнее.

:::

В такой формулировке метод допускает [ядерное обобщение](Kernel-trick) (kernel trick) - достаточно скалярные произведения заменить на функции ядра:

$$
\mathbf{x}^T\mathbf{x'}=\left<\mathbf{x},\mathbf{x'}\right>\to k(\mathbf{x},\mathbf{x'})
$$

откуда получим обобщённое правило построения прогноза:

$$
\hat{y}(\mathbf{x}) = \frac{1}{\lambda} \sum_{n=1}^{N} \alpha_n k\left( \mathbf{x}_n,\mathbf{x}\right)
$$

$$
\boldsymbol{\alpha} = (K+\lambda I)^{-1} \lambda \mathbf{y},
$$

а матрица Грамма состоит уже из значений ядерной функции:

$$
K_{ij} = k(\mathbf{x}_i,\mathbf{x}_j)
$$

При полиномиальной ядре гребневая регрессия будет строить прогноз как  зависимость от полиномиальных признаков степени, определяемой степенью полиномиального ядра.

При RBF-ядре гребневая регрессия станет [метрическим методом](../Metric-methods/Metric-methods), поскольку прогноз будет определяться расстояниями от $\mathbf{x}$ до объектов обучающей выборки. Гиперпараметр $\gamma$ при этом будет управлять плавностью зависимости прогноза от расстояний между $\mathbf{x}$ до обучающих объектов.

Гиперпарметр $\lambda$ при ядерном обобщении будет обладать тем же смыслом, что и в базовом линейном случае - его увеличение будет делать модель менее гибкой и менее склонной к переобучению.

Вы также можете ознакомиться с выводом ядерного обобщения для гребневой регрессии в [[3]](https://teazrq.github.io/SMLR/kernel-ridge-regression.html).

## Литература

1. [Википедия: определитель Грама.](https://ru.wikipedia.org/wiki/%D0%9E%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D0%B5%D0%BB%D1%8C_%D0%93%D1%80%D0%B0%D0%BC%D0%B0)
2. [Wikipedia: Lagrange multiplier.](https://en.wikipedia.org/wiki/Lagrange_multiplier)
3. [Ruoqing Zhu. Statistical Machine Learning with R. 2025.](https://teazrq.github.io/SMLR/kernel-ridge-regression.html)
