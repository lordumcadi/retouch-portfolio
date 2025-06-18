import { NextResponse } from 'next/server';

export async function GET() {
  const imagePairs = [
    { before: '/images/57/1.png', after: '/images/57/3.jpg', folder: '57' },
    { before: '/images/73/1.png', after: '/images/73/3.jpg', folder: '73' },
    { before: '/images/39/1.png', after: '/images/39/3.jpg', folder: '39' },
    { before: '/images/11/1.png', after: '/images/11/3.jpg', folder: '11' },
    { before: '/images/72/1.png', after: '/images/72/3.jpg', folder: '72' },
    { before: '/images/19/1.png', after: '/images/19/3.jpg', folder: '19' },
    { before: '/images/58/1.png', after: '/images/58/3.jpg', folder: '58' },
    { before: '/images/38/1.png', after: '/images/38/3.jpg', folder: '38' },
    { before: '/images/50/1.png', after: '/images/50/3.jpg', folder: '50' },
    { before: '/images/74/1.png', after: '/images/74/3.jpg', folder: '74' },
    { before: '/images/35/1.png', after: '/images/35/3.jpg', folder: '35' },
    { before: '/images/55/1.png', after: '/images/55/3.jpg', folder: '55' },
    { before: '/images/46/1.png', after: '/images/46/3.jpg', folder: '46' },
    { before: '/images/3/1.png', after: '/images/3/3.jpg', folder: '3' },
    { before: '/images/32/1.png', after: '/images/32/3.jpg', folder: '32' },
    { before: '/images/14/1.png', after: '/images/14/3.jpg', folder: '14' },
    { before: '/images/36/1.png', after: '/images/36/3.jpg', folder: '36' },
    { before: '/images/34/1.png', after: '/images/34/3.jpg', folder: '34' },
    { before: '/images/54/1.png', after: '/images/54/3.jpg', folder: '54' },
    { before: '/images/33/1.png', after: '/images/33/3.jpg', folder: '33' },
    { before: '/images/37/1.jpg', after: '/images/37/3.jpg', folder: '37' },
    { before: '/images/64/1.png', after: '/images/64/3.jpg', folder: '64' }
  ];

  return NextResponse.json(imagePairs);
} 