import React from 'react'
import Image from "next/image";
export default function Header() {
	return (
		<>
		<div className='mb-5 flex justify-center font-poppins'>
			<Image src="/logo.png" alt='' width={110} height={100} className='mr-3' />
			<div className='pt-3'>
				<p className='font-normal text-2xl'>Search-Account </p> 
				<p className='text-3xl font-bold text-center'>  GITHUB</p>
				<p>
					Made With <span className='text-red-500'>❤</span> By Fiqro Najiah
				</p>
			</div>
		</div>
		</>
	)
}
