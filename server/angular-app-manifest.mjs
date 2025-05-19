
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://lustick99.github.io/marials-frontend/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "projects/main/src/app/modules/home/home/home.component.ts": [
    {
      "path": "chunk-3RGJHSK7.js",
      "dynamicImport": false
    },
    {
      "path": "chunk-UCE5XD3K.js",
      "dynamicImport": false
    }
  ],
  "projects/main/src/app/modules/a-propos/a-propos/a-propos.component.ts": [
    {
      "path": "chunk-Y6MS5SNM.js",
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
    'index.csr.html': {size: 1866, hash: 'b44e5843de88c364ac40fe821ef92bdd5840c2b7428933ab4640a20046450c6f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2098, hash: 'c94db39d7a4829804b0d1e43802cf3909b7135b718e84bcf84dccc507ffade28', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-46TTHZ22.css': {size: 156, hash: 'QK0oZ6ipQiM', text: () => import('./assets-chunks/styles-46TTHZ22_css.mjs').then(m => m.default)}
  },
};
