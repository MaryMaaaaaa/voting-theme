import React from 'react';
import { Button } from './ui/button';
import { FileText } from 'lucide-react';

interface HeaderProps {
  onUploadClick?: () => void;
  onAboutClick?: () => void;
  onHomeClick?: () => void;
}

export const Header = ({ onUploadClick, onAboutClick, onHomeClick }: HeaderProps) => {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-white border-b border-gray-100">
      <div className="flex items-center gap-2 cursor-pointer" onClick={onHomeClick}>
        <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <FileText className="h-5 w-5 text-white" />
        </div>
        <span className="font-bold text-xl tracking-tight text-gray-900">Docs theme</span>
      </div>
      
      <nav className="flex items-center gap-4">
        <Button variant="ghost" className="text-black font-medium hover:bg-gray-100" onClick={onAboutClick}>About event</Button>
        <Button variant="ghost" className="text-black font-medium hover:bg-gray-100" onClick={() => window.open('https://dg01web.zoom.us/launch/chat/v2/eyJzaWQiOiIxMmVjNTBjYzQ2ODg0ZmIzYTc1YjNhMjM4YjVhNGIwYUBjb25mZXJlbmNlLnhtcHAuem9vbS51cyJ9', '_blank')}>Contact us</Button>
        <Button 
          className="font-medium bg-blue-600 text-white hover:bg-blue-700"
          onClick={onUploadClick}
        >
          Upload work
        </Button>
      </nav>
    </header>
  );
};
