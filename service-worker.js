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
    "revision": "28ade7dc0559f4903d361bdc1d8cdc33"
  },
  {
    "url": "about.html",
    "revision": "6b719413ac6391da1130d4967204b8df"
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
    "url": "assets/js/10.2f2f1c5b.js",
    "revision": "c48f8512a5ff50b6ec03cf9043466ff3"
  },
  {
    "url": "assets/js/11.5f4e5b04.js",
    "revision": "bceda3b6ee78e97126a8eb773f1ea1c1"
  },
  {
    "url": "assets/js/12.f92aadfa.js",
    "revision": "b60a1157f2c8b05807f46e80b455f66f"
  },
  {
    "url": "assets/js/13.b60951b7.js",
    "revision": "0ef13ed9764147148fb31e04d2a11506"
  },
  {
    "url": "assets/js/14.4ed16264.js",
    "revision": "690f94fde937b1753cd43b016d70404f"
  },
  {
    "url": "assets/js/15.f42fc753.js",
    "revision": "dd9ea92615a461edca830b07f4dcd072"
  },
  {
    "url": "assets/js/16.af64bd3e.js",
    "revision": "f300174d587f5c1f9ca1d6e9762a4a8f"
  },
  {
    "url": "assets/js/17.4a8a45ef.js",
    "revision": "edcfdd58d5686d2df3b53a5accc6e55b"
  },
  {
    "url": "assets/js/18.5df19b06.js",
    "revision": "1e5359a8100584a1b1fe4b26f1e545e6"
  },
  {
    "url": "assets/js/19.b0d48a84.js",
    "revision": "fcf95c3a633c73c204ae28de7878d21b"
  },
  {
    "url": "assets/js/2.fd2efaec.js",
    "revision": "df0c67210f1167afb637b731a796d8b9"
  },
  {
    "url": "assets/js/20.011aef9e.js",
    "revision": "bc30c430e5af1c91c9fc8934cdeca88d"
  },
  {
    "url": "assets/js/21.52f99816.js",
    "revision": "1500f8baeb2d2009cd1f03ba7c1f1ec1"
  },
  {
    "url": "assets/js/22.88be2967.js",
    "revision": "5446ef9b219c5bd69c9dd18101204c94"
  },
  {
    "url": "assets/js/23.02fbcc62.js",
    "revision": "93d45dab875188c5b7861b5a5f1f6419"
  },
  {
    "url": "assets/js/24.a38aa605.js",
    "revision": "28c4a1d02f6c5c76768c9c09983c0e43"
  },
  {
    "url": "assets/js/25.b4f7d656.js",
    "revision": "8e34a92b9f82564b719a97a919c4c770"
  },
  {
    "url": "assets/js/26.4d43ad32.js",
    "revision": "c0413ac2b3d94cd13cbd8699aed18e9c"
  },
  {
    "url": "assets/js/27.a165d3ad.js",
    "revision": "3eb9257ff7dbd5bd6adb2e0b71fb9234"
  },
  {
    "url": "assets/js/28.2f8ffbf5.js",
    "revision": "e8819b7c65bc0c30522e44f348c0350c"
  },
  {
    "url": "assets/js/29.8ebcbbf3.js",
    "revision": "a2a036e2087d72d573812993e8a30df2"
  },
  {
    "url": "assets/js/3.f1d9a899.js",
    "revision": "1e96c720f7bcdef8c01f9fedd4053065"
  },
  {
    "url": "assets/js/30.8b9f4189.js",
    "revision": "2b7d2b88e144c60812d4be70d7c7bdfa"
  },
  {
    "url": "assets/js/31.0f263b41.js",
    "revision": "8c4a1f4efd085a8583daf6b93cf39a7c"
  },
  {
    "url": "assets/js/32.ab27e3bf.js",
    "revision": "4a634f2cb70e9fa2cc8ea91a438c8b89"
  },
  {
    "url": "assets/js/33.d832387d.js",
    "revision": "5d16ab31b58a4b34faba90bb54fd137b"
  },
  {
    "url": "assets/js/34.5cdc7473.js",
    "revision": "db9a033ce5d911d353b754833ed9cd3d"
  },
  {
    "url": "assets/js/35.068dd44d.js",
    "revision": "610e77fcd8fb8ef2f24533ba74f861cb"
  },
  {
    "url": "assets/js/36.4201bd3a.js",
    "revision": "a73728f235087d94a456d492e3719635"
  },
  {
    "url": "assets/js/37.2a6fb23e.js",
    "revision": "9012c44d1636d3671d7c0c63b17e0193"
  },
  {
    "url": "assets/js/38.875bf68c.js",
    "revision": "0c97ef138c32ef9e835df71883bc8c1f"
  },
  {
    "url": "assets/js/39.9d6937cb.js",
    "revision": "0fb80d95ce28d941d1acc65c24a628f8"
  },
  {
    "url": "assets/js/4.1cc7af79.js",
    "revision": "947e5e99c1b9baf9f7b05d6a6222ecb3"
  },
  {
    "url": "assets/js/40.e0a43244.js",
    "revision": "0ad122f64ad3640a5ab94b94216b03c3"
  },
  {
    "url": "assets/js/41.49b2f6a3.js",
    "revision": "b4fb817ae90e615ec53680543fe57c2b"
  },
  {
    "url": "assets/js/42.2f009e93.js",
    "revision": "559eb9c91173ae2ff087bf5a81e91e2d"
  },
  {
    "url": "assets/js/43.732614ec.js",
    "revision": "aaf03ab733320213b2f52d3cbb2e3e1d"
  },
  {
    "url": "assets/js/44.f4faf882.js",
    "revision": "9b969496c364c1eea9c9474f5eb388d7"
  },
  {
    "url": "assets/js/45.edcecd6f.js",
    "revision": "ccdb9576ab61e8bf2d3a1465d56cd701"
  },
  {
    "url": "assets/js/46.5cb91bb6.js",
    "revision": "c0cac2c7954631c289c28677c540f436"
  },
  {
    "url": "assets/js/5.269ed1bb.js",
    "revision": "af903bf9fa25137b66d87cfab9e5afe9"
  },
  {
    "url": "assets/js/6.673b47bb.js",
    "revision": "01eb27786cd4765da76479d67b87c730"
  },
  {
    "url": "assets/js/7.5ebe59a6.js",
    "revision": "acd690e582ae49c5a1664b14a629f2a7"
  },
  {
    "url": "assets/js/8.eff5865f.js",
    "revision": "029f624da68071c15288afbcb4e0c354"
  },
  {
    "url": "assets/js/9.2ba08c6b.js",
    "revision": "484f0797ab8b5aefc3a71da629345158"
  },
  {
    "url": "assets/js/app.85948583.js",
    "revision": "45170016548754d5495e706822cf1aa7"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "c7a93c88c7693d42fb8891b2426c779b"
  },
  {
    "url": "frontend/electron.html",
    "revision": "927c9d65217b78228c9e4c786bbc4b9e"
  },
  {
    "url": "frontend/points.html",
    "revision": "ec600c13cabc6009a701f0d48fe64bac"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "f360ff4539c526aac18a3532a392f0eb"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "efad76f28ebfbef7931a9973d3e14594"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "48e48d0ae73447be67369a902947aa16"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "6e1bfdc815c011155531746719a5a426"
  },
  {
    "url": "guide.html",
    "revision": "9fa7f637f67f70482abf1117782639dd"
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
    "revision": "dceb6a8ed4545a7277c2e2285c533fc9"
  },
  {
    "url": "languages/english/zero.html",
    "revision": "fad86742e70f768474f497df4856cf2c"
  },
  {
    "url": "other/cook.html",
    "revision": "6cd600f024e34ed0eac2e831e2484323"
  },
  {
    "url": "other/countup.html",
    "revision": "6de59c2aabdef5a0da1df49d728c7490"
  },
  {
    "url": "other/image.html",
    "revision": "72486713a0bedc2f009c65d1fb7ba507"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "245a8d4e0d44786f7f03ff3238f55ac1"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "c3b4baf5ba9a5c84292afee9d2cbc452"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "f714c6796636ef261a98657cf6a3b248"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "bd7899bad252f6249bfe8b2c9c9aa911"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "88a9431ce61f3d4e9ea892c8bf9e27e7"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "c9e46630ffaaea25db2214e704a486e2"
  },
  {
    "url": "tools/frontend/index.html",
    "revision": "a2d6817cda0ff4bd8160acc97049c41d"
  },
  {
    "url": "tools/frontend/Lerna.html",
    "revision": "dad66b36d6bf47986d18df63c62610ef"
  },
  {
    "url": "tools/frontend/NPM.html",
    "revision": "cbfd03ca10bdcff47476cab4c6f746cf"
  },
  {
    "url": "tools/frontend/nvm.html",
    "revision": "e1aa7f4b1d3fd9fcf5e07106fad3d874"
  },
  {
    "url": "tools/frontend/Verdaccio.html",
    "revision": "3cc47114af6217a4456cefce803cadab"
  },
  {
    "url": "tools/frontend/VS Code.html",
    "revision": "aa53891a2b134a4a591ff7eab40e4bdf"
  },
  {
    "url": "tools/frontend/Yarn.html",
    "revision": "7357f5168d06decbc6bc7200aca1ba75"
  },
  {
    "url": "tools/python/anaconda.html",
    "revision": "38527006f018dec85494cbf8da83f815"
  },
  {
    "url": "tools/python/index.html",
    "revision": "bb4afafd449581aac8f9d2f5fcde897b"
  },
  {
    "url": "tools/python/pip.html",
    "revision": "dddaa33dcfeb0185c1974358d5e77977"
  },
  {
    "url": "tools/system/docker.html",
    "revision": "62913515682e4658f3d71dc2a2c78ca7"
  },
  {
    "url": "tools/system/git.html",
    "revision": "dd526ac9e879b653d46974fcfb8b3912"
  },
  {
    "url": "tools/system/index.html",
    "revision": "1ec299d1566b4aaeb932392b5bfde2c6"
  },
  {
    "url": "tools/system/linux.html",
    "revision": "3740441842f916ceb25653e1e90c4016"
  },
  {
    "url": "tools/system/ubuntu.html",
    "revision": "b49e70ed828bae45edc2fec08b945954"
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
