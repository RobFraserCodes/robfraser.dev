import React from 'react'
import prisma from '@/lib/prisma';

export default async function PortfolioPage() {
  const post = await prisma.post.findMany({
    where: {
      published: true,
    },
  });

  return (
    <div>
      <h1>Portfolio</h1>
      <ul>
        {post.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
