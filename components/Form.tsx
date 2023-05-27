import React from 'react'

export default function Form({value,onChange}:Props) {
  return (
      <input placeholder='Type Username Here ' className=' h-14 outline-none border-none rounded-lg p-[10px] px-5 mr-2 w-full shadow-xl focus:outline-none focus:shadow-inner focus:ring-2 focus:ring-gray-800 shadow-gray-400' value={value} onChange={onChange}/>
  )
}

interface Props {
  value?:string;
  onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

