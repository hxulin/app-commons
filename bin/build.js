"use strict";

const path = require('path');
const {execSync} = require('child_process');
const fs = require('fs');

const rootDir = path.resolve(__dirname, '..');

execSync('tsc --target es6 --module commonjs index.ts');
fs.renameSync(
    path.join(rootDir, 'index.js'),
    path.join(rootDir, 'dist/index.cjs')
);

execSync('tsc --target es6 --module es6 index.ts');
fs.renameSync(
    path.join(rootDir, 'index.js'),
    path.join(rootDir, 'dist/index.mjs')
);
