import { User } from '@/types/user'
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function UserItems({user}:Props) {
  return (
	<div className='flex hover:bg-slate-300 hover:rounded-lg   justify-between
	items-center w-full text-slate-700 hover:text-black hover:cursor-pointer px-[5px] py-[5px]'>
		<div>
			<Image src={user?.avatar_url} alt='' width={50} height={50} className='rounded-full'/>
		</div>
		<div >
			<p className='text-sm text-left'>{user?.login}</p>
		</div>
		  <div className='hover:bg-black rounded-lg p-2 hover:text-white'>

		<span><Link href={`/${user.login}`}><ChevronRightIcon className='w-8 h-8 p-0'/></Link></span>
		</div>
	</div>
  )
}

interface Props {
	user:User;
}