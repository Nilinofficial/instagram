import {getProviders,signIn as SignIntoProvider,useSession} from 'next-auth/react'
import { useRouter } from 'next/dist/client/router';
import  Link from 'next/link'
import { useEffect } from 'react';


function signIn({providers}) {

const router = useRouter();
const {data:session} = useSession();



useEffect(() => {
    if(session){
        router.push("/")
    }
}, [session])



    return (
        <>
        {Object.values(providers).map((provider) => (

            <div key={provider.name} className="flex items-center justify-center w-full h-screen ">
            <div  className="flex flex-col items-center justify-center"  >
           
             <button  className="bg-blue-500 border text-white border-gray-500 p-1 rounded-md" onClick={() => SignIntoProvider(provider.id)}>
               Sign in with {provider.name}
             </button>
             <p className="p-3 text-red-400 font-semibold">Instagram 2.0</p>
           </div>
            </div>


          
        ))}
      </>
    )
}


export async function getServerSideProps() {
           const providers = await getProviders();

           return {
               props:{
                   providers
               }
           }
}

export default signIn
