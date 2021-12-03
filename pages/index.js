import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Feed from '../components/Feed'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Modal from '../components/Modal'


export default function Home() {

  const {data:session} =  useSession()
  const router = useRouter()

  // useEffect(() => {
  //            if(!session) {
  //        router.push("/auth/signin")
  //    }
  // },[])

  return (
    
    <div className="">
      <Head>
        <title>Instagram 2.0</title>
        <link
         rel="icon" 
         href="https://apkmodhub.in/wp-content/uploads/2020/05/icon_clone.png" />
      </Head>

     

       <Header/>
     
             <Feed/>
       <Footer/>

       <Modal />

     
    
    </div>
  )
}
