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
import db from './firebase';


import {  collection, doc, getDoc, getDocs , addDoc, updateDoc, deleteDoc} from "firebase/firestore";
import { async } from "@firebase/util";

function App() {
  const [schools, setSchools]=useState([]);
  const schoolsCollectionRef=collection(db,"schools");
  const [newTitle,setNewTitle]=useState("");
  const [newDesc,setnewDesc]=useState("");
  
  const [modifyDesc,setmodifyDesc]=useState("");
  const createSchool=async()=>{
    await addDoc(schoolsCollectionRef,{title: newTitle ,desc:newDesc});
  }
  const modifySchool=async(id)=>{
    const schoolDoc=doc(db, "schools",id);
    console.log(schoolDoc);
    const newFields={desc: modifyDesc};
    await updateDoc(schoolDoc,newFields);
  }
  const deleteSchool=async(id)=>{
    
    const schoolDoc=doc(db, "schools",id);
    await deleteDoc(schoolDoc);
  }


  useEffect(()=>{
    const getSchools= async ()=>{
      const data=await getDocs(schoolsCollectionRef);
      
      setSchools(data.docs.map((doc) =>({...doc.data(),id:doc.id})));  
      console.log(schools);
    };

    getSchools();
},[]);
  return (
    <div className="App">
      <h1>Schools</h1>
      {schools.map((school)=>(
        <div key={school.id}>
          <h2>{school.title}</h2>
          <h2>{school.desc}</h2>
          <input type="text" onChange={(event)=>{setmodifyDesc(event.target.value);}}></input>
          <button onClick={()=>{modifySchool(school.id)}}>Modify desc</button>
          <button onClick={()=>{deleteSchool(school.id)}}>Delete desc</button>
        </div>
      ))}
      <div>
        <div>
          <div class="label">Title</div>
          <input type="text" onChange={(event)=>{setNewTitle(event.target.value);}}></input>
        </div>
          <div>desc</div>
          <input type="text" onChange={(event)=>{setnewDesc(event.target.value);}}></input>
        </div>
        <button onClick={createSchool}>Create School</button>
    </div>
    
  );
}

export default App;
