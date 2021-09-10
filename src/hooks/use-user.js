import {useState,useEffect,useContext} from 'react';
import {getUserbyUserId} from '../services/firebase'
import UserContext from '../context/user';

export default function useUser(){
    const[activeUser,setActiveUser]=useState('')
    const {user}=useContext(UserContext);

    useEffect(() => {
        async function getUserObjbyUserId(){
            const [response]=await getUserbyUserId()
            setActiveUser({...response});
        }
        if(user && user.id){
            getUserObjbyUserId()
        }
    }, [user])

    return {user:activeUser}
}