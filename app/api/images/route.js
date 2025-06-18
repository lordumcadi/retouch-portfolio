import { NextResponse } from 'next/server';

export async function GET() {
  // Укажите здесь все пары изображений, которые реально лежат в public/images
  const imagePairs = [
    { before: '/images/11/1.png', after: '/images/11/3.jpg' },
    { before: '/images/14/1.png', after: '/images/14/3.jpg' },
    { before: '/images/19/1.png', after: '/images/19/3.jpg' },
    { before: '/images/3/1.png', after: '/images/3/3.jpg' },
    { before: '/images/33/1.png', after: '/images/33/3.jpg' },
    { before: '/images/34/1.png', after: '/images/34/3.jpg' },
    { before: '/images/35/1.png', after: '/images/35/3.jpg' },
    { before: '/images/36/1.png', after: '/images/36/3.jpg' },
    { before: '/images/37/1.jpg', after: '/images/37/3.jpg' },
    { before: '/images/38/1.png', after: '/images/38/3.jpg' },
    { before: '/images/39/1.png', after: '/images/39/3.jpg' },
    { before: '/images/46/1.png', after: '/images/46/3.jpg' },
    { before: '/images/50/1.png', after: '/images/50/3.jpg' },
    { before: '/images/54/1.png', after: '/images/54/3.jpg' },
    { before: '/images/55/1.png', after: '/images/55/3.jpg' },
    { before: '/images/57/1.png', after: '/images/57/3.jpg' },
    { before: '/images/58/1.png', after: '/images/58/3.jpg' },
    { before: '/images/64/1.png', after: '/images/64/3.jpg' },
    { before: '/images/72/1.png', after: '/images/72/3.jpg' },
    { before: '/images/73/1.png', after: '/images/73/3.jpg' },
    { before: '/images/74/1.png', after: '/images/74/3.jpg' },
    // Добавьте остальные пары по аналогии, если нужно
  ];

  return NextResponse.json(imagePairs);
} 