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
    "revision": "74f5a2a6ee577b27794a16fcc393bf88"
  },
  {
    "url": "about.html",
    "revision": "a52e244aa161b14365e3081c32334d0f"
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
    "url": "assets/js/11.bb9b3375.js",
    "revision": "faf7530a1d259d30e8502ba482866361"
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
    "url": "assets/js/14.137dd5f2.js",
    "revision": "47b00a203ea094b32e0482125ca889e4"
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
    "url": "assets/js/29.7beb7e4f.js",
    "revision": "e7baa5a5f81221c02675db933634f17a"
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
    "url": "assets/js/35.2d4b0071.js",
    "revision": "b98642eafd28533cb602d9cb57f5bb53"
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
    "url": "assets/js/app.30fde2e4.js",
    "revision": "4b7ebb62b7901bcb2347cdc6f75d69df"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "5b7e88022cb140c68ddfb41f6522b8cd"
  },
  {
    "url": "english/zero.html",
    "revision": "589692516a5a8bfd55960d73c5ccce74"
  },
  {
    "url": "frontend/electron.html",
    "revision": "1582d8dd22dd9441a8ebff7bf26e8027"
  },
  {
    "url": "frontend/more.html",
    "revision": "3ec76974887594e377c4a8ebb478a3cc"
  },
  {
    "url": "frontend/points.html",
    "revision": "270e2a81781b7108aeaf5fc1869591b7"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "7d4112220375a797132b710db4c5b8fd"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "e02c78bda0e9f4bac1bb2e460bafb8fb"
  },
  {
    "url": "frontend/常用工具/index.html",
    "revision": "9be1061c6803e7c0a1335cb90383fab5"
  },
  {
    "url": "frontend/常用工具/Lerna.html",
    "revision": "f15feff7a89ef907da579f6e289283fb"
  },
  {
    "url": "frontend/常用工具/NPM.html",
    "revision": "56a03860949901f8d882dff1d125889a"
  },
  {
    "url": "frontend/常用工具/nvm.html",
    "revision": "f3a579ca70ddbc0d57c47a0bfd1c62d4"
  },
  {
    "url": "frontend/常用工具/Verdaccio.html",
    "revision": "30ef0f3b83a84b668d249ea930035a0f"
  },
  {
    "url": "frontend/常用工具/VS Code.html",
    "revision": "92848a439617eb278b3593168d702d56"
  },
  {
    "url": "frontend/常用工具/Yarn.html",
    "revision": "282894ed9c586dd1294a9c31a63ec361"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "afa6f3edf75e80f364983e1dfb044049"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "acb2f9e8fcb9fd33ab6835c8eabc26b8"
  },
  {
    "url": "guide.html",
    "revision": "798c70b560a9bcd36023af5b2db7a033"
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
    "revision": "3eb085603865b9fde6b479b59163d66f"
  },
  {
    "url": "other/cook.html",
    "revision": "a3dd4d5cca3edd17fdff4ec51aec77a2"
  },
  {
    "url": "other/countup.html",
    "revision": "a7ed5761d8e71a1870dd0964f93fd349"
  },
  {
    "url": "other/image.html",
    "revision": "64a4354d0d257a9821fd234134eb6147"
  },
  {
    "url": "python/常用工具/anaconda.html",
    "revision": "323094b615b6c62844682179963c794d"
  },
  {
    "url": "python/常用工具/index.html",
    "revision": "ac08025941a8258bfb6fa728a9e9bb65"
  },
  {
    "url": "python/常用工具/pip.html",
    "revision": "7ebcc51c5b1213dd77ad86003e336703"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "48159e9865338da8125211896e7b867e"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "69f17064d1c7161cddf6ce54e415db88"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "a405546e145ed689a6a011b9cf8b9c13"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "12b86d18208fbfe842cfd71d353ad3b3"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "973be413c6b0e78dedfa4a1071f06506"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "b86eb9c4ed6efafa124b69200b4c5146"
  },
  {
    "url": "todo.html",
    "revision": "ee193c04d88c5b1461ff9d3b4732253a"
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
