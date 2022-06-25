import { Box } from '@chakra-ui/layout'
import { 
    Button, 
    FormControl,
     FormErrorMessage,
      FormLabel ,
      Link,
      Text
    } from '@chakra-ui/react'
import {Link as ReactRouterLink,Navigate,Redirect,useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {auth} from '../../utils/firebase/Firebase'
import { createUserWithEmailAndPassword ,updateProfile} from 'firebase/auth'
import {SignupResolver} from '../../utils/validations/SignupResolver'

// import { createUserWithEmailAndPassword ,updateProfile} from 'firebase/auth'
// import {auth} from '../../utils/firebase/Index'
import {useState,useEffect,useContext,useRef}  from 'react'
import { AuthContext } from '../../components/Authentication/AuthProvider'
export const SignUp = () => {
    const [name,setName]= useState("")
    const navigate=useNavigate()
   const {user,getName}=     useContext(AuthContext)
   console.log(user)
    //const emailInputRef= useRef();
  // const history=useHistory()
    //const passwordInputRef= useRef();
   // const [isloggedIn,setIsLogin] = useState(false)
const {handleSubmit,register,formState:{errors,isSubmitting},
setError,
clearErrors

}=useForm({
    resolver:SignupResolver
})


const onSubmit=({email,password})=>{
    console.log(name)
    // const enteredemail=email;
    // const enteredpassword= password
    // console.log(email,password)
    clearErrors("API_ERROR")
    createUserWithEmailAndPassword(auth,email,password).then((res)=>{
       // history.push("/")
       const user=res.user;
      // const user=res.user;
      updateProfile(user,{displayName:name})
      // console.log(res.user.displayName)
      console.log(name)
       
    //  navigate('/home',{state:{name:{name}}});
      navigate("/login")
     // return <Navigate to="/" replace={true} />
    // navigate("/home",{name:name})
     // navigate('/login');

      //return <Navigate to="/login"  />
    }).catch((error)=>{
       setError("API_ERROR",{
        message:"User already exists"
       })
    })
 //let   url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCkT5dtSifQt1TuWWsriErKijU3XgyLjo0'  
    // fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCkT5dtSifQt1TuWWsriErKijU3XgyLjo0',

    // {
    //      method:'POST',
    //      body:JSON.stringify( {
    //          email:enteredemail,
    //          password:enteredpassword,
    //          returnSecureToken: true
    //         }
    //      )
    //     ,
    //      headers: {
    //          'Content-Type':'Application/json' 
    //      }
    //  }).then(()=>{
    //     history.push("/")
    //  })
     
    //  .then((res) => {
    //   //  setIsLoading(false)
    //     if(res.ok){
    //        // console.log('user craeted')
           
    //         return res.json()
           
    //     }else{
    //       return  res.json().then(data=>{
    //             let errorMessage="Authentication failed"
    //             // if(data && data.error && data.errorMessage){
    //             //     errorMessage= data.error.errorMessage
    
    //             // }
    //            // alert(errorMessage)
    //             throw new Error(errorMessage)
                
    
    //         })
        
    //         }
    //        // )
    //     }).then(data=>{
    //         console.log(data)
    //        // Redirect("/")
    //         // setEmail(data.email)
    //         // setToken(data.idToken)
           
    //         // console.log(data.email)
    //         // console.log(data.idToken)
    //     //   authCtx.login(data.idToken)
            
           
            
    //  }).catch(err=>{
    //         alert(err.message)
    // }
    //     )
     
    //  Redirect("/")
    
}

useEffect(()=>{
if(user){
   // history.push("/")
    navigate("/")
}
},[user,navigate])

    return <Box
        width="100%" minH="100vh" background="gray.300" display="flex"
        alignItems="center" justifyContent="center"
    >
        <Box width={{base:"90%", md:"40%", lg:"30%"}} shadow="lg" background="white" p={12} rounded={6}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl mt="2" >
                    <FormLabel htmlFor="name">
                        Name
                    </FormLabel>
                    <input type="text" name="name" value={name} 
                    onChange={(e)=>setName(e.target.value)}
                    placeholder='enetr your name' 
                   // {...register("name")}
                    />
                                   </FormControl>
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
                <FormControl mt="2" isInvalid={errors.repeatepassword}>
                    <FormLabel htmlFor="repeatepassword">
                      Confirm Password
                    </FormLabel>
                    <input type="password" name="repeatepassword"
                     placeholder='enetr your password'
                     {...register("repeatepassword")}
                     />
                    <FormErrorMessage>{errors.repeatepassword && errors.repeatepassword.message}</FormErrorMessage>
                </FormControl>
                <Box mt="5" color="red.500">
                    {errors.API_ERROR && errors.API_ERROR.message}
                </Box>
                <Button isLoading={isSubmitting} 
                 mt="4" colorScheme="messenger" type="submit" width="100%">
                    SignUp
                </Button>
               <Text textAlign="center" p="2" size="xs">
               <Link as={ ReactRouterLink} color="gray.500" to="/login">
                Already Registered
                </Link>
               </Text>
               

            </form>
        </Box>
    </Box>
}


 
