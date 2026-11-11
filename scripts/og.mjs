import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const svg = readFileSync('scripts/og.svg', 'utf8');
await sharp(Buffer.from(svg)).resize(1200, 630).png().toFile('public/og.png');
console.log('public/og.png written');
