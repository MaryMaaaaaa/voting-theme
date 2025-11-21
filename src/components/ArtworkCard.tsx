import React from 'react';
import { Heart } from 'lucide-react';
import { cn } from './ui/utils';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface ArtworkEntry {
  id: string;
  title: string;
  author: string;
  coverUrl: string;    // For Homepage Grid
  previewUrl: string;  // For Detail Page
  votes: number;
  description?: string;
  category?: 'Product theme' | 'Marketing theme';
  keywords?: string[];
  ownerId?: string;
  createdAt?: string;
  views?: number;
}

interface ArtworkCardProps {
  entry: ArtworkEntry;
  isVoted?: boolean;
  onClick?: (entry: ArtworkEntry) => void;
  onVote?: (e: React.MouseEvent, id: string) => void;
}

export const ArtworkCard = ({ entry, isVoted, onClick, onVote }: ArtworkCardProps) => {
  const { title, coverUrl, votes } = entry;

  return (
    <div 
      className="flex flex-col gap-2 group cursor-pointer"
      onClick={() => onClick?.(entry)}
    >
      {/* Card Preview - Aspect Ratio 268:389 */}
      <div className="relative rounded-lg overflow-hidden aspect-[268/389] shadow-sm transition-transform group-hover:-translate-y-1 bg-gray-800">
        <ImageWithFallback 
          src={coverUrl} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-1 mt-1">
        <div className="flex flex-col">
          <span className="text-white text-base font-semibold leading-tight">{title}</span>
        </div>
        
        <button 
          onClick={(e) => onVote?.(e, entry.id)}
          className={cn(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-colors group/vote",
            isVoted 
              ? "bg-red-500/10 text-red-500" 
              : "bg-[#3d3d3d] hover:bg-[#4d4d4d] text-white"
          )}
        >
          <Heart 
            className={cn(
              "h-4 w-4 transition-colors",
              isVoted ? "fill-red-500 text-red-500" : "text-gray-400 group-hover/vote:text-red-500 group-hover/vote:fill-red-500"
            )} 
          />
          <span className="text-sm font-medium">{votes}</span>
        </button>
      </div>
    </div>
  );
};
