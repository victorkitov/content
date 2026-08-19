## Производные по весам и по входу

## Производные по весам и по входу

Ниже подробно разобраны формулы для однослойного персептрона с ReLU.

### Производная по весам $W_{ij}$

Каждый вес $W_{ij}$ участвует в вычислении линейной комбинации для выхода $z_i$:

$$
z_i = \sum_{j=1}^{n} W_{ij} x_j + b_i
$$

Если мы дифференцируем $z_i$ по $W_{ij}$, то всё кроме $x_j$ — константа, поэтому:

$$
\frac{\partial z_i}{\partial W_{ij}} = x_j
$$

При обратном проходе мы учитываем, что градиент функции потерь передаётся назад через локальный градиент:

$$
\frac{\partial \mathcal{L}}{\partial W_{ij}} = \frac{\partial \mathcal{L}}{\partial z_i} \cdot \frac{\partial z_i}{\partial W_{ij}}
$$

Подставляем:

$$
\frac{\partial \mathcal{L}}{\partial W_{ij}} = \delta_{z_i} \cdot x_j
$$

Где  $\delta_{z_i} = \frac{\partial \mathcal{L}}{\partial z_i}$ — это «локальный градиент» для выхода $i$, который уже учёл влияние ReLU и градиента сверху.

В матричной форме для всех весов сразу:

$$
\frac{\partial \mathcal{L}}{\partial \mathbf{W}} = \boldsymbol{\delta_z} \, \mathbf{x}^T
$$

То есть каждая строка матрицы градиента — это вектор входа, масштабированный соответствующей компонентой градиента $\delta_{z_i}$.

### Производная по входу $x_j$

Каждый вход $x_j$ влияет на все выходы $z_i$ через веса $W_{ij}$.  

Чтобы узнать, как функция потерь изменяется по $x_j$, нужно сложить вклады всех путей:

$$
\frac{\partial \mathcal{L}}{\partial x_j} = \sum_{i=1}^m \frac{\partial \mathcal{L}}{\partial z_i} \cdot \frac{\partial z_i}{\partial x_j}
$$

Мы знаем:

$$
\frac{\partial z_i}{\partial x_j} = W_{ij}
$$

Подставляем:

$$
\frac{\partial \mathcal{L}}{\partial x_j} = \sum_{i=1}^m W_{ij} \cdot \delta_{z_i}
$$

В векторной форме:

$$
\frac{\partial \mathcal{L}}{\partial \mathbf{x}} = \mathbf{W}^T \boldsymbol{\delta_z}
$$

### **Итог:**

$$
\frac{\partial \mathcal{L}}{\partial \mathbf{W}} = \boldsymbol{\delta_z}\mathbf{x}^T
$$

$$
\frac{\partial \mathcal{L}}{\partial \mathbf{b}} = \boldsymbol{\delta_z}
$$

$$
\frac{\partial \mathcal{L}}{\partial \mathbf{x}} = \mathbf{W}^T \boldsymbol{\delta_z}
$$

Градиент по весам говорит, как изменение веса влияет на ошибку, и выражается через вход $x_j$ и локальный градиент $\delta_{z_i}$.  

Градиент по входу говорит, как изменение входа влияет на ошибку, и выражается через транспонированную матрицу весов и локальные градиенты всех выходов.
