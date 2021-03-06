import Image from 'next/image'
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
      } from '@heroicons/react/outline'

 import {HomeIcon} from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/ModalAtom';

function Header() {

const {data:session} = useSession();
const router = useRouter();

const[openModal,setOpenModal] = useRecoilState(modalState);

    return (
      <div className="shadow-sm border-b bg-white sticky top-0 z-50 w-full  ">
            <div   className="flex items-center justify-between bg-red max-w-6xl mx-5 lg:mx-auto">
            <div onClick={() => router.push("/")} className="relative hidden lg:inline-grid w-20 h-20 cursor-pointer ">
                <Image
               
                    src="https://links.papareact.com/ocw"
                    layout="fill"
                    objectFit="contain"
                />
            </div>

            <div onClick={() => router.push("/")} className="relative w-10 h-10 flex-shrink-0 lg:hidden cursor-pointer ">
                <Image
                    src="https://links.papareact.com/jjm"
                    layout="fill"
                    objectFit="contain"
                />
            </div>

            <div className="max-w-xs">
                <div className="relative mt-1 p-3 rounded-md  ">
                    <div className="absolute inset-y-0 flex pl-3 items-center  " >
                        <SearchIcon className=" h-5 w-5 text-gray-400  " />
                    </div>
                    <input
                        className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300
                 focus:ring-black focus:border-black rounded-md"
                        type="text" placeholder="search" />
                </div>
            </div>

            <div className="flex items-center space-x-4 ">
                <HomeIcon onClick={() => router.push("/")} className="navBtn"/>
                <div className="md:hidden relative">
                <PaperAirplaneIcon className=" h-8  cursor-pointer rotate-45"/>

                <div className="absolute -top-1 -right-2 text-xs
         w-5 h-5 bg-red-500 flex
          rounded-full items-center justify-center
          animate-pulse text-white
         ">
                      4
         </div>
                </div>
               

                  
         <div className="navBtn relative"> 
         <PaperAirplaneIcon className="navBtn rotate-45"/>
         <div className="absolute -top-1 -right-2 text-xs
         w-5 h-5 bg-red-500 flex
          rounded-full items-center justify-center
          animate-pulse text-white
         ">
                      4
         </div>
         </div>

               
                <PlusCircleIcon onClick={() => setOpenModal(true)} className="navBtn"/>
                <UserGroupIcon className="navBtn"/>
                <HeartIcon className="navBtn"/>
                      
                  <img className="hidden md:inline-grid w-10 h-10 rounded-full cursor-pointer" 
                  src= {session?.user?.image} alt="" />
            </div>

        </div>
      </div>
    )
}

export default Header
