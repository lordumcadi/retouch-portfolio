'use client';

import { useState, useEffect } from 'react';

function FadeInImage({ src, alt, className, style }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-700 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-700 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${className || ''}`}
        onLoad={() => setIsLoading(false)}
        draggable={false}
      />
    </div>
  );
}

function ComparisonSlider({ pair, sliderValue, onSliderChange }) {
  return (
    <div className="relative aspect-[3/4] w-full">
      {/* Фоновое изображение (после) */}
      <FadeInImage
        src={pair.after}
        alt="После ретуши"
        className="z-0"
      />
      {/* Переднее изображение (до) с градиентом прозрачности */}
      <div 
        className="absolute inset-0"
        style={{
          maskImage: `linear-gradient(to right, transparent ${sliderValue}%, black ${sliderValue}%)`,
          WebkitMaskImage: `linear-gradient(to right, transparent ${sliderValue}%, black ${sliderValue}%)`
        }}
      >
        <FadeInImage
          src={pair.before}
          alt="До ретуши"
          className="z-10"
        />
      </div>
      {/* Линия разделения */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderValue}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
          <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
        </div>
      </div>
      {/* Слайдер */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={(e) => onSliderChange(e.target.value)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
      />
      {/* Подписи */}
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-lg text-sm">
        До
      </div>
      <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-lg text-sm">
        После
      </div>
    </div>
  );
}

function Thumbnail({ pair, isActive, onClick }) {
  return (
    <div 
      className={`relative aspect-[3/4] cursor-pointer transform transition-all duration-300 ${
        isActive ? 'ring-4 ring-blue-500 scale-105' : 'hover:scale-105'
      }`}
      onClick={onClick}
    >
      <FadeInImage
        src={pair.after}
        alt={`Фото ${pair.folder}`}
        className="rounded-lg"
      />
      <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
        {pair.folder}
      </div>
    </div>
  );
}

export default function Home() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);

  useEffect(() => {
    const loadImages = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/images');
        if (!response.ok) {
          throw new Error('Failed to load images');
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error loading images:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="text-2xl text-white font-light">Загрузка портфолио...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="text-2xl text-red-400 font-light">Ошибка: {error}</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-light text-center mb-4 text-white">Портфолио ретуши</h1>
        <p className="text-xl text-gray-400 text-center mb-12">Сравните фотографии до и после обработки</p>
        
        {/* Активный блок сравнения */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
            <ComparisonSlider
              pair={images[activeIndex]}
              sliderValue={sliderValue}
              onSliderChange={setSliderValue}
            />
          </div>
        </div>

        {/* Сетка миниатюр */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {images.map((pair, index) => (
            <Thumbnail
              key={pair.folder}
              pair={pair}
              isActive={index === activeIndex}
              onClick={() => {
                setActiveIndex(index);
                setSliderValue(50);
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
} 