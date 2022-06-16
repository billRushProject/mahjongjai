/**
 * @description      : 
 * @author           : LKY
 * @group            : 
 * @created          : 09/06/2022 - 14:42:59
 * 
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 09/06/2022
 * - Author          : LKY
 * - Modification    : 
 **/
import React, {
    useState,
    useEffect
} from "react";
import db from '../firebase';
import {
    collection,  getDocs ,query ,where
} from "firebase/firestore";
import { async } from "@firebase/util";
export default function ShowCalendar() {
    const [events, setEvents] = useState([]);
    //const bookingCollectionRef = collection(db, "booking");
    useEffect(()=>{
        const getBooking=async ()=>{
            const bookingCollectionRef = query(collection(db, "booking"),where("startDateTime", ">", new Date()));
            const data=await getDocs(bookingCollectionRef);
            setEvents(data.docs.map((doc)=>({id: doc.id,...doc.data()})))
        };
        getBooking()
    },[])
    return ( 
        <div> 
            {events.map((event)=>{
                const getStartDay=new Date(event.startDateTime.seconds*1000);
                const getEndDay=new Date(event.endDateTime.seconds*1000);
                var options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric', };
                var startHour    = getStartDay.getHours();
                var startMinute  = getStartDay.getMinutes();
                var endhour    = getEndDay.getHours();
                var endMinute  = getEndDay.getMinutes();
                if (startMinute==0){
                    startMinute="00"
                }
                if (endMinute==0){
                    endMinute="00"
                }
                const showStartday=getStartDay.toLocaleDateString("en-US", options);
                const showEndday=getEndDay.toLocaleDateString("en-US", options);
                return <div key={event.id}>
                    <div>Booking Date: {showStartday}</div>
                    <div>Start Time: {startHour+":"+startMinute}</div>
                    <div>End Date : {showEndday}</div>
                    <div>End Time: {endhour+":"+endMinute}</div>
                    <div>Hours : {event.hours}</div>
                    <div>price : {event.price}</div>
                </div>
            })}
        </div>
    )
}