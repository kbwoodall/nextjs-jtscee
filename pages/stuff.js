import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  const [todos, settodos] = useState([]);

  const fetchTodos = async () => {
    const response = await fetch('/api/hello');
    const data = await response.json();
    settodos(data);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome {todos.name} <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/stuff">Blog Post</Link>
          </li>
        </ul>
        <button onClick={fetchTodos}>Get Name</button>
      </main>
    </div>
  );
}
