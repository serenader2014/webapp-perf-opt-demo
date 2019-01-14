const fs = require('fs');
const path = require('path');

const htmlPath = path.resolve(__dirname, '..', 'build/index.html');

const htmlContent = fs.readFileSync(htmlPath, { encoding: 'utf8' });
const buildManifest = require('../build/asset-manifest.json');

const preloadAssets = ['app.js', 'app.css', 'static/media/logo.svg'];

const preloadContent = preloadAssets.map(item => {
  const assetPath = buildManifest[item];
  if (assetPath) {
    let type;
    let mime;
    const ext = path.extname(item);
    if (ext === '.js') {
      type = 'script';
    } else if (ext === '.css') {
      type = 'style';
    } else if (ext === '.svg') {
      type = 'image';
      mime = 'image/svg+xml';
    }

    if (!type) return null;
    return `<link rel="preload" as="${type}" ${mime ? `type="${mime}"` : ''} href="${assetPath}" />`;
  }
  return null;
}).join('');

fs.writeFileSync(htmlPath, htmlContent.replace('<meta name="placeholder"/>', preloadContent), { encoding: 'utf8' });
