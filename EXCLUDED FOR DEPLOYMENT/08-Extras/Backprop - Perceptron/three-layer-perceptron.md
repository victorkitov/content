Прямой и обратный проход трёхслойного персептрона с ReLU
Что мы делаем
Рассмотрим полносвязную сеть из трёх слоёв с параметрами
$\mathbf{W}^{(1)}, \mathbf{b}^{(1)}$, $\mathbf{W}^{(2)}, \mathbf{b}^{(2)}$, $\mathbf{W}^{(3)}, \mathbf{b}^{(3)}$.
На каждом скрытом слое используем активацию ReLU. Выход сети $\hat{\mathbf{y}}$ сравнивается с целевым вектором $\mathbf{y}$ по функции потерь $\mathcal{L}$.

Размерности:

вход $\mathbf{x}\in\mathbb{R}^{n_0}$

первый скрытый слой: $\mathbf{z}^{(1)},\mathbf{a}^{(1)}\in\mathbb{R}^{n_1}$

второй скрытый слой: $\mathbf{z}^{(2)},\mathbf{a}^{(2)}\in\mathbb{R}^{n_2}$

выходной слой: $\mathbf{z}^{(3)}=\hat{\mathbf{y}}\in\mathbb{R}^{n_3}$

Прямой проход
Первый слой:

$$
\mathbf{z}^{(1)} = \mathbf{W}^{(1)} \mathbf{x} + \mathbf{b}^{(1)}
$$

$$
\mathbf{a}^{(1)} = \text{ReLU}(\mathbf{z}^{(1)}), \quad a^{(1)}_i = \max(0,z^{(1)}_i)
$$

Второй слой:

$$
\mathbf{z}^{(2)} = \mathbf{W}^{(2)} \mathbf{a}^{(1)} + \mathbf{b}^{(2)}
$$

$$
\mathbf{a}^{(2)} = \text{ReLU}(\mathbf{z}^{(2)}), \quad a^{(2)}_i = \max(0,z^{(2)}_i)
$$

Выходной слой:

$$
\mathbf{z}^{(3)} = \mathbf{W}^{(3)} \mathbf{a}^{(2)} + \mathbf{b}^{(3)}
$$

$$
\hat{\mathbf{y}} = \mathbf{z}^{(3)}
$$

Функция потерь:

$$
\mathcal{L} = \mathcal{L}(\hat{\mathbf{y}},\mathbf{y})
$$

Обратный проход
Обозначим:
$\boldsymbol{\delta}^{(l)} = \frac{\partial \mathcal{L}}{\partial \mathbf{z}^{(l)}}$

Шаг 1: выходной слой

$$
\boldsymbol{\delta}^{(3)} = \frac{\partial \mathcal{L}}{\partial \mathbf{z}^{(3)}} = \frac{\partial \mathcal{L}}{\partial \hat{\mathbf{y}}}
$$

$$
\frac{\partial \mathcal{L}}{\partial \mathbf{W}^{(3)}} = \boldsymbol{\delta}^{(3)} \left(\mathbf{a}^{(2)}\right)^\top
$$

$$
\frac{\partial \mathcal{L}}{\partial \mathbf{b}^{(3)}} = \boldsymbol{\delta}^{(3)}
$$

Шаг 2: второй скрытый слой

$$
\frac{\partial \mathcal{L}}{\partial \mathbf{a}^{(2)}} = \left(\mathbf{W}^{(3)}\right)^\top \boldsymbol{\delta}^{(3)}
$$

$$
\delta^{(2)}_i = \frac{\partial \mathcal{L}}{\partial a^{(2)}_i} \cdot \mathbb{I}{z^{(2)}_i > 0}
$$

$$
\frac{\partial \mathcal{L}}{\partial \mathbf{W}^{(2)}} = \boldsymbol{\delta}^{(2)} \left(\mathbf{a}^{(1)}\right)^\top
$$

$$
\frac{\partial \mathcal{L}}{\partial \mathbf{b}^{(2)}} = \boldsymbol{\delta}^{(2)}
$$

Шаг 3: первый скрытый слой

$$
\frac{\partial \mathcal{L}}{\partial \mathbf{a}^{(1)}} = \left(\mathbf{W}^{(2)}\right)^\top \boldsymbol{\delta}^{(2)}
$$

$$
\delta^{(1)}_i = \frac{\partial \mathcal{L}}{\partial a^{(1)}_i} \cdot \mathbb{I}{z^{(1)}_i > 0}
$$

$$
\frac{\partial \mathcal{L}}{\partial \mathbf{W}^{(1)}} = \boldsymbol{\delta}^{(1)} \left(\mathbf{x}\right)^\top
$$

$$
\frac{\partial \mathcal{L}}{\partial \mathbf{b}^{(1)}} = \boldsymbol{\delta}^{(1)}
$$

Шаг 4: градиент по входу

$$
\frac{\partial \mathcal{L}}{\partial \mathbf{x}} = \left(\mathbf{W}^{(1)}\right)^\top \boldsymbol{\delta}^{(1)}
$$

## Итог

На каждом слое при обратном проходе мы умножаем градиент сверху на производную ReLU (индикатор положительности аргумента) и формируем градиенты по весам как внешнее произведение:
$\frac{\partial \mathcal{L}}{\partial \mathbf{W}^{(l)}} = \boldsymbol{\delta}^{(l)} \cdot (\mathbf{a}^{(l-1)})^\top$
Градиент по смещениям: $\frac{\partial \mathcal{L}}{\partial \mathbf{b}^{(l)}} = \boldsymbol{\delta}^{(l)}$
Градиент по входу: $\frac{\partial \mathcal{L}}{\partial \mathbf{x}} = \left(\mathbf{W}^{(1)}\right)^\top \boldsymbol{\delta}^{(1)}$
