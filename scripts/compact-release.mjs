// Keep the script format and property names: modules communicate through window.
// esbuild preserves top-level names when no output format or bundling is requested.
import {transform} from 'esbuild';
import {writeFile} from 'node:fs/promises';
const output = process.argv[2];
if (!output || !/\.(js|css)$/.test(output)) throw Error('Expected a JS or CSS output path');
let source = '';
for await (const chunk of process.stdin) source += chunk;
const result = await transform(source, {
  loader: output.endsWith('.css') ? 'css' : 'js',
  minifyWhitespace: true,
  minifySyntax: true,
  minifyIdentifiers: true,
  legalComments: 'inline',
  charset: 'utf8',
});
for (const warning of result.warnings) throw Error(warning.text);
await writeFile(output, result.code);
