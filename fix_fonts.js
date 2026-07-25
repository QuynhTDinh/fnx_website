const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Keep Hero Slogan unchanged (Hero.tsx handles Orbitron separately, but just in case we don't mess with features/home/components/Hero.tsx)
      if (fullPath.includes('Hero.tsx') || fullPath.includes('NetworkEcosystem.tsx')) {
         continue; // skipping these explicitly just to be safe
      }
      
      const newContent = content.replace(/<(h[1-6])([^>]*)className=(['"]|\{`)(.*?)(['"]|`\})([^>]*)>/g, 
        (match, tag, before, quoteStart, classes, quoteEnd, after) => {
          
          let newClasses = classes
            .replace(/\bfont-(bold|semibold|medium|black|sans|heading|tech)\b/g, '')
            .replace(/\bleading-(tight|snug|normal|relaxed|loose|\[.*?\])\b/g, '')
            .replace(/\s+/g, ' ')
            .trim();

          return `<${tag}${before}className=${quoteStart}${newClasses}${quoteEnd}${after}>`;
        }
      );

      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log('Updated', fullPath);
      }
    }
  }
}

processDir(path.join(__dirname, 'src'));
console.log('Done.');
