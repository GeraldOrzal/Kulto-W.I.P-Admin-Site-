import React ,{useState,useEffect,useRef,useContext}from 'react';
import './Styles/Entrance.css';
import {createClient} from '@supabase/supabase-js';

import Image1 from './Images/1.jpg';
import Image2 from './Images/2.png';
import Image3 from './Images/3.jpg';

const supabaseUrl = 'https://tqusccjeokqhutkwzekr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzY0NDk4NywiZXhwIjoxOTQzMjIwOTg3fQ.KV11xkUflc0ATucHQ0MTDoQ4zGMDMzZQfvWkFqONi5o'
export const supabase = createClient(supabaseUrl, supabaseKey)
const ProfileContext = React.createContext()
export function UseProfile(){
    return useContext(ProfileContext)
}
export default function Entrance(props) {
     const [list, setlist] = useState()
     
     useEffect(()=>{
        GetList()
     },[])
     /*
     
        supabase.from(tablename).insert/select
     */ 
    async function GetList(){
       const {data,error} =  await supabase.from("practice").select("*");
       if(error){
        return
       }
       setlist(data)
       alert("success")
     }
     /*
     [{
         0:{
             practiceid:0.
            fullname:"Mina1"
         }
     }]
        */
     const value = {
         list,Image2,Image1,Image3
     }
    return (
        <ProfileContext.Provider value={value}>
            {props?.children}
        </ProfileContext.Provider>
    )
}

