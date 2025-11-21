import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Heart,
  ChevronDown,
  ChevronUp,
  Trash2
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArtworkEntry } from './ArtworkCard';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { cn } from './ui/utils';
import { extractColors } from '../utils/colorExtractor';

interface ThemeDetailProps {
  theme: ArtworkEntry;
  isVoted?: boolean;
  canDelete?: boolean;
  onBack: () => void;
  onNext: () => void;
  onPrev: () => void;
  onVote?: (e: React.MouseEvent, id: string) => void;
  onDelete?: () => void;
}

export const ThemeDetail = ({ theme, isVoted, canDelete, onBack, onNext, onPrev, onVote, onDelete }: ThemeDetailProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [dominantColors, setDominantColors] = useState<string[]>([]);

  // Mock data for the detail view
  const defaultKeywords = ["Digital Art", "Concept", "3D", "Vibrant"];
  const displayKeywords = theme.keywords && theme.keywords.length > 0 ? theme.keywords : defaultKeywords;
  
  useEffect(() => {
    const getColors = async () => {
      // Try to extract from preview URL first
      const urlToUse = theme.previewUrl || theme.coverUrl;
      if (urlToUse) {
        const extracted = await extractColors(urlToUse, 12);
        if (extracted.length > 0) {
          setDominantColors(extracted);
        } else {
          // Fallback colors if extraction fails
          setDominantColors([
            "#FFFFFF", "#F5F5F5", "#FFB74D", "#FFCC80", "#90CAF9", "#42A5F5",
            "#E0E0E0", "#BDBDBD", "#81C784", "#009688", "#7986CB", "#5C6BC0"
          ]);
        }
      }
    };
    getColors();
  }, [theme.previewUrl, theme.coverUrl]);

  const colors = dominantColors.length > 0 ? dominantColors : [
    "#FFFFFF", "#F5F5F5", "#FFB74D", "#FFCC80", "#90CAF9", "#42A5F5",
    "#E0E0E0", "#BDBDBD", "#81C784", "#009688", "#7986CB", "#5C6BC0"
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Top Section - Light Background */}
      <div className="bg-white w-full pt-8 px-6 pb-0">
        <div className="max-w-7xl mx-auto">
          {/* Controls */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1">
              <Button variant="ghost" onClick={onBack} className="gap-2 pl-0 hover:bg-transparent hover:text-gray-900 text-gray-500">
                <ChevronLeft className="h-4 w-4" />
                Back to gallery
              </Button>
            </div>
            
            {/* Navigation */}
            <div className="absolute right-6 top-28 md:static flex gap-2">
              <Button variant="outline" size="icon" className="h-8 w-8" onClick={onPrev}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8" onClick={onNext}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Image Display */}
          <div className="max-w-[896px] mx-auto relative z-20">
             <div className={cn(
               "w-full bg-white relative rounded-[10px] overflow-hidden transition-all duration-500 ease-in-out",
               "shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]",
               isExpanded ? "h-auto" : "h-[430px]"
             )}>
               <ImageWithFallback 
                 src={theme.previewUrl} 
                 alt={theme.title} 
                 className="w-full h-full object-cover object-top"
               />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Dark Info */}
      {/* -mt-10 pulls this section up 40px to overlap the image container */}
      <div className="flex-1 bg-[#333333] text-gray-200 pt-24 pb-16 px-6 relative z-30 -mt-10">
        
         {/* Toggle Button - Positioned relative to the Footer Top */}
         <div className="absolute -top-[20px] left-0 right-0 flex justify-center z-50">
           <Button 
             onClick={() => setIsExpanded(!isExpanded)}
             className={cn(
               "bg-[#333333] hover:bg-[#404040] text-white p-0",
               "w-[48px] h-[40px] rounded-[8px]",
               "shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]",
               "border-t border-[#364153]"
             )}
           >
             {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
           </Button>
         </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Left Column: Info & Stats */}
          <div>
            <div className="flex justify-between items-start mb-8">
              <div className="flex flex-col items-start">
                <h1 className="text-3xl font-bold text-white mb-2">{theme.title}</h1>
                
                {theme.category && (
                   <Badge variant="outline" className="text-gray-400 border-gray-600 mb-6 font-normal">
                     {theme.category}
                   </Badge>
                )}
                
                <div className="w-10 h-1 bg-blue-600 mt-2"></div>
              </div>

              {theme.coverUrl && (
                <div className="w-[88px] h-[128px] rounded-sm overflow-hidden shrink-0 ml-6 border border-white/10 shadow-lg bg-[#2d2d2d]">
                  <ImageWithFallback 
                    src={theme.coverUrl} 
                    alt={`${theme.title} cover`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            <div className="bg-[#3d3d3d] p-6 rounded-sm mb-8 text-sm leading-relaxed text-gray-300 italic">
              <p className="uppercase text-xs font-bold text-gray-500 mb-2 not-italic">ARTIST'S NOTES</p>
              {theme.description || "A stunning visual exploration combining modern techniques with classic aesthetics. Vote for this piece if it resonates with you!"}
            </div>

            <div className="flex gap-3 items-center">
              <Button 
                onClick={(e) => onVote?.(e, theme.id)}
                className={cn(
                  "bg-[#3d3d3d] hover:bg-[#4d4d4d] border border-gray-600 h-10 px-4 flex items-center gap-2 rounded-sm transition-colors",
                  isVoted ? "text-red-500 border-red-500/30 bg-red-500/5" : "text-white"
                )}
              >
                <Heart className={cn("h-4 w-4", isVoted ? "fill-red-500 text-red-500" : "text-gray-400")} />
                <span className="font-semibold">{isVoted ? "Voted" : "Vote"}</span>
                <span className="border-l border-gray-500 pl-2 ml-1 text-gray-400">{theme.votes}</span>
              </Button>

              {canDelete && (
                <Button 
                  onClick={onDelete}
                  variant="outline"
                  className="h-10 px-4 border-red-900/30 hover:bg-red-950/30 text-red-400 hover:text-red-300 hover:border-red-800/50 bg-transparent"
                  title="Delete this theme"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              )}
            </div>
          </div>

          {/* Right Column: Keywords & Colors */}
          <div>
            <div className="mb-8">
              <h3 className="text-xs font-bold text-gray-500 uppercase mb-3">KEYWORDS</h3>
              <div className="flex flex-wrap gap-2">
                {displayKeywords.map(tag => (
                  <Badge key={tag} variant="secondary" className="bg-[#3d3d3d] text-gray-300 hover:bg-[#4d4d4d] rounded-sm font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase mb-3">DOMINANT COLORS</h3>
              <div className="grid grid-cols-6 gap-2 w-max">
                {colors.map((color, i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-sm cursor-pointer hover:scale-110 transition-transform shadow-sm border border-white/10"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
