import { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
  className?: string;
}

export function YouTubePlayer({ 
  videoId, 
  title = 'Video', 
  className = '' 
}: YouTubePlayerProps) {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlay = () => {
    setShowVideo(true);
  };

  return (
    <div 
      className={`relative overflow-hidden bg-black ${className}`}
      style={{ aspectRatio: '16/9' }}
    >
      {/* YouTube iframe - shown after play is clicked */}
      {showVideo && (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          className="absolute inset-0 w-full h-full"
          style={{ border: 'none' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        />
      )}

      {/* Thumbnail with play button - shown when video not started */}
      {!showVideo && (
        <div 
          className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer transition-all duration-300"
          onClick={handlePlay}
        >
          {/* YouTube Thumbnail */}
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <button
            className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]"
            style={{
              background: 'linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)',
              border: '2px solid rgba(255,255,255,0.2)',
            }}
            aria-label="Play video"
          >
            <Play size={32} className="text-white ml-1" fill="white" />
          </button>
        </div>
      )}
    </div>
  );
}
