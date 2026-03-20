import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  className?: string;
  aspectRatio?: string;
  loop?: boolean;
  autoPlay?: boolean;
}

export function VideoPlayer({ 
  src, 
  poster,
  title = 'Video', 
  className = '', 
  aspectRatio = '16/9',
  loop = false,
  autoPlay = false
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleToggle = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  return (
    <div 
      className={`relative overflow-hidden bg-black group ${className}`}
      style={{ aspectRatio }}
    >
      {/* Video element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop={loop}
        muted={autoPlay}
        autoPlay={autoPlay}
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        title={title}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => !loop && setIsPlaying(false)}
      />

      {/* Play button overlay - shown when not playing */}
      {!isPlaying && (
        <div 
          className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer bg-black/40 transition-all duration-300"
          onClick={handlePlay}
        >
          <button
            className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]"
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

      {/* Pause button overlay - shown on hover when playing */}
      {isPlaying && (
        <div 
          className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-300"
          onClick={handleToggle}
        >
          <button
            className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 bg-black/50 backdrop-blur-sm"
            style={{
              border: '2px solid rgba(255,255,255,0.3)',
            }}
            aria-label="Pause video"
          >
            <Pause size={28} className="text-white" fill="white" />
          </button>
        </div>
      )}
    </div>
  );
}
