---
description: ''
---

# Backpropagation для однослойного персептрона

В этом разделе мы разберём, как вычисляется прямой проход **однослойного персептрона** с активацией ReLU, а затем как найти градиенты по его параметрам и входу на этапе обратного прохода.  

## Обозначения и размерности

Входной вектор:  

$$
\mathbf{x} \in \mathbb{R}^n

$$

Параметры слоя: 

$$
\mathbf{W} \in \mathbb{R}^{m \times n}
$$

$$
\mathbf{b} \in \mathbb{R}^m
$$

Промежуточные величины:  

$$
\mathbf{z} \in \mathbb{R}^m
$$

$$
\mathbf{a} \in \mathbb{R}^m
$$

Выход слоя:  

$$
\hat{\mathbf{y}} = \mathbf{a} \in \mathbb{R}^m
$$

## Прямой проход

Линейное преобразование:  

$$
\mathbf{z} = \mathbf{W}\mathbf{x} + \mathbf{b}
$$

Для каждого выхода: 

$$
z_i = \sum_{j=1}^n W_{ij} x_j + b_i
$$

применяется активация ReLU:  

$$
a_i = \mathrm{ReLU}(z_i) = \max(0, z_i)
$$

Выход слоя: 

$$
\hat{\mathbf{y}} = \mathbf{a}
$$

Размерности:  

$$
\mathbf{x}\in\mathbb{R}^n,\quad
\mathbf{W}\in\mathbb{R}^{m\times n},\quad
\mathbf{b}\in\mathbb{R}^m,\quad
\mathbf{z}\in\mathbb{R}^m,\quad
\mathbf{a}\in\mathbb{R}^m
$$

## Обратный проход

Пусть $\boldsymbol{\delta_a}$ - градиент функции потерь по выходу сети:  

$$
\frac{\partial \mathcal{L}}{\partial \mathbf{a}} = \boldsymbol{\delta_a}\in\mathbb{R}^m
$$

ReLU зануляет градиент там, где вход был отрицательным:  

$$
\mathbb{I}\{z_i > 0\}
$$

$$
\delta_{z_i} = \delta_{a_i} \cdot \mathbb{I}\{z_i > 0\}, \quad i=1,\dots,m
$$

В векторной форме ($\odot$ - поэлементное перемножение):

$$
\boldsymbol{\delta_z} = \boldsymbol{\delta_a} \odot \mathbb{I}\{\mathbf{z}>0\}, \quad \boldsymbol{\delta_z}\in\mathbb{R}^m
$$

### Градиенты по параметрам

Производная линейной части:  

$$
\frac{\partial z_i}{\partial W_{kj}} = x_j \cdot \mathbb{I}\{i=k\}
$$

Градиент по весам:  

$$
\frac{\partial \mathcal{L}}{\partial W_{ij}} = \delta_{z_i} x_j
$$

В матричной форме:  

$$
\frac{\partial \mathcal{L}}{\partial \mathbf{W}} = \boldsymbol{\delta_z}\mathbf{x}^T \in \mathbb{R}^{m\times n}
$$

Градиент по смещениям:  

$$
\frac{\partial \mathcal{L}}{\partial b_i} = \delta_{z_i}, \quad i=1,\dots,m
$$

В векторной форме:  

$$
\frac{\partial \mathcal{L}}{\partial \mathbf{b}} = \boldsymbol{\delta_z} \in \mathbb{R}^m
$$

**Обратный проход:** 

$$
\mathbb{I}\{\text{передача градиента}\}
$$

$$
\frac{\partial \mathcal{L}}{\partial \mathbf{x}} = \mathbf{W}^T \boldsymbol{\delta_z}, \quad \frac{\partial \mathcal{L}}{\partial \mathbf{x}} \in \mathbb{R}^n
$$

## Итоги

Прямой проход:  

$$
\mathbf{z} = \mathbf{W}\mathbf{x} + \mathbf{b}, \quad \mathbf{a} = \mathrm{ReLU}(\mathbf{z}), \quad \hat{\mathbf{y}} = \mathbf{a}
$$

Обратный проход:  

$$
\boldsymbol{\delta_z} = \boldsymbol{\delta_a} \odot \mathbf{1}_{(\mathbf{z}>0)}
$$

$$
\frac{\partial \mathcal{L}}{\partial \mathbf{W}} = \boldsymbol{\delta_z}\mathbf{x}^T
$$

$$
\frac{\partial \mathcal{L}}{\partial \mathbf{b}} = \boldsymbol{\delta_z}
$$

$$
\frac{\partial \mathcal{L}}{\partial \mathbf{x}} = \mathbf{W}^T \boldsymbol{\delta_z}
$$

Символ индикатора:  

$$
\mathbb{I}\{i=j\} =
\begin{cases}
1,& i=j,\\
0,& i\neq j
\end{cases}
$$
