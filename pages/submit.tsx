import React from 'react';
import BlogSubmissionForm from '../components/BlogSubmissionForm';

const SubmitPage = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold">Submit a New Blog Post</h1>
    <BlogSubmissionForm />
    
    <a href="/" className="mt-4 inline-block bg-blue-500 text-white p-2 rounded">Back to Home</a>
  </div>
);

export default SubmitPage;
