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
    "revision": "51d6caeaf9ca550f14d3aec831226cad"
  },
  {
    "url": "about.html",
    "revision": "f852e772f008114595497e5a21176403"
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
    "url": "assets/js/34.04710add.js",
    "revision": "74eba94ee9f173534b2abedd17f650b0"
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
    "url": "assets/js/app.c2ce69b9.js",
    "revision": "fb3b1749ee079d5c14bee72ee33ed24d"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "a4e1bbbe2e3dd166f94331a3c99dad79"
  },
  {
    "url": "frontend/electron.html",
    "revision": "cdae09dd17e9c396bd60ca79084eb550"
  },
  {
    "url": "frontend/points.html",
    "revision": "d5fa1d381c8eaa168537c6220f996f4d"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "6a2c952d49200974f730cf6e0322d743"
  },
  {
    "url": "frontend/tools/index.html",
    "revision": "62c112d23f6bdb5c53ec7807cfd5d94d"
  },
  {
    "url": "frontend/tools/Lerna.html",
    "revision": "6327a8e06c220b862879d4a584a5a6b4"
  },
  {
    "url": "frontend/tools/NPM.html",
    "revision": "cff700a2c18add188b5b6cff2272dce1"
  },
  {
    "url": "frontend/tools/nvm.html",
    "revision": "f1b6c2c7d7d08f371d0e664e54b9f47f"
  },
  {
    "url": "frontend/tools/Verdaccio.html",
    "revision": "1ab68c7943cee9b5102637e541c3e33e"
  },
  {
    "url": "frontend/tools/Yarn.html",
    "revision": "b98d35338d7a06437b618236f2216d43"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "c77cb631a5b3551a8aadff70642dc18e"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "a80bdf82ac718d950ca6cc8f964dc83e"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "227d9a90df1e3b5b605f6d746643a532"
  },
  {
    "url": "guide.html",
    "revision": "123466af643f43cdb9753adda5341b85"
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
    "revision": "b97c3ca13922478c203d58b99971095b"
  },
  {
    "url": "other/c.html",
    "revision": "2d1ae7ad1a24d5f8c306a96afd0f911c"
  },
  {
    "url": "other/cook.html",
    "revision": "5a255083323ce9d3546a7048ed023253"
  },
  {
    "url": "other/countup.html",
    "revision": "4fa0a00d45097ff2e5704f68f39c2026"
  },
  {
    "url": "other/english.html",
    "revision": "9975a71f6b48d4f12aa2cb992c540d10"
  },
  {
    "url": "other/image.html",
    "revision": "21909910ad9896c840f29fa3b6ee21d2"
  },
  {
    "url": "other/index.html",
    "revision": "0a2c8876f9281d337cc3798f2a3cae51"
  },
  {
    "url": "python/Django.html",
    "revision": "56bbb563a966606e71c7b9fcd6c541ea"
  },
  {
    "url": "python/tools.html",
    "revision": "1d94123e9de1f3d5a49be7f76314f939"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "b476b2f0e1493179b58689e5c650d64a"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "07d4d1fdbd6b962989a58374ea16e816"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "57f4b7604ee744529ef158f4fb80677d"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "6482e3045f34177b99bd27dd519f3110"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "9052bd6f7b42597ed39ef64c8f166492"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "bf8b3ab2c8e66ed3174bc1ffc8d60ae2"
  },
  {
    "url": "tools/system/docker.html",
    "revision": "d8071af9f530c04d5a2169e9596af260"
  },
  {
    "url": "tools/system/git.html",
    "revision": "bc608a27720aa5f8306f59c5027787c4"
  },
  {
    "url": "tools/system/index.html",
    "revision": "8a47934804bac531b4d79a03ed40317f"
  },
  {
    "url": "tools/system/linux.html",
    "revision": "3ff6397452c862b1f5698c3dad6abeb5"
  },
  {
    "url": "tools/system/ubuntu.html",
    "revision": "c006a7b1fa7107ffe962865f6d4f1e1c"
  },
  {
    "url": "tools/system/vim.html",
    "revision": "5f828f35aeb189d0c699844fb9cf0ece"
  },
  {
    "url": "tools/system/VS Code.html",
    "revision": "909d149269e5418d330e9fcf062a4c3e"
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
