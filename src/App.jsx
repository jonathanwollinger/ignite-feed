import { Header } from './components/Header';

import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <aside>aside</aside>
        <main>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore asperiores eaque impedit explicabo temporibus, error magnam qui, eos veritatis voluptates accusantium at repellendus est alias ut consectetur officiis sint incidunt?
        </main>
      </div>
    </div>
  )
}
