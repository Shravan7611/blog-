import React from 'react';
import BlogList from '../components/BlogList';
import DarkModeToggle from '../components/DarkModeToggle';
import dbConnect from '../utils/dbConnect';
import Post from '../models/Post';

const HomePage = ({ posts }) => (
  <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold">My Blog</h1>
    <DarkModeToggle />
    <BlogList posts={posts} />
    
    <a href="/submit" className="mt-4 inline-block bg-blue-500 text-white p-2 rounded">Submit a New Post</a>
  </div>
);

export async function getServerSideProps() {
  await dbConnect();
  
  const posts = await Post.find({}).lean();
  
  return { props: { posts } };
}

export default HomePage;
