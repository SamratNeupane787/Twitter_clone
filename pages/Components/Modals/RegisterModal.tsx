import { useCallback, useState } from "react";
import {toast} from "react-hot-toast"
import{ signIn } from  "next-auth/react"
import axios from "axios";

// Importing components

import Input from "../Input"
import Model from "../Model";
import useRegisterModel from "@/hooks/UserRegisterModal";
import useLoginModel from "@/hooks/UserLoginmodal"





const RegisterModal = () =>{
    const loginModal = useLoginModel();
    const registerModal = useRegisterModel();

    const [email, setEmail] = useState('');
    const [password, setPassword ] =useState('');
    const [name, setName] = useState('')
    const [username, setUserName] =useState('')
    const [isLoading , setIsloading ] = useState(false);

    const onToggle = useCallback(() =>{
        if(isLoading){
            return;
        }

        registerModal.onClose();
        loginModal.onOpen();

    },[isLoading, registerModal, loginModal])

    const onSubmit = useCallback(async() =>{
        try{
                setIsloading(true)
                
                await axios.post('/api/register',{
                    email,
                    password,
                    username,
                    name
                });

                toast.success("Account Created.")

                signIn('credentials',{
                    email, 
                    password
                })


                registerModal.onClose();

        }
        catch(error){
            console.log(error);

            toast.error('Something went wrong!');
        }

        finally{
            setIsloading(false);        }
    },[registerModal, email, password, username, name])


    const bodyContent = (
        <div className=" flex flex-col gap-4">
            <Input 
            placeholder= 'Email'
            onChange={(e) => setEmail(e.target.value)}
            value ={email}
            disabled={isLoading}

/>

<Input 
            placeholder= 'Name'
            onChange={(e) => setName(e.target.value)}
            value ={name}
            disabled={isLoading}

/>

<Input 
            placeholder= 'UserName'
            onChange={(e) => setUserName(e.target.value)}
            value ={username}
            disabled={isLoading}

/>

<Input 
            placeholder= 'Password'
            onChange={(e) => setPassword(e.target.value)}
            value ={password}
            disabled={isLoading}

/>
        </div>
    )


    const footerContent = (
        <div className=" text-neutral-400 text-center mt-4">
            <p>Already have an account ?

                <span onClick={onToggle}
                className=" text-white cursor-pointer hover:underline hover:text-sky-400 transition">Sign In</span>
            </p>

        </div>
    )

    return  (
   <Model 
   disabled={isLoading}
    isOpen={registerModal.isOpen} 
    title="Create an Account"
     actionLabel="Register" 
     onClose={registerModal.onClose} 
     onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent} />
      
     
    )
}


export default RegisterModal;