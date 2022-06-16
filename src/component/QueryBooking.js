/**
    * @description      : 
    * @author           : LKY
    * @group            : 
    * @created          : 14/06/2022 - 13:28:38
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 14/06/2022
    * - Author          : LKY
    * - Modification    : 
**/
import React, {
    useState,
    useEffect
} from "react";
import db from '../firebase';
import {
    collection, query, where, getDocs, onSnapshot,Timestamp
} from "firebase/firestore";
import {firebase} from '@firebase/app';
export default function QueryBooking() {
    const [bookings, setBooking] = useState([]);
    
    const [message, setMessage] = useState("");
    const [searchDate,setSearchDate]=useState("");
    const queryDB=async ()=>{
        setBooking([])
        setMessage("")
        const dayString = searchDate.split("-");
        const year = parseInt(dayString[0],10);
        const month = parseInt(dayString[1],10);
        const day = parseInt(dayString[2],10);
        const start = new Date();
        
        start.setFullYear(dayString[0]);
        start.setMonth(month.toString()-1);
        start.setDate(dayString[2]-1);
        start.setHours(15,0,0,0)
        console.log("Start: "+start)

        const end =new Date(start.getTime());
        
        end.setDate(end.getDate()+2);
        end.setHours(9,0,0,0)
        console.log("End: "+end)
        //const bookingCollectionRef = query(collection(db, "booking"),where("startDateTime", ">=", start),where("startDateTime", "<=", end));
        const bookingCollectionRef = query(collection(db, "booking"),where("startDateTime", ">", start),where("startDateTime", "<=", end));

        

        const data=await getDocs(bookingCollectionRef);
        setBooking(data.docs.map((doc)=>(
            {id: doc.id,...doc.data()})))
        console.log(bookings.length);
        if(bookings==0){
            setMessage("全日都可以BOOK")
        }else{
            setMessage("如果時間OK 歡迎去IG查詢")
        }
    }
    return(
        <div>
            <div>
                <div>
                    SEARCHING BOOKING yesterday(15:00):Today:tmr(09:00) 
                </div>
                <div>
                    <div>
                        <h5>Date</h5>
                        <input type="date"  id="datefield"  value={searchDate} onChange={(event)=>setSearchDate(event.target.value)} min={new Date()} required ></input>  
                        <button onClick={queryDB}>Test</button>
                    </div>
                </div>
                {message}
            </div>
            {
                
                bookings.map((booking)=>{
                if(bookings==null){}
                const getStartDay=new Date(booking.startDateTime.seconds*1000);
                const getEndDay=new Date(booking.endDateTime.seconds*1000);
                var options = {  year: 'numeric', month: 'numeric', day: 'numeric', };
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
                const dateMessage="asdsa";
                if(showStartday==showEndday){

                }
                return <div key={booking.id}>
                    
                    <div>Booking Date: {showStartday}</div>
                    <div>Time: {startHour+":"+startMinute+"-"+endhour+":"+endMinute}</div>
                    <div>Hours : {booking.hours}</div>
                </div>
            })}
        </div>
    )
}
