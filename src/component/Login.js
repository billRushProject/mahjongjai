/**
    * @description      : 
    * @author           : admin
    * @group            : 
    * @created          : 17/06/2022 - 16:10:06
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/06/2022
    * - Author          : admin
    * - Modification    : 
**/
import React,{useState, useEffect} from 'react'
import  { Navigate,useNavigate } from 'react-router-dom'
export default function Login() {
let navigate = useNavigate();
const [password, setPassword] = useState();
const [isLogin, setLogin] = React.useState(JSON.parse(localStorage.getItem('todos')) ||false);

const home=()=>{
    localStorage.setItem('login',false);
    navigate('/');
}
const signIn=()=>{
    localStorage.setItem('login',false);
    if(password=="123mmj"){
        localStorage.setItem('login',true);
        navigate('/admin/createBooking');
    }else{
        alert("login fail")
    }

}
  return (
    <> <div className="form primary-400">
        <div  className="form-group primary-600 primary-900-text  ">
                <h5>UserName</h5>
                <input ></input>
                
            </div>
            <div  className="form-group primary-600 primary-900-text">
                <h5>Password</h5>
                <input type="password"  onChange={(event)=>setPassword(event.target.value)} required></input>
            </div>
            <div  className="form-group primary-300 ">
            {isLogin && (<Navigate to="/admin/createBooking" />)}
            <button onClick={home}>Back</button>
            <button onClick={signIn}>Login</button>
            </div>
            
    </div>
       
    </>
    )
}
