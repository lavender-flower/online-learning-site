import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase=()=>{
    const[user,setUser]=useState({});
    const [isLoading, setIsLoading]=useState(true); 
    const auth=getAuth();
    const signInUsingGoogle=()=>{
        const googleProvider=new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUser(result.user);
        })
        .finally(()=>setIsLoading(false));


}

const logOut =()=>{
    setIsLoading(true);
    signOut(auth)
    .then(()=>{})
    .finally(()=>setIsLoading(false));
}

useEffect(()=>{
    const unsubscribed = onAuthStateChanged(auth,user=>{
        if(user){
            setUser(user);
        }
        else{
            setUser({})
        }
        setIsLoading(false);
    });
    return ()=>unsubscribed;

},[])

    return { 
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;