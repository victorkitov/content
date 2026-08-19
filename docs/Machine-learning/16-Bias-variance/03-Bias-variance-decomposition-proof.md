---
description: Доказательнство разложения на смещение и разброс (bias-variance decomposition).
keywords:
- доказательство разложения на смещение и разброс
- bias-variance decomposition proof


---

# Доказательство разложения

Докажем разложение на смещение и разброс:

$$
\begin{aligned}\mathbb{E}_{X,Y,\varepsilon}\{[\widehat{f}(\mathbf{x})-y(\mathbf{x})]^{2}\}=&\left(\mathbb{E}_{X,Y}\{\widehat{f}(\mathbf{x})\}-f(\mathbf{x})\right)^{2}\\&+\mathbb{E}_{X,Y}\left\{ [\widehat{f}(\mathbf{x})-\mathbb{E}_{X,Y}\widehat{f}(\mathbf{x})]^{2}\right\} +\mathbb{E}\varepsilon^{2}\end{aligned}
$$

Зафиксируем $\mathbf{x}$, для которого строится прогноз. Далее везде в математических ожиданиях будет производиться усреднение <u>по всевозможным реализациям обучающей выборки и случайного шума</u>, то есть

$$
\mathbb{E}\{\cdot\} = \mathbb{E}_{X,Y,\varepsilon}\{\cdot\}
$$

Для начала разложим следующее выражение:

$$
\begin{aligned}\mathbb{E}\left\{\left(\widehat{f}(\mathbf{x})-f(\mathbf{x})\right)^{2}\right\}&=
\mathbb{E}\left\{\left(\widehat{f}(\mathbf{x})-\mathbb{E}\widehat{f}(\mathbf{x})+\mathbb{E}\widehat{f}(\mathbf{x})-f(\mathbf{x})\right)^{2}\right\}\\
&=\mathbb{E}\left\{\left(\widehat{f}(\mathbf{x})-\mathbb{E}\widehat{f}(\mathbf{x})\right)^{2}\right\}+\mathbb{E}\left\{\left(\mathbb{E}\widehat{f}(\mathbf{x})-f(\mathbf{x})\right)^{2}\right\}\\&+2\cdot\mathbb{E}\left\{(\widehat{f}(\mathbf{x})-\mathbb{E}\widehat{f}(\mathbf{x}))(\mathbb{E}\widehat{f}(\mathbf{x})-f(\mathbf{x}))\right\}\\&=\mathbb{E}\left\{\left(\widehat{f}(\mathbf{x})-\mathbb{E}\widehat{f}(\mathbf{x})\right)^{2}\right\}+\left(\mathbb{E}\widehat{f}(\mathbf{x})-f(\mathbf{x})\right)^{2},\end{aligned}
$$

где мы воспользовались тем, что $(\mathbb{E}\widehat{f}(\mathbf{x})-f(\mathbf{x}))$ - константа, а значит,

$$
\begin{aligned}
\mathbb{E}\{(\widehat{f}(\mathbf{x})-\mathbb{E}\widehat{f}(\mathbf{x}))(\mathbb{E}\widehat{f}(\mathbf{x})-f(\mathbf{x}))\}\\&=(\mathbb{E}\widehat{f}(\mathbf{x})-f(\mathbf{x}))\mathbb{E}\{\widehat{f}(\mathbf{x})-\mathbb{E}\widehat{f}(\mathbf{x})\}=0
\end{aligned}
$$

Следовательно,

$$
\begin{aligned}
\mathbb{E}\left\{\left(\widehat{f}(\mathbf{x})-y\right)^{2}\right\} &=    
\mathbb{E}\left\{\left(\widehat{f}(\mathbf{x})-f(\mathbf{x})-\varepsilon\right)^{2}\right\}\\ 
&=\mathbb{E}\left\{\left(\widehat{f}(\mathbf{x})-f(\mathbf{x})\right)^{2}\right\}+\mathbb{E}\varepsilon^{2}-2\mathbb{E}\left[(\widehat{f}-f)\varepsilon\right] \\
&=    \mathbb{E}\left\{\left(\widehat{f}(\mathbf{x})-\mathbb{E}\widehat{f}(\mathbf{x})\right)^{2}\right\}+\left(\mathbb{E}\widehat{f}(\mathbf{x})-f(\mathbf{x})\right)^{2}+\mathbb{E}\varepsilon^{2}
\end{aligned}
$$

где, в силу независимости случайных величин $\hat{f}(\mathbf{x})$ (которая зависит только от $X,Y$) и $\varepsilon$: 

$$
\mathbb{E}\left\{(\widehat{f}(\mathbf{x})-f(\mathbf{x}))\varepsilon\right\}=\mathbb{E}\left\{(\widehat{f}(\mathbf{x})-f(\mathbf{x}))\right\} \cdot \mathbb{E}\varepsilon=0
$$


