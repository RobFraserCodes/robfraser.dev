// pages/addPost.js
'use client';

import { useState } from 'react';
import { supabase } from '@/utils/supabaseClient';

export default function AddPost() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
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
  let { publicURL, error: urlError } = supabase.storage
    .from('images')
    .getPublicUrl(filePath);

  if (urlError) {
    console.error('Error getting image URL: ', urlError);
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
        image_url: publicURL,  // Save the image URL in the database
      },
    ]);
    
    if (error) console.error('Error inserting post: ', error);
    
    // Add each tag to the tags table and link it to the new post
    const tagArray = tags.split(','); // Split tags by comma
    for (const tagName of tagArray) {
      const { data: tag, error: tagError } = await supabase
        .from('tags')
        .insert([
          { tag_name: tagName.trim() },
        ], { upsert: true }); // If the tag already exists, it won't create a new one
        
      if (tagError) console.error('Error inserting tag: ', tagError);
      
      const { data: postTag, error: postTagError } = await supabase
        .from('post_tags')
        .insert([
          { post_id: data[0].id, tag_id: tag[0].id },
        ]);
        
      if (postTagError) console.error('Error inserting post-tag: ', postTagError);
    }
    
    // Reset form
    setTitle('');
    setAuthor('');
    setContent('');
    setTags('');
    setImage(null);
  };

  return (
    <div className='bg-off-white'>
    <div className='h-screen flex items-center justify-center px-8'>
        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center w-full'>
        <h2 className='mb-4'>Add a Post</h2>
        <div className='flex flex-col mb-4 w-full'>
            <label className='justify-start text-gray mb-2'>Post Title</label>
            <input 
            className='p-2 rounded-md mb-4 w-full'
            type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
        </div>
        <div className='flex flex-col mb-4 w-full'>
            <label className='justify-start text-gray mb-2'>Author</label>
            <input 
            className='p-2 rounded-md mb-4 w-full'
            type="text" value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author" required />
        </div>
        <div className='flex flex-col mb-4 w-full'>
            <label className='justify-start text-gray mb-2'>Content</label>
            <textarea 
            className='p-2 rounded-md mb-4 w-full'
            rows={10} value={content} onChange={e => setContent(e.target.value)} placeholder="Content" required />
        </div>
        <div className='flex flex-col mb-4 w-full'>
            <label className='justify-start text-gray mb-2'>Image</label>
            <input 
            className='p-2 rounded-md mb-4 w-full'
            type="file" onChange={e => setImage(e.target.files[0])} required />
        </div>
        <div className='flex flex-col mb-4 w-full'>
            <label className='justify-start text-gray mb-2'>Tags</label>
            <input 
            className='p-2 rounded-md mb-4 w-full'
            type="text" value={tags} onChange={e => setTags(e.target.value)} placeholder="Tags (comma-separated)" required />
        </div>
        <button type="submit" className='bg-primary hover:bg-primary-dark text-white p-2 rounded-md'>Add Post</button>
        </form>
    </div>
    </div>
  );
}