"use client"; // This component handles client-side interactions

import React, { useState, useEffect } from 'react';
// Link is handled by Button component
import Button from '@/components/ui/Button';
// Icons are passed in via props, no need to import them here
import SearchBar from '@/components/ui/SearchBar';

// Define the structure of a blog post (can be shared or redefined)
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  icon: React.JSX.Element;
  imageUrl: string;
}

interface BlogListClientProps {
  initialPosts: BlogPost[]; // Receive initial posts from the server component
}

const BlogListClient: React.FC<BlogListClientProps> = ({ initialPosts }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(initialPosts);

  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    // Filter based on the initialPosts prop
    const results = initialPosts.filter(post =>
      post.title.toLowerCase().includes(lowerCaseQuery) ||
      post.excerpt.toLowerCase().includes(lowerCaseQuery) ||
      post.category.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredPosts(results);
  }, [searchQuery, initialPosts]); // Re-run effect when query or initialPosts change

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      {/* Search Bar */}
      <div className="mb-8 flex justify-center">
        <SearchBar
          placeholder="Search blog posts..."
          onSearchChange={handleSearchChange}
          className="w-full md:w-1/2 lg:w-1/3"
        />
      </div>

      {/* Category Filters - TODO: Integrate filtering logic */}
      <div className="mb-12 flex justify-center">
        <div className="inline-flex p-1 bg-highlight/10 rounded-full">
          <button className="px-4 py-2 rounded-full bg-accent text-white">All</button>
          <button className="px-4 py-2 rounded-full hover:bg-highlight/20 transition-colors">Gym</button>
          <button className="px-4 py-2 rounded-full hover:bg-highlight/20 transition-colors">Nutrition</button>
          <button className="px-4 py-2 rounded-full hover:bg-highlight/20 transition-colors">Lifestyle</button>
        </div>
      </div>

      {/* Blog Post Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-background border border-accent/20 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Placeholder for blog post image */}
              <div className="h-48 bg-highlight/10 flex items-center justify-center">
                <span className="text-xl font-bold">Blog Image</span>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="mr-2">
                    {post.icon}
                  </div>
                  <span className="text-xs uppercase tracking-wider text-accent">
                    {post.category}
                  </span>
                  <span className="mx-2 text-accent">•</span>
                  <span className="text-xs text-accent">{post.date}</span>
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h3>
                <p className="mb-4 text-gray-700">{post.excerpt}</p>

                <Button href={`/blog/${post.id}`} variant="outline" className="w-full text-gray-800">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-12">
          <p>No blog posts found matching your search criteria.</p>
        </div>
      )}
    </>
  );
};

export default BlogListClient;
