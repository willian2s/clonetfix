import React, { useState } from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './styles.css';

export default ({title, items}) => {

  const [ scrollX, setScrollX ] = useState(-400);

  const handleLeftArrow = () => {
    let scrollValue = scrollX + Math.round(window.innerWidth / 2);

    if(scrollValue > 0) {
      scrollValue = 0;
    };

    setScrollX(scrollValue);
  };

  const handleRightArrow = () => {
    let scrollValue = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = items.results.length * 150;

    if((window.innerWidth - listWidth) > scrollValue) {
      scrollValue = (window.innerWidth - listWidth) - 60;
    }

    setScrollX(scrollValue)
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="movieRowLeft" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{fontSize: 50}} />
      </div>
      <div className="movieRowRight"  onClick={handleRightArrow}>
        <NavigateNextIcon style={{fontSize: 50}} />
      </div>

      <div className="movieRowListArea">
        <div className="movieRowList" style={{
          marginLeft: scrollX,
          width: items.results.length * 150,
        }}>
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
