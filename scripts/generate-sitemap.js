// Скрипт для генерации sitemap.xml
// Запускать: node scripts/generate-sitemap.js

const fs = require('fs');
const path = require('path');

// Импортируем данные (в реальности нужно использовать TypeScript или переписать на JS)
// Для простоты создадим базовую структуру

const baseUrl = 'https://frontstart.online';
const allCategories = [
  'computer-science',
  'javascript',
  'markup',
  'frameworks',
  'typescript',
  'architecture',
  'security',
  'tools',
  'network',
  'optimization'
];

// Генерируем sitemap
const generateSitemap = () => {
  const urls = [];
  
  // Главная страница
  urls.push({
    loc: baseUrl,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily',
    priority: '1.0'
  });
  
  // Страницы категорий
  allCategories.forEach(category => {
    urls.push({
      loc: `${baseUrl}/${category}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '0.8'
    });
  });
  
  // Примечание: Для полной генерации нужно импортировать все темы
  // Это можно сделать через динамический импорт или сборку данных
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  const publicDir = path.join(__dirname, '..', 'public');
  
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(outputPath, sitemap, 'utf8');
  console.log(`Sitemap generated at ${outputPath}`);
};

generateSitemap();
