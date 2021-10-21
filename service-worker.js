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
    "revision": "3f8a29ab7610b32d59b725a3b1886f36"
  },
  {
    "url": "about.html",
    "revision": "f8112d89d9e96529f0e286845f6e29df"
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
    "url": "assets/js/11.ed700294.js",
    "revision": "ee2c8749701dd3137af05cef2a5baf99"
  },
  {
    "url": "assets/js/12.f92aadfa.js",
    "revision": "b60a1157f2c8b05807f46e80b455f66f"
  },
  {
    "url": "assets/js/13.68d822bc.js",
    "revision": "54e73250d116b5fd692132de072d8796"
  },
  {
    "url": "assets/js/14.0de22b67.js",
    "revision": "896e9ac7e22785119e75ffe8291dffb7"
  },
  {
    "url": "assets/js/15.d6f50176.js",
    "revision": "66df8942a790a65b6b4fbb2ff5406edd"
  },
  {
    "url": "assets/js/16.f8c74308.js",
    "revision": "21d5c275962edf131c6e0736b4a9fd63"
  },
  {
    "url": "assets/js/17.117d8a21.js",
    "revision": "b67fee5cf6d2dbc048ea2c78d1d904c8"
  },
  {
    "url": "assets/js/18.58c0f329.js",
    "revision": "c6111be6b4034b8e5e3a8d7a334cac21"
  },
  {
    "url": "assets/js/19.e2acce51.js",
    "revision": "3afc1b186731da5eb2c6d168361ce0c9"
  },
  {
    "url": "assets/js/2.fd2efaec.js",
    "revision": "df0c67210f1167afb637b731a796d8b9"
  },
  {
    "url": "assets/js/20.0f0cd20e.js",
    "revision": "d1a693e8f6dd20dc11b2753f4b944077"
  },
  {
    "url": "assets/js/21.50785dc2.js",
    "revision": "0624b493f24600a494133af9945d9b2a"
  },
  {
    "url": "assets/js/22.34e49197.js",
    "revision": "4cae8deb890edcbee565a6c6ac0b918f"
  },
  {
    "url": "assets/js/23.4f5bb32b.js",
    "revision": "97d98e79f76598c4bd996e8ed4824018"
  },
  {
    "url": "assets/js/24.111d3e3e.js",
    "revision": "31b609f37af22833625b983ec235024c"
  },
  {
    "url": "assets/js/25.e4e777b1.js",
    "revision": "5d57177358223ddf53a9f666a842cce0"
  },
  {
    "url": "assets/js/26.a3276ffc.js",
    "revision": "661ec3011fb647bde8da2bc6bf0196bc"
  },
  {
    "url": "assets/js/27.8d15bec0.js",
    "revision": "851143ef23471ed17371ebbeb086b0c4"
  },
  {
    "url": "assets/js/28.2e982447.js",
    "revision": "202f15a8acea63cf07df4b2b656b0931"
  },
  {
    "url": "assets/js/29.e82cbd6a.js",
    "revision": "3e89939ea1413aa53d208a48777ef7cf"
  },
  {
    "url": "assets/js/3.f1d9a899.js",
    "revision": "1e96c720f7bcdef8c01f9fedd4053065"
  },
  {
    "url": "assets/js/30.9a840cb1.js",
    "revision": "c949b52d8515ed2c904144e67b4206ba"
  },
  {
    "url": "assets/js/31.04ed04db.js",
    "revision": "e3e1de14ba47306a5e2558a2147da118"
  },
  {
    "url": "assets/js/32.648d8880.js",
    "revision": "307c7fd5d7c711e87df8f5998dc86503"
  },
  {
    "url": "assets/js/33.cdd2141c.js",
    "revision": "8a507d32f8384c1a50b8a10492c8ece0"
  },
  {
    "url": "assets/js/34.eca230ee.js",
    "revision": "d18eb9084c35c35e13ed6ca2f25cc4fb"
  },
  {
    "url": "assets/js/35.bf9113c1.js",
    "revision": "907326a8039fae910293b9cd2b01bb81"
  },
  {
    "url": "assets/js/36.00c9a477.js",
    "revision": "74351355853f716e92a4e7b96e656e40"
  },
  {
    "url": "assets/js/37.c0f768b8.js",
    "revision": "ef70edb22bcbee8c88a33a99dc7717db"
  },
  {
    "url": "assets/js/38.17f25934.js",
    "revision": "5af65a9594c5fc5760ac9600fad8f72a"
  },
  {
    "url": "assets/js/39.80d30e7d.js",
    "revision": "2223d09f46eb1ccca1bafd2e73cee6b2"
  },
  {
    "url": "assets/js/4.4a3a3d1e.js",
    "revision": "0256260969a46c455b43fd8650e1fa61"
  },
  {
    "url": "assets/js/40.18531f34.js",
    "revision": "aab05ec7e81817b3ab30e60b32a1bb22"
  },
  {
    "url": "assets/js/41.005eccfb.js",
    "revision": "95b8afa5d2d0e40bbe25e2b410fe4c7b"
  },
  {
    "url": "assets/js/42.58a7b570.js",
    "revision": "0fc64ce8b44b8a1304b02cee3e5be710"
  },
  {
    "url": "assets/js/43.a36445a0.js",
    "revision": "f6d7cc2ffb5bcd8d7be7df349e859433"
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
    "url": "assets/js/7.f7101052.js",
    "revision": "41b728cce1c1278f991a26cda4084de7"
  },
  {
    "url": "assets/js/8.ad8218ac.js",
    "revision": "748c2e825108a60050b3929003d4c1a2"
  },
  {
    "url": "assets/js/9.2ba08c6b.js",
    "revision": "484f0797ab8b5aefc3a71da629345158"
  },
  {
    "url": "assets/js/app.b1e493fe.js",
    "revision": "5817374bf70192b985fa7f2c5e8de032"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "24eac9f825d6129211a7683e3ecaab18"
  },
  {
    "url": "english/zero.html",
    "revision": "1c7f5ca27c6f2ee7a58a6b79ff13a26b"
  },
  {
    "url": "frontend/electron.html",
    "revision": "ee96123d3fe9d70d0eb2644502a11d04"
  },
  {
    "url": "frontend/more.html",
    "revision": "d33643b6494a2c911ef7d0bb39585d6f"
  },
  {
    "url": "frontend/points.html",
    "revision": "aa45d88e27f26839aad0154d3ca51cf4"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "932b82fc186696ffe50c819f957b403e"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "f83e22d9d6cadc3c22131e614dbd43a6"
  },
  {
    "url": "frontend/常用工具/index.html",
    "revision": "290d48f8e4c75a41a1d5763e2fa25313"
  },
  {
    "url": "frontend/常用工具/Lerna.html",
    "revision": "9a2f054a3e223302a47fcbe223cfc478"
  },
  {
    "url": "frontend/常用工具/NPM.html",
    "revision": "75d7b950a38a0e8ad884fe6c88f64c5f"
  },
  {
    "url": "frontend/常用工具/nvm.html",
    "revision": "538703f04318295eb2595f6d6a1fe625"
  },
  {
    "url": "frontend/常用工具/Verdaccio.html",
    "revision": "4742e3ea5d634c190a70363e12feba45"
  },
  {
    "url": "frontend/常用工具/VS Code.html",
    "revision": "a5a8d9e75cea995a069903e900b6d26b"
  },
  {
    "url": "frontend/常用工具/Yarn.html",
    "revision": "454b683d72201ff1af58f6d9e0898569"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "58e6abe025f3555d9f1ca67fb39923db"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "f7598eeb362bc7019cfb1d3ec4e260b2"
  },
  {
    "url": "guide.html",
    "revision": "a4a8ee7758ac490a8138a70de0c0ae84"
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
    "revision": "3e9684b132ae1c15752b17b7ed86f35f"
  },
  {
    "url": "other/cook.html",
    "revision": "ebfe5f4016dc00be3c26b328201e7445"
  },
  {
    "url": "other/countup.html",
    "revision": "9d77d158d8eee5b9884d2ecd60e7f79d"
  },
  {
    "url": "other/image.html",
    "revision": "35c7b121e29593c15559cbc8dee8934d"
  },
  {
    "url": "python/常用工具/anaconda.html",
    "revision": "d6a16b94b0cbbc2e9d902564d7e3dafe"
  },
  {
    "url": "python/常用工具/index.html",
    "revision": "77e8192b56616b6a6c590bbb6c039982"
  },
  {
    "url": "python/常用工具/pip.html",
    "revision": "bfbcadeb3fe95645e82151dcb4a60e27"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "089e44c4d9b536b4ae7eb2acec1c3d92"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "7aa27a3a567ff20ef0ad1e558ecfce48"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "de153390cf2bf70b6ff67e93435c39ae"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "a036b2f8958782f9198a409169e0361b"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "6713be260c0864358e0d8e3c872c4233"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "534494bb7964c71c2977089e16e4a18d"
  },
  {
    "url": "todo.html",
    "revision": "0643c8b90c12f0e4692473fd7f7d8a14"
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
