import faker from 'faker';
import {useEffect,useState} from 'react'
import Story from './Story';
import { USERS } from '../data/USERS';


function Stories() {

    const [suggestions,setSuggestions] = useState([])




    return (
        <div className="flex space-x-2 p-6
         bg-white border-gray-200 border rounded-sm
          overflow-x-scroll scrollbar-thin scrollbar-thumb-black
         ">
            {USERS.map((profile) => (
                <Story key={profile.user}
                 img={profile.image} 
                 username={profile.user}/>
            ))}
        </div>
    )
}

export default Stories
