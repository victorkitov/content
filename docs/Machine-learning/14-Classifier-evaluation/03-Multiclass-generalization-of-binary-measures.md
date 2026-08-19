---
description: Расширение точности и полноты для оценки многоклассовых прогнозов. Микроусреднение и макроусреднение. Мера mean average precision (mAP).
keywords:
- multiclass precision
- multiclass recall
- макроусреднение
- микроусреднение
- mean average precision
- map оценка
---

# Обобщение бинарных мер качества на многоклассовый случай

Меры качества бинарных классификаторов, рассмотренные [в предыдущем разделе](Special-binary-label-quality-estimation), могут быть обобщены на многоклассовый случай $y\in\{1,2,...C\}$ через **макроусреднение** (macroaveraging) т.е. простое усреднение бинарных мер качества по классам:

$$
\text{Precision}_{\text{macro}}=\frac{1}{C}\sum_{c=1}^{C}\frac{TP_{c}}{\widehat{N}_{c}},
$$

$$
\text{Recall}_{\text{macro}}=\frac{1}{C}\sum_{c=1}^{C}\frac{TP_{c}}{N_{c}},
$$

где 

- $TP_c$ - количество верных классификаций объектов класса $c$, 

- $N_c$ - количество объектов класса $c$, 

- $\hat{N}_c$ - количество объектов, предсказанных классом $c$.

Если же считать **микроусреднение** (microaveraging) этих величин, то получим одно и то же число, равное многоклассовой accuracy:

$$
\text{Precision}_{\text{micro}} = \frac{\sum_{c=1}^{C}TP_{c}}{\sum_{c=1}^{C}\widehat{N}_{c}}=\frac{\sum_{c=1}^{C}TP_{c}}{N},
$$

$$
\text{Recall}_{\text{micro}} = \frac{\sum_{c=1}^{C}TP_{c}}{\sum_{c=1}^{C}N_{c}}=\frac{\sum_{c=1}^{C}TP_{c}}{N}
$$

где $N$ - общее число объектов в выборке.

Детальный разбор этих характеристик с примерами расчёта можно прочитать в [[1]](https://www.evidentlyai.com/classification-metrics/multi-class-metrics).

:::tip Разница между микро- и макроусреднением

Макроусреднение усредняет *по классам*, независимо от их размера. Если мера качества высокая на частотных классах и низкая на редких, то макроусреднение даст низкий результат, в отличие от микроусреднения, которое усредняет *по объектам*.

:::

Макроусреднённая по классам величина средней точности [average precision](Special-binary-label-quality-estimation#average-precision) называется **mean average precision** (mAP):

$$
mAP=\frac{1}{C}\sum_{c=1}^C AP_c
$$

## Литература

1. [EvidentlyAI: accuracy, precision, and recall in multi-class classification.](https://www.evidentlyai.com/classification-metrics/multi-class-metrics)


