import React, { useState } from 'react';
import { ArtworkCard, ArtworkEntry } from './ArtworkCard';
import { cn } from './ui/utils';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Imports from Figma assets and other sources
import newspaperPreview from "figma:asset/b81cc98d0ded3defa8a90e8e144e25cdc688404e.png";
import bitterNewCover from "figma:asset/dc344f45e28915af20cde21d3e24cb6fee5b3f06.png";
import newspaperCover from "figma:asset/da56455993526d3f7d36718bd4b594f77cdf8cae.png";
import fluidCover from "figma:asset/ea990468e90aebbccdd0af7b3a5aec25d9548b51.png";
import japanCover from "figma:asset/6075d74544ba8450624ba615b454aff210c322e6.png";
// New preview image for Fluid and Japanese Design
import remoteWorkPreview from "figma:asset/517b05c61316e13f307b6d19fcdc3ee560ccd7d5.png";
// New preview image for Bitter
import bitterPreview from "figma:asset/92eae5a47023447f35fe04ec929c7dd8b2af5a3a.png";

export const ARTWORKS: ArtworkEntry[] = [
  {
    id: 'bitter',
    title: 'Bitter',
    author: 'Sarah Jenkins',
    coverUrl: bitterNewCover,
    previewUrl: bitterPreview,
    votes: 3500,
    category: 'Product theme',
    description: 'A vibrant and colorful exploration of the Bitter typeface, mixing modern photography with classic serifs.',
    keywords: ['Typography', 'Colorful', 'Bitter', 'Serif'],
    createdAt: '2024-01-15T10:00:00Z',
    views: 12500
  },
  {
    id: 'newspaper',
    title: 'Newspaper',
    author: 'Editorial Team',
    coverUrl: newspaperCover,
    previewUrl: newspaperPreview,
    votes: 3000,
    category: 'Product theme',
    description: 'Inspired by the layout and rhythm of newspapers, designed to evoke the feeling of reading a printed publication.',
    keywords: ['Editorial', 'Classic', 'Typography', 'Print'],
    createdAt: '2024-02-20T14:30:00Z',
    views: 11500
  },
  {
    id: 'fluid',
    title: 'Fluid',
    author: 'Design Team',
    coverUrl: fluidCover,
    previewUrl: remoteWorkPreview,
    votes: 2500,
    category: 'Product theme',
    description: 'Fluid design refers to a layout or interface that adapts smoothly to different screen sizes, resolutions, and devices.',
    keywords: ['Fluid', 'Water', 'Blue', 'Responsive'],
    createdAt: '2024-03-05T11:00:00Z',
    views: 10500
  },
  {
    id: 'japanese-design',
    title: 'Japanese Design',
    author: 'Kyoto Studio',
    coverUrl: japanCover,
    previewUrl: remoteWorkPreview,
    votes: 2000,
    category: 'Marketing theme',
    description: 'Japanese design is known for its balance of simplicity, precision, and delicate emotion. It values clarity, functionality, and beauty in every aspect of daily life.',
    keywords: ['Japan', 'Design', 'Mount Fuji', 'Red', 'Minimal'],
    createdAt: '2024-03-20T15:45:00Z',
    views: 9500
  }
];

interface ThemeGridProps {
  artworks: ArtworkEntry[];
  votedEntryId?: string | null;
  onThemeSelect: (entry: ArtworkEntry) => void;
  onVote: (e: React.MouseEvent, id: string) => void;
}

export const ThemeGrid = ({ artworks, votedEntryId, onThemeSelect, onVote }: ThemeGridProps) => {
  // Default to 'liked' as it's the first option now
  const [sortOption, setSortOption] = useState<'liked' | 'popular' | 'recent'>('liked');

  const sortedArtworks = [...artworks].sort((a, b) => {
    if (sortOption === 'popular') {
      return (b.views || 0) - (a.views || 0);
    } else if (sortOption === 'liked') {
      return b.votes - a.votes;
    } else {
      // Recent
      const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return dateB - dateA;
    }
  });

  return (
    <div className="w-full bg-[#2d2d2d] min-h-screen px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Sorting Header */}
        <div className="flex items-center gap-6 text-sm font-medium text-gray-500 mb-8">
          <span>Sort by:</span>
          <button 
            onClick={() => setSortOption('liked')}
            className={cn(
              "transition-colors",
              sortOption === 'liked' ? "text-white font-bold" : "hover:text-gray-300"
            )}
          >
            Most Liked
          </button>
          <button 
            onClick={() => setSortOption('popular')}
            className={cn(
              "transition-colors",
              sortOption === 'popular' ? "text-white font-bold" : "hover:text-gray-300"
            )}
          >
            Most Popular
          </button>
          <button 
            onClick={() => setSortOption('recent')}
            className={cn(
              "transition-colors",
              sortOption === 'recent' ? "text-white font-bold" : "hover:text-gray-300"
            )}
          >
            Most Recent
          </button>
        </div>

        {/* Grid: 4 columns on large screens */}
        {sortedArtworks.length === 0 ? (
          <div className="w-full flex flex-col items-center justify-center py-20 text-center">
             <p className="text-xl text-gray-400 font-medium">No works yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10">
            {sortedArtworks.map((entry) => (
              <ArtworkCard 
                key={entry.id} 
                entry={entry} 
                isVoted={votedEntryId === entry.id}
                onClick={onThemeSelect}
                onVote={onVote}
              />
            ))}
          </div>
        )}
      </div>

      {/* FAB */}
      <div className="fixed bottom-8 right-8">
        <div className="bg-white p-3 rounded-full shadow-lg cursor-pointer hover:scale-105 transition-transform">
           {/* Using a generic icon to represent the circle icon in bottom right */}
           <div className="bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full h-6 w-6 flex items-center justify-center">
             <div className="h-3 w-3 bg-white rounded-full opacity-50"></div>
           </div>
        </div>
      </div>
    </div>
  );
};
