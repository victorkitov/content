---
description: Математические основы и свойства линейного дискриминантного анализа.
keywords:
- линейный дискриминант Фишера
- LDA
- Гауссов классификатор
- линейный дискриминант
- классификация в машинном обучении
- гауссов дискриминантный анализ
---

# Линейный дискриминантный анализ

## Предположения

**Линейный дискриминантный анализ** (Linear Discriminant Analysis, LDA) — это упрощённая модель [квадратичного дискриминантного анализа](Quadratic-discriminant-analysis) при предположении,  что все классы распределены нормально <u>с общей ковариационной матрицей</u> $\Sigma$:

$$
p(\boldsymbol{x} | y) = \frac{1}{(2\pi)^{D/2} |\Sigma|^{1/2}} \exp \left( -\frac{1}{2} (\boldsymbol{x} - \boldsymbol{\mu}_y)^T \Sigma^{-1} (\boldsymbol{x} - \boldsymbol{\mu}_y) \right)
$$

где $D$ — размерность пространства признаков.

:::tip Геометрический смысл

Общность ковариационной матрицы означает, что распределение точек всех классов имеют идентичную форму и ориентацию, а различаются распределения только положением своих центров $\boldsymbol{\mu}_y$.

:::

## Вывод дискриминантной функции

В генеративных моделях дискриминантные функции имеют следующий вид: 

$$
g_y(\boldsymbol{x}) = \ln p(\boldsymbol{x}|y) + \ln p(y),\quad y=1,2,...C
$$

Найдём их аналитически, подставив выражение для $p(\boldsymbol{x}|y)$:

$$
\begin{aligned}
g_y(\boldsymbol{x}) &= \ln \left( \frac{1}{(2\pi)^{D/2} |\Sigma|^{1/2}} \right) - \frac{1}{2} (\boldsymbol{x} - \boldsymbol{\mu}_y)^T \Sigma^{-1} (\boldsymbol{x} - \boldsymbol{\mu}_y) + \ln p(y) \\
&=  -\frac{D}{2}\ln(2\pi)-\frac{1}{2}\ln|\Sigma|-\frac{1}{2} (\boldsymbol{x} - \boldsymbol{\mu}_y)^T \Sigma^{-1} (\boldsymbol{x} - \boldsymbol{\mu}_y) + \ln p(y)
\end{aligned}
$$

Отбрасывая общее для всех $g_y(\boldsymbol{x})$ слагаемое $-\frac{D}{2}\ln(2\pi)-\frac{1}{2}\ln|\Sigma|$, получаем окончательный вид дискриминантных функций:

$$
g_y(\boldsymbol{x})=-\frac{1}{2} (\boldsymbol{x} - \boldsymbol{\mu}_y)^T \Sigma^{-1} (\boldsymbol{x} - \boldsymbol{\mu}_y) + \ln p(y)
$$

:::tip Геометрический смысл прогнозов

Из вида дискриминантной функции видно, что построение прогнозов методом LDA можно интерпретировать как переход в <u>новое декоррелированное пространство признаков</u> $\boldsymbol{x}' = \Sigma^{-1/2}\boldsymbol{x}$, где множество объектов становится сферическим, после чего объект в обновлённом пространстве относится к классу с <u>ближайшим центроидом</u> $\boldsymbol{\mu}_y$ с поправкой на частотность каждого класса.

Действительно, представив обратную ковариационную матрицу как квадрат из её корня  $\Sigma^{-1} = (\Sigma^{-1/2})^T \Sigma^{-1/2}$ получим:

$$
\begin{aligned}
(\boldsymbol{x} - \boldsymbol{\mu}_y)^T \Sigma^{-1} (\boldsymbol{x} - \boldsymbol{\mu}_y) &= (\boldsymbol{x} - \boldsymbol{\mu}_y)^T (\Sigma^{-1/2})^T \Sigma^{-1/2} (\boldsymbol{x} - \boldsymbol{\mu}_y) \\
&= \left[ \Sigma^{-1/2} (\boldsymbol{x} - \boldsymbol{\mu}_y) \right]^T \left[ \Sigma^{-1/2} (\boldsymbol{x} - \boldsymbol{\mu}_y) \right] \\
&= (\Sigma^{-1/2}\boldsymbol{x} - \Sigma^{-1/2}\boldsymbol{\mu}_y)^T (\Sigma^{-1/2}\boldsymbol{x} - \Sigma^{-1/2}\boldsymbol{\mu}_y) \\
&= (\boldsymbol{x}'-\boldsymbol{\mu}_y')^T (\boldsymbol{x}'-\boldsymbol{\mu}_y'),
\end{aligned}
$$

где $\boldsymbol{x}'$ и $\boldsymbol{\mu}_y'$ получены декореллирующим преобразованием:

$$
\begin{aligned}
\boldsymbol{x}' &= \Sigma^{-1/2}\boldsymbol{x} \\
\boldsymbol{\mu}_y' &= \Sigma^{-1/2}\boldsymbol{\mu}_y
\end{aligned}
$$

:::

Раскроем квадратичную форму:

$$
\begin{aligned}
g_y(\boldsymbol{x}) &= -\frac{1}{2} (\boldsymbol{x}^T \Sigma^{-1} \boldsymbol{x} - \boldsymbol{x}^T \Sigma^{-1} \boldsymbol{\mu}_y - \boldsymbol{\mu}_y^T \Sigma^{-1} \boldsymbol{x} + \boldsymbol{\mu}_y^T \Sigma^{-1} \boldsymbol{\mu}_y) + \ln p(y) \\
&= -\frac{1}{2} \boldsymbol{x}^T \Sigma^{-1} \boldsymbol{x} + \boldsymbol{x}^T \Sigma^{-1} \boldsymbol{\mu}_y - \frac{1}{2} \boldsymbol{\mu}_y^T \Sigma^{-1} \boldsymbol{\mu}_y + \ln p(y)
\end{aligned}
$$

Заметим, что слагаемое $-\frac{1}{2} \boldsymbol{x}^T \Sigma^{-1} \boldsymbol{x}$ <u>одинаково</u> для всех классов. Поэтому отбросив это общее слагаемое, получим итоговую **дискриминантную функцию**:

$$
g_y(\boldsymbol{x}) = \boldsymbol{x}^T \Sigma^{-1} \boldsymbol{\mu}_y - \frac{1}{2} \boldsymbol{\mu}_y^T \Sigma^{-1} \boldsymbol{\mu}_y + \ln p(y)
$$

Данная функция <u>линейна</u> по $\boldsymbol{x}$, поэтому метод LDA является [линейным классификатором](../Linear-classification/Linear-classification), разделяющим классы линейными гиперплоскостями.

## Особенности метода

В отличие от [QDA](Quadratic-discriminant-analysis), где количество параметров растёт как $O(C \cdot D^2)$, в LDA мы оцениваем <u>только одну</u> ковариационную матрицу, общую для всех классов, поэтому число параметров растёт как $O(D^2)$. 

Это делает метод более простым и менее склонным к [переобучению](../Base-concepts/Generalization-ability), по сравнению с QDA. Общая ковариационная матрица менее склонна к вырождению, чем матрицы отдельных классов в QDA, особенно, когда есть классы, содержащие мало наблюдений.

Тем не менее, для большого числа признаков и малого числа наблюдений либо в случае линейной зависимости признаков даже общая ковариационная матрица может вырождаться или быть плохо обусловленной.

В таких случаях применяют регуляризацию, смешивая ковариационную матрицу с единичной матрицей:

$$
\hat{\Sigma}_{reg} = (1 - \alpha) \hat{\Sigma} + \alpha \sigma^2 I
$$

где $\alpha$ — гиперпараметр регуляризации, а $\sigma^2= \text{tr}(\hat{\Sigma})/D$ — средняя дисперсия всех признаков.

С примерами использования методов QDA и LDA в библиотеке scikit-learn можно ознакомиться в [[3]](https://www.geeksforgeeks.org/machine-learning/linear-and-quadratic-discriminant-analysis-using-sklearn/) и [[4]](https://scikit-learn.org/stable/modules/lda_qda.html).

## Литература

1. [GeeksForGeeks: Linear and Quadratic Discriminant Analysis using Sklearn.](https://www.geeksforgeeks.org/machine-learning/linear-and-quadratic-discriminant-analysis-using-sklearn/)
2. [Документация scikit-learn: Linear and Quadratic Discriminant Analysis.](https://scikit-learn.org/stable/modules/lda_qda.html)
