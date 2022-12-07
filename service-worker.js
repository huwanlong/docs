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
    "revision": "324964c63642b7cb6e64ea88c68dfb47"
  },
  {
    "url": "about.html",
    "revision": "19fa790666a95a3fbf7c91d53131283a"
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
    "url": "assets/js/23.a67f58bc.js",
    "revision": "9a1af009db69034981bf456ae27becb2"
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
    "url": "assets/js/32.2d1e2adc.js",
    "revision": "1c011c28f381a9664e084e13273deee9"
  },
  {
    "url": "assets/js/33.063ee419.js",
    "revision": "8766db2a5c3ce94741de140a1e0ee7e1"
  },
  {
    "url": "assets/js/34.2d06429a.js",
    "revision": "462dbd6b35063455e2521df47f0f8d4e"
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
    "url": "assets/js/app.8b0d1960.js",
    "revision": "bc36b2b4513b56c27e0283dca3d858b9"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "1fded3eb74639c75a08c0b482ba2dad3"
  },
  {
    "url": "frontend/electron.html",
    "revision": "590f7a856d1248983f5dd60d7161a5ed"
  },
  {
    "url": "frontend/points.html",
    "revision": "d0e1862f7a8bf5261224ca6512d2eacf"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "026a8f54cae368d98b02c4235114a78d"
  },
  {
    "url": "frontend/tools/index.html",
    "revision": "11afc98a55fc7db676e4b526f58094c7"
  },
  {
    "url": "frontend/tools/Lerna.html",
    "revision": "dc301167f61ff93e582a0db446a54813"
  },
  {
    "url": "frontend/tools/NPM.html",
    "revision": "8b0aacf5189f91ef293c0058436c4bb3"
  },
  {
    "url": "frontend/tools/nvm.html",
    "revision": "90ef482465e15775f70185e73e292231"
  },
  {
    "url": "frontend/tools/Verdaccio.html",
    "revision": "07f5dcb1831a0bc65d4bec6dfcac1c04"
  },
  {
    "url": "frontend/tools/Yarn.html",
    "revision": "c80f6c5594af63d1733a36ea8d2ef7b2"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "520b03a98aafafcc3ac54faea064d1e9"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "d9403eeffcf3f63907d9484f257655b9"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "adfbc5c6f23aabc9c821c6b397e1ee05"
  },
  {
    "url": "guide.html",
    "revision": "49bf5b32a1c7a16a25706ec71b7d9b74"
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
    "revision": "a73061fb9e9cc1b7101218cabcf3b066"
  },
  {
    "url": "other/c.html",
    "revision": "10a358103ba41e18d42c44a0d3b6a5b9"
  },
  {
    "url": "other/cook.html",
    "revision": "55df7a98574858e0d3fe26182aa16581"
  },
  {
    "url": "other/countup.html",
    "revision": "580d3a2d77c801fe6c095be353c344d6"
  },
  {
    "url": "other/english.html",
    "revision": "c4bcf390f4ecf83c5e15c0574ba71ebe"
  },
  {
    "url": "other/image.html",
    "revision": "d359fb017a3f57b3e67238df25cd425a"
  },
  {
    "url": "other/index.html",
    "revision": "4944cdb547893124927d05b6f21eaf5b"
  },
  {
    "url": "python/Django.html",
    "revision": "9c67f328e8243e0caf6bf6420f098068"
  },
  {
    "url": "python/tools.html",
    "revision": "c1b41bb046dc4160c141b20d9cbd254b"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "72553100d06fbad6c7ed76f5ea281b29"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "03eb5b0289ee5b018ff68fefc36a9a6c"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "864d83d44c79c03a88e2d63c1435a75d"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "f35ab2e8a3e0c27cc4db3e5d12c0ba87"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "bfa8fcbe740678c66b4e794fb81fe24e"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "05fcf0891d7bfceacc8b364856de2609"
  },
  {
    "url": "tools/system/docker.html",
    "revision": "986116b6dc9c938020b9dbdf3c0e505b"
  },
  {
    "url": "tools/system/git.html",
    "revision": "e3e17f9f3e9e35d8f0463960dd6e657c"
  },
  {
    "url": "tools/system/index.html",
    "revision": "5b50897607a1b34cacf1952b367cc794"
  },
  {
    "url": "tools/system/linux.html",
    "revision": "7a0c9d80466321ef3f294e157474f18f"
  },
  {
    "url": "tools/system/ubuntu.html",
    "revision": "7bf1a107a95b9d81379acb12cbf482ee"
  },
  {
    "url": "tools/system/vim.html",
    "revision": "7b1c1354aba29943104d78861cd5438e"
  },
  {
    "url": "tools/system/VS Code.html",
    "revision": "9519b74c88ebe5f64c35c6ff3df4ef04"
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
