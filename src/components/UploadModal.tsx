import React, { useState, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { UploadCloud, X, Image as ImageIcon } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (entry: { 
    title: string; 
    author: string; 
    description: string; 
    coverUrl: string;
    previewUrl: string;
    category: 'Product theme' | 'Marketing theme';
    keywords: string[];
  }) => void;
  userId: string;
}

const ImageUploadField = ({ 
  label, 
  url, 
  setUrl, 
  file,
  setFile,
  id 
}: { 
  label: string; 
  url: string; 
  setUrl: (url: string) => void;
  file: File | null;
  setFile: (file: File | null) => void;
  id: string 
}) => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    setFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const clearImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setUrl('');
    setFile(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <div 
        className={`relative border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center transition-colors cursor-pointer ${
          dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
        } ${url ? 'border-solid border-gray-200 p-0 overflow-hidden bg-gray-100' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => !url && inputRef.current?.click()}
      >
        <input 
          ref={inputRef}
          id={id}
          type="file" 
          className="hidden" 
          accept="image/*"
          onChange={handleChange}
        />

        {url ? (
          <div className="relative w-full h-48 group">
            <img src={url} alt="Preview" className="w-full h-full object-contain" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <Button variant="destructive" size="sm" onClick={clearImage} className="gap-2">
                 <X className="h-4 w-4" /> Remove Image
               </Button>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-2 py-4">
            <div className="p-3 bg-gray-100 rounded-full w-fit mx-auto">
              <UploadCloud className="h-6 w-6 text-gray-500" />
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-semibold text-blue-600 hover:underline">Click to upload</span> or drag and drop
            </div>
            <p className="text-xs text-gray-400">PNG, JPG or GIF (max. 800x400px)</p>
          </div>
        )}
      </div>
    </div>
  );
};

export const UploadModal = ({ isOpen, onClose, onSubmit, userId }: UploadModalProps) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [previewFile, setPreviewFile] = useState<File | null>(null);
  const [category, setCategory] = useState<'Product theme' | 'Marketing theme' | ''>('');
  const [keywordsStr, setKeywordsStr] = useState('');
  const [uploading, setUploading] = useState(false);

  const keywords = keywordsStr.split(',').map(k => k.trim()).filter(k => k);
  const isKeywordsValid = keywords.length > 0 && keywords.length <= 4;
  const isFormValid = title && author && description && category && coverFile && previewFile && isKeywordsValid;

  const uploadImage = async (file: File, path: string): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${path}_${Date.now()}.${fileExt}`;
    const filePath = `${userId}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('artwork-images')
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage
      .from('artwork-images')
      .getPublicUrl(filePath);

    return publicUrl;
  };

  const handleSubmit = async () => {
    if (!isFormValid || !coverFile || !previewFile) return;
    
    setUploading(true);
    try {
      // 上传图片到 Supabase Storage
      const coverPublicUrl = await uploadImage(coverFile, 'cover');
      const previewPublicUrl = await uploadImage(previewFile, 'preview');

      // 提交数据
      await onSubmit({ 
        title, 
        author, 
        description, 
        coverUrl: coverPublicUrl,
        previewUrl: previewPublicUrl,
        category: category as 'Product theme' | 'Marketing theme',
        keywords 
      });
      
      handleClose();
    } catch (error) {
      console.error('上传失败:', error);
      alert('上传失败，请重试');
    } finally {
      setUploading(false);
    }
  };

  const handleClose = () => {
    if (uploading) return; // 上传中不允许关闭
    onClose();
    // Reset form
    setTitle('');
    setAuthor('');
    setDescription('');
    setCoverUrl('');
    setPreviewUrl('');
    setCoverFile(null);
    setPreviewFile(null);
    setCategory('');
    setKeywordsStr('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Upload your work</DialogTitle>
          <DialogDescription>
            Show us your design! All fields are required to submit.
            <a 
              href="https://dg01docs.zoom.us/doc/IOu9SqJuTiKS9zh6oaqAnA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 font-medium ml-1 hover:underline inline-block"
            >
              Submission Requirements
            </a>
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Title *</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter artwork title" />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="author">Author Name *</Label>
            <Input id="author" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Your name" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="category">Category *</Label>
            <Select value={category} onValueChange={(val) => setCategory(val as any)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Product theme">Product theme</SelectItem>
                <SelectItem value="Marketing theme">Marketing theme</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="keywords">Keywords * (Max 4)</Label>
            <Input 
              id="keywords" 
              value={keywordsStr} 
              onChange={(e) => setKeywordsStr(e.target.value)} 
              placeholder="Enter keywords separated by commas (e.g. Dark, Minimal)" 
            />
            {!isKeywordsValid && keywordsStr.length > 0 && (
               <p className="text-xs text-red-500">Please enter 1 to 4 keywords.</p>
            )}
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Tell us about your work..." />
          </div>

          {/* Image Uploads */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <ImageUploadField 
               label="Cover Image (Homepage) *" 
               url={coverUrl} 
               setUrl={setCoverUrl}
               file={coverFile}
               setFile={setCoverFile}
               id="cover-upload"
             />
             <ImageUploadField 
               label="Docs Preview (Detail Page) *" 
               url={previewUrl} 
               setUrl={setPreviewUrl}
               file={previewFile}
               setFile={setPreviewFile}
               id="preview-upload"
             />
          </div>

        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleClose} disabled={uploading}>Cancel</Button>
          <Button 
            type="submit" 
            onClick={handleSubmit} 
            className="bg-blue-600 hover:bg-blue-700" 
            disabled={!isFormValid || uploading}
          >
            {uploading ? 'Uploading...' : 'Submit Entry'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
