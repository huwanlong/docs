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
    "revision": "629eaef52c197113fb0f55eeef79826e"
  },
  {
    "url": "about.html",
    "revision": "ef6718992bb5ed92d5e3c0dd65031c00"
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
    "url": "assets/js/14.2c826cab.js",
    "revision": "f4b71b119aa0766da3e5c217b502dcb8"
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
    "url": "assets/js/app.ac39a454.js",
    "revision": "9ee48bdf14ad477b715db846b0f3f701"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "133ff30a66e1acde96a58d9b6c97a2ef"
  },
  {
    "url": "english/zero.html",
    "revision": "65ec9e6e587bf221b2bdedd6bf827cd3"
  },
  {
    "url": "frontend/electron.html",
    "revision": "c316d5b875c0473161d2977ae3aff583"
  },
  {
    "url": "frontend/more.html",
    "revision": "4d2f226061c11c67773e1ac8dfea4585"
  },
  {
    "url": "frontend/points.html",
    "revision": "43646034571f988280385433c325aebd"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "967c60ab5bcaf601e90d258af9325984"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "27496be4e1597ef68b458d277e5c6050"
  },
  {
    "url": "frontend/常用工具/index.html",
    "revision": "07d8acce59ce3fab8e3fc697480d0e87"
  },
  {
    "url": "frontend/常用工具/Lerna.html",
    "revision": "a4c6388d0dfb8fa37a7ddfdddffa5a1f"
  },
  {
    "url": "frontend/常用工具/NPM.html",
    "revision": "bf26455e355dff57775107036f4379cd"
  },
  {
    "url": "frontend/常用工具/nvm.html",
    "revision": "76ed47460134d5c44804afc034c5bb7b"
  },
  {
    "url": "frontend/常用工具/Verdaccio.html",
    "revision": "dbb59b156ed4972947a0fd8f9b849b2b"
  },
  {
    "url": "frontend/常用工具/VS Code.html",
    "revision": "20a4770f23bf3e9dfe659c06533e5a1e"
  },
  {
    "url": "frontend/常用工具/Yarn.html",
    "revision": "fbd8e9f227c028676d42cb2615d524fb"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "107f0d710018715830724b161db34ff4"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "ed7adbc3c425ded4a6f2b3095882a756"
  },
  {
    "url": "guide.html",
    "revision": "3907c6ee86bb40edb6e71d4e2021064f"
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
    "revision": "2612cd60e7810489621a4e19c5f39c4f"
  },
  {
    "url": "other/cook.html",
    "revision": "9bbf3f2133cc1f708fb4fcb2b510775c"
  },
  {
    "url": "other/countup.html",
    "revision": "a340e60da878e71605f65b1657d6c7b9"
  },
  {
    "url": "other/image.html",
    "revision": "a3f416dccfd9df784308f3cf69442c39"
  },
  {
    "url": "python/常用工具/anaconda.html",
    "revision": "d183a1ebe6b20f52a3d8a6bdbd1adc31"
  },
  {
    "url": "python/常用工具/index.html",
    "revision": "4ef94b796d605039055c6e582e84c814"
  },
  {
    "url": "python/常用工具/pip.html",
    "revision": "c0b1276a9f2c77d92b0011b54466a773"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "253c1037a8c0bef4cfd9ce91c3d8b025"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "0f0b949409393b6780f6e736a4f8546d"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "337611b45c54a489c1ea2e41abd426b8"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "2c10729e8f5871b1c59c753486f9ca16"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "f4f3f609f3af751ea977583d30b3ff7f"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "9e0da395279217cf7a595da0ebfaf543"
  },
  {
    "url": "todo.html",
    "revision": "e72d992191a83b956cb143a7c6cbc493"
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
