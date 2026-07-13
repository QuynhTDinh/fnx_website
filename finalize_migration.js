const fs = require('fs');
const path = require('path');

function replaceImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/\.\.\/components\//g, '@/components/old_components/');
  content = content.replace(/\.\.\/assets\//g, '/assets/');
  content = content.replace(/\.\.\/fx-engine\//g, '@/fx-engine/');
  content = content.replace(/\.\/components\//g, '@/components/old_components/');
  content = content.replace(/\.\/assets\//g, '/assets/');
  content = content.replace(/\.\/fx-engine\//g, '@/fx-engine/');
  fs.writeFileSync(filePath, content);
}

const mappings = [
  ['src/pages_temp/Home.tsx', 'src/app/(marketing)/page.tsx'],
  ['src/pages_temp/FnxSC.tsx', 'src/app/(marketing)/hubs/sc/page.tsx'],
  ['src/pages_temp/FnxRD.tsx', 'src/app/(marketing)/hubs/rd/page.tsx'],
  ['src/pages_temp/FnxM.tsx', 'src/app/(marketing)/hubs/m/page.tsx'],
  ['src/pages_temp/BanXLBM.tsx', 'src/app/(marketing)/affiliate/xlbm/page.tsx'],
  ['src/pages_temp/Logs.tsx', 'src/app/(marketing)/logs/page.tsx'],
  ['src/pages_temp/Frameworks.tsx', 'src/app/(marketing)/frameworks/page.tsx'],
  ['src/pages_temp/Engage.tsx', 'src/app/(engage)/page.tsx']
];

for (const [src, dest] of mappings) {
  if (fs.existsSync(src)) {
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
    fs.copyFileSync(src, dest);
    replaceImports(dest);
  }
}

function processDir(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const p = path.join(dir, item);
    if (fs.statSync(p).isDirectory()) {
      processDir(p);
    } else if (p.endsWith('.tsx') || p.endsWith('.ts')) {
      replaceImports(p);
    }
  }
}

processDir('src/components/old_components');
console.log("Imports rewritten and pages moved.");
