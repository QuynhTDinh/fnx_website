const fs = require('fs');
const path = require('path');

function migrateDir(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const p = path.join(dir, item);
    if (fs.statSync(p).isDirectory()) {
      migrateDir(p);
    } else if (p.endsWith('.jsx')) {
      const newPath = p.replace('.jsx', '.tsx');
      fs.renameSync(p, newPath);
      let content = fs.readFileSync(newPath, 'utf8');
      
      content = content.replace(/import\s+{([^}]*Link[^}]*)}\s+from\s+['"]react-router-dom['"];?/g, "import Link from 'next/link';");
      content = content.replace(/<Link([^>]+)to=/g, '<Link$1href=');
      
      if (content.includes('useState') || content.includes('useEffect') || content.includes('useRef') || content.includes('zustand') || content.includes('reveal.js')) {
        content = "'use client';\n\n" + content;
      }
      fs.writeFileSync(newPath, content);
    }
  }
}

migrateDir('src/fx-engine');
console.log("FX Engine migrated.");
