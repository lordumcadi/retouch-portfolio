import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const baseDir = 'C:/retouch/новое портфолио/ДОДЕЛАНО/моё/inst';
  const publicDir = path.join(process.cwd(), 'public', 'images');
  
  try {
    // Создаем директорию для изображений, если она не существует
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    const folders = fs.readdirSync(baseDir)
      .filter(item => fs.statSync(path.join(baseDir, item)).isDirectory());

    const imagePairs = folders.map(folder => {
      const folderPath = path.join(baseDir, folder);
      const publicFolderPath = path.join(publicDir, folder);
      
      // Создаем подпапку в public/images
      if (!fs.existsSync(publicFolderPath)) {
        fs.mkdirSync(publicFolderPath, { recursive: true });
      }

      const files = fs.readdirSync(folderPath);
      
      const beforeImage = files.find(file => file.startsWith('1') && (file.endsWith('.jpg') || file.endsWith('.png')));
      const afterImage = files.find(file => file.startsWith('3') && (file.endsWith('.jpg') || file.endsWith('.png')));

      if (beforeImage && afterImage) {
        // Копируем файлы в публичную директорию
        try {
          fs.copyFileSync(
            path.join(folderPath, beforeImage),
            path.join(publicFolderPath, beforeImage)
          );
          fs.copyFileSync(
            path.join(folderPath, afterImage),
            path.join(publicFolderPath, afterImage)
          );
        } catch (error) {
          console.error(`Error copying files for folder ${folder}:`, error);
          return null;
        }

        return {
          before: `/images/${folder}/${beforeImage}`,
          after: `/images/${folder}/${afterImage}`
        };
      }
      return null;
    }).filter(Boolean);

    return NextResponse.json(imagePairs);
  } catch (error) {
    console.error('Error reading images:', error);
    return NextResponse.json({ error: 'Failed to load images' }, { status: 500 });
  }
} 