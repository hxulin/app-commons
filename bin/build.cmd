tsc --target es6 --module commonjs index.ts && ^
move index.js dist/index.cjs && ^
tsc --target es6 --module es6 index.ts && ^
move index.js dist/index.mjs
