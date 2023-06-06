'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function AddPost() {
  const [title, setTitle] = useState<string | null>('');
  const [author, setAuthor] = useState<string | null>('');
  const [blurb, setBlurb] = useState<string | null>('');
  const [slug, setSlug] = useState<string | null>('');
  const [content, setContent] = useState<string | null>('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !author || !content || !blurb || !slug  || !image) {
      console.error('All fields are required');
      return;
    }

    // Upload the image to Supabase Storage
    const filePath = `posts/${image.name}`;
    let { error: uploadError } = await supabase.storage
    .from('images')
    .upload(filePath, image);

    if (uploadError) {
      console.error('Error uploading image: ', uploadError);
      return;
    }

    // Get the uploaded file url
    let publicURL = supabase.storage
    .from('images')
    .getPublicUrl(filePath);

    if (!publicURL) {
      console.error('Error getting image URL');
      return;
    }

    // Now save the post in the database, including the image url
    const { data, error } = await supabase
    .from('blog_posts')
    .insert([
      {
        title,
        author,
        content,
        blurb,
        slug,
        image_url: publicURL,  // Save the image URL in the database
      },
    ]);
    
    if (error) console.error('Error inserting post: ', error);

    if (!data) {
      console.error('No data received after inserting post');
      return;
    }

    // Reset form
    setTitle('');
    setAuthor('');
    setContent('');
    setBlurb('');
    setSlug('');
    setImage(null);
  };

  return (
    <div className='bg-off-white '>
    <div className='flex items-center justify-center px-20 max-w-5xl mx-auto'>
        <form onSubmit={handleSubmit} className='my-8 flex flex-col items-center justify-center w-full'>
        <h2 className='mb-4'>Add Post</h2>
        <div className='flex flex-col mb-4 w-full'>
            <label className='justify-start text-gray mb-2'>Post Title</label>
            <input 
            className='p-2 rounded-md mb-4 w-full'
            type="text" value={title ?? ''} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
        </div>
        <div className='flex flex-col mb-4 w-full'>
            <label className='justify-start text-gray mb-2'>Author</label>
            <input 
            className='p-2 rounded-md mb-4 w-full'
            type="text" value={author ?? ''} onChange={e => setAuthor(e.target.value)} placeholder="Author" required />
        </div>
        <div className='flex flex-col mb-4 w-full'>
            <label className='justify-start text-gray mb-2'>Blurb</label>
            <input 
            className='p-2 rounded-md mb-4 w-full'
            type="text" value={blurb ?? ''} onChange={e => setBlurb(e.target.value)} placeholder="Blurb" required />
        </div>
        <div className='flex flex-col mb-4 w-full'>
            <label className='justify-start text-gray mb-2'>Slug</label>
            <input 
            className='p-2 rounded-md mb-4 w-full'
            type="text" value={slug ?? ''} onChange={e => setSlug(e.target.value)} placeholder="Slug" required />
        </div>
        <div className='flex flex-col mb-4 w-full'>
            <label className='justify-start text-gray mb-2'>Content</label>
            <textarea 
            className='p-2 rounded-md mb-4 w-full'
            rows={10} value={content ?? ''} onChange={e => setContent(e.target.value)} placeholder="Content" required />
        </div>
        <div className='flex flex-col mb-4 w-full'>
            <label className='justify-start text-gray mb-2'>Image</label>
            <input 
            className='p-2 rounded-md mb-4 w-full'
            type="file" onChange={e => setImage(e.target.files ? e.target.files[0] : null)} required />
        </div>
        <button type="submit" className='bg-primary hover:bg-primary-dark text-white p-2 rounded-md'>Add Post</button>
        </form>
    </div>
    </div>
  );
}