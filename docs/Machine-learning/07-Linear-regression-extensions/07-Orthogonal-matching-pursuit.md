---
description: Метод orthogonal matching pursuit с последовательным включением признаков в модель линейной регрессии.
keywords:
- orthogonal matching pursuit
- OMP регрессия
---

# Orthogonal matching pursuit

**Orthogonal Matching Pursuit**  регрессия (OMP regression, [[1]](https://d1wqtxts1xzle7.cloudfront.net/106959863/efficient_computation_for_sequential_forward_observation_selection_in_image_reconstruction-libre.pdf?1698384314=&response-content-disposition=inline%3B+filename%3DEfficient_implementation_of_the_K_SVD_al.pdf&Expires=1743083997&Signature=MHFxytcLPEctXYNO1GBUb~OMJHrSuhsEItqifimvPfTRHwoSvaRaR~l2rMlGNRCPOM7-Y-DZx0NK6wuhvmyuTpe~vIfLtA8Ui~RptgDd-9M0pIrxVo34Ww8flfydymwOPl41FDPr2Mm71pNW1NlcnFMMzHiAq0BawlgHrElHg8jYqKjr1FjgwSEtOwSFslyjvPZKSGnz7Rzu0ZOW2-6HPWUOP4UIW5IaSXCMXTC74m1VGhm0aNI1FLm6IT9ZCh8xqQ70resClhSj-lJzmvUbp6jeYujMUfsj-b2iK5Cv5nLOFOLuwsrIXSAriSWeBNR4UdiuAtCMNBjv2GhoyDgOIg__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA)) - это комбинация отбора признаков и линейной регрессии, в которой строится максимально точная линейная модель с числом признаков, равным $K$.

Алгоритм применяется, когда число признаков слишком велико и требуется построить компактную модель, зависящую лишь от небольшого их числа. Это полезно для повышения интерпретируемости модели, повышения скорости её работы и уменьшения переобучения. 

Будем использовать следующие обозначения:

- $A=\{1,2,...D\}$ - множество всех признаков,

- $A\setminus S$ - разность множеств (множество элементов $A$, не содержащихся в $S$),

- $|S|$ - число элементов множества $S$.

Алгоритм итеративный, в котором на каждой итерации расширяется число используемых признаков $S$ на единицу, а вектор ошибок текущей итерации на всех объектах выборки обозначим через $E\in \mathbb{R}^N$. 

Алгоритм OMP-регрессии работает следующим образом:

> Начальное множество признаков - пустое множество, а начальная модель - тождественный ноль: 
> $S:=\{\}$
> 
> Поскольку начальная модель - тождественный ноль, то ошибки в начале совпадают с верными ответами:
> $E:=Y$
> 
> пока $|S|<K$:
> 
> 1. выбрать признак $i\in A\setminus S$, у которого максимальная корреляция с ошибками текущей модели $E$.
> 
> 2. добавить этот признак в число отобранных: $S:=S\cup\{i\}$
> 
> 3. обучить линейную регрессию предсказывать $Y$, используя только отобранные признаки из $S$
> 
> 4. обновить вектор $E$ ошибками обновлённой модели

Таким образом, алгоритм OMP **жадным образом** (greedy search) добавляет максимально скоррелированные признаки с откликом по одному, пока не наберёт необходимое количество. В число признаков должна входить константа 1, чтобы модель могла выучить смещение.

Можно досрочно прерывать алгоритм, как только средние потери модели становятся ниже заданного порога. В этом случае достаточное число признаков может быть и меньше $K$.

:::tip Альтернативный подход

Для построения модели с минимальным числом признаков также можно использовать [лассо-регрессию](Regularization-in-linear-regression) с гиперпараметром $\lambda$ подбираемым таким образом, чтобы настроенная модель зависела только от $K$ признаков. 

:::

## Литература

1. [Rubinstein R., Zibulevsky M., Elad M. Efficient implementation of the K-SVD algorithm using batch orthogonal matching pursuit //Cs Technion. – 2008. – Т. 40. – №. 8. – С. 1-15.](https://d1wqtxts1xzle7.cloudfront.net/106959863/efficient_computation_for_sequential_forward_observation_selection_in_image_reconstruction-libre.pdf?1698384314=&response-content-disposition=inline%3B+filename%3DEfficient_implementation_of_the_K_SVD_al.pdf&Expires=1743083997&Signature=MHFxytcLPEctXYNO1GBUb~OMJHrSuhsEItqifimvPfTRHwoSvaRaR~l2rMlGNRCPOM7-Y-DZx0NK6wuhvmyuTpe~vIfLtA8Ui~RptgDd-9M0pIrxVo34Ww8flfydymwOPl41FDPr2Mm71pNW1NlcnFMMzHiAq0BawlgHrElHg8jYqKjr1FjgwSEtOwSFslyjvPZKSGnz7Rzu0ZOW2-6HPWUOP4UIW5IaSXCMXTC74m1VGhm0aNI1FLm6IT9ZCh8xqQ70resClhSj-lJzmvUbp6jeYujMUfsj-b2iK5Cv5nLOFOLuwsrIXSAriSWeBNR4UdiuAtCMNBjv2GhoyDgOIg__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA)
