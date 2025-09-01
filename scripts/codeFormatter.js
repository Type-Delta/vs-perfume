import fs from 'fs';
import path from 'path';

const themeFolder = './themes';

formatThemeFiles(themeFolder);

function formatThemeFiles(folder) {
   const files = fs.readdirSync(folder)
      .filter(file => file.endsWith('.json'));
   files.forEach(file => {
      const filePath = path.join(folder, file);
      let formatted = fs.readFileSync(filePath, 'utf-8');

      formatted = formatted.replace(/#[\dA-F]{3,8}/ig, (match) => match.toLowerCase());

      fs.writeFileSync(filePath, formatted);
   });
}
