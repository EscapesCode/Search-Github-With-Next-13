"use client";
import Form from '@/components/Form'
import Button from '@/components/Button'
import Header from '@/components/Header'
import Detail from '@/components/Detail'
import {use, useState} from 'react'
import { User } from '@/types/user';
import { CariRes } from '@/types/CariRes';

export default function Home() {
  const [isLoading,setisLoading] = useState(false)
  const [Cari,setCari] = useState("")
  const [Result,setResult] = useState<CariRes | null>(null)
  const onsearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(Cari){
      setisLoading(true)
      fetch(`https://api.github.com/search/users?q=${Cari}&per_page=5`)
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        const users : User[] =data.items
        const CariRes : CariRes={
          users: users,
          cari: Cari
        }
        setResult(CariRes)
      }).finally(()=>{
        setisLoading(false)
      })
    }
  }
  return (
    <div className='w-96'>
        <Header/>
        <form className='flex h-10 mb-10' onSubmit={onsearchSubmit} >
        <Form value={Cari} onChange={(e)=>setCari(e.target.value)}/>
        <Button isLoading={isLoading} type='submit'/>
        </form>
       {Result && <Detail result={Result}/>}
    </div>
  )
}
