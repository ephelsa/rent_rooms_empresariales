import React from 'react';
import './DropdownItem.css';

export default function({value, id, onOptionSelected}) {
  return (
    <span onClick={ () => onOptionSelected({id, value}) } 
        className="dropdown-item">{value}</span>
  )
}
