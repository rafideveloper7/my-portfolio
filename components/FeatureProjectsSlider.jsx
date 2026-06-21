'use client';

import { useEffect, useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PortfolioGrid from "@/components/PortfolioGrid";

export default function FeaturedProjectsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);
  const [hasReachedStart, setHasReachedStart] = useState(true);
  const [containerWidth, setContainerWidth] = useState(0);
  
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const wheelDeltaAccumulator = useRef(0);
  const isLockedRef = useRef(false);

  const totalSlides = 6;

  // Responsive card count
  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      let cards = 1;
      
      if (width >= 1024) {
        cards = 3;
      } else if (width >= 640) {
        cards = 2;
      } else {
        cards = 1;
      }
      
      setVisibleCards(cards);
      
      // Update container width
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  // Update container width on resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const maxIndex = Math.max(0, totalSlides - visibleCards);

  // Update boundary states
  useEffect(() => {
    setHasReachedStart(currentIndex === 0);
    setHasReachedEnd(currentIndex === maxIndex);
  }, [currentIndex, maxIndex]);

  // Handle smooth scroll-based navigation
  const handleWheel = useCallback((event) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const isVisible = rect.top < viewportHeight && rect.bottom > 0;
    
    if (!isVisible) return;

    wheelDeltaAccumulator.current += event.deltaY;
    const threshold = 30;
    
    if (Math.abs(wheelDeltaAccumulator.current) < threshold) {
      return;
    }

    const direction = wheelDeltaAccumulator.current > 0 ? 'down' : 'up';
    wheelDeltaAccumulator.current = 0;

    if (isLockedRef.current || isTransitioning) {
      event.preventDefault();
      return;
    }

    if (direction === 'down') {
      if (currentIndex < maxIndex) {
        isLockedRef.current = true;
        setCurrentIndex(prev => prev + 1);
        setIsTransitioning(true);
        event.preventDefault();
        setTimeout(() => {
          setIsTransitioning(false);
          isLockedRef.current = false;
        }, 600);
      } else {
        isLockedRef.current = false;
        return;
      }
    } else {
      if (currentIndex > 0) {
        isLockedRef.current = true;
        setCurrentIndex(prev => prev - 1);
        setIsTransitioning(true);
        event.preventDefault();
        setTimeout(() => {
          setIsTransitioning(false);
          isLockedRef.current = false;
        }, 600);
      } else {
        isLockedRef.current = false;
        return;
      }
    }
  }, [currentIndex, maxIndex, isTransitioning]);

  // Mouse drag support
  const handleMouseDown = (e) => {
    if (isTransitioning) return;
    setIsDragging(true);
    setStartX(e.clientX);
    if (sliderRef.current) {
      sliderRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || isTransitioning) return;
    const diff = startX - e.clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < maxIndex) {
        setCurrentIndex(prev => prev + 1);
        setIsTransitioning(true);
        setTimeout(() => setIsTransitioning(false), 500);
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
        setIsTransitioning(true);
        setTimeout(() => setIsTransitioning(false), 500);
      }
      setIsDragging(false);
      if (sliderRef.current) {
        sliderRef.current.style.cursor = 'grab';
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (sliderRef.current) {
      sliderRef.current.style.cursor = 'grab';
    }
  };

  // Touch support
  const handleTouchStart = (e) => {
    if (isTransitioning) return;
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (isTransitioning) return;
    const diff = startX - e.touches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < maxIndex) {
        setCurrentIndex(prev => prev + 1);
        setIsTransitioning(true);
        setTimeout(() => setIsTransitioning(false), 500);
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
        setIsTransitioning(true);
        setTimeout(() => setIsTransitioning(false), 500);
      }
    }
  };

  // Attach wheel listener
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleWheel]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!containerRef.current || isTransitioning) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (!isVisible) return;
      
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        if (currentIndex < maxIndex) {
          setCurrentIndex(prev => prev + 1);
          setIsTransitioning(true);
          setTimeout(() => setIsTransitioning(false), 500);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        if (currentIndex > 0) {
          setCurrentIndex(prev => prev - 1);
          setIsTransitioning(true);
          setTimeout(() => setIsTransitioning(false), 500);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, maxIndex, isTransitioning]);

  // Calculate card width based on visible cards
  const getCardWidth = () => {
    if (!containerWidth) return '100%';
    
    const gap = window.innerWidth >= 640 ? 24 : 16; // gap-6 = 24px, gap-4 = 16px
    const padding = 16; // px-2 = 16px total (8px each side)
    const availableWidth = containerWidth - padding;
    
    if (visibleCards === 1) {
      return `calc(100% - ${gap}px)`;
    } else if (visibleCards === 2) {
      return `calc((100% - ${gap}px) / 2)`;
    } else {
      return `calc((100% - ${gap * 2}px) / 3)`;
    }
  };

  // Translation
  const translationStyle = {
    transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
    transition: isTransitioning 
      ? 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' 
      : 'transform 0.5s ease-in-out'
  };

  return (
    <div 
      ref={containerRef}
      className="w-full relative select-none py-12 overflow-visible"
      style={{ minHeight: '450px' }}
    >
      {/* Scroll indicator */}
      <div className="text-center mb-6">
        <span className={`text-sm transition-all duration-300 ${
          hasReachedEnd 
            ? 'text-green-400' 
            : hasReachedStart 
              ? 'text-gray-400' 
              : 'text-lime-400'
        }`}>
          {hasReachedEnd 
            ? '✓ All projects viewed - Scroll to continue ↓' 
            : hasReachedStart 
              ? '↓ Scroll to explore projects ↓' 
              : '↓ Scroll to see more projects ↓'}
        </span>
      </div>

      {/* SLIDER CONTAINER */}
      <div 
        ref={sliderRef}
        className="w-full overflow-hidden rounded-[20px] cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div
          className="flex flex-nowrap will-change-transform px-2"
          style={translationStyle}
        >
          {/* Cards container with fixed widths */}
          <div className="flex flex-nowrap gap-4 sm:gap-6">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{
                  width: visibleCards === 1 
                    ? 'calc(100vw - 3rem)' 
                    : visibleCards === 2 
                      ? 'calc((100vw - 4.5rem) / 2)' 
                      : 'calc((100vw - 8rem) / 3)',
                  minWidth: visibleCards === 1 
                    ? 'calc(100vw - 3rem)' 
                    : visibleCards === 2 
                      ? 'calc((100vw - 4.5rem) / 2)' 
                      : 'calc((100vw - 8rem) / 3)'
                }}
              >
                <PortfolioGrid limit={1} startIndex={index} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NAVIGATION ARROWS */}
      <button
        onClick={() => {
          if (currentIndex > 0 && !isTransitioning) {
            setCurrentIndex(prev => prev - 1);
            setIsTransitioning(true);
            setTimeout(() => setIsTransitioning(false), 500);
          }
        }}
        className={`absolute left-2 top-1/2 -translate-y-1/2 bg-coal/80 border border-white/20 p-3.5 rounded-full text-white backdrop-blur-md transition-all duration-300 hover:bg-lime hover:text-ink hover:scale-110 z-20 shadow-2xl ${
          currentIndex === 0 || isTransitioning 
            ? 'opacity-30 cursor-not-allowed' 
            : 'opacity-0 group-hover/slider:opacity-100'
        }`}
        aria-label="Previous Project"
        disabled={currentIndex === 0 || isTransitioning}
      >
        <ChevronLeft size={24} strokeWidth={2.5} />
      </button>

      <button
        onClick={() => {
          if (currentIndex < maxIndex && !isTransitioning) {
            setCurrentIndex(prev => prev + 1);
            setIsTransitioning(true);
            setTimeout(() => setIsTransitioning(false), 500);
          }
        }}
        className={`absolute right-2 top-1/2 -translate-y-1/2 bg-coal/80 border border-white/20 p-3.5 rounded-full text-white backdrop-blur-md transition-all duration-300 hover:bg-lime hover:text-ink hover:scale-110 z-20 shadow-2xl ${
          currentIndex === maxIndex || isTransitioning 
            ? 'opacity-30 cursor-not-allowed' 
            : 'opacity-0 group-hover/slider:opacity-100'
        }`}
        aria-label="Next Project"
        disabled={currentIndex === maxIndex || isTransitioning}
      >
        <ChevronRight size={24} strokeWidth={2.5} />
      </button>

      {/* PAGINATION DOTS */}
      {maxIndex > 0 && (
        <div className="flex justify-center items-center gap-3 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (!isTransitioning && idx !== currentIndex) {
                  setCurrentIndex(idx);
                  setIsTransitioning(true);
                  setTimeout(() => setIsTransitioning(false), 500);
                }
              }}
              className={`h-2.5 transition-all duration-500 rounded-full ${
                currentIndex === idx 
                  ? "w-8 bg-lime shadow-lg shadow-lime/30" 
                  : "w-2.5 bg-gray-600 hover:bg-gray-400 hover:scale-125"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* PROGRESS BAR */}
      <div className="w-full max-w-md mx-auto mt-4 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-lime to-emerald-400 transition-all duration-700 rounded-full"
          style={{ 
            width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%`
          }}
        />
      </div>
      
      {/* Progress text */}
      <div className="text-center mt-2 text-xs text-gray-500 font-mono">
        {currentIndex + 1} / {maxIndex + 1}
      </div>
    </div>
  );
}