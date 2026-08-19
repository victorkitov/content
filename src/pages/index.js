import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Машинное и глубокое обучение
        </Heading>
        
        <Heading as="h2" className="hero__subtitle">
          ОНЛАЙН-УЧЕБНИК
        </Heading>
        

        <p className="hero__subtitle">Виктор Владимирович Китов</p> 
        <br/>
        
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Machine-learning/book-title">
            Машинное обучение
          </Link>
          <br/>
          <br/>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Neural-networks/book-title">
            Глубокое обучение &nbsp;
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Онлайн-учебник по машинному обучению и нейросетям.`}
      description="Онлайн-учебник по машинному обучению (machine learning) и глубоким нейросетям (глубокому обучению, deep learning) на основе лекций, читаемых на факультете Вычислительной математики и кибернетики в МГУ им. М.В.Ломоносова. Учебник покрывает весь цикл разработки классических и нейросетевых моделей машинного обучения: постановку задачи, подготовку данных, кодирование и нормализацию признаков, выбор модели и настройку её параметров, оценку качества и интерпретацию результатов работы. В учебнике рассматриваются задачи обучения с учителем (supervised learning) и без учителя (unsupervised learning), задачи регрессии и классификации, семантической и instance сегментации, детекции объектов, построения эмбеддингов, обработки и генерации текста, обработки графа целиком и его отдельных вершин и связей.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
