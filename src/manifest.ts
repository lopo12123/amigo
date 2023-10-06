import {defineManifest} from '@crxjs/vite-plugin'

export default defineManifest({
    name: 'amigo',
    description: '',
    version: '0.1.0',
    manifest_version: 3,
    // see https://developer.chrome.com/docs/extensions/reference/sidePanel/
    minimum_chrome_version: '114',
    icons: {
        16: 'icons/logo@16x16.png',
        32: 'icons/logo@32x32.png',
        48: 'icons/logo@48x48.png',
        128: 'icons/logo@128x128.png',
    },
    // chrome_url_overrides: {
    //     newtab: 'index.html',
    // },
    action: {
        default_title: 'amigo',
    },
    side_panel: {
        default_path: 'sidepanel.html'
    },
    background: {
        service_worker: 'src/background/index.ts',
        type: 'module',
    },
    content_scripts: [
        // {
        //     matches: ['http://*/*', 'https://*/*'],
        //     js: ['src/content/index.ts'],
        // },
    ],
    content_security_policy: {
        // see https://bugs.chromium.org/p/v8/issues/detail?id=7041, https://github.com/WebAssembly/content-security-policy/blob/master/proposals/CSP.md#the-wasm-unsafe-eval-source-directive
        extension_pages: 'script-src \'wasm-unsafe-eval\'; object-src \'self\''
    },
    web_accessible_resources: [
        {
            resources: ['misc/web.wasm'],
            matches: ['<all_urls>'],
        },
    ],
    permissions: [
        "sidePanel"
    ],
})
