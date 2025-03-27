"use client"; // This component handles client-side interactions

import React, { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
// Icons are passed in via props
import SearchBar from '@/components/ui/SearchBar';

// Define the structure of a program
interface Program {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.JSX.Element;
}

interface ProgramListClientProps {
  initialPrograms: Program[]; // Receive initial programs from the server component
}

const ProgramListClient: React.FC<ProgramListClientProps> = ({ initialPrograms }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPrograms, setFilteredPrograms] = useState<Program[]>(initialPrograms);

  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    // Filter based on the initialPrograms prop
    const results = initialPrograms.filter(program =>
      program.title.toLowerCase().includes(lowerCaseQuery) ||
      program.description.toLowerCase().includes(lowerCaseQuery) ||
      program.category.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredPrograms(results);
  }, [searchQuery, initialPrograms]); // Re-run effect when query or initialPrograms change

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <>
      {/* Search Bar */}
      <div className="mb-8 flex justify-center">
        <SearchBar
          placeholder="Search programs..."
          onSearchChange={handleSearchChange}
          className="w-full md:w-1/2 lg:w-1/3"
        />
      </div>

      {/* Category Filters - TODO: Integrate filtering logic */}
      <div className="mb-12 flex justify-center">
        <div className="inline-flex p-1 bg-highlight/10 rounded-full">
          <button className="px-4 py-2 rounded-full bg-accent text-background">All</button>
          <button className="px-4 py-2 rounded-full hover:bg-highlight/20 transition-colors">Gym</button>
          <button className="px-4 py-2 rounded-full hover:bg-highlight/20 transition-colors">Nutrition</button>
          <button className="px-4 py-2 rounded-full hover:bg-highlight/20 transition-colors">Lifestyle</button>
        </div>
      </div>

      {/* Programs Grid */}
      {filteredPrograms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-background border border-accent/20 rounded-lg p-6 hover:shadow-md transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="mr-3 bg-highlight/10 p-2 rounded-full">
                  {program.icon}
                </div>
                <span className="text-xs uppercase tracking-wider text-accent font-semibold">
                  {program.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {program.title}
              </h3>
              <p className="mb-6 text-gray-700">
                {program.description}
              </p>
              <Button
                href={`/programs/${program.id}`}
                variant="outline"
                className="w-full text-gray-800"
              >
                Download PDF
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-12">
          <p>No programs found matching your search criteria.</p>
        </div>
      )}
    </>
  );
};

export default ProgramListClient;
