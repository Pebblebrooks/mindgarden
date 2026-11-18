// Keep the script format and property names: modules communicate through window.
// esbuild preserves top-level names when no output format or bundling is requested.
import {transform} from 'esbuild';
import {writeFile} from 'node:fs/promises';
const output = process.argv[2];
if (!output || !/\.(js|css)$/.test(output)) throw Error('Expected a JS or CSS output path');
let source = '';
// Decode stdin as UTF-8 across chunk boundaries. Concatenating raw Buffers split
// multi-byte characters (Chinese text) into U+FFFD in v6.0.0 and v6.1.0 bundles.
process.stdin.setEncoding('utf8');
for await (const chunk of process.stdin) source += chunk;
if (source.includes('\uFFFD')) throw Error('Source contains U+FFFD replacement characters');
const result = await transform(source, {
  loader: output.endsWith('.css') ? 'css' : 'js',
  minifyWhitespace: true,
  minifySyntax: true,
  minifyIdentifiers: true,
  legalComments: 'inline',
  charset: 'utf8',
});
for (const warning of result.warnings) throw Error(warning.text);
if (result.code.includes('\uFFFD')) throw Error('Compacted output contains U+FFFD replacement characters');
await writeFile(output, result.code);
