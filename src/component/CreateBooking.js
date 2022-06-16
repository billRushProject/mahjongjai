/**
    * @description      : 
    * @author           : LKY
    * @group            : 
    * @created          : 08/06/2022 - 08:57:52
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 08/06/2022
    * - Author          : LKY
    * - Modification    : 
**/
import React,{useState, useEffect} from "react";
import db from '../firebase';
import {  collection,  addDoc} from "firebase/firestore";
import { async } from "@firebase/util";
 function CreateBooking() {
    
    const bookingCollectionRef=collection(db,"booking");
    const [booking, setBooking]=useState([]);
    const [newNoPeople,setnewNoPeople]=useState(0);
    const [newHours,sethours]=useState(0);
    const [newPrice,setNewPrice]=useState(0);
    const [newDate,setNewDate]=useState(new Date());
    const [newstartTime,setStartTime]=useState("");
    const addBooking =async()=>{
        const startTime=new Date(newDate);  
        const time = newstartTime.split(":");
        const timeH = parseInt(time[0],10);
        const timeM = parseInt(time[1],10);
        startTime.setHours(timeH);
        startTime.setMinutes(timeM);
        const endTime = new Date(newDate);
        endTime.setHours(timeH);
        endTime.setMinutes(timeM);
        //get end time data 
        endTime.setHours(endTime.getHours() + parseInt(newHours,10));
        await addDoc(bookingCollectionRef,{startDateTime: startTime, endDateTime:endTime,hours:parseInt(newHours,10),price:parseInt(newPrice,10)});
        clearInputfield();
    }
    //after enter the data to 
    const clearInputfield=async()=>{
        setnewNoPeople('');
        sethours('');
        setNewPrice('');
        setNewDate('');
        setStartTime('');
    }
  return (
    <div className="booking-form primary-300">
        <div className="primary-400 bookingTitle">
                <h3 className="primary-900-text " > Make Booking</h3>
        </div>
        <div className="form-content primary-200-text">
            <div className="form-group primary-600 ">
                <label htmlFor="">
                    <h6>Booking Date</h6>
                </label>
                <div>
                    <input type="date" value={newDate} onChange={(event)=>setNewDate(event.target.value)} required></input>
                </div>
            </div>
            <div className="form-group primary-600 ">
                    <label htmlFor="">
                        <h6>Start Time</h6>
                    </label>
                    <div className="">
                        <input type="time" value={newstartTime} onChange={(event)=>setStartTime(event.target.value)} required></input>    
                    </div>
            </div>
            <div className="form-group primary-600 ">
                    <label htmlFor="">
                        <h6>Hours</h6>
                    </label>
                    <div className="">
                        <input type="number" value={newHours}  min="1" max="24" onChange={(event)=>sethours(event.target.value)} required></input>
                    </div>
            </div>
            
            <div className="form-group primary-600 ">
                    <label htmlFor="">
                        <h6>Total Price</h6>
                    </label>
                    <div className="">
                        <input type="number" min="0" value={newPrice} onChange={(event)=>setNewPrice(event.target.value)} required></input>
                    </div>
            </div>
            
            
           
            <div className="form-group ">
                    <button className="primary-500">Back</button>
                    <button className="primary-600" 
                    onClick={() => {
                        const confirmBox = window.confirm("Confirm booking detail:\n"
                        +"Booking date: "+ newDate+"\nStart Time: "+newstartTime+"\nHours: "+newHours+"\nTotal Price: "+newPrice);
                        if (confirmBox === true) {addBooking()}
                    }} >Add</button>
                </div>
            </div>
        
        
        
    </div>
  );
}
export default CreateBooking;
