import React from 'react';

import './styles.css';

export default ({item}) => {
  

  let firstDate = new Date(item.first_air_date);

  let genres = [];
  for(let i in item.genres) {
    genres.push( item.genres[i].name);
  }

  return (
    <section className="featured" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      <div className="featuredVertical">
        <div className="featuredHorizontal">
          <div className="featuredName">{item.name}</div>
          <div className="featuredInfo">
            <div className="featuredPoints">{item.vote_average} pontos</div>
            <div className="featuredYear">{firstDate.getFullYear()}</div>
            <div className="featuredSeasons">
              {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}
            </div>
            <div className="featuredDescription">
              <span>{item.overview}</span>
            </div>
            <div className="featuredButtons">
              <a className="featuredWatchButton" href={`watch/${item.id}`}>► Assistir</a>
              <a className="featuredMyListButton" href={`/list/add/${item.id}`}>+ Minha Lista</a>
            </div>
            <div className="featuredGenres">
              <strong>Gêneros: </strong>
              {genres.join(', ')}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
