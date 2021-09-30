import React from 'react';
import styles from './Main.module.scss'
import Button from '../../UI/Button/Button'

const Information = ({movie}) => {
    const addToFavorites = (movieName) => {
      let favorites = localStorage.getItem('favMovis')

      if(favorites) {
        favorites = JSON.parse(favorites)
        localStorage.setItem('favMovis',[...favorites, movieName])
        alert(`${movieName} is now in favorite`)
    }
  }

  return (
    <div className={styles.info}>
      <img
        src={movie.logo}
        alt={movie.name}
        width='200'
        style={{ opacity: 0.7 }}
      />

      <div className={styles.edditonal}>
        <span>{movie.year}</span>
        <span>{movie.limitAge}</span>
        <span>{movie.reting}</span>
        <span>{movie.duration}</span>
      </div>

    <div className={styles.description}>{movie.description}</div>

    <div className={styles.buttons}>
      <Button cd={()=> console.log('video is open')}>
        <i className="bx bx-play" style={{color: '#c62e21'}}></i>
        <span>Play</span>
      </Button>
      <Button cd={addToFavorites}>
        <i className="bx  bx-plus"></i>
        <span>My list</span>
      </Button>
    </div>
    </div>
  );
};

export default Information;