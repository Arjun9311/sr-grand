const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'menu.ts');
const content = fs.readFileSync(filePath, 'utf8');

const regex = /id:\s*"([^"]+)"[\s\S]*?category:\s*"([^"]+)"[\s\S]*?name:\s*"([^"]+)"[\s\S]*?dietary:\s*"([^"]+)"[\s\S]*?image:\s*"([^"]+)"/g;

let match;
let count = 0;
let errors = [];

while ((match = regex.exec(content)) !== null) {
  count++;
  const [, id, category, name, dietary, image] = match;
  const fullPath = path.join(__dirname, '..', 'public', image.replace(/^\//, ''));
  
  if (!fs.existsSync(fullPath)) {
    errors.push(`[404 NOT FOUND] ${name} -> ${image}`);
  }
  
  if (dietary === 'veg' && (image.includes('chicken') || image.includes('fish') || image.includes('prawns') || image.includes('egg-biryani'))) {
    errors.push(`[DIETARY MISMATCH] Veg item "${name}" has non-veg/egg image: ${image}`);
  }
  
  console.log(`${count.toString().padStart(2, ' ')}. [${category.padEnd(9, ' ')}] [${dietary.padEnd(7, ' ')}] ${name.padEnd(38, ' ')} -> ${image}`);
}

console.log('\n----------------------------------------');
console.log(`Total audited menu items: ${count}`);

if (errors.length > 0) {
  console.error('\nERRORS FOUND:');
  errors.forEach(e => console.error('  - ' + e));
  process.exit(1);
} else {
  console.log('✅ ALL ITEMS PASSED 100% VALIDATION! No missing assets, no dietary mismatches.');
}
