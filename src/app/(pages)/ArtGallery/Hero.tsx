"use client";

import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from 'react-player';
import videos from "./video";

interface Video {
  id: string;
  videoId: string;
  videoName: string;
  previewImg: string;
}

interface Item {
  id: string;
  rowId: number;
  video: Video | undefined;
}

const Hero: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<Item[][]>([]);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const [isEffectActive, setIsEffectActive] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsEffectActive(window.innerWidth > 1000);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isEffectActive || !galleryRef.current) return;

    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    const centerX = width / 2;
    const centerY = height / 2;

    const sensitivity = 1.5;
    const deltaX = (centerX - clientX) * sensitivity;
    const deltaY = (centerY - clientY) * sensitivity;

    galleryRef.current.style.transform = `translate(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px))`;
  };

  const handleVideoHover = (videoId: string) => {
    if (isEffectActive) {
      setHoveredVideo(videoId);
    }
  };

  const handleVideoLeave = () => {
    if (isEffectActive) {
      setHoveredVideo(null);
    }
  };

  const handleVideoClick = (videoId: string) => {
    setActiveVideo(videoId);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  useEffect(() => {
    const generateItems = () => {
      const rows = [
        { id: 1, count: 5 },
        { id: 2, count: 5 },
        { id: 3, count: 5 },
      ];

      const newItems = rows.map((row) => {
        return Array.from({ length: row.count }, (_, index) => {
          const itemId = `${row.id}-${index}`;
          const video = videos.find((v) => v.id === itemId);
          return {
            id: itemId,
            rowId: row.id,
            video: video,
          };
        });
      });
      setItems(newItems);
    };

    generateItems();
  }, []);

  return (
    <div className={`container ${isEffectActive ? '' : 'mobile-view'}`} onMouseMove={isEffectActive ? handleMouseMove : undefined}>
      <div className={`gallery ${isEffectActive ? '' : 'mobile-gallery'}`} ref={galleryRef}>
        {items.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className={`row ${isEffectActive ? '' : 'mobile-row'}`}>
            {row.map((item) => (
              item.video && (isEffectActive || item.video.previewImg) ? (
                <div 
                  key={item.id} 
                  className={`item ${isEffectActive ? '' : 'mobile-item'}`}
                  onClick={() => item.video && handleVideoClick(item.video.videoId)}
                  onMouseEnter={() => item.video && handleVideoHover(item.video.videoId)}
                  onMouseLeave={handleVideoLeave}
                >
                  <div className='preview-img'>
                    <img src={item.video.previewImg} alt={item.video.videoName} />
                  </div>
                  <p id='videoName'>{item.video.videoName}</p>

                  <div className='video-wrapper'>
                    <ReactPlayer
                      url={item.video.videoId}
                      playing={isEffectActive && hoveredVideo === item.video.videoId}
                      loop={true}
                      muted={true}
                      width="100%"
                      height="100%"
                      config={{
                        file: {
                          attributes: {
                            preload: 'auto'
                          }
                        }
                      }}
                    />
                  </div>
                </div>
              ) : null
            ))}
          </div>
        ))}
      </div>
      {activeVideo && (
        <div className='fullscreen-video'>
          <ReactPlayer
            url={activeVideo}
            playing={true}
            controls={true}
            width="80%"
            height="80%"
          />
          <button className="close-button z-20 absolute text-[4rem]" onClick={handleCloseVideo}>
            x
          </button>
        </div>
      )}
    </div>
  );
};

export default Hero;