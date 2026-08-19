---
description: Развитие и улучшения нейросети ResNet.
keywords:
- Xception 
- ResNeXt
- stochastic depth
- highway networks
- стохастическая глубина сети
- виды сверточных сетей

---

# Развитие ResNet

Успех сети [ResNet](ResNet) [[1]](https://openaccess.thecvf.com/content_cvpr_2016/html/He_Deep_Residual_Learning_CVPR_2016_paper.html) породил интерес к развитию этой архитектуры. Перечислим основные работы по улучшению и обобщению этой архитектуры.

## Stochastic depth

В [[1]](https://openaccess.thecvf.com/content_cvpr_2016/html/He_Deep_Residual_Learning_CVPR_2016_paper.html) показано, что каждый остаточный блок вносит относительно небольшое изменение во входной сигнал. Исключение отдельных блоков не привносит такого катастрофического изменения качества прогнозов, как в случае обычных свёрточных сетей. Поэтому становится возможной дополнительная регуляризация ResNet-сетей, названная **стохастической глубиной** (stochastic depth, [[2]](https://arxiv.org/abs/1603.09382)) и основанная на регуляризации [DropOut](../Regularization/DropOut), но в которой включаются/исключаются не отдельные нейроны, а <u>целые нелинейные трансформации</u> $\mathcal{F}(x)$ [остаточных блоков](ResNet#остаточный-блок) (residual blocks). Такая регуляризация

- позволяет гибко настраивать сложность ResNet, варьируя вероятность исключения каждого блока;

- уменьшает [переобучение модели](../../Machine-learning/Bias-variance/Model-complexity) за счёт регуляризации;

- ускоряет обучение, поскольку на каждом обучающем [минибатче](../Training/Opt-methods-fixed-lr#стохастический-градиентный-спуск-по-мини-батчам) проход осуществляется не по всей сети, а по её случайной части.
  
  > На тесте же используется полная версия глубокой сети <u>без прореживания</u>, но выходы нелинейных преобразований <u>домножаются на вероятность оставления их в сети</u> во время обучения.

## Магистральные сети

**Магистральные сети** (highway networks, [[3]](https://arxiv.org/abs/1505.00387)) обобщают ResNet. Напомним, что в классическом остаточном блоке ResNet сигнал идёт через нелинейное преобразование $\mathcal{F}(\mathbf{x})$ и тождественную связь, а результаты потом суммируются:

$$
\mathbf{y}=\mathcal{F}(\mathbf{x})+\mathbf{x}
$$

Получается, что оба вида обработки сигнала участвуют на равных, хотя остаётся возможность усилить нелинейное преобразование, задав ему более высокие веса.

В магистральных сетях предлагается управлять тем, какая часть сигнала проходит через нелинейное преобразование, а какая - через тождественную связь за счёт использования настраиваемой **функции вентиля** (gate) $T(\mathbf{x})$:

$$
\mathbf{y}=T(\mathbf{x})\odot\mathcal{F}(\mathbf{x})+(1-T(\mathbf{x}))\odot \mathbf{x},
$$

где $\odot$ - операция поэлементного перемножения. $\mathbf{x},T(\mathbf{x}),\mathcal{F}(\mathbf{x})$ при этом должны иметь одинаковую размерность. 

## Xception и ResNeXt

Модель **Xception** [[4]](https://openaccess.thecvf.com/content_cvpr_2017/html/Chollet_Xception_Deep_Learning_CVPR_2017_paper.html) использует архитектуру, аналогичную ResNet, но внутри каждого остаточного блока вместо обычных свёрток используются [поканальные сепарабельные свёртки](../ConvPool-Images/Special-conv#поканальная-свёртка) (depthwise separable convolution). 

Модель **ResNeXt** [[5]](https://openaccess.thecvf.com/content_cvpr_2017/html/Xie_Aggregated_Residual_Transformations_CVPR_2017_paper.html) также построена на базе ResNet, но вместо обычных свёрток использует [групповые свёртки](../ConvPool-Images/Special-conv#групповая-свёртка).

Обе идеи позволили повысить точность, производительность и уменьшить число настраиваемых параметров по сравнению с базовой архитектурой ResNet на датасете [ImageNet](ImageNet).

## Литература

1. [He K. et al. Deep residual learning for image recognition //Proceedings of the IEEE conference on computer vision and pattern recognition. – 2016. – С. 770-778.](https://openaccess.thecvf.com/content_cvpr_2016/html/He_Deep_Residual_Learning_CVPR_2016_paper.html)

2. [Huang G. et al. Deep networks with stochastic depth //Computer Vision–ECCV 2016: 14th European Conference, Amsterdam, The Netherlands, October 11–14, 2016, Proceedings, Part IV 14. – Springer International Publishing, 2016. – С. 646-661.](https://arxiv.org/abs/1603.09382)

3. [Srivastava R. K., Greff K., Schmidhuber J. Highway networks //arXiv preprint arXiv:1505.00387. – 2015.](https://arxiv.org/abs/1505.00387)

4. [Chollet F. Xception: Deep learning with depthwise separable convolutions //Proceedings of the IEEE conference on computer vision and pattern recognition. – 2017. – С. 1251-1258.](https://openaccess.thecvf.com/content_cvpr_2017/html/Chollet_Xception_Deep_Learning_CVPR_2017_paper.html)

5. [Xie S. et al. Aggregated residual transformations for deep neural networks //Proceedings of the IEEE conference on computer vision and pattern recognition. – 2017. – С. 1492-1500.](https://openaccess.thecvf.com/content_cvpr_2017/html/Xie_Aggregated_Residual_Transformations_CVPR_2017_paper.html)
