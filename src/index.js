/**
    * @description      : 
    * @author           : LKY
    * @group            : 
    * @created          : 01/06/2022 - 17:26:59
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/06/2022
    * - Author          : LKY
    * - Modification    : 
**/
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ShowCalendar from './component/ShowCalendar'
import CreateBooking from './component/CreateBooking';
import QueryBooking from './component/QueryBooking';

import './css/colorCode.css';
import './css/layout.css';
import './css/form.css';
//<ShowCalendar/>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryBooking/>
    <CreateBooking/>
    <ShowCalendar/>
  </React.StrictMode>
);
