import fs from 'fs';
import path from 'path';

export const readWords = (): string[] => {
  const filePath = path.join(__dirname, '../data/words.txt'); // path to words.txt (.next/data/words.txt)
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  return fileContents.split('\n').map(word => word.trim().toUpperCase()).filter(word => word.length >= 3);
};
