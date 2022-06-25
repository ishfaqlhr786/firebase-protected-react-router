import * as joi from 'joi'
import {joiResolver} from '@hookform/resolvers/joi'
const LoginSchema=joi.object({
    email:joi.string().email({
        minDomainSegments:2,
        tlds: {allow: ["com","net"]}
    }).message("plz enetr a valid email"),
   
    password: joi.string().pattern(new RegExp("^[a-zA-Z0-9@#]{3,30}"))
    .message("plz enet a valid password")
});
       

 export const LoginResolver=joiResolver(LoginSchema)