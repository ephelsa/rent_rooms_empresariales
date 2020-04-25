import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './Dropdown.css';
import DropdownItem from './DropdownItem/DropdownItem';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

function Dropdown({icon, onOptionSelected, placeHolder, options, borderType}) {
  const [openState, setOpenState] = useState(false);
  const [optionState, setOptionState] = useState(null);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => setOpenState(false));

  useEffect(function callbackOptionSelected() {
    if (optionState !== null) {
      onOptionSelected(optionState)
    }
  }, [optionState, onOptionSelected]);

  return (
    <div ref={wrapperRef} className={"dropdown-container " + borderType} 
        onClick={() => setOpenState(!openState)}>

      <div className="option-selected">
        {icon ? <FontAwesomeIcon icon={icon} color="white" /> : null }
        <label className="option-value">
          {optionState !== null ? optionState.value : placeHolder}
        </label>
        {/*<FontAwesomeIcon icon={open ? faAngleUp : faAngleDown} color="white" />*/}
      </div>

      <div className={ openState ? 'dropdown-container--opened' : 'dropdown-container--closed' }>
        { 
          options.map(option => {
            const dropdownItem = (
              <DropdownItem 
                key={option.id} 
                id={option.id} 
                value={option.value}
                onOptionSelected={setOptionState} />
              );

            if (optionState !== null) {
              if (optionState.id !== option.id) {
                return dropdownItem;
              }
            } else {
              return dropdownItem;
            }

            return null;
          }) 
        }
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  icon: PropTypes.object,
  onOptionSelected: PropTypes.func.isRequired,
  placeHolder: PropTypes.string,
  options: PropTypes.array.isRequired,
  borderType: PropTypes.oneOf(['full-border', 'right-border', 'left-border'])
}

export default Dropdown;
