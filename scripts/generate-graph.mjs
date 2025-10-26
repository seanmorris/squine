#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { squine } from '../index.js';

const width = 800;
const height = 200;
const margin = 10;
const plotWidth = width - 2 * margin;
const plotHeight = height - 2 * margin;

const maxX = 2;
const rs = [0, 0.65, 0.85, 1];
const colors = ['orange', 'green', 'steelblue', 'purple'];


const gridLines = [];
for (let gx = 0; gx <= maxX; gx +=0.125) {
  const x = margin + (gx / maxX) * plotWidth;
  gridLines.push(
    `<line x1="${x}" y1="${margin}" x2="${x}" y2="${height - margin}" stroke="#8883" stroke-width="1"/>`
  );
}
for (let gy = 0; gy <= 1; gy += 0.25) {
  const y = margin + (1 - gy) * plotHeight;
  gridLines.push(
    `<line x1="${margin}" y1="${y}" x2="${width - margin}" y2="${y}" stroke="#8883" stroke-width="1"/>`
  );
}

const axes = [];
axes.push(
  `<line x1="${margin}" y1="${margin + plotHeight}" x2="${width - margin}" y2="${margin + plotHeight}" stroke="#8888" stroke-width="1"/>`
);
axes.push(
  `<line x1="${margin}" y1="${margin}" x2="${margin}" y2="${height - margin}" stroke="#8888" stroke-width="1"/>`
);

const paths = rs.map((r, idx) => {
  let d = '';
  const steps = 200;
  for (let i = 0; i <= steps; i++) {
    const xVal = (i / steps) * maxX;
    const yVal = squine(xVal % 1, r);
    const x = margin + (xVal / maxX) * plotWidth;
    const y = margin + (1 - yVal) * plotHeight;
    d += `${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`;
  }
  return `<path d="${d}" fill="none" stroke="${colors[idx]}" stroke-width="1"/>`;
});

const svg =
  `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
${gridLines.join('\n')}
${axes.join('\n')}
${paths.join('\n')}
</svg>`;

if (!fs.existsSync('examples')) fs.mkdirSync('examples');
fs.writeFileSync(path.join('examples', 'squine-graph.svg'), svg);
console.log('Generated examples/squine-graph.svg');