import React from 'react';
import './styles.css';

export default ({title, items}) => {
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRowListArea">

        <div className="movieRowList">
          {items.results.length > 0 && items.results.map((item, key)=>(
            <div className="movieRowItem" key={key}>
              <img
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt={item.original_title}
              />
            </div>
          ))}
        </div>
        
      </div>
    </div>
  )
}