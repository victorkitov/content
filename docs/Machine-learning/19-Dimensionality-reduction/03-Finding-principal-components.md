---
description: Аналитический вывод главных компонент в методе PCA.
keywords:
- метод главных компонент
- principal component analysis
- PCA
- снижение размерности
- dimensionality reduction
- доля объясненной дисперсии
---

# Нахождение главных компонент

## Дисперсия вдоль направления

Пусть данные $\{\boldsymbol{x}_n\}_{n=1}^N$ имеют вектор среднего $\boldsymbol{\mu}$ и ковариационную матрицу $\Sigma$, которые по обучающей выборке вычисляются как выборочные оценки:

$$
\boldsymbol{\mu} = \frac{1}{N} \sum_{n=1}^N \boldsymbol{x}_n
$$

$$
\Sigma = \frac{1}{N} \sum_{n=1}^N (\boldsymbol{x}_n - \boldsymbol{\mu})(\boldsymbol{x}_n - \boldsymbol{\mu})^T
$$

**Утверждение: дисперсия проекций**

Дисперсия $\mathbb{D}$ проекций данных на вектор $\boldsymbol{v}$ единичной длины выражается как $\boldsymbol{v}^T \Sigma \boldsymbol{v}$.

**Доказательство:**

Рассмотрим дисперсию скалярного произведения $z = \boldsymbol{v}^T \boldsymbol{x}$:

$$
\begin{aligned}
\mathbb{D}(z) &= \mathbb{E}[(z - \mathbb{E}[z])^2] \\
&=\mathbb{E}[(\boldsymbol{v}^T \boldsymbol{x} - \boldsymbol{v}^T \boldsymbol{\mu})^2] \\
&= \mathbb{E}[(\boldsymbol{v}^T (\boldsymbol{x} - \boldsymbol{\mu}))^2]
\end{aligned}
$$

Используя линейность математического ожидания, правила транспонирования $(AB)^T = B^T A^T$ и свойство, что при транспонировании скаляра $\boldsymbol{v}^T (\boldsymbol{x} - \boldsymbol{\mu})$ он не меняется, получим:

$$
\begin{aligned}
\mathbb{D}(z) &= \mathbb{E}\left[ \left( \boldsymbol{v}^T (\boldsymbol{x} - \boldsymbol{\mu}) \right)^2 \right] \\
&= \mathbb{E}\left[ \left( \boldsymbol{v}^T (\boldsymbol{x} - \boldsymbol{\mu}) \right) \left( \boldsymbol{v}^T (\boldsymbol{x} - \boldsymbol{\mu}) \right)^T \right] \\
&= \mathbb{E}\left[ \boldsymbol{v}^T (\boldsymbol{x} - \boldsymbol{\mu}) (\boldsymbol{x} - \boldsymbol{\mu})^T \boldsymbol{v} \right] \\
&= \boldsymbol{v}^T \mathbb{E}\left[ (\boldsymbol{x} - \boldsymbol{\mu}) (\boldsymbol{x} - \boldsymbol{\mu})^T \right] \boldsymbol{v}
\end{aligned}
$$

Подставляя определение матрицы $\Sigma$, получим требуемое утверждение:

$$
\mathbb{D}(z) = \boldsymbol{v}^T \Sigma \boldsymbol{v}
$$

$\square$

Далее мы будем определять самое информативное направление $\boldsymbol{v}$, вдоль которого дисперсия проекций объектов окажется максимальной.

## Первая главная компонента

:::tip Первая главная компонента

**Первая главная компонента** (first principal component) — это направление в пространстве исходных признаков, задаваемое вектором $\boldsymbol{v}_1$ единичной нормы ($\|\boldsymbol{v}_1\|=1$), такое, что проекция центрированных данных на это направление обладает <u>максимально возможной дисперсией</u>.

:::

**Утверждение: первая главная компонента**

Вектор $\boldsymbol{v}_1$, максимизирующий дисперсию проекций $\{\boldsymbol{x}_n\}_{n=1}^N$ на него, является собственным вектором матрицы $\Sigma$, отвечающим её максимальному собственному значению $\lambda_1$.

**Доказательство:**

Для поиска первой главной компоненты $\boldsymbol{v}_1$ необходимо решить следующую оптимизационную задачу:

$$
\begin{cases} 
\boldsymbol{v}^T \Sigma \boldsymbol{v} \to \max_{\boldsymbol{v}} \\ 
\boldsymbol{v}^T \boldsymbol{v} = 1 
\end{cases}
$$

Для решения этой задачи используется **метод множителей Лагранжа** [[1]](https://ru.wikipedia.org/wiki/Метод_множителей_Лагранжа). Мы переходим от поиска экстремума функции при ограничении к поиску стационарных точек лагранжиана:

$$
L(\boldsymbol{v}, \lambda) = \boldsymbol{v}^T \Sigma \boldsymbol{v} - \lambda (\boldsymbol{v}^T \boldsymbol{v} - 1)
$$

где $\lambda$ — множитель Лагранжа. Необходимым условием экстремума является равенство нулю частной производной по $\boldsymbol{v}$:

$$
\frac{\partial L}{\partial \boldsymbol{v}} = \frac{\partial}{\partial \boldsymbol{v}} (\boldsymbol{v}^T \Sigma \boldsymbol{v}) - \frac{\partial}{\partial \boldsymbol{v}} (\lambda \boldsymbol{v}^T \boldsymbol{v}) = 0
$$

Используя правила матричного дифференцирования ($\frac{\partial \boldsymbol{a}^T A \boldsymbol{a}}{\partial \boldsymbol{a}} = 2A\boldsymbol{a}$ для симметричной матрицы $A$ [[2]](https://en.wikipedia.org/wiki/Matrix_calculus)), получаем:

$$
2 \Sigma \boldsymbol{v} - 2 \lambda \boldsymbol{v} = 0 \implies \Sigma \boldsymbol{v} = \lambda \boldsymbol{v}
$$

Следовательно, $\boldsymbol{v}$ является одним из собственных векторов матрицы $\Sigma$. 

Дисперсия при этом равна 

$$
\mathbb{D}(z) = \boldsymbol{v}^T \Sigma \boldsymbol{v} = \boldsymbol{v}^T \lambda \boldsymbol{v} = \lambda \boldsymbol{v}^T \boldsymbol{v} = \lambda
$$

Поскольку нас интересует <u>максимизация</u> дисперсии, $\boldsymbol{v}$ следует выбрать собственным вектором $\boldsymbol{v}_1$ матрицы $\Sigma$, отвечающим <u>максимальному</u> собственному значению $\lambda_1$.

$\square$

:::tip Спектральная теорема
Так как $\Sigma\in\mathbb{R}^{D\times D}$ — симметричная вещественная матрица, то согласно **спектральной теореме** [[3]](https://ru.wikipedia.org/wiki/Спектральная_теорема), её собственные значения <u>вещественны</u>, а собственные вектора образуют <u>ортонормированный базис</u>. То есть она обладает набором из $D$ собственных векторов, которые ортогональны друг другу.
:::

Обозначим за $ \boldsymbol{v}_1, \boldsymbol{v}_2,... \boldsymbol{v}_D$ собственные вектора $\Sigma$, отвечающие собственным значениям $\lambda_1 \ge \lambda_2 \ge \lambda_D \ge 0$. Все собственные значения неотрицательны, поскольку по свойству дисперсии, доказанному выше,

$$
\boldsymbol{v_i}^T \Sigma \boldsymbol{v_i}=\lambda_i \boldsymbol{v_i}^T \boldsymbol{v_i}=\lambda_i=\mathbb{D}(\boldsymbol{v}_i^T \boldsymbol{x})\ge 0
$$

## Последующие главные компоненты

:::tip $i$-я главная компонента

**$i$-я главная компонента** ($i=1,2,...D$ — это направление, задаваемое вектором $\boldsymbol{v}_{M+1}$ единичной нормы, которое 

1. обеспечивает <u>максимум дисперсии</u> проекций данных на неё;

2. ортогональна всем ранее найденным компонентам $\boldsymbol{v}_1, \dots, \boldsymbol{v}_{i-1}$.

:::

**Утверждение: (K+1) главная компонента**

$(K+1)$-я главная компонента является собственным вектором $\Sigma$, отвечающим $(K+1)$-му по величине собственному числу.

**Доказательство:**

Докажем утверждение по индукции. 

Как было показано выше, при $K=0$ утверждение выполнено. 

Допустим, уже найдены $K$ главных компонент $\boldsymbol{v}_1, \dots, \boldsymbol{v}_K$, отвечающие собственным векторам матрицы $\Sigma$ с собственными значениями $\lambda_1 \ge \lambda_2 \ge \lambda_K$. По спектральной теореме они будут ортогональны друг другу. Докажем верность утверждения для $(K+1)$-й компоненты.

Математически оптимизационная задача для $(K+1)$-й главной компоненты записывается следующим образом:

$$
\begin{cases} 
\boldsymbol{v}^T \Sigma \boldsymbol{v} \to \max_{\boldsymbol{v}} \\ 
\boldsymbol{v}^T \boldsymbol{v} = 1 \\ 
\boldsymbol{v}^T \boldsymbol{v}_j = 0, \quad j = 1, \dots, K 
\end{cases}
$$

Решать задачу будем методом множителей Лагранжа [[1]](https://ru.wikipedia.org/wiki/Метод_множителей_Лагранжа). Соответствующий лагранжиан равен

$$
L(\boldsymbol{v}, \lambda, \eta_1, \dots, \eta_K) = \boldsymbol{v}^T \Sigma \boldsymbol{v} - \lambda (\boldsymbol{v}^T \boldsymbol{v} - 1) - \sum_{j=1}^K \eta_j \boldsymbol{v}^T \boldsymbol{v}_j
$$

с двойственными переменными $\lambda, \eta_1, \dots, \eta_K$, отвечающими соответствующим ограничениям.

Запишем условие стационарности лагранжиана по $\boldsymbol{v}$:

$$
\tag{1} \frac{\partial L}{\partial \boldsymbol{v}} = 2 \Sigma \boldsymbol{v} - 2 \lambda \boldsymbol{v} - \sum_{j=1}^K \eta_j \boldsymbol{v}_j = 0
$$

Умножим полученное уравнение слева на $\boldsymbol{v}_i^T$, $i \le K$ (одну из ранее найденных главных компонент):

$$
2 \boldsymbol{v}_i^T \Sigma \boldsymbol{v} - 2 \lambda \boldsymbol{v}_i^T \boldsymbol{v} - \sum_{j=1}^K \eta_j (\boldsymbol{v}_i^T \boldsymbol{v}_j) = 0
$$

Из предположения индукции $\boldsymbol{v}_i^T \boldsymbol{v}_j = \mathbb{I}\{i=j\}$, поэтому получим

$$
\tag{2} 2 \boldsymbol{v}_i^T \Sigma \boldsymbol{v} - 2 \lambda \boldsymbol{v}_i^T \boldsymbol{v} - \eta_i = 0
$$

Заметим, что $\boldsymbol{v}_i^T \boldsymbol{v}=0$ по условию решаемой оптимизационной задачи. Также

$$
\boldsymbol{v}_i^T \Sigma \boldsymbol{v} = (\boldsymbol{v}_i^T \Sigma \boldsymbol{v})^T= \boldsymbol{v}^T \Sigma \boldsymbol{v}_i  = \lambda_i \boldsymbol{v}^T \boldsymbol{v}_i = 0
$$

Следовательно, (2) сводится к условию $\eta_i = 0$, причём это справедливо для любого $i=1,2,...K$. Значит (1) сводится к уравнению на собственные числа $\Sigma \boldsymbol{v} = \lambda \boldsymbol{v}$.

Чтобы максимизировать дисперсию $\mathbb{D}(\boldsymbol{v}^T \boldsymbol{x}) = \lambda$, соблюдая при этом ортогональность ранее найденным главным компонентам $\boldsymbol{v}_1, \dots, \boldsymbol{v}_K$, мы должны выбрать собственный вектор $\boldsymbol{v}_{K+1}$ матрицы $\Sigma$, отвечающий $(K+1)$-му по величине собственному значению $\lambda_{K+1}$. Ортогональность при этом обеспечивается тем, что собственные векторы образуют ортонормированный базис согласно спектральной теореме.

$\square$

:::tip Значение каждой главной компоненты

Последовательно применяя полученный результат для $K=1,2,...D-1$, получим, что $k$-я главная компонента равна собственному вектору $\boldsymbol{v}_k$ матрицы $\Sigma$, отвечающему $k$-му собственному вектору.

:::

**Утверждение: дисперсия проекций на компоненту**

Дисперсия проекции данных на $k$-ю главную компоненту равна соответствующему собственному числу $\lambda_k$.

**Доказательство:**

Для $k$-й компоненты $\boldsymbol{v}_k$ выполняется $\Sigma \boldsymbol{v}_k = \lambda_k \boldsymbol{v}_k$. Подставляя это в формулу для дисперсии вдоль направления, получим:

$$
\begin{aligned}
\mathbb{D}(z_k) &= \boldsymbol{v}_k^T \Sigma \boldsymbol{v}_k \\
&= \boldsymbol{v}_k^T (\lambda_k \boldsymbol{v}_k) = \lambda_k \|\boldsymbol{v}_k\|^2 = \lambda_k
\end{aligned}
$$

$\square$

## Литература

1. [Wikipedia: Метод множителей Лагранжа.](https://ru.wikipedia.org/wiki/Метод_множителей_Лагранжа)
2. [Wikipedia: Matrix calculus.](https://en.wikipedia.org/wiki/Matrix_calculus)
3. [Wikipedia: Спектральная теорема.](https://ru.wikipedia.org/wiki/Спектральная_теорема)
