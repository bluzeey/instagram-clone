import React,{useEffect, useState, useContext} from 'react';
import { Link,useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/route';
import FirebaseContext from '../context/firebase';

export default function Login() {
    const history=useHistory()
    const {Firebase} = useContext(FirebaseContext)
    const [emailAddress,setEmailAddress]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
    const isInvalid=emailAddress===''||password===''
    
    const handleLogin=async (event)=>{
        event.preventDefault()

        try{
           await Firebase.auth().signInWithEmailAndPassword(emailAddress, password);
           history.push(ROUTES.DASHBOARD);
        }
        catch(error){
            setPassword('')
            setEmailAddress('')
            setError(error.message)
        }
    }

    useEffect(()=>{
        document.title="Login-Instagram"},
        [])
    return (
        <div className="container mx-auto flex h-screen items-center">
        <div className="container md">
          <img src="../images/iphone-with-profile.jpg" alt="iPhone with Instagram app"/>
        </div>
        <div className="container mx-auto">
          <div className="container">
             <h1 className="flex justify-center w-full">
                 <img src="../images/logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
             </h1>
             {error && <p className="mb-4 text-xs text-red-500">{error}</p>}
             <form onSubmit={handleLogin} method="POST">
                 <input 
                  type="text"
                  aria-label="Enter your email Address" 
                  placeholder="Email Address"
                  value={emailAddress}
                  className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                  onChange={({ target }) => setEmailAddress(target.value)}/>
                 <input 
                  type="password"
                  aria-label="Enter your Password" 
                  placeholder="Password"
                  value={password}
                  className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
                  onChange={({ target }) => setPassword(target.value)}/>
                 <button 
                 disabled={isInvalid}
                 type="submit"
                 className={`bg-blue-500 text-white w-full rounded h-8 font-bold ${isInvalid && 'opacity-50'}`}>
                     Log In
                 </button>
             </form>
             <div>
                  <p className="text-sm">
                    Don't have an account?{' '}
                    <Link to={ROUTES.SIGN_UP} className="font-bold">
                        Sign up
                    </Link>
                </p>
            </div>
          </div> 
        </div>
    </div>
    )
}
