import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ThemeGrid, ARTWORKS } from './components/ThemeGrid';
import { ThemeDetail } from './components/ThemeDetail';
import { ArtworkEntry } from './components/ArtworkCard';
import { UploadModal } from './components/UploadModal';
import EmailTemplate from './imports/EmailTemplate-18-1971';
import { supabase } from './lib/supabase';

export default function App() {
  const [artworks, setArtworks] = useState<ArtworkEntry[]>([]);
  const [selectedEntry, setSelectedEntry] = useState<ArtworkEntry | null>(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [view, setView] = useState<'home' | 'about'>('home');
  const [votedEntryId, setVotedEntryId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [userId, setUserId] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState(true);

  // 初始化：获取用户ID和投票记录
  useEffect(() => {
    const savedVote = localStorage.getItem('votedEntryId');
    if (savedVote) {
      setVotedEntryId(savedVote);
    }

    let storedUserId = localStorage.getItem('userId');
    if (!storedUserId) {
      storedUserId = 'user_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('userId', storedUserId);
    }
    setUserId(storedUserId);
  }, []);

  // 从 Supabase 加载所有作品
  useEffect(() => {
    loadArtworks();

    // 订阅实时更新
    const channel = supabase
      .channel('artworks_changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'artworks' }, 
        () => {
          loadArtworks();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const loadArtworks = async () => {
    try {
      const { data, error } = await supabase
        .from('artworks')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      const formattedData: ArtworkEntry[] = (data || []).map((item: any) => ({
        id: item.id,
        title: item.title,
        author: item.author,
        description: item.description,
        coverUrl: item.cover_url,
        previewUrl: item.preview_url,
        votes: item.votes,
        category: item.category,
        keywords: item.keywords,
        ownerId: item.owner_id
      }));

      setArtworks(formattedData);
    } catch (error) {
      console.error('加载作品失败:', error);
      // 如果加载失败，使用默认数据
      setArtworks(ARTWORKS);
    } finally {
      setLoading(false);
    }
  };

  const handleAddEntry = async (data: { 
    title: string; 
    author: string; 
    description: string; 
    coverUrl: string; 
    previewUrl: string;
    category: 'Product theme' | 'Marketing theme'; 
    keywords: string[] 
  }) => {
    try {
      const newEntry = {
        id: Date.now().toString(),
        title: data.title,
        author: data.author,
        description: data.description,
        cover_url: data.coverUrl,
        preview_url: data.previewUrl,
        votes: 0,
        category: data.category,
        keywords: data.keywords,
        owner_id: userId
      };

      const { error } = await supabase
        .from('artworks')
        .insert([newEntry]);

      if (error) throw error;

      // 实时订阅会自动更新列表，无需手动添加
    } catch (error) {
      console.error('上传作品失败:', error);
      alert('上传失败，请重试');
    }
  };

  const handleDeleteEntry = async (id: string) => {
    try {
      const { error } = await supabase
        .from('artworks')
        .delete()
        .eq('id', id);

      if (error) throw error;

      if (selectedEntry?.id === id) {
        setSelectedEntry(null);
      }
    } catch (error) {
      console.error('删除作品失败:', error);
      alert('删除失败，请重试');
    }
  };

  const handleVote = async (e: React.MouseEvent | undefined, id: string) => {
    if (e) e.stopPropagation();
    
    try {
      const artwork = artworks.find(a => a.id === id);
      if (!artwork) return;

      if (votedEntryId === id) {
        // 取消投票
        const { error } = await supabase
          .from('artworks')
          .update({ votes: Math.max(0, artwork.votes - 1) })
          .eq('id', id);

        if (error) throw error;

        setVotedEntryId(null);
        localStorage.removeItem('votedEntryId');
      } else {
        // 投新票
        const { error } = await supabase
          .from('artworks')
          .update({ votes: artwork.votes + 1 })
          .eq('id', id);

        if (error) throw error;

        // 如果之前投过其他作品，取消那个投票
        if (votedEntryId) {
          const oldArtwork = artworks.find(a => a.id === votedEntryId);
          if (oldArtwork) {
            await supabase
              .from('artworks')
              .update({ votes: Math.max(0, oldArtwork.votes - 1) })
              .eq('id', votedEntryId);
          }
        }

        setVotedEntryId(id);
        localStorage.setItem('votedEntryId', id);
      }
    } catch (error) {
      console.error('投票失败:', error);
      alert('投票失败，请重试');
    }
  };

  const filteredArtworks = artworks.filter(artwork => {
    const matchesCategory = selectedCategory === "All" || artwork.category === selectedCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch = 
      artwork.title.toLowerCase().includes(query) ||
      artwork.author.toLowerCase().includes(query) ||
      artwork.description.toLowerCase().includes(query) ||
      (artwork.keywords && artwork.keywords.some(k => k.toLowerCase().includes(query)));
    
    return matchesCategory && matchesSearch;
  });

  const handleHomeClick = () => {
    setView('home');
    setSelectedEntry(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header 
        onUploadClick={() => setIsUploadModalOpen(true)} 
        onAboutClick={() => setView('about')}
        onHomeClick={handleHomeClick}
      />
      <main className="flex-1 flex flex-col">
        {view === 'about' ? (
          <EmailTemplate />
        ) : selectedEntry ? (
          <ThemeDetail 
            theme={selectedEntry} 
            isVoted={votedEntryId === selectedEntry.id}
            canDelete={selectedEntry.ownerId === userId}
            onBack={() => setSelectedEntry(null)} 
            onVote={(e, id) => handleVote(e, id)}
            onDelete={() => handleDeleteEntry(selectedEntry.id)}
            onNext={() => {
              const currentIndex = artworks.findIndex(a => a.id === selectedEntry.id);
              const nextIndex = (currentIndex + 1) % artworks.length;
              setSelectedEntry(artworks[nextIndex]);
            }}
            onPrev={() => {
              const currentIndex = artworks.findIndex(a => a.id === selectedEntry.id);
              const prevIndex = (currentIndex - 1 + artworks.length) % artworks.length;
              setSelectedEntry(artworks[prevIndex]);
            }}
          />
        ) : (
          <>
            <Hero 
              selectedCategory={selectedCategory} 
              onSelectCategory={setSelectedCategory} 
              searchQuery={searchQuery}
              onSearch={setSearchQuery}
            />
            <ThemeGrid 
              artworks={filteredArtworks} 
              votedEntryId={votedEntryId}
              onThemeSelect={setSelectedEntry}
              onVote={handleVote}
            />
          </>
        )}
      </main>
      
      <UploadModal 
        isOpen={isUploadModalOpen} 
        onClose={() => setIsUploadModalOpen(false)}
        onSubmit={handleAddEntry}
        userId={userId}
      />
    </div>
  );
}
