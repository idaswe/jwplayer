import Promise from 'polyfills/promise';

let controlsPromise = null;

export function load() {
    if (!controlsPromise) {
        controlsPromise = new Promise(function (resolve) {
            require.ensure(['view/controls/controls'], function (require) {
                const controls = require('view/controls/controls');
                resolve(controls);
            }, 'jwplayer.controls');
        });
    }
    return controlsPromise;
}
