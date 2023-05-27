import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { use } from "react";
export default function Button({type,isLoading}:Props) {

  const Loading = ()=>{
    return (
      <div className='flex justify-center h-10 w-14 items-center'>
        <div className='animate-spin rounded-full h-10 w-10 border-b-4 border-white'></div>
      </div>
    )
  }

  return (
    <>
    <div>
      <button type={type} className='shadow-xl text-white shadow-gray-500 bg-black rounded-lg p-2  mb-0 mt-0 '>  {isLoading ? <Loading/> : <MagnifyingGlassIcon className='w-14 h-10 '/>}</button>
    </div>
    </>
  )
}

interface Props {
  type?:'button'| 'submit' | 'reset' | undefined;
  isLoading?:boolean;
}
