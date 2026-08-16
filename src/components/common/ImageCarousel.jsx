import React, { useState, useEffect } from 'react';

const ImageCarousel = ({
  images = [
    { src: '/images/screenshots/slide1.jpg', title: 'Executive Health Dashboard', caption: 'Continuous 360° visibility into org health & domain scores' },
    { src: '/images/screenshots/slide2.jpg', title: 'Future Readiness & AI Assistant', caption: 'Hyperforce readiness scorecards grounded in Claude AI advisory' },
    { src: '/images/screenshots/slide3.jpg', title: 'Security & Risk Exposure', caption: 'Prioritized risk categories, over-privileged profiles & secret exposure' }
  ],
  autoPlay = true,
  interval = 4000,
  className = '',
  style = {}
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className={`image-carousel-container ${className}`}
      style={{
        position: 'relative',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid var(--border-color)',
        backgroundColor: '#0F172A',
        ...style
      }}
    >
      {/* Current Slide Image */}
      <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', overflow: 'hidden' }}>
        {images.map((img, idx) => (
          <div
            key={idx}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: idx === currentIndex ? 1 : 0,
              transform: `scale(${idx === currentIndex ? 1 : 1.04})`,
              transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
              pointerEvents: idx === currentIndex ? 'auto' : 'none',
            }}
          >
            <img
              src={img.src}
              alt={img.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />

            {/* Gradient Overlay & Caption */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '2rem 1.5rem 1rem 1.5rem',
                background: 'linear-gradient(to top, rgba(15, 23, 42, 0.88) 0%, rgba(15, 23, 42, 0) 100%)',
                color: '#FFFFFF',
                display: 'flex',
                justify: 'space-between',
                alignItems: 'flex-end',
              }}
            >
              <div>
                <span className="badge-pill dark" style={{ fontSize: '0.65rem', marginBottom: '0.35rem' }}>
                  Platform Preview
                </span>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0, color: '#F8FAFC' }}>
                  {img.title}
                </h4>
                <p style={{ fontSize: '0.775rem', color: '#94A3B8', margin: 0, marginTop: '0.2rem' }}>
                  {img.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        aria-label="Previous Slide"
        style={{
          position: 'absolute',
          top: '50%',
          left: '0.75rem',
          transform: 'translateY(-50%)',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          backgroundColor: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(4px)',
          color: '#FFFFFF',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2rem',
          cursor: 'pointer',
          zIndex: 10,
          transition: 'all var(--transition-fast)',
        }}
      >
        &#8249;
      </button>

      <button
        onClick={goToNext}
        aria-label="Next Slide"
        style={{
          position: 'absolute',
          top: '50%',
          right: '0.75rem',
          transform: 'translateY(-50%)',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          backgroundColor: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(4px)',
          color: '#FFFFFF',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.2rem',
          cursor: 'pointer',
          zIndex: 10,
          transition: 'all var(--transition-fast)',
        }}
      >
        &#8250;
      </button>

      {/* Bottom Dot Indicators */}
      <div
        style={{
          position: 'absolute',
          bottom: '0.65rem',
          right: '1rem',
          display: 'flex',
          gap: '0.4rem',
          zIndex: 10,
        }}
      >
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            style={{
              width: idx === currentIndex ? '20px' : '8px',
              height: '8px',
              borderRadius: '9999px',
              backgroundColor: idx === currentIndex ? '#10B981' : 'rgba(255, 255, 255, 0.4)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
