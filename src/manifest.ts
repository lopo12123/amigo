import {defineManifest} from '@crxjs/vite-plugin'

export default defineManifest({
    name: 'amigo',
    description: '',
    version: '0.1.0',
    manifest_version: 3,
    icons: {
        16: 'icons/logo@16x16.png',
        32: 'icons/logo@32x32.png',
        48: 'icons/logo@48x48.png',
        128: 'icons/logo@128x128.png',
    },
    chrome_url_overrides: {
        newtab: 'index.html',
    },
    action: {
        // default_popup: 'popup.html',
        // default_icon: 'img/logo@48x48.png',
    },
    background: {
        service_worker: 'src/background/index.ts',
        type: 'module',
    },
    content_scripts: [
        {
            matches: ['http://*/*', 'https://*/*'],
            js: ['src/content/index.ts'],
        },
    ],
    web_accessible_resources: [
        {
            resources: [],
            matches: ['<all_urls>'],
        },
    ],
    permissions: [],
})
