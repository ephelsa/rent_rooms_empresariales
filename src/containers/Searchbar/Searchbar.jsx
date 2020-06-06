import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { registerLocale } from "react-datepicker";
import DatePicker from "react-datepicker";
import es from 'date-fns/locale/es';
import Dropdown from '../Dropdown/Dropdown';
import moment from 'moment'
import './Searchbar.css';
import "react-datepicker/dist/react-datepicker.css";

const options = [
  { id: 'MDE', value: 'Medellín' },
  { id: 'BOG', value: 'Bogotá' },
  { id: 'CLO', value: 'Cali' },
  { id: 'BAQ', value: 'Barranquilla' },
  { id: 'CTG', value: 'Cartagena' },
  { id: 'CUC', value: 'Cúcuta' },
  { id: 'SLD', value: 'Soledad' },
  { id: 'IBE', value: 'Ibagué' },
];

const Searchbar = () => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const history = useHistory();
  registerLocale('es', es)
  
  const destinationCallback = (dest) => {
    setDestination(dest);
  }

  const datasearch = () => {
    const Datastar = moment(startDate).format('YYYY-MM-DD')
    const Dataend = moment(endDate).format('YYYY-MM-DD')
    let query = `?location=${destination.id}&checkin=${Datastar}&checkout=${Dataend}`
    history.push(`search${query}`)
  }

  return (
    <div className="searchbar">
      <div className="destination-container">
        <Dropdown options={options}
          placeHolder={"Destino"}
          icon={faPlaneDeparture}
          onOptionSelected={destinationCallback}
          borderType="left-border" />
      </div>
      <DatePicker
        className="date-container-left"
        onChange={date => setStartDate(date)}
        locale="es"
        selected={startDate}
        selectsStart
        startDate={startDate}
        minDate={new Date()}
        endDate={endDate}
        key="1"
        placeholderText="Fecha Entrada "
      />
      <DatePicker
        className="date-container-right"
        locale="es"
        selected={endDate}
        onChange={date => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        key="2"
        placeholderText="Fecha Salida "
      />
      <button className="searchbar-button" onClick={datasearch}>Buscar</button>
    </div>
  );
}

export default Searchbar;