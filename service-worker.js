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
    "revision": "c1da45d1d938def825edfe834360b4cd"
  },
  {
    "url": "about.html",
    "revision": "e5a72e709d23adadc91d1374db2a330e"
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
    "url": "assets/js/10.b269a061.js",
    "revision": "55754a18450f3369c892c75f44bd4cd4"
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
    "url": "assets/js/19.bb05d55c.js",
    "revision": "0db286d8e55ba593f6458b32b109a2c0"
  },
  {
    "url": "assets/js/2.c0ec5dc5.js",
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
    "url": "assets/js/27.90cb9052.js",
    "revision": "0fa7bd383cf0ff0f0748594ed3e94f5f"
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
    "url": "assets/js/3.8e2ee442.js",
    "revision": "bb2c44534f8fd91e5e362bc3ba2e6b26"
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
    "url": "assets/js/32.dbdc0b0b.js",
    "revision": "b121f14fec0c0817d9f757f6faab07c2"
  },
  {
    "url": "assets/js/33.2eb1f348.js",
    "revision": "9bdd51eb33597803bfd05ccb685a3d7d"
  },
  {
    "url": "assets/js/34.b90640f2.js",
    "revision": "b6d06f4885ba9d45900b45f658d60deb"
  },
  {
    "url": "assets/js/35.93b44abd.js",
    "revision": "289236fc82a62098308690b6c94fa73f"
  },
  {
    "url": "assets/js/36.a33787ec.js",
    "revision": "986748805a17ead1d452835a7443e20b"
  },
  {
    "url": "assets/js/37.b1e625a6.js",
    "revision": "dd47d0665593ce2e5271a976ba5a301b"
  },
  {
    "url": "assets/js/38.f44dec61.js",
    "revision": "fcc3d65efc9d1075eb60b997a5615962"
  },
  {
    "url": "assets/js/39.040a84e0.js",
    "revision": "476a781883c8c50beaa1a99a22630352"
  },
  {
    "url": "assets/js/4.8b632220.js",
    "revision": "68d18914f53d0ad7706dd892f40e9f54"
  },
  {
    "url": "assets/js/40.ee961324.js",
    "revision": "4fd559cbc1bfb71d8332e032c7579cd5"
  },
  {
    "url": "assets/js/41.e4d1e98e.js",
    "revision": "2afe581df1992b66a40d124cd29ac35a"
  },
  {
    "url": "assets/js/42.4a9c9709.js",
    "revision": "1ae3845768579941c93246162ee5d860"
  },
  {
    "url": "assets/js/43.c7fd27ca.js",
    "revision": "3e522ce304b9a54f3a6d2aac755ceae1"
  },
  {
    "url": "assets/js/44.0851cd51.js",
    "revision": "8dd150ebd3074e5e990b0124bfb49dff"
  },
  {
    "url": "assets/js/45.f1c847aa.js",
    "revision": "ebffb858d844f81495655e1495ef2b24"
  },
  {
    "url": "assets/js/46.1177bc2a.js",
    "revision": "82fe8d905780ccbf0feaca3d34c876c0"
  },
  {
    "url": "assets/js/47.d6a0a4b7.js",
    "revision": "f32daf867e8bc8e0aae229ea879416ec"
  },
  {
    "url": "assets/js/48.a01bfd66.js",
    "revision": "aac064bd9a815ed86fc2ed5deb450ae1"
  },
  {
    "url": "assets/js/49.b7003438.js",
    "revision": "c92713b6a2d303243a86b53367d8fae1"
  },
  {
    "url": "assets/js/5.a497d5b5.js",
    "revision": "98d7e15ea92e893cd916dff4471b3bd4"
  },
  {
    "url": "assets/js/50.fb379eca.js",
    "revision": "95703a9db77a777ea51a1b285c1a44ec"
  },
  {
    "url": "assets/js/51.eb8d4c56.js",
    "revision": "0aa8953bdcea8c6d01374bf6bf7ca673"
  },
  {
    "url": "assets/js/6.edfecbac.js",
    "revision": "a0a6de54fc6beacd6657237b464e567e"
  },
  {
    "url": "assets/js/7.9fd63340.js",
    "revision": "52443c490891fce24791e032aeae404f"
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
    "url": "assets/js/app.98fbc576.js",
    "revision": "8d739422ac4e57a2d8a8a10b67b31049"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "9ded542d22d05c893747c18eeb449727"
  },
  {
    "url": "frontend/electron.html",
    "revision": "5ccbd3f87aaca8b4ca02083c28ecff65"
  },
  {
    "url": "frontend/points.html",
    "revision": "e2eb0cce051094aa2f158019cfb6400b"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "dd70d2f97f8e052e1bf6170ccef36223"
  },
  {
    "url": "frontend/tools/index.html",
    "revision": "2068ea7466f65909af4991bc63afe44b"
  },
  {
    "url": "frontend/tools/Lerna.html",
    "revision": "dd307f676675aa00c27111d90688ffde"
  },
  {
    "url": "frontend/tools/NPM.html",
    "revision": "c0d8e6ad33a765f1fde85bb099783598"
  },
  {
    "url": "frontend/tools/nvm.html",
    "revision": "291630b075a510ca3547dcc4c488cbb8"
  },
  {
    "url": "frontend/tools/Verdaccio.html",
    "revision": "ce9c6dd9e8372f92409b41232b798dc8"
  },
  {
    "url": "frontend/tools/Yarn.html",
    "revision": "715c0d03b6ce512f165a4c6c6e422bef"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "6c6f8db87f15072ba87ae6146f143f49"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "dafe5e0b35ba1a4b77b8c183f95035e2"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "00fbccf85f3a03395da2a6606ddc7202"
  },
  {
    "url": "guide.html",
    "revision": "df58a2d38d4eaedc11145a154ff75977"
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
    "revision": "7d438d494297b9292bb25f8f39e3859c"
  },
  {
    "url": "other/c.html",
    "revision": "3e51d8b1d4902b861530e5693089b886"
  },
  {
    "url": "other/cook.html",
    "revision": "14d7a4d380b63af6b705b1611d95b18e"
  },
  {
    "url": "other/countup.html",
    "revision": "fa25d02bfdd4b20cce4c5e963871c1a4"
  },
  {
    "url": "other/english.html",
    "revision": "2461aea59f2aca2fd201751fc056c46e"
  },
  {
    "url": "other/image.html",
    "revision": "ddf9467e26571164e6020ea331cfec47"
  },
  {
    "url": "other/index.html",
    "revision": "c3c17c52263c3d9319d960c81411f4db"
  },
  {
    "url": "python/basic.html",
    "revision": "47c5374cd4cd0c4c86bd2a2dd3bf6d87"
  },
  {
    "url": "python/django.html",
    "revision": "8d8299a597fa94aeda16b9adb71aad96"
  },
  {
    "url": "python/lib.html",
    "revision": "14d355a90015c93d05e64fd3230a63fc"
  },
  {
    "url": "python/tools.html",
    "revision": "1fd8b0bef2764bf44e2c9ef24f17d68b"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "8dbf846ccc65dad94d62ed0d98510a2f"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "53ee51da747df00c9262090a89d692f7"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "7de4a56bf09ae509fd287da50f2e5f40"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "ba713430f220539fa70a4980803027e3"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "44de947bfc40930087e86b45101f10f7"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "42b60b43ab5b8fdff3bc7e0b819bb1cb"
  },
  {
    "url": "tools/system/docker.html",
    "revision": "b942ddd0bbe6116db6abf80f9313271b"
  },
  {
    "url": "tools/system/git.html",
    "revision": "17db36a22df152ef712cff1144d3fc4e"
  },
  {
    "url": "tools/system/index.html",
    "revision": "5423a423497e527b9a4d76b961142788"
  },
  {
    "url": "tools/system/linux.html",
    "revision": "c0ac044eb54d8320ac7f165759af0f65"
  },
  {
    "url": "tools/system/mac.html",
    "revision": "031f073d960d00000a2a7e988b4259d2"
  },
  {
    "url": "tools/system/ubuntu.html",
    "revision": "64c1f665bc3b24792ab261a11c251615"
  },
  {
    "url": "tools/system/vim.html",
    "revision": "6d3466e86fc7690d15dbc1677703b962"
  },
  {
    "url": "tools/system/VS Code.html",
    "revision": "3b13f1e09133de9188a12b9f39fd2084"
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
