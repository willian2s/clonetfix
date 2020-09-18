import React, { useEffect, useState } from 'react';
import MovieRow from './components/MovieRow'; 

import tmdb from './services/tmdb';

import './App.css'

export default () => {

  const [ movieList, setMovieList ] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      setMovieList(list);
    };

    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="list">
        {movieList.map((item, key) => (
          <MovieRow
            key={key}
            title={item.title}
            items={item.items}
          />
        ))}
      </section>
    </div>
  )
}