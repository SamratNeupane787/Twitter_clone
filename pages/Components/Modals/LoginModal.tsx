import useLoginModel from "@/hooks/UserLoginmodal"
import { useCallback, useState } from "react";
import Input from "../Input"
import Model from "../Model";
import useRegisterModel from "@/hooks/UserRegisterModal";




const LoginModal = () =>{
    const loginModal = useLoginModel();
    const RegisterModal = useRegisterModel();
    const [email, setEmail] = useState('');
    const [password, setPassword ] =useState('');
    const [isLoading , setIsloading ] = useState(false);


    const onToggle = useCallback(() =>{
        if(isLoading){
            return
        }

        RegisterModal.onOpen();
        loginModal.onClose();

    },[isLoading, RegisterModal, loginModal])


    const onSubmit = useCallback(async() =>{
        try{
                setIsloading(true)
                //todo add login 


                loginModal.onClose();

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
            placeholder= 'Password'
            onChange={(e) => setPassword(e.target.value)}
            value ={password}
            disabled={isLoading}

/>
        </div>
    )

    const footerContent = (
        <div className=" text-neutral-400 text-center mt-4">
            <p>First Time Using Twitter? 

                <span onClick={onToggle}
                className=" text-white cursor-pointer hover:underline hover:text-sky-400 transition"> Create Account </span>
            </p>

        </div>
    )
    return  (
   <Model 
   disabled={isLoading}
    isOpen={loginModal.isOpen} 
    title="Login"
     actionLabel="Sign In " 
     onClose={loginModal.onClose} 
     onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent} />
    )
}


export default LoginModal;