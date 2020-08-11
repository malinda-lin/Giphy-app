// this would be a page that displays all the favorites you saved in local storage
import {useState, useEffect} from 'react';
import styles from './styles/favorites.module.css';

const favorites = () => {
  const [storage, setStorage] = useState(null);

  const displayStorage = () => {
    if (storage) {
      const favArray = Object.keys(storage).filter(key => {
        const keyword = key.slice(0, 3);
        if (keyword === 'GIF') {
          return true;
        }
        return false;
      });

      if (favArray.length) {
        return favArray.map(key => {
          const url = storage.getItem(key);
          return (
            <div key="key" className={styles['gif-container']}>
              <iframe
                title="gif result"
                src={url}
                frameBorder="0"
                allowFullScreen
              />
            </div>
          );
        });
      }
      return "You haven't saved anything!";
    }
  };

  useEffect(() => {
    if (!storage) {
      setStorage(window.localStorage);
    }
  });

  return <div className={styles.container}>{displayStorage()}</div>;
};

export default favorites;
