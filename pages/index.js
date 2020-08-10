import {useState, useEffect} from 'react';
import Head from 'next/head';
import styles from './styles/home.module.css';
import getGiphy from '../api/giphy';
import SaveButton from '../components/SaveButton';

export default function Home() {
  const [storage, setStorage] = useState(null);
  const [load, setLoad] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [gif, setGif] = useState(null);
  const [gifId, setGifId] = useState(null);

  const initalLoad = () => {
    handleSubmit(null, 'coding cat');
    setLoad(true);
  };

  const handleSubmit = async (e, input = '') => {
    if (e) {
      e.preventDefault();
    }
    const search = searchInput || input;
    const {url, id} = await getGiphy(search.trim());
    setGif(url);
    setGifId(id);
    setSearchInput('');
  };
  const handleChange = e => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    if (!storage) {
      setStorage(window.localStorage);
    }
    if (!load) {
      initalLoad();
    }
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Giphy App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            value={searchInput}
            onChange={handleChange}
            placeholder="Search for a gif!"
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
        <SaveButton id={gifId} url={gif} storage={storage} />
        <a href="/favorites" className={styles.favorites}>
          My Favorites
        </a>
        <div className={styles['gif-container']}>
          <iframe
            title="gif result"
            src={gif}
            frameBorder="0"
            className={styles.gif}
            allowFullScreen
          />
        </div>
      </main>
    </div>
  );
}
