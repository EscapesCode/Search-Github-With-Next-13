import React from 'react'
import Image from 'next/image'
import { CariRes } from '@/types/CariRes';
import UserItems from './UserItems';
// import { userAgent } from 'next/server';

export default function Detail({result}:Props) {
	return (
		<>
			{/* <p className='text-center mt-6 mb-2'>Hasil Pencarian: </p> */}
			<div className='rounded-lg border-1 bg-white mb-5 border-gray-800 outline  p-5 px-7 shadow-2xl shadow-gray-500'>
				<div className='overflow-y-auto h-56 '>
				<p className='text-gray-500 hover:text-gray-950 cursor-pointer ml-7 text-xl flex items-center'>
					
					</p>
					{result?.users.map((user, index) => (
						<UserItems key={index} user={user} />
					))}
					</div>
			</div>
		</>
	)
}

interface Props {
	result?: CariRes;
}
