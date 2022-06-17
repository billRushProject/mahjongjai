/**
    * @description      : 
    * @author           : LKY
    * @group            : 
    * @created          : 01/06/2022 - 17:27:02
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/06/2022
    * - Author          : LKY
    * - Modification    : 
**/
import React,{useState, useEffect} from "react";



import { BrowserRouter as Router, Route,Routes }from "react-router-dom";
import ShowCalendar from './component/ShowCalendar'
import CreateBooking from './component/CreateBooking';
import QueryBooking from './component/QueryBooking';
import Login from './component/Login';
/* */
function App() {
  return (
    
    <div >
    <Router>
        <Routes>
          <Route path="/" element={<QueryBooking/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/admin/createBooking" element={<CreateBooking/>}/>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
