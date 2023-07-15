import useLoginModel from "@/hooks/UserLoginmodal"
import { useCallback, useState } from "react";
import Input from "../Input"
import Model from "../Model";
import useRegisterModel from "@/hooks/UserRegisterModal";
import LoginModal from "./LoginModal";




const RegisterModal = () =>{
    const loginModal = useLoginModel();
    const RegisterModal = useRegisterModel();

    const [email, setEmail] = useState('');
    const [password, setPassword ] =useState('');
    const [name, setName] = useState('')
    const [userName, setUserName] =useState('')
    const [isLoading , setIsloading ] = useState(false);

    const onToggle = useCallback(() =>{
        if(isLoading){
            return
        }

        RegisterModal.onClose();
        loginModal.onOpen();

    },[isLoading, RegisterModal, loginModal])

    const onSubmit = useCallback(async() =>{
        try{
                setIsloading(true)
                //todo register and login


                RegisterModal.onClose();

        }
        catch(error){
            console.log(error)
        }
        finally{
            setIsloading(false);        }
    },[loginModal])


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
            value ={userName}
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
    isOpen={RegisterModal.isOpen} 
    title="Create an Account"
     actionLabel="Register" 
     onClose={RegisterModal.onClose} 
     onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent} />
      
     
    )
}


export default RegisterModal;