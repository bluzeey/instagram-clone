import {useEffect,useState} from 'react'
import Story from './Story'
import faker from 'faker'
function Stories() {
    const [suggestions,setSuggestions]=useState([])
    useEffect(()=>{
        const suggestions = [...Array(20)].map((_,i)=>({
             ...faker.helpers.contextualCard(),
             id:i
        }))

        setSuggestions(suggestions)
    },[])
    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 
        border-gray-200 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
            {suggestions.map((profile,i)=>(
                <Story key={profile.id} 
                img={`https://i.pravatar.cc/150?img=${i}`} 
                username={profile.username}/>
            ))}
        </div>
    )
}

export default Stories
