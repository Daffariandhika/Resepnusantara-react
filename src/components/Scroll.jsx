import React, { useEffect, useState } from 'react';
import './CustomScrollbar.css';

const CustomScrollbarExample = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const handleFullscreenChange = () => {
    setIsFullscreen(document.fullscreenElement !== null);
  };

  return (
    <div className={`custom-scrollbar ${isFullscreen ? 'fullscreen' : ''}`}>
    </div>
  );
};

export default CustomScrollbarExample;
