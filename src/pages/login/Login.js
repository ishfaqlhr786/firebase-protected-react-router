import { Box } from '@chakra-ui/layout'
import { 
    Button, 
    FormControl,
     FormErrorMessage,
      FormLabel ,
      Link,
      Text
    } from '@chakra-ui/react'
import {Link as ReactRouterLink,useNavigate,Route,Routes, Navigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {auth} from '../../utils/firebase/Firebase'
import { createUserWithEmailAndPassword ,
  signInWithEmailAndPassword
  ,updateProfile} from 'firebase/auth'
import {LoginResolver} from '../../utils/validations/LoginResolver'
import {createBrowserHistory} from 'history'
// import { createUserWithEmailAndPassword ,updateProfile} from 'firebase/auth'
// import {auth} from '../../utils/firebase/Index'
import {useState,useEffect,useContext}  from 'react'
import { AuthContext } from '../../components/Authentication/AuthProvider'
import { DashBoard } from '../dashboard/DashBoard'
export const Login = () => {
  const navigate=useNavigate()
    const history= createBrowserHistory()
  const [isloggedIn,setLoggedin] =   useState(false)
   const {user,Login}=     useContext(AuthContext)
   console.log(user)
    //const emailInputRef= useRef();
   //const history=useHistory()
    //const passwordInputRef= useRef();
   // const [isloggedIn,setIsLogin] = useState(false)
const {handleSubmit,register,formState:{errors,isSubmitting},
setError,
clearErrors

}=useForm({
    resolver:LoginResolver
})

// useEffect(()=>{
//  // if(user){
//      // history.push("/")
//       navigate("/login")
// //  }
//   },[])
 
 
  const onSubmit=({email,password})=>{  
  console.log("ishfaq login")
    //e.preventDefault()
   
    clearErrors("API_ERROR")
    signInWithEmailAndPassword(auth,email,password).then(()=>{
        
     // history.replace("/")
     console.log("login succed")
    // history.push("/")
   //return <Navigate to="/" replace />;
    navigate("/")

    // return <DashBoard/>
         
      
         
  }
    ).catch((error)=>{
      setError("API_ERROR",{
       message:"Email or password is invalid"
      })
   })
    
    
 
    
}
// useEffect(()=>{
  
//    //   history.replace("/")
//      // return <DashBoard/>
//     if(user){
//      navigate("/")
//     }
   
//    },[user,navigate,onSubmit])

    return <Box
        width="100%" minH="100vh" background="gray.300" display="flex"
        alignItems="center" justifyContent="center"
    >
        <Box width={{base:"90%", md:"40%", lg:"30%"}} shadow="lg" background="white" p={12} rounded={6}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl mt="2" isInvalid={errors.email}>
                    <FormLabel htmlFor="email">
                        Email
                    </FormLabel>
                    <input type="email" name="email" 
                    placeholder='enetr your email' 
                    {...register("email")}
                    />
                    <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                </FormControl>
                <FormControl mt="2" isInvalid={errors.password}>
                    <FormLabel htmlFor="password">
                        Password
                    </FormLabel>
                    <input type="password" name="password" 
                    
                     placeholder='enetr your password' 
                     {...register("password")}
                     />
                    <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
                </FormControl>
                
                <Box mt="5" color="red.500">
                    {errors.API_ERROR && errors.API_ERROR.message}
                </Box>
                {/* <Box onClick={()=>navigate("/")}> */}
                <Button     type='submit'
                 mt="4" colorScheme="messenger"  width="100%"
                 
                  >
                 login  </Button>
                
               
               <Text textAlign="center" p="2" size="xs">
                <Link  as={ ReactRouterLink} color="gray.500" 
               to="/signup"
               
               > 
              
                Create Account ?
                </Link>
               </Text>
               

            </form>
        </Box>
    </Box>
}


 

