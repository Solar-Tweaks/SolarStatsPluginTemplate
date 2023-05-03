const fs = require('fs');
const { join } = require('path');

fs.rm(
  join(__dirname, 'node_modules/@types/node'),
  {
    recursive: true,
    force: true,
  },
  err => {
    if (err) throw err;
    console.log('Removed Default Node.js Types');
  }
);
