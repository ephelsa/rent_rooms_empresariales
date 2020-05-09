import React  from 'react';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function splitNumber(value) { 
  return [(value > 0) ? Math.floor(value) : Math.ceil(value), value % 1];
}

const Raiting = ({raiting, size}) => {
  const stars = splitNumber(raiting);
  let totalStars = [];

  for (let i = 0; i < stars[0]; i++) {
    totalStars.push(<FontAwesomeIcon icon={faStar} color="var(--color-tertiary)" size={size}/>) 
  }
  if (stars[1] > 0) {
    totalStars.push(<FontAwesomeIcon icon={faStarHalfAlt} color="var(--color-tertiary)" size={size} />)
  }
  
  return (
    <div>{totalStars}</div>
  );
}

export default Raiting;
