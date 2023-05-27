import React from 'react'

export default function page({ params }: { params: { slug: string } }) {
  // const router = useRouter()

  return (
    <div>Ini adalah halaman detail : {params.slug}  </div>
  )
}
