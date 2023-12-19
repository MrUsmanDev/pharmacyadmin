'use client' 
import React, { useEffect } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { useAppSelector } from '@/redux/hooks'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import Main from './Main'
import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'
import AuthProvider from '../context/AuthProvider'
import { GetUsersWRTID } from '@/utils/Login/LoginAPI'
import { useAppDispatch } from '@/redux/hooks'
import { setUsers } from '@/redux/features/LoginSlice'
const MainLayout = ({children, session}:{children: React.ReactNode, session: any}) => {
  const dispatch = useAppDispatch()
   useEffect(()=>{
    if(session){
      fetchData()
    }
   },[session])
   const fetchData = async() =>{
    const res = await GetUsersWRTID(session?.user[0]?.UserID)
         if(res.status){
          const mData = res.data.Data
          dispatch(setUsers(mData))
         }
   }
  return (
   <>
     <div className="main-wrapper">
       {session?.user &&  <Header />}
       {session?.user &&  <Sidebar />}
        {children}
      </div>  
   </>
  )
}

export default MainLayout