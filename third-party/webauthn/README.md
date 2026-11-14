# Passkey dependencies

Pinned npm dependencies and lockfile for the vendored SimpleWebAuthn implementation. The browser UMD build is copied unchanged; the server ESM build is bundled for the Cloudflare Web Crypto runtime. No private keys or biometric data are stored by Mind Garden.

Rebuild from the repository root (requires Node and esbuild from the project dev dependencies):

```sh
npm ci --prefix third-party/webauthn
node_modules/.bin/esbuild third-party/webauthn/entry.js --bundle --platform=browser --format=esm --target=es2022 --outfile=functions/lib/webauthn-server.js
cp third-party/webauthn/node_modules/@simplewebauthn/browser/dist/bundle/index.umd.min.js public/vendor/simplewebauthn-browser-13.3.0.min.js
npm run build
node tests/passkeys.test.mjs
```

Review upstream changes before updating versions. Keep license notices with release packages.

- @hexagon/base64 1.1.28: MIT — `licenses/hexagon-base64-1.1.28/`
- @levischuck/tiny-cbor 0.2.11: MIT — `licenses/levischuck-tiny-cbor-0.2.11/`
- @peculiar/asn1-android 2.11.1: MIT — `licenses/peculiar-asn1-android-2.11.1/`
- @peculiar/asn1-asym-key 2.11.1: MIT — `licenses/peculiar-asn1-asym-key-2.11.1/`
- @peculiar/asn1-cms 2.11.1: MIT — `licenses/peculiar-asn1-cms-2.11.1/`
- @peculiar/asn1-csr 2.11.1: MIT — `licenses/peculiar-asn1-csr-2.11.1/`
- @peculiar/asn1-ecc 2.11.1: MIT — `licenses/peculiar-asn1-ecc-2.11.1/`
- @peculiar/asn1-pfx 2.11.1: MIT — `licenses/peculiar-asn1-pfx-2.11.1/`
- @peculiar/asn1-pkcs8 2.11.1: MIT — `licenses/peculiar-asn1-pkcs8-2.11.1/`
- @peculiar/asn1-pkcs9 2.11.1: MIT — `licenses/peculiar-asn1-pkcs9-2.11.1/`
- @peculiar/asn1-rsa 2.11.1: MIT — `licenses/peculiar-asn1-rsa-2.11.1/`
- @peculiar/asn1-schema 2.11.1: MIT — `licenses/peculiar-asn1-schema-2.11.1/`
- @peculiar/asn1-x509 2.11.1: MIT — `licenses/peculiar-asn1-x509-2.11.1/`
- @peculiar/asn1-x509-attr 2.11.1: MIT — `licenses/peculiar-asn1-x509-attr-2.11.1/`
- @peculiar/asn1-x509-post-quantum 2.11.1: MIT — `licenses/peculiar-asn1-x509-post-quantum-2.11.1/`
- @peculiar/utils 2.0.3: MIT — `licenses/peculiar-utils-2.0.3/`
- @peculiar/x509 2.2.0: MIT — `licenses/peculiar-x509-2.2.0/`
- @simplewebauthn/browser 13.3.0: MIT — `licenses/simplewebauthn-browser-13.3.0/`
- @simplewebauthn/server 14.1.0: MIT — `licenses/simplewebauthn-server-14.1.0/`
- asn1js 3.1.0: BSD-3-Clause — `licenses/asn1js-3.1.0/`
- pvtsutils 1.3.6: MIT — `licenses/pvtsutils-1.3.6/`
- pvutils 1.2.0: MIT — `licenses/pvutils-1.2.0/`
- reflect-metadata 0.2.2: Apache-2.0 — `licenses/reflect-metadata-0.2.2/`
- tslib 2.9.1: 0BSD — `licenses/tslib-2.9.1/`
- tslib 1.14.1: 0BSD — `licenses/tslib-1.14.1/`
- tsyringe 4.10.0: MIT — `licenses/tsyringe-4.10.0/`
