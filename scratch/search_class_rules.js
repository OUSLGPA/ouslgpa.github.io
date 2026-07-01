const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const pdfPath = path.join(__dirname, '..', 'Student Guide for RR Students 2025 - 2026 - Final version as @ 20. 04. 2026.pdf');

async function search() {
  const dataBuffer = fs.readFileSync(pdfPath);
  const data = await pdf(dataBuffer);
  const text = data.text;
  
  const lines = text.split('\n');
  console.log("Searching for Class/Honours...");
  lines.forEach((line, idx) => {
    if (line.toLowerCase().includes('class') || line.toLowerCase().includes('honour') || line.toLowerCase().includes('gpa')) {
      if (line.toLowerCase().includes('first') || line.toLowerCase().includes('second') || line.toLowerCase().includes('award') || line.toLowerCase().includes('gpa')) {
        console.log(`L${idx}: ${line}`);
      }
    }
  });
}

search().catch(err => console.error(err));
