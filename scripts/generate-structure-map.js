/**
 * Генерация MD-файла с картой метаразделов, подразделов и тем
 */

import { META_CATEGORIES } from '../core/metaCategories.ts';
import { META_CATEGORIES_DATA } from '../core/metaCategoriesData.ts';
import fs from 'fs';
import path from 'path';

const lines = ['# Карта разделов\n'];

for (const meta of META_CATEGORIES) {
  const categories = META_CATEGORIES_DATA[meta.id] || [];
  const totalTopics = categories.reduce((sum, cat) => sum + cat.topics.length, 0);
  
  // Метараздел
  lines.push(`## [${meta.title}](/${meta.id}/) (${totalTopics} тем)\n`);
  lines.push(`${meta.description}\n`);
  
  for (const cat of categories) {
    if (cat.topics.length === 0) continue;
    
    // Подраздел
    lines.push(`### [${cat.title}](/${meta.id}/${cat.id})`);
    if (cat.description) {
      lines.push(`${cat.description}\n`);
    } else {
      lines.push('');
    }
    
    // Темы
    for (const topic of cat.topics) {
      lines.push(`- [${topic.title}](/${meta.id}/${topic.id})`);
    }
    
    lines.push('');
  }
}

const output = lines.join('\n');
const outPath = path.join(process.cwd(), 'STRUCTURE_MAP.md');

fs.writeFileSync(outPath, output, 'utf-8');
console.log(`Готово: ${outPath}`);
