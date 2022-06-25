import React, { useContext,useEffect } from 'react'
import {Routes, Route, useNavigate, Navigate, useLocation} from 'react-router-dom'
import { AuthContext } from '../../components/Authentication/AuthProvider'
import { DashBoard } from '../../pages/dashboard/DashBoard'
export const ProtectedRoutes = ({Component},props) => {
  
  const navigate=useNavigate()
 // const  { Component}= props;
    const location=   useLocation()
  const {user}=useContext(AuthContext)
  console.log(user)
  useEffect(()=>{  

    
//     const login1=window.localStorage.setItem('login','false')
//     const login2=window.localStorage.getItem('login')
//     console.log(login2)
     if(!user){
       // navigate('/login')
       //return <Navigate to="/login" state={{ from: location }} replace />;
        navigate("/login");
      
     }
    
    
  navigate("/")
     
},[])
//   //const history=useHistory()
  
  return (
    <div>
    
     <Component />
     

     
    </div>)
}
// //     <Routes>
// //       <Route
  
// //   render={(props) =>
// //     user ? <Component {...props} /> : navigate("/login")
// //   }
// // />
// //     </Routes>
   
//   );
    
// }

// // import { Children, useContext,useEffect } from 'react';
// // import {Navigate, useNavigate} from 'react-router-dom'
// // import { AuthContext } from './AuthProvider';
// //  export  const ProtectedRoutes = ({  children }) => {
// //   const navigate=   useNavigate()
// //  const {user}=    useContext(AuthContext)
// //  useEffect(()=>{
// //   if (!user) {
// //     navigate("/login" )
// //    // return <Navigate to="/login" replace={true} />;
// //   }else{
// //     navigate("/")
// //    // return <Navigate to="/" />;
// //   }
// //  },[])
 
 

// //   return( <div>
// //     {/* <children/> */}
// //   </div>)
// // };
// import { Children, useContext } from 'react';
// import {
//   Routes,
//   Route,
//   Link,
//   Navigate,
//   Outlet,
// } from 'react-router-dom';
// import { DashBoard } from '../../pages/dashboard/DashBoard';
// import { AuthContext } from './AuthProvider';

// export const ProtectedRoutes = ({ children, redirectPath = '/login' }) => {
//    const {user}=  useContext(AuthContext)
//  // let a=4;
//   if (!user) {
//     return <Navigate to={redirectPath} replace />;
//   }

//   return  <DashBoard/>;
  
// };




