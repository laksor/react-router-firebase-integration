import { useEffect, useState } from "react"
import app from '../firebase.init';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const signInWithGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result)=>{
            const user = result.user;
            setUser(user);
            console.log(user);
        })
        .catch((error)=>{
            setError(error.message);
        })
    };

    const handleSignOut = () =>{
        signOut(auth)
        .then(()=>{

        })
    }

    useEffect( () =>{
        onAuthStateChanged(auth, user =>{
            setUser(user);
        })
    }, [])

    return {
        user,
        signInWithGoogle,
        error,
        handleSignOut
    }
}

export default useFirebase;