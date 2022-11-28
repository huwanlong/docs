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
    "revision": "e5c64285e86a07da7f66b7f3409e8d91"
  },
  {
    "url": "about.html",
    "revision": "65beaed059279bed0a57d708eaeba880"
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
    "url": "assets/js/18.bd112856.js",
    "revision": "f316e887b7b9c689fc555178302c5774"
  },
  {
    "url": "assets/js/19.018fa903.js",
    "revision": "22585c08e4d2d6f7c81e0d5169d2e497"
  },
  {
    "url": "assets/js/2.23b71ba4.js",
    "revision": "3bbfc7bb79ce079d21fd86c69ff61cd4"
  },
  {
    "url": "assets/js/20.afa6fb16.js",
    "revision": "10380c690204206d20b40bf8230d6018"
  },
  {
    "url": "assets/js/21.06291757.js",
    "revision": "a09182924ca0d02e5469a05a3b5cb318"
  },
  {
    "url": "assets/js/22.0dde2fb2.js",
    "revision": "a95e8945a8ee6e6298e62e0b6807af6e"
  },
  {
    "url": "assets/js/23.7ebc35f0.js",
    "revision": "cdb85709204c97429aceecf35362c57b"
  },
  {
    "url": "assets/js/24.d98590a1.js",
    "revision": "c316ddd6f746fbe571dcf35741a9dae7"
  },
  {
    "url": "assets/js/25.77893943.js",
    "revision": "69829a0c84737a3df26194d087969df7"
  },
  {
    "url": "assets/js/26.c497ff04.js",
    "revision": "468d1d4651ad02182268cec1086dc498"
  },
  {
    "url": "assets/js/27.55d1095d.js",
    "revision": "5ac7f74221c83829ea8332386ffafbc8"
  },
  {
    "url": "assets/js/28.a0b5436e.js",
    "revision": "eaaedba810ba470ea746ada11e625462"
  },
  {
    "url": "assets/js/29.e4fcc053.js",
    "revision": "078005541ed96cc8e6229b9b6c0e2e37"
  },
  {
    "url": "assets/js/3.b9f87b4c.js",
    "revision": "7fe7a3e48aa4170dcba6fbc9481d82ac"
  },
  {
    "url": "assets/js/30.6d037f33.js",
    "revision": "23aaf9be508b8381a7d4b6490882b6d5"
  },
  {
    "url": "assets/js/31.517c3b7b.js",
    "revision": "84b764343fa3e0c3817d895634f2a75f"
  },
  {
    "url": "assets/js/32.ad75c015.js",
    "revision": "d13a8af0d8ccb0632229a24dde6c9db3"
  },
  {
    "url": "assets/js/33.063ee419.js",
    "revision": "8766db2a5c3ce94741de140a1e0ee7e1"
  },
  {
    "url": "assets/js/34.812ef7bd.js",
    "revision": "dfab996a93ee5228275a5a8958d7a134"
  },
  {
    "url": "assets/js/35.811e1141.js",
    "revision": "68ee17034d3c018d35d5f704ca205eab"
  },
  {
    "url": "assets/js/36.13086705.js",
    "revision": "f9e2991a9d10a144f0a0f1b0e516e244"
  },
  {
    "url": "assets/js/37.a0409bc0.js",
    "revision": "efac79e6f58e7d20646c335cce753574"
  },
  {
    "url": "assets/js/38.8fd697d7.js",
    "revision": "e1ac49a9f57c259468951254fbe42499"
  },
  {
    "url": "assets/js/39.97bf0169.js",
    "revision": "e5bf36c8c345e849a70c74bf0d6d43f2"
  },
  {
    "url": "assets/js/4.63205341.js",
    "revision": "19b13f3acbbd9d6e9f9431a29865f8a4"
  },
  {
    "url": "assets/js/40.26812922.js",
    "revision": "9d594529dd00ddf51350a910e8a97da7"
  },
  {
    "url": "assets/js/41.55718da5.js",
    "revision": "db598db0dac94932d0e3d5cde47433b6"
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
    "url": "assets/js/7.d8f5dabd.js",
    "revision": "5908ee7b99024d970ebe09b0ac28be80"
  },
  {
    "url": "assets/js/8.0d6e3d75.js",
    "revision": "302f44cf881fd6a2df048a8489658fc1"
  },
  {
    "url": "assets/js/9.6dd9fbf1.js",
    "revision": "495eaeaffc7014e0f7c0e7d3065487c5"
  },
  {
    "url": "assets/js/app.98688bca.js",
    "revision": "dd895d6caf602f1a3e2f4005469574ea"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "e1dee0a83c275c3f49a946d4c7a22655"
  },
  {
    "url": "frontend/electron.html",
    "revision": "d2bbdfa80ac487beaafc438bb02ac432"
  },
  {
    "url": "frontend/points.html",
    "revision": "c635393f0901945a01191d6ba389cb51"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "deaadf943d35d5f99e61c731796dc0d8"
  },
  {
    "url": "frontend/tools/index.html",
    "revision": "027c445083a94a0c4491292b7b2e4710"
  },
  {
    "url": "frontend/tools/Lerna.html",
    "revision": "dc5ce14d6fb0ca6825d8fe7ac6179ef4"
  },
  {
    "url": "frontend/tools/NPM.html",
    "revision": "efdd75e927749d720801d44c47943277"
  },
  {
    "url": "frontend/tools/nvm.html",
    "revision": "20287d9bc32c1a487b0359a6c961a22f"
  },
  {
    "url": "frontend/tools/Verdaccio.html",
    "revision": "97992de78808116320f0bac3f2e93300"
  },
  {
    "url": "frontend/tools/Yarn.html",
    "revision": "23c28fe1af6bde9adbb95a963d12bc19"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "c7eae888101fb8e35513af568e569b0d"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "d98e0dfea9970e93487c9f6532166969"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "29f019b8dc4ddda7554566de088137ca"
  },
  {
    "url": "guide.html",
    "revision": "1b4f755474b17d1ea826c38f516c706a"
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
    "revision": "2ed3a81b507645880c8220a8530e397a"
  },
  {
    "url": "other/c.html",
    "revision": "3fa4ea8e5738e82c5bfa19c046e0d69a"
  },
  {
    "url": "other/cook.html",
    "revision": "49771100de2293b6844d2694f73edd18"
  },
  {
    "url": "other/countup.html",
    "revision": "b8420b0463d9ec303f37b919214b74ea"
  },
  {
    "url": "other/english.html",
    "revision": "c1b540faff1e3e9bd9a350c27623259b"
  },
  {
    "url": "other/image.html",
    "revision": "f4746728ba00555ebef09ebaf59cced4"
  },
  {
    "url": "other/index.html",
    "revision": "55d6958cabd249cc34b3e5994752d72d"
  },
  {
    "url": "python/Django.html",
    "revision": "b4af14551cda6b8c3b1f88350cdf9e9f"
  },
  {
    "url": "python/tools.html",
    "revision": "cf5a32e8cf789dd6139bf2b49e65599f"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "c782922ff39b38e89d3961bd323b2f37"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "a441d2a58b4177b920c6bbd14b860d47"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "94381dc1eefe2eae41e90cc4b5005c12"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "01fa07e62953baa9bb9ae76517e1c45c"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "a6845469896a7fff1b4dedf7a23fbf75"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "31dbff744b3fda16b67b8b824ae27764"
  },
  {
    "url": "tools/system/docker.html",
    "revision": "b0938fd6323cbac84b6cb32dfb4517af"
  },
  {
    "url": "tools/system/git.html",
    "revision": "39f958a452e8a58900d7d899f667f53d"
  },
  {
    "url": "tools/system/index.html",
    "revision": "71c9bc4dbe931c0fcef340bfcac1c3e0"
  },
  {
    "url": "tools/system/linux.html",
    "revision": "4c441c52fb4032c62573cdf2b2a08ef7"
  },
  {
    "url": "tools/system/ubuntu.html",
    "revision": "3b3c7074565f1b174111e17d3c9dd56b"
  },
  {
    "url": "tools/system/vim.html",
    "revision": "e882f5431f48ac49126472670f668b54"
  },
  {
    "url": "tools/system/VS Code.html",
    "revision": "34f4f15b8c2f136664118ce74997de09"
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
