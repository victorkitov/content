---
description: Анализ и интерпретация прогнозов модели с помощью контрфактических объяснений (counterfactual explanations). Метод расчёта и примеры контрфактических объяснений.
keywords:
- контрфактические объяснения
- counterfactual explanations
- интерпретируемое машинное обучение
- интерпретация моделей машинного обучения
- explainable ai
- black box model
---

# Контрфактические объяснения

Один из способов проинтерпретировать тот или иной прогноз - это задаться вопросом: а какие минимальные изменения нужно произвести в прогнозируемом объекте, чтобы получить другой (нужный нам) прогноз? 

- *Пример 1*. Рассмотрим модель, прогнозирующую, за сколько можно сдать квартиру на рынке по её характеристикам. Предположим, мы оценили эту модель по обучающей выборке, и для нашей квартиры модель выдаёт 50000 руб./мес. Можно задаться вопросом - какие минимальные изменения в квартире нужно произвести, чтобы сдавать её за 70000 руб./мес? Нас, конечно, будет интересовать поиск в пространстве только тех параметров, которые можно изменить - характер ремонта, наличие бытовой техники и мебели, условия сдачи и т.д.

- *Пример 2*. Рассмотрим модель, прогнозирующую, можно ли клиенту выдать кредит или нельзя. Допустим, она выдаёт прогноз, что нельзя. Тогда можно задаться вопросом: а какие минимальные изменения в характеристиках клиента должны случиться, чтобы кредит ему всё-таки одобрили? Например, иметь стаж работы на год больше или получать зарплату на 10 процентов выше.

Ответы на подобные вопросы даёт **метод контрфактических объяснений** (counterfactual explanations). Контрфактическое объяснение для $\left(\mathbf{x},f\left(\mathbf{x}\right)\right)$ - это такой объект $\mathbf{x}'$, который

- максимально похож на $\mathbf{x}$ (отличается в минимальном числе признаков на минимальную величину), 

- но в то же время обладает требуемым откликом $y'$. 

Находить контрфактические объяснения можно, решая следующую оптимизационную задачу [[1]](https://jolt.law.harvard.edu/assets/articlePDFs/v31/Counterfactual-Explanations-without-Opening-the-Black-Box-Sandra-Wachter-et-al.pdf):

$$
\left(f\left(\mathbf{x}'\right)-y'\right)^{2}+\lambda\rho\left(\mathbf{x},\mathbf{x}'\right)\to\min_{\mathbf{x}'}
$$

Из условий Каруша-Куна-Таккера [[2]](https://en.wikipedia.org/wiki/Karush%E2%80%93Kuhn%E2%80%93Tucker_conditions) можно показать, что она эквивалентна следующей задаче:

$$
\begin{cases}
\left(f\left(\mathbf{x}'\right)-y'\right)^{2}\to\min_{\mathbf{x}'}\\
\rho\left(\mathbf{x},\mathbf{x}'\right)\le\varepsilon,
\end{cases}
$$

где $\rho\left(\mathbf{x},\mathbf{x}'\right)$ - расстояние между объектами, а $\lambda$ и $\varepsilon$ связаны между собой некоторым убывающим преобразованием $\varepsilon=F\left(\lambda\right)$.  

Таким образом, контрфактическое объяснение $\mathbf{x}'$ получается в результате балансирования двух требований:

- прогноз $f\left(\mathbf{x}'\right)$ должен минимально отличаться от требуемого прогноза $y'$;

- само объяснение $\mathbf{x}'$ должно быть максимально похоже на исходный объект $\mathbf{x}$.

> Какое именно свойство для нас важнее контролируется гиперпараметрами $\lambda$ и $\varepsilon$.

В качестве $\rho\left(\mathbf{x},\mathbf{x}'\right)$ в [[1]](https://jolt.law.harvard.edu/assets/articlePDFs/v31/Counterfactual-Explanations-without-Opening-the-Black-Box-Sandra-Wachter-et-al.pdf) предлагается брать

$$
\begin{gathered}
\rho\left(\mathbf{x},\mathbf{x}'\right)=\sum_{d=1}^{D}\frac{\left|x^{d}-x'^{d}\right|}{MAD\left(x^{d}\right)},\\
MAD\left(x^{d}\right)=\text{median}_{n\in\left\{ 1,...N\right\} }\left|x_{n}^{d}-\text{median}_{n\in\left\{ 1,...N\right\} }\left(x_{n}^{d}\right)\right|,
\end{gathered}
$$

поскольку модули отклонений признаков (а не квадраты отклонений) будут поощрять нахождение таких $\mathbf{x}'$, которые бы отличались от $\mathbf{x}$ в минимальном числе признаков, оставляя при этом оставшиеся признаки такими, какими они были, что упрощает интерпретируемость. Нормировка на $MAD\left(x^{d}\right)$ (mean absolute deviation) приводит признаки к одинаковому масштабу, делая их равнозначными при сравнении. Хотя можно использовать и [другие методы нормализации признаков](../Data-preprocessing/Feature-normalization).

В [[3]](https://www.researchgate.net/publication/344080790_Multi-Objective_Counterfactual_Explanations) контрфактические объяснения предлагается находить, накладывая дополнительные штрафы:

- за число отличающихся признаков в $\mathbf{x}$ и $\mathbf{x}'$ (чтобы упростить интерпретацию);

- за несогласованность $\mathbf{x}'$ с обучающей выборкой (по расстоянию от $\mathbf{x}'$ до ближайшего соседа из обучающей выборки).

---

Более детально ознакомиться с контрафактическими объяснениями вы можете в [[4]](https://christophm.github.io/interpretable-ml-book/counterfactual.html). 

## Литература

1. [Wachter S., Mittelstadt B., Russell C. Counterfactual explanations without opening the black box: Automated decisions and the GDPR //Harv. JL & Tech. – 2017. – Т. 31. – С. 841.](https://jolt.law.harvard.edu/assets/articlePDFs/v31/Counterfactual-Explanations-without-Opening-the-Black-Box-Sandra-Wachter-et-al.pdf)

2. [Wikipedia: Karush–Kuhn–Tucker conditions.](https://en.wikipedia.org/wiki/Karush%E2%80%93Kuhn%E2%80%93Tucker_conditions)

3. [Dandl S. et al. Multi-objective counterfactual explanations //International conference on parallel problem solving from nature. – Cham : Springer International Publishing, 2020. – С. 448-469.](https://www.researchgate.net/publication/344080790_Multi-Objective_Counterfactual_Explanations)

4. [Molnar C. Interpretable machine learning. – Lulu. com, 2020: Counterfactual Explanations.](https://christophm.github.io/interpretable-ml-book/counterfactual.html)
