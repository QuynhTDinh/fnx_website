const fs = require('fs');
const path = require('path');

function migrateDir(srcDir, destDir) {
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
  const items = fs.readdirSync(srcDir);
  
  for (const item of items) {
    const srcPath = path.join(srcDir, item);
    const destPath = path.join(destDir, item.replace('.jsx', '.tsx'));
    
    if (fs.statSync(srcPath).isDirectory()) {
      migrateDir(srcPath, destPath);
    } else if (item.endsWith('.jsx')) {
      let content = fs.readFileSync(srcPath, 'utf8');
      
      // Replace react-router-dom with next/link
      content = content.replace(/import\s+{([^}]*Link[^}]*)}\s+from\s+['"]react-router-dom['"];?/g, "import Link from 'next/link';");
      
      // Replace to= with href=
      content = content.replace(/<Link([^>]+)to=/g, '<Link$1href=');
      
      // Replace img src=... import with next/image or just keep standard img for now to avoid next/image strictness
      // We will just keep standard <img> for now, no need to change
      
      // Add 'use client' if framer-motion or hooks are used
      if (content.includes('framer-motion') || content.includes('useState') || content.includes('useEffect') || content.includes('useRef')) {
        content = "'use client';\n\n" + content;
      }
      
      fs.writeFileSync(destPath, content);
    }
  }
}

// Migrate components
migrateDir('../src/components', 'src/components/old_components');
migrateDir('../src/pages', 'src/pages_temp');

console.log("Migration script finished.");
