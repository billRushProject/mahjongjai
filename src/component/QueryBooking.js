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
    const [message, setMessage] = useState("WELLCOME");
    const [searchDate,setSearchDate]=useState("");
    const doaction= ()=>{
        try {
             queryDB()
        
        } catch(err) {
            //異步異常
            console.log(err)
        } finally {
            setMessage("如果時間OK歡迎去IG同我地聯絡")
        }
        
    }
    
    const queryDB=async ()=>{
        const dayString = searchDate.split("-");
        const year = parseInt(dayString[0],10);
        const month = parseInt(dayString[1],10);
        const day = parseInt(dayString[2],10);
        const start = new Date();
        
        start.setFullYear(dayString[0]);
        start.setMonth(month.toString()-1);
        start.setDate(dayString[2]-1);
        start.setHours(15,0,0,0)

        const end =new Date(start.getTime());
        end.setDate(end.getDate()+2);
        end.setHours(9,0,0,0)
        //const bookingCollectionRef = query(collection(db, "booking"),where("startDateTime", ">=", start),where("startDateTime", "<=", end));
        const bookingCollectionRef = query(collection(db, "booking"),where("startDateTime", ">", start),where("startDateTime", "<=", end));
        const data=await getDocs(bookingCollectionRef);
        setBooking([])
        setBooking(data.docs.map((doc)=>({id: doc.id,...doc.data()})));
    }
    return(
        <div>
            <div className="booking-form primary-300">
                <div className="primary-400 bookingTitle">
                    <h3 className="primary-900-text "> 查詢XX房間</h3>
                </div>
                <div className="form-group primary-400 primary-800-text ">
                    <label htmlFor="">
                        <h6>查詢範圍</h6>
                    </label>
                    <div> <b>昨天(3PM)</b></div>至<div> <b>指定日期</b></div> 至 <div> <b>翌日(9am)</b></div>
                </div>
                <div className="form-group primary-400 primary-800-text">
            
                    <label htmlFor="">
                        <h6>指定日子</h6>
                    </label>
                        <input type="date"  id="datefield"  value={searchDate} onChange={(event)=>setSearchDate(event.target.value)} min={new Date()} required ></input>  
                        <button onClick={doaction} className="primary-600 primary-200-text">查詢</button>
                    
                </div>
            </div>
            <div className="booking-form primary-600">
                
                <div className="form-group primary-300 primary-800-text">
                    <div className="">
                        <label htmlFor="" className="">
                            <h6>Booking Date</h6>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">
                            <h6>Time</h6>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">
                            <h6>Hours</h6>
                        </label>
                    </div>
                </div>
        
            {
                
                bookings.map((booking)=>{
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
                
                return <div key={booking.id} className="form-group primary-600-text">
                    <div className=" form-content primary-300 ">
                        <div className="">
                            <label htmlFor="" class="">
                                <h6>{showStartday}</h6>
                            </label>
                        </div>
                        <div className="">
                            <label htmlFor="" class="">
                                <h6>{startHour+":"+startMinute+"-"+endhour+":"+endMinute}</h6>
                            </label>
                        </div>
                        <div className="">
                            <label htmlFor="" class="">
                                <h6>{booking.hours}</h6>
                            </label>
                        </div>
                    </div>
                </div>
            })}
            <div className="primary-400 bookingTitle ">
                    <h6 className="primary-800-text">{message}</h6>
                </div>
            </div>
        </div>
    )
}
