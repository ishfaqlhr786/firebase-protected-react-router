import * as joi from 'joi'
import {joiResolver} from '@hookform/resolvers/joi'
const SignupSchema=joi.object({
    email:joi.string().email({
        minDomainSegments:2,
        tlds: {allow: ["com","net"]}
    }).error((errors)=>{ 
        console.log(errors)
        errors.forEach(err=>{
       if(err.code === "string.empty") {
        err.message="Email is the Required   field"
       }else if( err.code === "string.email"){
        err.message="enetr a valid email"
       }
       
       

    })

        return errors
    //})

    }),
    password: joi.string().pattern(new RegExp("^[a-zA-Z0-9@#]{3,30}"))
    .error((errors)=>{
        console.log(errors)
    errors.forEach(err=>{
        if(err.code === "string.empty"){
            err.message="password is the required field"
        } else if(err.code === "string.pattern.base"){
            err.message ="plz enetr a valid password"
        }

        

    })
    return errors
}),
    repeatepassword: joi.string().required().valid(joi.ref("password")).
    error((errors)=>{
        errors.forEach(err=>{
            if(err.code === "string.empty"){
                err.message="password is the required field"
            } else if(err.code === "any.only"){
                err.message ="plz enetr a matching  password"
            }
    
            
    
        })
        return errors
    })
})

 export const SignupResolver=joiResolver(SignupSchema)