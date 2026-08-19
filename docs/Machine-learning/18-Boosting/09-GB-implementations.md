---
description: Продвинутые реализации градиентного бустинга - xgBoost, LightGBM, CatBoost. Основные идеи улучшений.
keywords:
- виды градиентного бустинга
- boosting sklearn
- xgBoost
- LightGBM
- CatBoost
---

# Популярные реализации

На языке python алгоритм градиентного бустинга над решающими деревьями реализован в библиотеке `sklearn` классами `GradientBoostingClassifier` и `GradientBoostingRegressor` для решения задач классификации и регрессии соответственно. 

Там также реализованы ускоренные версии алгоритма `HistGradientBoostingClassifier` и `HistGradientBoostingRegressor`, производящие настройку правил во внутренних узлах решающих деревьев за счёт перебора не по всем допустимым порогам, а по более грубой сетке значений. Также эти реализации допускают автоматическую обработку пропущенных значений  признаков, отправляя все объекты с пропущенным признаком либо в левое, либо в правое поддерево, в зависимости от того, что приводит к большему снижению функции неопределённости.

Тремя самыми продвинутыми реализациями бустинга являются:

| Название | Документация                                       | Разработчики         |
| -------- | -------------------------------------------------- | -------------------- |
| xgBoost  | [сайт](https://xgboost.readthedocs.io/en/stable/)  | XGBoost Contributors |
| LightGBM | [сайт](https://lightgbm.readthedocs.io/en/stable/) | Microsoft            |
| CatBoost | [сайт](https://catboost.ai/)                       | Яндекс               |

Все реализации допускают параллелизацию настройки базовых моделей, которые поддерживаются как на процессоре, так и на видеокарте. 

Реализации используют расширенный набор гиперпараметров, влияющих на точность ансамбля. При настройке правил в узлах деревьев допускается оптимизация не по всем порогам, а по более грубой сетке значений для ускорения обучения модели на больших данных. При этом

- xgBoost [[1]](https://dl.acm.org/doi/abs/10.1145/2939672.2939785) использует [оптимизацию второго порядка](GB-second-order) за счёт квадратичной аппроксимации функции потерь. Добавлены возможности регуляризации каждого решающего дерева.

- LightGBM [[2]](https://proceedings.neurips.cc/paper/2017/hash/6449f44a102fde848669bdd9eb6b76fa-Abstract.html) настраивает каждую базовую модель не на всех данных, а на подмножестве объектов, сильнее всего влияющих на прогнозы ансамбля, что существенно ускоряет настройку модели. Также метод использует специальную технику для эффективной работы с разреженными данными (содержащими много нулевых значений).

- CatBoost [[3]](https://proceedings.neurips.cc/paper/2018/hash/14491b756b3a51daac41c24863285549-Abstract.html) строится не над традиционными, а над небрежными решающими деревьями (oblivious decision trees), в которых на каждом уровне дерева во всех узлах проверяется условие над одним и тем же признаком. Это позволяет настраивать деревья быстрее без потери качества всего ансамбля. Также CatBoost использует специальную обработку категориальных признаков.

## Литература

1. [Chen T., Guestrin C. Xgboost: A scalable tree boosting system //Proceedings of the 22nd acm sigkdd international conference on knowledge discovery and data mining. – 2016. – С. 785-794.](https://dl.acm.org/doi/abs/10.1145/2939672.2939785)
2. [Ke G. et al. Lightgbm: A highly efficient gradient boosting decision tree //Advances in neural information processing systems. – 2017. – Т. 30.](https://proceedings.neurips.cc/paper/2017/hash/6449f44a102fde848669bdd9eb6b76fa-Abstract.html)
3. [Prokhorenkova L. et al. CatBoost: unbiased boosting with categorical features //Advances in neural information processing systems. – 2018. – Т. 31.](https://proceedings.neurips.cc/paper/2018/hash/14491b756b3a51daac41c24863285549-Abstract.html)
