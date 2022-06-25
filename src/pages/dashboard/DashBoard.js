import React,{useEffect,useContext,useState} from 'react'
import { Link, useNavigate ,useLocation} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import { AuthContext } from '../../components/Authentication/AuthProvider'
//import { useContext } from 'react'
import {auth} from '../../utils/firebase/Firebase'
export const DashBoard = () => {
  const history=createBrowserHistory()
   const navigate=useNavigate()
 const {Logout,user}=    useContext(AuthContext)
 const [userName,setUserName]=useState("")
 //const {user}=    useContext(AuthContext)

useEffect(()=>{
 auth.onAuthStateChanged((user)=>{
  //){
     setUserName(user.displayName)
  // }
 //  else{
 //    setUserName("")
 //  }
 console.log(user)
 })
 },[])

 
 
 console.log(userName)
 const [uName,setUname] = useState(userName)
// useEffect(()=>{
// //navigate(0)
// history.go("/")
// },[])
 
 
 console.log(Logout)
//  useEffect(()=>{
  
 
//      navigate("/")
  
//      },[])
 
useEffect(()=>{
 
    navigate("/")
 

},[])
  return (
    <div>
   <h2>Welcome mr.{userName}</h2>
      <br/>
        <button onClick={()=>{
          Logout()
        }}>Logout</button>
    </div>
  )
}
