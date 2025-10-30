import React, { useEffect } from 'react';
import BlogPage from '../components/BlogPage';
import { updateSEO } from '../utils/seo';

const News = () => {
  useEffect(() => {
    updateSEO('news');
  }, []);

  return <BlogPage />;
};

export default News;