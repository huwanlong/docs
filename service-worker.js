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
    "revision": "7575ecdf01a523f3f4db021446872f43"
  },
  {
    "url": "about.html",
    "revision": "56c4fbf100716ce84e2187255b6e2cbd"
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
    "url": "assets/js/10.8adcbf24.js",
    "revision": "139dc47369d571ed8ecf54714479766d"
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
    "url": "assets/js/20.072a522f.js",
    "revision": "54f2a579b3fa672d0563ef88b753b113"
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
    "url": "assets/js/24.b3db9ac6.js",
    "revision": "e3363ad9757f1685a10b4256a5776b2d"
  },
  {
    "url": "assets/js/25.1140e21c.js",
    "revision": "7fd4b5cfab71d75480e90b276c9d9cc0"
  },
  {
    "url": "assets/js/26.3110f4e1.js",
    "revision": "357fa8f7cdaadeb731b9829a8217516d"
  },
  {
    "url": "assets/js/27.653e8cba.js",
    "revision": "b1f755c26150dcb7f029d81935d56370"
  },
  {
    "url": "assets/js/28.b92738d9.js",
    "revision": "8dd4eb87fbdd2e1702159490588fe773"
  },
  {
    "url": "assets/js/29.b4f66a88.js",
    "revision": "f5f52d27cb6ed4b7ea55aab44312613c"
  },
  {
    "url": "assets/js/3.8e2ee442.js",
    "revision": "bb2c44534f8fd91e5e362bc3ba2e6b26"
  },
  {
    "url": "assets/js/30.751b412a.js",
    "revision": "cb4e0f0139b70b8992a9577d901f9301"
  },
  {
    "url": "assets/js/31.6f38d1a6.js",
    "revision": "cc6a18fe734ba9d3e0f9374aef2c3de3"
  },
  {
    "url": "assets/js/32.97a7c6d6.js",
    "revision": "88b88a3b9c54bf31944e393afa3d1649"
  },
  {
    "url": "assets/js/33.7bf8a6b9.js",
    "revision": "9c1070486f1f1ec55024a38701919326"
  },
  {
    "url": "assets/js/34.87493bc8.js",
    "revision": "17eec1405c9d4763c1d56eaa3b13c0d6"
  },
  {
    "url": "assets/js/35.9570f32a.js",
    "revision": "c0a1f04d2695227b0cc4cd8632f7fa00"
  },
  {
    "url": "assets/js/36.6a9efdd9.js",
    "revision": "cc44b83e37b6f97943c7e42b74a28721"
  },
  {
    "url": "assets/js/37.27d80866.js",
    "revision": "c297a8f8a96d49078f9695a246beb95a"
  },
  {
    "url": "assets/js/38.511f52d5.js",
    "revision": "19b1cadfc7d66d6629ac53e91f78f1de"
  },
  {
    "url": "assets/js/39.3ce049d4.js",
    "revision": "a50086cb1b270bcc50d753c5164a19cf"
  },
  {
    "url": "assets/js/4.1f0b4e58.js",
    "revision": "4b53ccccaac23709d56606750567897d"
  },
  {
    "url": "assets/js/40.b6082811.js",
    "revision": "617b672802e7b704e1ae1271d774d623"
  },
  {
    "url": "assets/js/41.c11e8926.js",
    "revision": "b0f613ee9d861e8723bd549996736bfa"
  },
  {
    "url": "assets/js/42.83187e16.js",
    "revision": "dc30d39800fac41defb562c85e243eff"
  },
  {
    "url": "assets/js/43.67a94fa0.js",
    "revision": "3d4cfde77b52b4be752ce7fd299e39f2"
  },
  {
    "url": "assets/js/44.4a11f4dd.js",
    "revision": "6dbd9abbcb2be9ac9d0f132d57ee0122"
  },
  {
    "url": "assets/js/45.5305106e.js",
    "revision": "821676da3b7f75096ef569f9f22da7df"
  },
  {
    "url": "assets/js/46.0572d6bc.js",
    "revision": "4c5b738b5604e34b7e923f5949ed374f"
  },
  {
    "url": "assets/js/47.9dd58063.js",
    "revision": "c8b9521475660391f32afd0ee5bd5054"
  },
  {
    "url": "assets/js/48.659ccbf6.js",
    "revision": "7a7a0fe406e1f0b19433d5629da82233"
  },
  {
    "url": "assets/js/49.7cd22f4e.js",
    "revision": "757b7b91b5dc9c9e21f7c7e30872433e"
  },
  {
    "url": "assets/js/5.a497d5b5.js",
    "revision": "98d7e15ea92e893cd916dff4471b3bd4"
  },
  {
    "url": "assets/js/50.dc9e63aa.js",
    "revision": "a2d9e95c0ba939b5deac50d982696b4e"
  },
  {
    "url": "assets/js/51.84753268.js",
    "revision": "df0408f6e0c7f2ba8cdf74e4c6a2e731"
  },
  {
    "url": "assets/js/52.4ff494f7.js",
    "revision": "bf2b1e2ce26b1dddba9a850cbd095eee"
  },
  {
    "url": "assets/js/53.c79c297f.js",
    "revision": "8e136ac690bb98faaa38e599afd0ea94"
  },
  {
    "url": "assets/js/6.edfecbac.js",
    "revision": "a0a6de54fc6beacd6657237b464e567e"
  },
  {
    "url": "assets/js/7.0b15930f.js",
    "revision": "7c8c6893428088f0c24bb30c51c85402"
  },
  {
    "url": "assets/js/8.0d6e3d75.js",
    "revision": "302f44cf881fd6a2df048a8489658fc1"
  },
  {
    "url": "assets/js/9.1998ad85.js",
    "revision": "9210eedff44d582ba374956f67f8efbe"
  },
  {
    "url": "assets/js/app.6e5d4aa7.js",
    "revision": "6d5d1186e725804250f61b760463ac90"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "df5c3e3848c770827525ff241b129c76"
  },
  {
    "url": "frontend/electron.html",
    "revision": "3231423eedf70d296fe06a803160796a"
  },
  {
    "url": "frontend/points.html",
    "revision": "1a2d640d0a3d36344e3840c91dd44347"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "67483aaa47c4ebadb012a4a2bdacc3eb"
  },
  {
    "url": "frontend/tools/index.html",
    "revision": "d402f003cf7860b466a2a1f5e593f3b0"
  },
  {
    "url": "frontend/tools/Lerna.html",
    "revision": "5b9d2fb16f7d79d899643da53c81d018"
  },
  {
    "url": "frontend/tools/NPM.html",
    "revision": "ae03970e3316070456aedb03f4b7a69d"
  },
  {
    "url": "frontend/tools/nvm.html",
    "revision": "ec02205e06e40e90991c48173608d0fc"
  },
  {
    "url": "frontend/tools/pnpm.html",
    "revision": "d90f7c080ade0d69836901dd534ca435"
  },
  {
    "url": "frontend/tools/Verdaccio.html",
    "revision": "dab76d12d1bd1ec5141182d69a0d82d4"
  },
  {
    "url": "frontend/tools/Yarn.html",
    "revision": "478f55d3ca1f7beee2ce0822a2bf84d0"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "23c93d044249355f3d34bff037975b81"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "13309253a3338939b74ea217e9ad4fda"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "986ac2f126e1da6e333bf2bc867204cc"
  },
  {
    "url": "guide.html",
    "revision": "f9e48329e19d69a1329d94a3f2bbd03c"
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
    "revision": "afc329bdcb45e014dbfc1fd4f5a16b61"
  },
  {
    "url": "other/c.html",
    "revision": "76f923021def3b54d84d1c82e62cb482"
  },
  {
    "url": "other/cook.html",
    "revision": "8c07f35f92afdcd9959f5917b7edd37f"
  },
  {
    "url": "other/countup.html",
    "revision": "745fbf0cfcb276f3e4c25b705daadb59"
  },
  {
    "url": "other/english.html",
    "revision": "326c6532ce6675de1bdd70c20ac67030"
  },
  {
    "url": "other/image.html",
    "revision": "0252b874d20db5ea4badf23ad7f51447"
  },
  {
    "url": "other/index.html",
    "revision": "fc5d7702cb2af815433a60f024399144"
  },
  {
    "url": "python/basic.html",
    "revision": "b4778ee90fec3104a44254e4f991f95e"
  },
  {
    "url": "python/django.html",
    "revision": "bbbc1993dd141acad7f24861d5345767"
  },
  {
    "url": "python/lib.html",
    "revision": "8e2859f59b875327d67670f197698ea9"
  },
  {
    "url": "python/tools.html",
    "revision": "1c2f9a319c34b30ffd2f9da14764a4b7"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "55ab49b4cd0a4070ffaf3fadb868c985"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "a63a46f97039a8fb9ef70880fe71c5d8"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "bddde990242188438331cb8e51c647fa"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "e2fa8211f5966d7ffc285bc82d23aab5"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "23db1632d5f98f509d46e55a92a4e4c4"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "10bfcd43ff7d53bbbb491468550a9e6c"
  },
  {
    "url": "tools/system/docker.html",
    "revision": "1940726b7b6949b2ca2606a8a37cb7dc"
  },
  {
    "url": "tools/system/git.html",
    "revision": "4b27931c988f5aacafc0be9c3bf3032d"
  },
  {
    "url": "tools/system/idea.html",
    "revision": "b9f20da6736ee6f30d584bd6423bf5cd"
  },
  {
    "url": "tools/system/index.html",
    "revision": "79fdde94f5d49ea1e48758464ccfc766"
  },
  {
    "url": "tools/system/linux.html",
    "revision": "464ee68b1dfafd049091d95efdce02ed"
  },
  {
    "url": "tools/system/mac.html",
    "revision": "9affc6159b1def497559d370871aa9a6"
  },
  {
    "url": "tools/system/ubuntu.html",
    "revision": "c7c296b22ca7f25180cf1c5a22975e22"
  },
  {
    "url": "tools/system/vim.html",
    "revision": "cd4dc2c130c25029d9060307bcfe853a"
  },
  {
    "url": "tools/system/VS Code.html",
    "revision": "f981116a8cbbee69120837dff6ebc03a"
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
