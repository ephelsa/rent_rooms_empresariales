import React,  { useState } from 'react';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../../containers/Dropdown/Dropdown';
import './Searchbar.css';
import { registerLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
import DatePicker from "react-datepicker";
import moment from 'moment'
 
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css'




const options = [
  { id: 1, value: 'Medellín' },
  { id: 2, value: 'Cartagena' },
  { id: 3, value: 'Bogotá' },
  { id: 4, value: 'Santa Marta' },
  { id: 5, value: 'Valledupar' },
  { id: 6, value: 'Manizales' },
  { id: 7, value: 'Cúcuta' },
];

function Searchbar() {
  registerLocale('es', es)
  const [destination, setDestination] = useState('');
  const destinationCallback = (dest) => {
    setDestination(dest);
    
   
  }
  const [startDate, setStartDate] = useState(null);
  const handleOnBlur = ({ target: { value } }) => {
    const Checkin = new Date(value);
    console.log("Checkin=",Checkin.getFullYear(Checkin,"yyyy"),"-",Checkin.getMonth(Checkin, "MM"),"-",Checkin.getDate ( Checkin, "dd"));
  };
  const [endDate, setEndDate] = useState(null);
  const handleOnBlur1 = ({ target: { value } }) => {
    const Checkout = new Date(value);
    console.log("Checkout=", Checkout.getFullYear(Checkout,"yyyy"), Checkout.getMonth(Checkout, "MM"), Checkout.getDate ( Checkout, "dd"));
  };

  function datasearch () {
   const Datastar = moment (startDate).format('YYYY-MM-DD')
   const Dataend = moment (endDate).format('YYYY-MM-DD')
    console.log(destination,Datastar,Dataend)
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

      <div className="date-container">
        <span>
          
      <DatePicker
        onChange={date => setStartDate(date)}
        locale="es"
        title= "fechas"
        selected={startDate}
        selectsStart
        startDate={startDate}
        minDate={new Date()}
        endDate={endDate}
        key= "1"
        onBlur={handleOnBlur}
        placeholderText="Fecha Entrada "
        
        
      />
      <DatePicker
        locale="es"
        
        selected={endDate}
        onChange={date => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        key="2"
        onBlur={handleOnBlur1}
        placeholderText="Fecha Salida "
       
      />
          </span>
      </div>
      
      <div className="date-container">
      
        <span>
        <button onClick={datasearch}>
  Buscar
</button>
        </span>
        </div>
    </div>
  );
}


export default Searchbar;
