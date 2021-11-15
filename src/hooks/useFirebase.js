import initializeFirebase from './../Pages/Login/Firebase/Firebase.init';
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, getIdToken,onAuthStateChanged,updateProfile, signOut } from "firebase/auth";
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const registerUser = (email, password,name,history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password) 
        .then((userCredential) => {
            setAuthError('');
            const newUser={email,displayName:name};
              setUser(newUser);
             saveUser(email,name);
              updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
            }).catch((error) => {
            });
            history.replace('/');
          })
          .catch((error) => {
        setAuthError(error.message);
           })
          .finally(() => setIsLoading(false));
          
    }

     //login user with email and password
     const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
          }) 
          .catch((error) => {
            setAuthError(error.message);
          })
          .finally(() => setIsLoading(false));
    }
      // observer 
      useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                .then(idToken => {
                    setToken(idToken);
                })
            } else {
                setUser({})
            }
            setIsLoading(false); 
        });
        return () => unsubscribed;
    }, [])


    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])
    //logout part

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
        .finally(() => setIsLoading(false));
    }
const saveUser=(email,displayName)=>{
    const user = { email, displayName };
    fetch('http://localhost:5000/users', {
        method:'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then()
}

    return{
        user,
        admin,
        token,
        registerUser,
        loginUser,
        isLoading,
        authError,
        logout
    }
}
    
export default useFirebase;