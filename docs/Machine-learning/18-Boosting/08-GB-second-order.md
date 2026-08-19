---
description: Градиентный бустинг второго порядка - алгоритм настройки следующей базовой модели градиентного бустинга при квадратичном приближении функции потерь.
keywords:
- бустинг второго порядка
- виды бустинга
- виды градиентного бустинга
---

# Градиентный бустинг второго порядка

Мы вывели [алгоритм градиентного бустинга](GB-algorithm) из <u>линейного приближения</u> функции потерь. Но можно было бы применить ту же самую идею, используя более точное квадратичное приближение!

Рассмотрим для объекта $(\mathbf{x},y)$ функцию потерь $\mathcal{L}(\mathbf{x},y)$ и введём обозначения для её первой и второй производной по значению прогноза:

$$
\begin{aligned}
g(\mathbf{x}) &= \frac{\partial\mathcal{L}(G(\mathbf{x}),y)}{\partial G} \\
h(\mathbf{x}) &= \frac{\partial^{2}\mathcal{L}(G(\mathbf{x}),y)}{\partial G^{2}}
\end{aligned}
$$

Тогда из разложения Тейлора второго порядка [[1]](https://neerc.ifmo.ru/wiki/index.php?title=%D0%A4%D0%BE%D1%80%D0%BC%D1%83%D0%BB%D0%B0_%D0%A2%D0%B5%D0%B9%D0%BB%D0%BE%D1%80%D0%B0_%D0%B4%D0%BB%D1%8F_%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9_%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8) получим следующую квадратичную аппроксимацию для функции потерь:

$$
\begin{gathered}\mathcal{L}(G(\mathbf{x})+f(\mathbf{x}),\,y)\approx\mathcal{L}(G(\mathbf{x}),y)+g(\mathbf{x})f(\mathbf{x})+\frac{1}{2}h(\mathbf{x})\left(f(\mathbf{x})\right)^{2}=\\
\frac{1}{2}h(\mathbf{x})\left(f(\mathbf{x})+\frac{g(\mathbf{x})}{h(\mathbf{x})}\right)^{2}+\text{const}(f(\mathbf{x})),
\end{gathered}

$$

где $\text{const}(f(\mathbf{x}))$ обозначает некоторое выражение, не зависящее от базовой модели $f(\mathbf{x})$, по которой нам необходимо производить минимизацию.

Отсюда следует, что для минимизации функции потерь для объекта $\mathbf{x}$ базовая модель $f(\mathbf{x})$ должна приближать $-g(\mathbf{x})/h(\mathbf{x})$ с [весом](../Base-concepts/Weighted-account) $h(\mathbf{x})$. То есть должна настраиваться на следующей обучающей выборке:

$$
\{ \mathbf{x}_n, -g(\mathbf{x}_{n})/h(\mathbf{x}_{n}) \}_{n=1}^N 
$$

с соответствующими весами $\{h(\mathbf{x}_{n})\}_{n=1}^N$, которые будут неотрицательны в окрестности локального минимума.

На приближении второго порядка основан алгоритм LogitBoost, подробно описанный в [[2]](https://urss.ru/cgi-bin/db.pl?lang=Ru&blang=ru&page=Book&id=241884&srsltid=AfmBOorL6KjhUfo0Y42_NmrUhzKrDo4zOsneZDwK8AP0Sl_U9aD13AbJ), а также алгоритм xgBoost [[3]](https://dl.acm.org/doi/abs/10.1145/2939672.2939785).

## Литература

1. [Викиконспекты ИТМО: формула Тейлора для произвольной функции.](https://neerc.ifmo.ru/wiki/index.php?title=%D0%A4%D0%BE%D1%80%D0%BC%D1%83%D0%BB%D0%B0_%D0%A2%D0%B5%D0%B9%D0%BB%D0%BE%D1%80%D0%B0_%D0%B4%D0%BB%D1%8F_%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9_%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8)

2. [Мерков А. Б. Распознавание образов: введение в методы статистического обучения. // Москва: Едиториал УРСС. – 2019.](https://urss.ru/cgi-bin/db.pl?lang=Ru&blang=ru&page=Book&id=241884&srsltid=AfmBOorL6KjhUfo0Y42_NmrUhzKrDo4zOsneZDwK8AP0Sl_U9aD13AbJ)

3. [Chen T., Guestrin C. Xgboost: A scalable tree boosting system //Proceedings of the 22nd acm sigkdd international conference on knowledge discovery and data mining. – 2016. – С. 785-794.](https://dl.acm.org/doi/abs/10.1145/2939672.2939785)
