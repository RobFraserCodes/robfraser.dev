'use client';

import { supabase } from '@/utils/supabaseClient';
import useSWR from 'swr';
import { Skeleton } from '@/components/ui/skeleton';
import EmailSubscribe from '../../components/subComponents/emailSubscribe';

async function fetcher() {
  let { data, error } = await supabase
    .from('blog_posts')
    .select('*');
    
  if (error) throw error;

  return data;
}

function BlogPage() {
  const { data: posts, error } = useSWR('posts', fetcher);

  return (
    <section id="blog" className="min-h-screen bg-off-white pt-20 px-8">
      {error && (
        <div className='min-h-screen bg-off-white pt-20 px-8 text-center text-dark text-3xl font-extrabold sm:text-4xl'>
          Failed to load
        </div>
      )}
      {!posts && (
        <Skeleton className='' />
        
        )}
      {posts && (
        <EmailSubscribe />
      )}
      {posts && (
        <div className='grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3 pb-20'>
          {posts.map((post, key) => (
            <div className="w-full mx-auto group sm:max-w-sm bg-white p-8 shadow-md rounded-md" key={key}>
              <a href={post.slug}>
                <img src={post.image_url} loading="lazy" alt={post.title} className="w-full rounded-lg" />
                <div className="mt-3 space-y-2">
                  <span className="block text-primary text-sm">{post.created}</span>
                  <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{post.blurb}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default BlogPage;