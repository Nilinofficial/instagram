import {
    SearchIcon,
    PlusCircleIcon,
    ShoppingBagIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
      } from '@heroicons/react/outline'

 import {HomeIcon} from '@heroicons/react/solid';
import { useSession,signOut } from 'next-auth/react';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/ModalAtom';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
 'next/router';
function Footer() {

const {data:session} = useSession();
const[openModal,setOpenModal] = useRecoilState(modalState)
const router = useRouter()
useEffect(() => {
    if(!session) {
          router.push("/auth/signin")
      }
 
 }, [session])
     

    return (
        <div className=" bottom-0  fixed md:hidden flex justify-between w-full px-5 shadow-sm border-t p-1 z-100 bg-white">
             <HomeIcon className="w-10 h-10" />
             <ShoppingBagIcon className="w-10 h-10" />
             <PlusCircleIcon className="w-10 h-10" onClick={() => setOpenModal(true)} />
             <HeartIcon className="w-10 h-10" />
{/* 
             <Link className="text-blue-400 text-sm" href="/auth/signin"> */}
         {/* <a onClick={signOut, "/auth/signin"} >
         
         <img 
            
             className=" w-10 h-10 rounded-full cursor-pointer" 
                  src={session?.user?.image} alt="" />
         </a>
        </Link> */}

             <img 
             onClick={signOut} 
             className=" w-10 h-10 rounded-full cursor-pointer" 
                  src={session?.user?.image} alt="" />
        </div>
    )
}

export default Footer
