import React, { useState } from 'react';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = { imageUrl, title, description };
    setBlogs([...blogs, newBlog]);
    setImageUrl('');
    setTitle('');
    setDescription('');
  };

  const handleEdit = (index) => {
    // Implement editing logic
  };

  const handleDelete = (index) => {
    const updatedBlogs = [...blogs];
    updatedBlogs.splice(index, 1);
    setBlogs(updatedBlogs);
  };

  return (
    <div>
      <h2>Your Blog</h2>
      <p>Total Blog: {blogs.length}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Blog Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">POST BLOG</button>
      </form>
      <div>
        {blogs.map((blog, index) => (
          <div key={index}>
            <img src={blog.imageUrl} alt="Blog" />
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <button onClick={() => handleEdit(index)}>Edit Blog</button>
            <button onClick={() => handleDelete(index)}>Delete Blog</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
