/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fb9bf40c14aebd74b5037f4395de966e"
  },
  {
    "url": "about.html",
    "revision": "4f0d559c86953f231e153215095ac218"
  },
  {
    "url": "app.png",
    "revision": "9ea40a18fbbd5e1562c5bf9607d0b1eb"
  },
  {
    "url": "assets/css/0.styles.5ec96225.css",
    "revision": "b1aab0f72b932524bff38383cf4d5605"
  },
  {
    "url": "assets/img/18008-0.jpg",
    "revision": "0b0c2c9362e4593eb61a97090e93e5ca"
  },
  {
    "url": "assets/img/18008.jpg",
    "revision": "a70bf338a8c1ab42f28a760697d000f3"
  },
  {
    "url": "assets/img/2-1.png",
    "revision": "30bb09193fa2631d957629bfb1847dbf"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/ubuntu-virtualbox-network-1.576ea23c.png",
    "revision": "576ea23cfb4688e60d4d9c5124455157"
  },
  {
    "url": "assets/img/ubuntu-virtualbox-network-1.png",
    "revision": "576ea23cfb4688e60d4d9c5124455157"
  },
  {
    "url": "assets/img/ubuntu-virtualbox-network-2.09b6e2a1.png",
    "revision": "09b6e2a1ba9cb8eb1e11e1cc1ddfcbb6"
  },
  {
    "url": "assets/img/ubuntu-virtualbox-network-2.png",
    "revision": "09b6e2a1ba9cb8eb1e11e1cc1ddfcbb6"
  },
  {
    "url": "assets/img/wechat.4de542c4.png",
    "revision": "4de542c4c13071232f7d7f0eed1cf754"
  },
  {
    "url": "assets/img/wechat.png",
    "revision": "4de542c4c13071232f7d7f0eed1cf754"
  },
  {
    "url": "assets/js/10.6f12f826.js",
    "revision": "b764345409f4d1db3247a0909abd690a"
  },
  {
    "url": "assets/js/11.777306f6.js",
    "revision": "39ba7c8af2922db0e204a7a176aac753"
  },
  {
    "url": "assets/js/12.255e9867.js",
    "revision": "bc8b4204fc0c0b43b498c963f14a7386"
  },
  {
    "url": "assets/js/13.7425e519.js",
    "revision": "3fddaeb9f21354af0177dbca47dff156"
  },
  {
    "url": "assets/js/14.ea5b26f5.js",
    "revision": "bd1c11f58e79c79d0eb74b379eecf474"
  },
  {
    "url": "assets/js/15.4f0ba5f2.js",
    "revision": "60a4f30b6f416ac80074edaf9164ba0a"
  },
  {
    "url": "assets/js/16.eaa88491.js",
    "revision": "5bc1fe648d1c0d05a31bc1cbafb57f93"
  },
  {
    "url": "assets/js/17.4c6e5e4d.js",
    "revision": "0c22d27e7963195d7742ec339fba6813"
  },
  {
    "url": "assets/js/18.b44d32bb.js",
    "revision": "78640b3c3bd106bdb70bbe3fde492ea4"
  },
  {
    "url": "assets/js/19.f8577fec.js",
    "revision": "514194a7eba81221aefb3fc9c9a14e2a"
  },
  {
    "url": "assets/js/2.23b71ba4.js",
    "revision": "3bbfc7bb79ce079d21fd86c69ff61cd4"
  },
  {
    "url": "assets/js/20.4c939ca6.js",
    "revision": "94e67ae15e4020ce852be0b9daa41bad"
  },
  {
    "url": "assets/js/21.c917d06e.js",
    "revision": "a827fe1e6c1131f47b0e17962176d7f8"
  },
  {
    "url": "assets/js/22.7c648a86.js",
    "revision": "761f3e96f307ba9c9bf6e1bcc4fce49f"
  },
  {
    "url": "assets/js/23.ae144767.js",
    "revision": "a20b445593b0f1edc9b5a2a7d4ff5272"
  },
  {
    "url": "assets/js/24.4778946e.js",
    "revision": "8109bc9fd36048b4ca8bf7f255ea0b60"
  },
  {
    "url": "assets/js/25.d1f6d340.js",
    "revision": "612468920391394c3955c2df0ffa4d2f"
  },
  {
    "url": "assets/js/26.0ba6c816.js",
    "revision": "d83a89decb8f287c0571b19ae3d7fd3b"
  },
  {
    "url": "assets/js/27.4f7007f4.js",
    "revision": "457cc139bff9d124d0f0dc4f21bd830d"
  },
  {
    "url": "assets/js/28.c85dda87.js",
    "revision": "f4c5fbc986ef3e60f68164913babf812"
  },
  {
    "url": "assets/js/29.462d19fc.js",
    "revision": "7f6b0e1d3f5dd5d92f6571013c75ec3a"
  },
  {
    "url": "assets/js/3.b9f87b4c.js",
    "revision": "7fe7a3e48aa4170dcba6fbc9481d82ac"
  },
  {
    "url": "assets/js/30.2e1f5cd7.js",
    "revision": "5a31bcda68f0bdcd82e45c49f20b314f"
  },
  {
    "url": "assets/js/31.1ffd120a.js",
    "revision": "8d654118deb5d254b2837489d482e50c"
  },
  {
    "url": "assets/js/32.266f8799.js",
    "revision": "9f51d3bd515700b3f3c54cc396a7716b"
  },
  {
    "url": "assets/js/33.48d1f296.js",
    "revision": "5bc41a77017c02582f2a980346b10932"
  },
  {
    "url": "assets/js/34.45465f84.js",
    "revision": "1eb6dbec1e3d867e9ae9ff1bfe9b4dda"
  },
  {
    "url": "assets/js/35.4750d415.js",
    "revision": "2ccc6e3ae886e380ee15dea0261f5c92"
  },
  {
    "url": "assets/js/36.61108358.js",
    "revision": "bfd0b524417e8d335583a992ce778dc0"
  },
  {
    "url": "assets/js/37.080b83ef.js",
    "revision": "81d70f5655060f52ab91bebbfd122514"
  },
  {
    "url": "assets/js/38.17915d99.js",
    "revision": "2b986ba31daffe88fa680e9272d6b907"
  },
  {
    "url": "assets/js/39.a37e9068.js",
    "revision": "1a37db77fcbaa1f6f752014170546829"
  },
  {
    "url": "assets/js/4.63205341.js",
    "revision": "19b13f3acbbd9d6e9f9431a29865f8a4"
  },
  {
    "url": "assets/js/40.e6772356.js",
    "revision": "55cd5e6eb2979287b67a512645d84a07"
  },
  {
    "url": "assets/js/41.a334eb97.js",
    "revision": "d61f9ee16908b85db0387e01c2609fbf"
  },
  {
    "url": "assets/js/42.d4099af9.js",
    "revision": "83c1415999a6b2c2128fda9a96f54ed1"
  },
  {
    "url": "assets/js/43.36988473.js",
    "revision": "d3ce8c655978058928e8b6501877a132"
  },
  {
    "url": "assets/js/44.9d89127c.js",
    "revision": "987406cf3ffe4a585440b749bdb0a4c5"
  },
  {
    "url": "assets/js/45.2a2a561d.js",
    "revision": "2b517284488bf9284baf4885d02be77e"
  },
  {
    "url": "assets/js/46.3292843b.js",
    "revision": "44927f1f9b60cae8adc02711906cfbfa"
  },
  {
    "url": "assets/js/47.78eb22ad.js",
    "revision": "a2ed5b9878e25a5cd8ba699d795fd7e5"
  },
  {
    "url": "assets/js/48.221ed420.js",
    "revision": "3afb1df3bff7b1e1b5b30f67d5bb0854"
  },
  {
    "url": "assets/js/5.a497d5b5.js",
    "revision": "98d7e15ea92e893cd916dff4471b3bd4"
  },
  {
    "url": "assets/js/6.edfecbac.js",
    "revision": "a0a6de54fc6beacd6657237b464e567e"
  },
  {
    "url": "assets/js/7.55501f8a.js",
    "revision": "80e8ae86105e3fd967beb1f8ea6e15f7"
  },
  {
    "url": "assets/js/8.0d6e3d75.js",
    "revision": "302f44cf881fd6a2df048a8489658fc1"
  },
  {
    "url": "assets/js/9.c91191c5.js",
    "revision": "13b967a28b2183daed6b604b0c123fc3"
  },
  {
    "url": "assets/js/app.7011c23e.js",
    "revision": "d09847228f72ff8969ca90e44fd8a18f"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "ca144c56140ac89d89d2fa8679cc572d"
  },
  {
    "url": "frontend/electron.html",
    "revision": "0394f04557340754988742a4bb6f711f"
  },
  {
    "url": "frontend/points.html",
    "revision": "345e3f1730e0b95ef6464c4255b813e1"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "086ce16497e246ff301aca3541b6aa82"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "69834d8a5fb5dbcfb0a3bddced0ab55c"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "ce59940f1bb4633ee93eb3205c3db12d"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "3c8735cf56939ea204797c4f984c8c86"
  },
  {
    "url": "guide.html",
    "revision": "1e51b7c2c27050a6e0f24a776c16fca1"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "720929da63322d11431cd697b63b209b"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "c87a981a15f35e93b1dce276d5197ff1"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "08d7ebcdea34fde5cd1b598cc6d86529"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4a6cf569e6b52d1a673dd5fb0b587a81"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "409c3843dc16c098ee10435a1df12d4f"
  },
  {
    "url": "index.html",
    "revision": "6a4661be849bb737652bb702fa5cfc82"
  },
  {
    "url": "other/c.html",
    "revision": "0247df47870a08a5a7acb356c24c333a"
  },
  {
    "url": "other/cook.html",
    "revision": "390da41a2d2ad5ac0839b2f65b3adefd"
  },
  {
    "url": "other/countup.html",
    "revision": "6ef27bd09463e2cb26c999eab7b30f2f"
  },
  {
    "url": "other/english.html",
    "revision": "82e5de1876647555f5d35ac0506751d4"
  },
  {
    "url": "other/image.html",
    "revision": "46749fd7dd715ce4e9a9daf9865b7908"
  },
  {
    "url": "other/index.html",
    "revision": "bb87a343bfcf04b2613eaee77349b1d5"
  },
  {
    "url": "python/Django.html",
    "revision": "bdb5af4b020985598459501a3a2238ac"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "93a7a3aa7436af747dcb01097c72f8f1"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "f0b3d2e02f2108cc1d69b165918e5d0d"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "498f8e47d7048ce3d1b8ed791df307c2"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "432fbfc23c16644b8c738f7c07e8ee37"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "3fad66faf254cf987336e4d19fc2230d"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "3afc7f59f2b37de07b87d2842533fc2e"
  },
  {
    "url": "tools/frontend/index.html",
    "revision": "ed83ae41abe0bed644dd2a03f90c99c7"
  },
  {
    "url": "tools/frontend/Lerna.html",
    "revision": "7c1881ee107d1eab343fc0716dd88d3c"
  },
  {
    "url": "tools/frontend/NPM.html",
    "revision": "2edef524e735f85d0f2c78b14ee30cac"
  },
  {
    "url": "tools/frontend/nvm.html",
    "revision": "dceccd7401a578a2e586cf2ad195d55b"
  },
  {
    "url": "tools/frontend/Verdaccio.html",
    "revision": "a30cfd9e748fa6932f6431a6b41a5983"
  },
  {
    "url": "tools/frontend/Yarn.html",
    "revision": "d239a821a59b4acdc61eec8cd44023b3"
  },
  {
    "url": "tools/python.html",
    "revision": "2897ddb9938d3ae1c0f7d67d910eae57"
  },
  {
    "url": "tools/system/docker.html",
    "revision": "97874ed3795e9ff13063ab8f2f8280f4"
  },
  {
    "url": "tools/system/git.html",
    "revision": "4a44fc3b04df6b691636749c4d4294cd"
  },
  {
    "url": "tools/system/index.html",
    "revision": "c1324608df1c8822eb1d28519d97732f"
  },
  {
    "url": "tools/system/linux.html",
    "revision": "1c2590ef4b393c3f3bad743d4a64b072"
  },
  {
    "url": "tools/system/ubuntu.html",
    "revision": "667ec21aff208b8dfab20dd8c8390fc8"
  },
  {
    "url": "tools/system/vim.html",
    "revision": "e2bc84ff1c7f8952484035f90a96c937"
  },
  {
    "url": "tools/system/VS Code.html",
    "revision": "e5d6bbea3bff760b4f2439e86665a99a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
