import { Header } from './components/Header'

import "./global.css";

import styles from "./App.module.css";
import { Post } from "./Post.jsx";
import { Siderbar } from "./components/Siderbar.jsx";

export const App = () => {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <aside>
          <Siderbar />
        </aside>
        <main>
          <Post
            author="Pablo Junior"
            content="loren ipsum dolor sit amet"
          />
          <Post
            author="Pablo Junior"
            content="loren ipsum dolor sit amet"
          />
        </main>
      </div>
    </div>
  )
}

