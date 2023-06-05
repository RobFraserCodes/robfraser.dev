'use client';

import { useState } from 'react';
import { supabase } from '@/utils/supabaseClient';

export default function AddPost() {
  const [title, setTitle] = useState<string | null>('');
  const [author, setAuthor] = useState<string | null>('');
  const [blurb, setBlurb] = useState<string | null>('');
  const [slug, setSlug] = useState<string | null>('');
  const [content, setContent] = useState<string | null>('');
  const [tags, setTags] = useState<string | null>('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !author || !content || !tags || !image) {
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
        image_url: publicURL,  // Save the image URL in the database
      },
    ]);
    
    if (error) console.error('Error inserting post: ', error);

    if (!data) {
      console.error('No data received after inserting post');
      return;
    }
    
    // Add each tag to the tags table and link it to the new post
    const tagArray = tags.split(','); // Split tags by comma
    for (const tagName of tagArray) {
      let tag: { id: number; tag_name: string } | null = null;
      
      // Check if tag already exists
      const { data: existingTags, error: getTagError } = await supabase
        .from('tags')
        .select('id')
        .eq('tag_name', tagName.trim());
      
      if (getTagError) console.error('Error getting tag: ', getTagError);
      
      if (existingTags && existingTags.length > 0) {
        // If tag exists, use the existing tag
        tag = existingTags[0];
      } else {
        // If tag doesn't exist, create a new one
        const { data: newTag, error: insertTagError } = await supabase
          .from('tags')
          .insert([
            { tag_name: tagName.trim() },
          ]) as { data: { id: number, tag_name: string }[] | null, error: Error | null };
          
        if (insertTagError) console.error('Error inserting tag: ', insertTagError);
        if (newTag && newTag.length > 0) {
          tag = newTag[0];
        }
      }

      // Link the tag to the new post
      if (tag) {
        const { data: postTag, error: postTagError } = await supabase
          .from('post_tags')
          .insert([
            { post_id: data[0].id, tag_id: tag.id },
          ]);
          
        if (postTagError) console.error('Error inserting post-tag: ', postTagError);
      }
    }

    // Reset form
    setTitle('');
    setAuthor('');
    setContent('');
    setTags('');
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
            type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
        </div>
        <div className='flex flex-col mb-4 w-full'>
            <label className='justify-start text-gray mb-2'>Author</label>
            <input 
            className='p-2 rounded-md mb-4 w-full'
            type="text" value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author" required />
        </div>
        <div className='flex flex-col mb-4 w-full'>
            <label className='justify-start text-gray mb-2'>Blurb</label>
            <input 
            className='p-2 rounded-md mb-4 w-full'
            type="text" value={blurb} onChange={e => setBlurb(e.target.value)} placeholder="Blurb" required />
        </div>
        <div className='flex flex-col mb-4 w-full'>
            <label className='justify-start text-gray mb-2'>Slug</label>
            <input 
            className='p-2 rounded-md mb-4 w-full'
            type="text" value={slug} onChange={e => setSlug(e.target.value)} placeholder="Slug" required />
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
            type="file" onChange={e => setImage(e.target.files ? e.target.files[0] : null)} required />
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