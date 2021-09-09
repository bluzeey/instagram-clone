import React,{useEffect} from 'react';
import Header from '../components/header';
import Timeline from '../components/timeline';
import Sidebar from '../components/sidebar/';

export default function Dashboard() {
    useEffect(()=>{
        document.title="Instagram"
    },[])
    return (
        <div className="bg-gray-200">
            <Header/>
            <div className="grid grid-gap-4 grid-cols-3 justify-between mx-auto max-w-screen-lg">
             <Timeline/>
             <Sidebar/>
            </div>
        </div>
    )
}