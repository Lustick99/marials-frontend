
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/marials-frontend/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "projects/main/src/app/modules/home/home/home.component.ts": [
    {
      "path": "chunk-IS6QNLFU.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-UCE5XD3K.js",
      "dynamicImport": false
    }
  ],
  "projects/main/src/app/modules/a-propos/a-propos/a-propos.component.ts": [
    {
      "path": "chunk-C2VP3FEA.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-UCE5XD3K.js",
      "dynamicImport": false
    }
  ],
  "projects/main/src/app/modules/contact/contact/contact.component.ts": [
    {
      "path": "chunk-EOKMNRHL.js",
      "dynamicImport": false
    }
  ],
  "projects/main/src/app/modules/test/test/test.component.ts": [
    {
      "path": "chunk-EF6YPN2O.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 1839, hash: '999effa067b3e8feae1cefe2f5cd37c31284bc80770ab59c6a8f55a359192790', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2071, hash: '624c8a5a625e88fa1a4cd175c4abc0ac5fa26ff0d5b9cd4288ab96f47236e279', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-46TTHZ22.css': {size: 156, hash: 'QK0oZ6ipQiM', text: () => import('./assets-chunks/styles-46TTHZ22_css.mjs').then(m => m.default)}
  },
};
