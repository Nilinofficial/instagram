
import { USERS } from "../data/USERS"


function Suggestions() {
    return (
        <div  className="mt-4 ml-10">

            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-sm font-bold">Suggestions for you</h3>
                <button className="text-gray-600 font-semibold">See All</button>
            </div>
        
            {USERS.slice(1,6).map((user) => (
                <div key={user.user} className="flex items-center justify-between mt-3 ">
                    <img className="w-10 h-10 rounded-full border p-[2px]" src={user.image} alt="" />
                   
                   <div className="flex-1 ml-4">
                   <h2 className="font-semibold">{user.user}</h2>
                   
                   </div>
                   <button className="text-blue-400">Follow</button>
                    </div>
            ))}
            
            
        </div>
    )
}

export default Suggestions
