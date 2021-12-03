import { useSession,signOut } from "next-auth/react"
import { useRouter } from "next/dist/client/router"
import Link from 'next/link'
import { useEffect } from "react";




function MiniProfile() {

    const router = useRouter();
    const {data:session} = useSession();
    
useEffect(() => {
   if(!session) {
         router.push("/auth/signin")
     }

}, [session])
    



    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img className="w-16 h-16 border rounded-full p-[2px]" src={session?.user?.image} alt="" />
        

        <div className="flex-1 mx-4">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
        </div>
        
        <button  className="text-blue-400 text-sm"   onClick={signOut}>
        SignOut
        </button>

       
        

        

        </div>

      
    )
}

export default MiniProfile
