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
    "revision": "5e2725ab3ed3a62950dbabf4bc6b7270"
  },
  {
    "url": "about.html",
    "revision": "5c5612604bb43c48c5638414044b4344"
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
    "url": "assets/js/4.32d3665b.js",
    "revision": "9e8b1718e99f34c5015ea0b57d52ffb8"
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
    "url": "assets/js/42.8f683e86.js",
    "revision": "3576ae03cbb55da1b1ec1d5cc53a4067"
  },
  {
    "url": "assets/js/43.732614ec.js",
    "revision": "aaf03ab733320213b2f52d3cbb2e3e1d"
  },
  {
    "url": "assets/js/44.d43bfd9f.js",
    "revision": "2e3a253bdb047ce428f3b44d2d6a60ca"
  },
  {
    "url": "assets/js/45.54e19818.js",
    "revision": "1fb0cfdd999083335ad80713e478b4be"
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
    "url": "assets/js/8.25bb2d68.js",
    "revision": "04241f391f4c427de8cc0712cce5a426"
  },
  {
    "url": "assets/js/9.2ba08c6b.js",
    "revision": "484f0797ab8b5aefc3a71da629345158"
  },
  {
    "url": "assets/js/app.de360d88.js",
    "revision": "4e3b8816294361843f914f203457fae5"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "c90d2a64aac9bc9ec199965643240546"
  },
  {
    "url": "frontend/electron.html",
    "revision": "410b656b6bb4d615c5cef51f385e431d"
  },
  {
    "url": "frontend/points.html",
    "revision": "c56b1f307eb0364e4f41e229002cabd2"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "d86852ff9d9f3dc2e44d552111eccf69"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "940be086d374a30a86225e53200d47c9"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "ecba4072fe96dfe25498e38c8f538f2c"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "f98fffcb5cc46e6c03b801a79b1ef83f"
  },
  {
    "url": "guide.html",
    "revision": "c41143c45009a07507074d9fc8808732"
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
    "revision": "2c8beccf97141fc6f415b05e0aad8767"
  },
  {
    "url": "languages/english/zero.html",
    "revision": "e2cd4452fd5272245037bc6c2123bb7a"
  },
  {
    "url": "other/cook.html",
    "revision": "a8e355b959afeaea203c27bddc78bb45"
  },
  {
    "url": "other/countup.html",
    "revision": "edeee1c097a9c6a88378b142ca37d305"
  },
  {
    "url": "other/image.html",
    "revision": "f3b0bc27f91a8853afcd2d131df10384"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "ec4c45c99e9d99f310c956fd2be64440"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "5ccb4cd5fc476f870082a3ffc81a2d02"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "dc607b42b819dbe41f2952d241cb07a9"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "46f6ab67f92951207fb0c3dfb46522f6"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "c522e592d6940a55043586652722d5f1"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "6a669f913dd44d3758c040c0baba9391"
  },
  {
    "url": "tools/frontend/index.html",
    "revision": "ed908f6df3d762e8ab028a179d263a58"
  },
  {
    "url": "tools/frontend/Lerna.html",
    "revision": "7db34643c5da0b4af788eeb839e1f7a7"
  },
  {
    "url": "tools/frontend/NPM.html",
    "revision": "150c3282934978fc34814c9c297bfd0e"
  },
  {
    "url": "tools/frontend/nvm.html",
    "revision": "dbf8c69f5f2ca35d6450130efc4f9719"
  },
  {
    "url": "tools/frontend/Verdaccio.html",
    "revision": "2719b33356513dd8515fe1644f5eef14"
  },
  {
    "url": "tools/frontend/VS Code.html",
    "revision": "21cf0fb16deca73907f7c6267c99feb3"
  },
  {
    "url": "tools/frontend/Yarn.html",
    "revision": "154533d096bd7e594c212cb0466e7f95"
  },
  {
    "url": "tools/python/anaconda.html",
    "revision": "9179a7457d4748014c5a362cc0cb5fd1"
  },
  {
    "url": "tools/python/index.html",
    "revision": "748504df37dbb49d29bf7e918fa96d0b"
  },
  {
    "url": "tools/python/pip.html",
    "revision": "056a09941d85dfeefd6d10bfd3ea6740"
  },
  {
    "url": "tools/system/docker.html",
    "revision": "50dbbc84e9d38b7b22bf06ee047fc5f8"
  },
  {
    "url": "tools/system/git.html",
    "revision": "1f67ad4f1fa7a3a5ec9cac1fef5efdd5"
  },
  {
    "url": "tools/system/index.html",
    "revision": "fe94e6ebe6f7c85180f1cba5fd6db833"
  },
  {
    "url": "tools/system/linux.html",
    "revision": "802aa9e691405a88d808658477906ab5"
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
