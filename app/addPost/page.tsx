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
      const { data: tag, error: tagError } = await supabase
      .from('tags')
      .insert([
        { tag_name: tagName.trim() },
      ], { upsert: true }); // If the tag already exists, it won't create a new one
        
      if (tagError) console.error('Error inserting tag: ', tagError);

      if (!tag) {
        console.error('No tag data after insert');
        return;
      }
      
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
    // The rest of your JSX code here
  );
}
