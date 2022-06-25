//make global state
import React,{createContext, useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {auth} from '../../utils/firebase/Firebase'
export const AuthContext= createContext(null)
export const AuthProvider = (props) => {
    const [user,setUser] = useState()
    const [userName,setUserName]=useState("")
    console.log(userName)
       const navigate= useNavigate()
    // useEffect(()=>{
      
    //  auth.onAuthStateChanged((user)=>{
    //   console.log(user.displayName)
    //    setUser(user)
    //    if(user){
    //      setUserName(user.displayName)
    //    }
    //    else{
    //      setUserName("")
    //    }

    //   })
      
    // })
    // useEffect(()=>{
      

    // },[])
    const Logout=()=>{
      auth.signOut().then(()=>{
         setUser(null)
         navigate("/login")
      })
    }
  // const Login=()=>{
  //  user ? setUser(user): setUser(null)
  // }
  
 
  
 return <AuthContext.Provider value={{user,Logout}}>
    {props.children}

 </AuthContext.Provider>
}
