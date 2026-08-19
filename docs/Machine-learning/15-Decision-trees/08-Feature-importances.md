---
description: Оценка важности признаков (feature importance), используя решающее дерево - метод mean decrease in impurity. 
keywords:
- важность признаков
- оценка важности признаков
- важность признаков модели
- методы оценки важности признаков
- mean decrease in impurity
- решающие деревья
- decision tree
---

# Важность признаков

## Важность в решающем дереве

Работу решающего дерева можно проинтерпретировать непосредственно, если дерево не слишком глубокое. Для интерпретации деревьев произвольной глубины можно анализировать, какое влияние оказывает каждый из признаков на его прогнозы. На значимость каждого признака влияют:

- как часто признак использовался в правилах во внутренних узлах дерева;

- какое число обучающих объектов прошло через узлы, использующие признак;

- насколько правилам в этих узлах удавалось снизить неопределённость прогнозов.

Объединяя эти факторы вместе, важность признака $f$ для решающего дерева (feature importance) рассчитывается по формуле:

$$
\text{Importance}(f) = \frac{1}{N}\sum_{t\in T(f)}N(t)\Delta\phi(t),
$$

где:

- $T(f)$ - множество всех узлов дерева, использовавших признак $f$ в своих правилах ветвления; 

- $N(t)$ - число объектов выборки, проходящих через узел $t$; 

- $\Delta\phi(t)$ - [изменение функции неопределённости](Tree-fitting#выбор-решающего-правила-во-внутренних-узлах-дерева) после применения правила ветвления в узле $t$; 

- $N$ - общее число объектов в обучающей выборке.

Эта мера важности признака называется **средним изменением неопределённости** ([mean decrease in impurity](https://proceedings.neurips.cc/paper/2013/file/e3796ae838835da0b6f6ea37bcf8bcb7-Paper.pdf) или MDI [[1]](https://proceedings.neurips.cc/paper/2013/file/e3796ae838835da0b6f6ea37bcf8bcb7-Paper.pdf), [[2]](https://link.springer.com/article/10.1023/a:1010933404324)).



MDI-важность рассчитывается на этапе первичного анализа данных и на этапе отбора признаков перед применением других нелинейных моделей. Причём эту меру считают не по единичному дереву, а по [ансамблю случайных деревьев](../Model-ensembles/RF-ERT), поскольку единичное дерево склонно переобучаться при построении до самого низа. С методом расчёта MDI-меры в библиотеке sklearn, используя алгоритм случайного леса, можно ознакомиться в [[3]](https://scikit-learn.org/stable/auto_examples/ensemble/plot_forest_importances.html) и [[4]](https://scikit-learn.org/stable/auto_examples/inspection/plot_permutation_importance.html), где этот метод сравнивается с [перестановочным методом оценки важности](../Complex-models-interpretation/Permutation-feature-importance).



## Важность в линейных моделях

Для измерения важности признаков также можно настроить линейную модель и анализировать полученные веса при признаках - чем они больше по модулю, тем признак важнее. 

> Поскольку веса при признаках обратно пропорциональны масштабу признаков, важно предварительно приводить признаки к единой шкале [нормализацией](../Data-preprocessing/Feature-normalization). 

Однако эта мера покажет важность признака только в контексте <u>линейного влияния на отклик</u>! Если признак оказывает существенное нелинейное влияние, то MDI-важность даст более адекватную оценку степени его влияния на прогноз.





## Литература

1. [Louppe G. et al. Understanding variable importances in forests of randomized trees //Advances in neural information processing systems. – 2013. – Т. 26.](https://proceedings.neurips.cc/paper/2013/file/e3796ae838835da0b6f6ea37bcf8bcb7-Paper.pdf)

2. [Breiman L. Random forests //Machine learning. – 2001. – Т. 45. – С. 5-32.](https://link.springer.com/article/10.1023/a:1010933404324)

3. [Документация sklearn: feature importances with a forest of trees.](https://scikit-learn.org/stable/auto_examples/ensemble/plot_forest_importances.html)

4. [Документация sklearn: permutation Importance vs random forest feature Importance (MDI).](https://scikit-learn.org/stable/auto_examples/inspection/plot_permutation_importance.html)
