import React from 'react'

export default function page({ params }: { params: { slug: string } }) {
  // const router = useRouter()

  return (
    <div className='text-center text-lg'>
      <p>
      Menampilkan Detail Akun Github Dengan Username :  {params.slug} 
      </p>
      <br />
      <p>
      Halaman Masih Dalam Tahap Pengembangan , Stay Tune Terus Yahh 😊
      </p>
    </div>
    
  )
}
