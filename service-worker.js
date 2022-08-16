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
    "revision": "49f161e0b5959cd3dc0c4843e698ae41"
  },
  {
    "url": "about.html",
    "revision": "3ef483bab74f3621a73fd8a0fc9b43c9"
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
    "url": "assets/js/13.51a68bd2.js",
    "revision": "93bc435bfed8a860d62fb4ad90b0f9d9"
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
    "url": "assets/js/4.85673b61.js",
    "revision": "ab9566a829e4bcfe2f90931479d97674"
  },
  {
    "url": "assets/js/40.5bcf5b31.js",
    "revision": "dfc88de452d39f6e03a04bd6028debca"
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
    "url": "assets/js/43.c682cb6e.js",
    "revision": "d46340863cbf6dcbf6ce8e08b3bf8d91"
  },
  {
    "url": "assets/js/44.d52ff930.js",
    "revision": "e02809b657e3113e23e98000938c27cb"
  },
  {
    "url": "assets/js/45.64b52cdb.js",
    "revision": "d3795a64af5e0cda4652e909a010bfdf"
  },
  {
    "url": "assets/js/46.48818138.js",
    "revision": "105aa7b751dc9462147c0907bbe377e1"
  },
  {
    "url": "assets/js/47.74588e9d.js",
    "revision": "d0af2298dfe21020c8c019c0265a1501"
  },
  {
    "url": "assets/js/48.56034e46.js",
    "revision": "e22ce258b0c7180d11eb716bec5b2e6c"
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
    "url": "assets/js/8.dd8ac3b7.js",
    "revision": "6c8ce60954668d763b579e4cc42faeb7"
  },
  {
    "url": "assets/js/9.2ba08c6b.js",
    "revision": "484f0797ab8b5aefc3a71da629345158"
  },
  {
    "url": "assets/js/app.5566a3f6.js",
    "revision": "9839f4d13335f3a36fe303607186e450"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "f155482ae4f93d166fd11e0ccf8d79d4"
  },
  {
    "url": "frontend/electron.html",
    "revision": "17c7f1ebbc3aa3645567aad3158049aa"
  },
  {
    "url": "frontend/points.html",
    "revision": "1a8c7fa4141e17b3856e003b55393935"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "7fa43f774e02d225d637144291038271"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "f356061afa0ca7c38d2d4442f909dd37"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "fc480f06c5ffa1ec6b1ed8e99590f659"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "6c62cada4a6675924a93f8e81dd38bdb"
  },
  {
    "url": "guide.html",
    "revision": "6014a34095291c27641f18745f771b58"
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
    "revision": "58a78e3b7b75ceaf5cddc4d638e1d711"
  },
  {
    "url": "languages/english/zero.html",
    "revision": "73ea005105c22a04d977bb044d35795a"
  },
  {
    "url": "other/cook.html",
    "revision": "cf7fef8affd70b54a144883e16c723c3"
  },
  {
    "url": "other/countup.html",
    "revision": "df04a9787f4393446b6b9f575815bc64"
  },
  {
    "url": "other/image.html",
    "revision": "c2be58818594ed3afbd167669f4a5734"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "d9a7271a2681c5f7123b93ac3f72f897"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "a40255103cb9477b2d7ee1faba5f990b"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "e09a0df0958d01b686338e10a52b8f05"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "c5452d82a4abd8aa6c93cf4cfc227f81"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "b575470b416aa5efa7fd809f4c02cce5"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "735fb886019a12de017ce70732e88bc1"
  },
  {
    "url": "tools/frontend/index.html",
    "revision": "de774a849a73f4c5448f328feac04623"
  },
  {
    "url": "tools/frontend/Lerna.html",
    "revision": "e25dd5a2d267411d23d2ec2262e26a67"
  },
  {
    "url": "tools/frontend/NPM.html",
    "revision": "fec0d18b1853dad632f7559fbf7bc219"
  },
  {
    "url": "tools/frontend/nvm.html",
    "revision": "b6b42b89d685803c37fee410c0e79eb1"
  },
  {
    "url": "tools/frontend/Verdaccio.html",
    "revision": "093676558af55c45f6d921b719bc5eec"
  },
  {
    "url": "tools/frontend/VS Code.html",
    "revision": "d9ca17b00894f4909b45b4665f83356d"
  },
  {
    "url": "tools/frontend/Yarn.html",
    "revision": "25c96aaa506b97fd5c22f1b1a4377563"
  },
  {
    "url": "tools/python/anaconda.html",
    "revision": "35e8e9d5908060e8a65d6925bc98629d"
  },
  {
    "url": "tools/python/index.html",
    "revision": "7b98ede41d53e7e0162c34262378ad52"
  },
  {
    "url": "tools/python/pip.html",
    "revision": "79842d5ee4152e922a411f635a2ad195"
  },
  {
    "url": "tools/system/docker.html",
    "revision": "918b828223ff7fdbe6af4d70d92a6028"
  },
  {
    "url": "tools/system/git.html",
    "revision": "8868a3bf53dff908c367bd270c060dd9"
  },
  {
    "url": "tools/system/index.html",
    "revision": "45b972b3d37a2065c78ef9dad85c7581"
  },
  {
    "url": "tools/system/linux.html",
    "revision": "4489fddcb58871a252aa7bd16aacbcaa"
  },
  {
    "url": "tools/system/ubuntu.html",
    "revision": "1f51e7dab1f8a9cf99b3d10958772489"
  },
  {
    "url": "tools/system/vim.html",
    "revision": "4d59d46e15ccaffba8ac58734355fa01"
  },
  {
    "url": "物联网/c.html",
    "revision": "3539b1747543d552a214e80ffb48e450"
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
