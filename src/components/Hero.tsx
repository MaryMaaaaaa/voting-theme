import React from 'react';
import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { cn } from './ui/utils';

const TAGS = [
  "All", "Product theme", "Marketing theme"
];

interface HeroProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearch: (query: string) => void;
}

export const Hero = ({ selectedCategory, onSelectCategory, searchQuery, onSearch }: HeroProps) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 pt-16 pb-12 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Docs theme voting gallery</h1>
      <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-10 leading-relaxed">
        Vote for your favorite design works!
      </p>

      <div className="flex flex-col items-center gap-6">
        <div className="w-full max-w-xs relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Search" 
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className="pl-9 bg-gray-50 border-gray-200 focus-visible:ring-blue-600" 
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2 max-w-4xl">
          {TAGS.map((tag) => (
            <Badge 
              key={tag} 
              variant={selectedCategory === tag ? "default" : "secondary"}
              onClick={() => onSelectCategory(tag)}
              className={cn(
                "cursor-pointer font-normal px-4 py-2 rounded-full transition-all",
                selectedCategory === tag 
                  ? "bg-gray-900 hover:bg-gray-800 text-white" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-600"
              )}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};
