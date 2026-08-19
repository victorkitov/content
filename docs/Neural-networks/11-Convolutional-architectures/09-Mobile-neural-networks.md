---
description: Виды экономичных мобильных архитектур (mobile architectures) свёрточных нейронных сетей.
keywords:
- mobile neural networks 
- light weight networks
- MobileNet
- SqueezeNet
- SqueezeNext
- ShuffleNet
- виды сверточных сетей
---

# Мобильные архитектуры

Мы рассмотрели различные идеи повышения точности классификации изображений свёрточными сетями. Отметим, что более высокая точность обеспечивалась увеличенным числом слоёв и преобразований, что требует для их применения высокопроизводительной видеокарты с большим объёмом памяти. 

Однако на практике важна не только точность, но и <u>вычислительная производительность</u>, а также <u>экономичность модели по памяти</u>, которые позволяют

- использовать модель на скромных вычислительных устройствах, таких как фотоаппарат и мобильный телефон;

- обрабатывать большее количество пользовательских запросов за единицу времени. 

Поэтому актуальна разработка так называемых **мобильных архитектур** (mobile architectures), не требовательных к вычислительным ресурсам.

Рассмотрим идеи повышения вычислительной эффективности на примерах популярных мобильных свёрточных архитектур.

В сети **MobileNet** [[1]](https://arxiv.org/abs/1704.04861) для снижения размерности вместо [максимизирующего пулинга](../ConvPool-Images/Pooling) использовались свёртки с шагом (stride) 2. Вместо [стандартных свёрток](../ConvPool-Images/Conv-images) использовались [поканальные сепарабельные свёртки](../ConvPool-Images/Special-conv#поканальная-свёртка) (depthwise separable convolutions). Впоследствии появлялись новые версии этой модели, в которых были добавлены тождественные связи (как в [ResNet](ResNet)).

В сети **SqueezeNet** [[2]](https://arxiv.org/abs/1602.07360) вообще не использовались полносвязные слои. Рейтингами классов служили выходы [глобального пулинга](../ConvPool-Images/Pooling#глобальный-пулинг), применённого к последнему (свёрточному) слою сети. Свёртки 3x3 заменялись суперпозицией свёрток 3x1 и 1x3.

В сети **SqueezeNext** [[3]](https://openaccess.thecvf.com/content_cvpr_2018_workshops/w33/html/Gholami_SqueezeNext_Hardware-Aware_Neural_CVPR_2018_paper.html) вначале изображение сильно сжималось свёрткой 7x7, а вся последующая обработка велась уже в сильно пониженном разрешении.

В модели **ShuffleNet** [[4]](https://openaccess.thecvf.com/content_cvpr_2018/html/Zhang_ShuffleNet_An_Extremely_CVPR_2018_paper.html) многократно использовались [групповые свёртки](../ConvPool-Images/Special-conv#групповая-свёртка) (grouped convolutions). Чтобы свёрточные признаки не замыкались в своих группах, а использовали всю доступную информацию, каналы периодически перемешивались.

> Таким образом, мобильные архитектуры активно использовали облегчённые версии свёрток, изученные ранее. Число слоёв и число каналов в каждом слое также было существенно меньше. Использовались и другие инженерные улучшения, описанные в приведённых статьях.

## Литература

1. [Howard A. G. Mobilenets: Efficient convolutional neural networks for mobile vision applications //arXiv preprint arXiv:1704.04861. – 2017.](https://arxiv.org/abs/1704.04861)

2. [Iandola F. N. SqueezeNet: AlexNet-level accuracy with 50x fewer parameters and< 0.5 MB model size //arXiv preprint arXiv:1602.07360. – 2016.](https://arxiv.org/abs/1602.07360)

3. [Gholami A. et al. Squeezenext: Hardware-aware neural network design //Proceedings of the IEEE conference on computer vision and pattern recognition workshops. – 2018. – С. 1638-1647.](https://openaccess.thecvf.com/content_cvpr_2018_workshops/w33/html/Gholami_SqueezeNext_Hardware-Aware_Neural_CVPR_2018_paper.html)

4. [Zhang X. et al. Shufflenet: An extremely efficient convolutional neural network for mobile devices //Proceedings of the IEEE conference on computer vision and pattern recognition. – 2018. – С. 6848-6856.](https://openaccess.thecvf.com/content_cvpr_2018/html/Zhang_ShuffleNet_An_Extremely_CVPR_2018_paper.html)
