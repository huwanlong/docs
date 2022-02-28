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
    "revision": "25f9cc8be1376585b9812544770e66af"
  },
  {
    "url": "about.html",
    "revision": "e1af9ed54f4028bf5d29fc8965245c02"
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
    "url": "assets/js/14.9e2b79e4.js",
    "revision": "0ba0fccc9e58aec4e3bd2be1a1802a38"
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
    "url": "assets/js/app.62c8eb9b.js",
    "revision": "f9b042af4a66c71e651d4fe40e064049"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "820d03b42cfd0a2b3f713cd727d76b57"
  },
  {
    "url": "english/zero.html",
    "revision": "ea3d322e088f1b5722fa8f069dc4188f"
  },
  {
    "url": "frontend/electron.html",
    "revision": "86974461803c9def5bf000a85e08fe84"
  },
  {
    "url": "frontend/more.html",
    "revision": "af99bac24f5f1c7dc0bfe3fbda4d7c84"
  },
  {
    "url": "frontend/points.html",
    "revision": "06f32bb16c1faf280a4634e8405d69c3"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "ed442381ac9f077d29b747869f16295d"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "4b126a799cb28bd38cd7738707dd08db"
  },
  {
    "url": "frontend/常用工具/index.html",
    "revision": "83314452c390d6f0e7700eb6177123fd"
  },
  {
    "url": "frontend/常用工具/Lerna.html",
    "revision": "49024fbb6c8e8aa1b62920bee0186df7"
  },
  {
    "url": "frontend/常用工具/NPM.html",
    "revision": "f74f1a682776c5184e4f981f1a14b437"
  },
  {
    "url": "frontend/常用工具/nvm.html",
    "revision": "9f55058a87da71d863f7df5552803ef1"
  },
  {
    "url": "frontend/常用工具/Verdaccio.html",
    "revision": "f127b0f769ad41c021d2bc47d8444e20"
  },
  {
    "url": "frontend/常用工具/VS Code.html",
    "revision": "c851f26c6198387dbdfd31f08b76fa68"
  },
  {
    "url": "frontend/常用工具/Yarn.html",
    "revision": "01fc66cf9b1b413941e6db60b69ad0d0"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "568ef684f4173e9d43a9ea7e75b8daac"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "bdaef407443322d2398064c3d4c42dfb"
  },
  {
    "url": "guide.html",
    "revision": "9c97787599d74b96266a2eea94218e1e"
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
    "revision": "fdd6f8af1724e223a9278509f4d483dd"
  },
  {
    "url": "other/cook.html",
    "revision": "bb1fdde8dfea2839bc4f5c5d2b7356c4"
  },
  {
    "url": "other/countup.html",
    "revision": "2b2184c0479e5c87b3a42388b77dedcb"
  },
  {
    "url": "other/image.html",
    "revision": "a31b80ef5bcd8354b8d778c30bb6a456"
  },
  {
    "url": "python/常用工具/anaconda.html",
    "revision": "7fa90c24073734d17480dc3182c420d6"
  },
  {
    "url": "python/常用工具/index.html",
    "revision": "fe9948941682230fec52a76ad582bac5"
  },
  {
    "url": "python/常用工具/pip.html",
    "revision": "cec0ec22cea12968275dfed6037b8f7e"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "70da7551a14011e68c8eaf172f89816c"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "03b3154307dc30486c70793e50ee31ed"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "e894eb4333d97f4f0d568bf4e1cf98c5"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "5140e73eb63917f852e1cdfba952dad3"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "0182f307e48721a334a7d2f7c9419ac0"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "5c50f36ba450e7df4eca663bd497a9cc"
  },
  {
    "url": "todo.html",
    "revision": "d4d6489c8f95a70fbc8e86395cecb4d5"
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
