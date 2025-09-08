import fs from 'fs';
import path from 'path';
import url from 'url';

// Expand var:variable[ <percent>%] usage in theme JSON under src/themes into final hex colors, writing to themes/
// Percent is treated as alpha (0-100%). Base colors sourced from src/sass/colors.scss ($var-name: #hex;)

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const SRC_THEMES_DIR = path.resolve(__dirname, '../src/themes');
const OUTPUT_THEMES_DIR = path.resolve(__dirname, '../themes');
const COLORS_SCSS = path.resolve(__dirname, '../src/sass/colors.scss');

run();

function run() {
   const colorMap = loadColors();
   console.log(`Loaded ${colorMap.size} variables from colors.scss`);

   const files = fs.readdirSync(SRC_THEMES_DIR).filter(f => f.endsWith('-color-theme.json'));
   if (!fs.existsSync(OUTPUT_THEMES_DIR)) fs.mkdirSync(OUTPUT_THEMES_DIR, { recursive: true });

   files.forEach(file => {
      const srcPath = path.join(SRC_THEMES_DIR, file);
      const raw = fs.readFileSync(srcPath, 'utf-8');
      const expanded = expandTheme(raw, colorMap, file);
      const outPath = path.join(OUTPUT_THEMES_DIR, file);

      fs.writeFileSync(outPath, expanded);
      console.log(`Built theme: ${file}`);
   });
}

// Parse colors.scss for lines like $name: #hex; capturing name and hex (first color literal only)
function loadColors() {
   const text = fs.readFileSync(COLORS_SCSS, 'utf-8');
   const map = new Map();
   const re = /\$([a-zA-Z0-9_-]+)\s*:\s*(?:#([0-9a-fA-F]{6})|\$([a-zA-Z0-9_-]+))/g; // ignore 3-digit; palette uses 6-digit

   let variables = [];
   let m;
   while ((m = re.exec(text)) !== null) {
      const name = m[1];

      if (m[2]) { // direct hex value
         const hex = `#${m[2].toLowerCase()}`;
         map.set(name, hex);
      }
      else if (m[3]) { // reference to another variable
         variables.push([name, m[3]]);
      }
   }

   // Resolve variable references
   for (const [name, ref] of variables) {
      const hex = map.get(ref);
      if (hex) {
         map.set(name, hex);
      }
   }

   return map;
}

function expandTheme(jsonText, colorMap, fileName) {
   // Replace var references inside JSON strings. Pattern matches "var:name" or "var:name 53%"
   const varPattern = /"(var:)([a-zA-Z0-9_-]+)(?:\s+([0-9]{1,2}|100)%)?"/g;

   return jsonText.replace(varPattern, (full, prefix, name, percent) => {
      const baseHex = colorMap.get(name);
      if (!baseHex) {
         console.warn(`[WARN] ${fileName}: variable '${name}' not found in colors.scss`);
         return full; // leave original expression
      }

      if (!percent) return `"${baseHex}"`;
      const alphaInt = Math.round((parseInt(percent, 10) / 100) * 255);
      const alphaHex = alphaInt.toString(16).padStart(2, '0');
      return `"${baseHex}${alphaHex}"`;
   });
}
