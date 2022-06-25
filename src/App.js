import React,{useEffect,useState,useContext} from 'react'
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom'
import { ProtectedRoutes } from './components/Authentication/ProtectedRoutes'
import { DashBoard } from './pages/dashboard/DashBoard'
import { Login } from './pages/login/Login'
import {auth} from './utils/firebase/Firebase'
import { SignUp } from './pages/signup/Index'
import { AuthContext } from './components/Authentication/AuthProvider'

//import { useContext } from 'react'

 
export const App = () => {
  const [userName,setUserName]=useState("")
  const {user}=    useContext(AuthContext)

 useEffect(()=>{
  auth.onAuthStateChanged((user)=>{
    if(user){
      setUserName(user.displayName)
    }
    else{
      setUserName("")
    }
  console.log(user)
  })
},[])
 // }
  return (
    <div>
      
      <Routes>
      
              <Route exact  path="/*" element={<ProtectedRoutes 
               Component={DashBoard} />} />
            
             
           
              
                  
  
          
          <Route exact path="/login" element={<Login/>} />
            

            
            <Route exact path="/Signup" element={<SignUp/>} />
            

            
            
        </Routes>

        {/* <Switch> 
        <ProtectedRoutes  exact path="/" componet={DashBoard} ></ProtectedRoutes>
              
        <Route  path="/login" component={Login} />
        <Route   path="/signup" component={SignUp} />
        </Switch> */}
         
      
      
     
    </div>
  )
}
