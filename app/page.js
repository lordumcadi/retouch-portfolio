'use client';

import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSliders, setActiveSliders] = useState({});

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
        const initialSliders = {};
        data.forEach((_, index) => {
          initialSliders[index] = 50;
        });
        setActiveSliders(initialSliders);
      } catch (error) {
        console.error('Error loading images:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  const handleSliderChange = (index, value) => {
    setActiveSliders(prev => ({
      ...prev,
      [index]: value
    }));
  };

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {images.map((pair, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <div className="relative aspect-[3/4]">
                {/* Фоновое изображение (после) */}
                <img
                  src={pair.after}
                  alt="После ретуши"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Переднее изображение (до) с градиентом прозрачности */}
                <div 
                  className="absolute inset-0"
                  style={{
                    maskImage: `linear-gradient(to right, transparent ${activeSliders[index]}%, black ${activeSliders[index]}%)`,
                    WebkitMaskImage: `linear-gradient(to right, transparent ${activeSliders[index]}%, black ${activeSliders[index]}%)`
                  }}
                >
                  <img
                    src={pair.before}
                    alt="До ретуши"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                {/* Линия разделения */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                  style={{ left: `${activeSliders[index]}%` }}
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
                  value={activeSliders[index]}
                  onChange={(e) => handleSliderChange(index, e.target.value)}
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
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 