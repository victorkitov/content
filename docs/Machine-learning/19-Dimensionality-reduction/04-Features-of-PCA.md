---
description: Свойства проекций на главные компоненты.
keywords:
- principal component analysis
- PCA
- снижение размерности
- dimensionality reduction
---

# Свойства проекций на главные компоненты

[Метод главных компонент](Principal-component-analysis) (principal component analysis, PCA) порождает новые признаки $\boldsymbol{z}\in\mathbb{R}^K$, отвечающие проекциям объекта $\boldsymbol{x}$ на первые $K$  главных компонент. Докажем, что полученные признаки обладают следующими свойствами:

- обладают нулевым средним;

- нескореллированы друг с другом;

- обладают свойством линейной независимости.

**Утверждение: центрированность проекций**

Если исходные данные $\{\boldsymbol{x}_n\}_{n=1}^N$ были центрированы ($\mathbb{E}[\boldsymbol{x}] = \boldsymbol{0}$), то математическое ожидание проекции данных на любую главную компоненту также <u>равно нулю</u>.

**Доказательство:**

Пусть $\boldsymbol{x}$ — случайный вектор исходных признаков. Рассмотрим значение $i$-го нового признака (проекции) $z^i$, которое вычисляется как скалярное произведение вектора объекта на $i$-ю главную компоненту $\boldsymbol{v}_i$:

$$
z^i = \boldsymbol{v}_i^T \boldsymbol{x}
$$

Вычислим математическое ожидание полученной величины и воспользуемся линейностью математического ожидания:

$$
\mathbb{E}[z^i] = \mathbb{E}[\boldsymbol{v}_i^T \boldsymbol{x}]=\boldsymbol{v}_i^T \mathbb{E}[\boldsymbol{x}]= \boldsymbol{v}_i^T \cdot \boldsymbol{0} = 0
$$

**Утверждение: нескоррелированность проекций**

Проекции данных на различные главные компоненты нескоррелированы друг с другом.

**Доказательство:**

Пусть $z_i$ и $z_j$ — значения новых признаков (проекций) для центрированных данных. Воспользуемся линейностью мат. ожидания, а также свойством $\boldsymbol{v}_j^T(\boldsymbol{x}-\boldsymbol{\mu})=(\boldsymbol{v}_j^T(\boldsymbol{x}-\boldsymbol{\mu}))^T$, справедливым для любого скаляра. Тогда ковариацию $z_i$ и $z_j$ можно выразить следующим образом:

$$
\begin{aligned}
\text{cov}(z_i, z_j) &= \mathbb{E}[(\boldsymbol{v}_i^T(\boldsymbol{x}-\boldsymbol{\mu}))(\boldsymbol{v}_j^T(\boldsymbol{x}-\boldsymbol{\mu}))] \\
&= \mathbb{E}[(\boldsymbol{v}_i^T(\boldsymbol{x}-\boldsymbol{\mu}))(\boldsymbol{v}_j^T(\boldsymbol{x}-\boldsymbol{\mu}))^T] \\
&= \mathbb{E}[(\boldsymbol{v}_i^T(\boldsymbol{x}-\boldsymbol{\mu}))(\boldsymbol{x}-\boldsymbol{\mu})^T \boldsymbol{v}_j] \\
&= \boldsymbol{v}_i^T \Sigma \boldsymbol{v}_j = \boldsymbol{v}_i^T \lambda_j \boldsymbol{v}_j = \lambda_j (\boldsymbol{v}_i^T \boldsymbol{v}_j)
\end{aligned}
$$

Так как собственные векторы симметричной матрицы ортогональны, $\boldsymbol{v}_i^T \boldsymbol{v}_j = 0$, то  ковариация, а, следовательно, и корреляция равна 0.

$\square$

**Утверждение: линейная независимость проекций**

Векторы новых признаков $\{\boldsymbol{z}_k\}_{k=1}^D$ линейно независимы, если все собственные числа $\lambda_i > 0$, $i=1,2,...D$.

**Доказательство:**

Пусть $Z$ — матрица проекций размера $N \times D$, где элемент $Z_{nk}$ — проекция $n$-го объекта на $k$-ю главную компоненту. Рассмотрим матрицу $G = \frac{1}{N} Z^T Z$. Её элементы вычисляются как:

$$
G_{ij} = \frac{1}{N} \sum_{n=1}^N Z_{ni} Z_{nj} = \frac{1}{N} \sum_{n=1}^N (\boldsymbol{v}_i^T (\boldsymbol{x}_n - \boldsymbol{\mu})) ((\boldsymbol{x}_n - \boldsymbol{\mu})^T \boldsymbol{v}_j)
$$

Вынося векторы за знак суммы:

$$
G_{ij} = \boldsymbol{v}_i^T \left( \frac{1}{N} \sum_{n=1}^N (\boldsymbol{x}_n - \boldsymbol{\mu}) (\boldsymbol{x}_n - \boldsymbol{\mu})^T \right) \boldsymbol{v}_j = \boldsymbol{v}_i^T \Sigma \boldsymbol{v}_j
$$

Как было доказано выше, $G_{ij} = \lambda_i \mathbb{I}\{i=j\}$. Таким образом, $G$ — диагональная матрица:

$$
\frac{1}{N} Z^T Z = \begin{pmatrix} \lambda_1 & 0 & \dots & 0 \\ 0 & \lambda_2 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \lambda_D \end{pmatrix}
$$

Если все $\lambda_k > 0$, то $\text{det}(\frac{1}{N} Z^T Z) = \prod \lambda_k \neq 0$, следовательно, матрица $Z^T Z$ имеет полный ранг $D$. Согласно свойству, что ранг произведения не превосходит ранг каждого из сомножителей [[1]](https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D0%BD%D0%B3_%D0%BC%D0%B0%D1%82%D1%80%D0%B8%D1%86%D1%8B), получаем, что $\text{rank}(Z)\ge \text{rank}(Z^T Z)=D$. Поскольку у $Z$ всего $D$ столбцов, то $\text{rank}(Z) = D$, и эти столбцы (отвечающие проекциям объектов на каждую компоненту) линейно независимы.

$\square$

## Литература

1. [Википедия: ранг матрицы.](https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D0%BD%D0%B3_%D0%BC%D0%B0%D1%82%D1%80%D0%B8%D1%86%D1%8B)
