import React from 'react'

export default async function Post({ params }: { params: { slug: string }}) {
    
    const { slug } = params;
  
    return (
    <div>{slug}</div>
  )
}
