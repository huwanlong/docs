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
    "revision": "44667bc89398f6c9bbb7b57cdef5e469"
  },
  {
    "url": "about.html",
    "revision": "e6998761cbcdf8ad0a77bdde703d5be4"
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
    "url": "assets/js/10.a19a3c6c.js",
    "revision": "adac10ef6add67d5a535468aff731ce4"
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
    "url": "assets/js/4.535ce189.js",
    "revision": "69feac0842804ceae87e37f4a943e810"
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
    "url": "assets/js/45.3f8ff5fe.js",
    "revision": "9af4f4fa7ce46d7c6ed92d153712ca33"
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
    "url": "assets/js/48.6a932d87.js",
    "revision": "b879b2aaf9bc622da7a612c5a402320b"
  },
  {
    "url": "assets/js/49.64889a33.js",
    "revision": "f3f2b3795dd3f3d3db827d40d02482b0"
  },
  {
    "url": "assets/js/5.a497d5b5.js",
    "revision": "98d7e15ea92e893cd916dff4471b3bd4"
  },
  {
    "url": "assets/js/50.d499c383.js",
    "revision": "6008949fd7847dd5d71054369095cc67"
  },
  {
    "url": "assets/js/51.cc607aa4.js",
    "revision": "d4671eb7fc61b6e8157b2b6701c24c2b"
  },
  {
    "url": "assets/js/52.8c4c678e.js",
    "revision": "853aeaaf4ac8804cf58cfd553455a41d"
  },
  {
    "url": "assets/js/6.edfecbac.js",
    "revision": "a0a6de54fc6beacd6657237b464e567e"
  },
  {
    "url": "assets/js/7.27ab590d.js",
    "revision": "99939425d2521562abfde5658c8c242e"
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
    "url": "assets/js/app.ad80b09d.js",
    "revision": "1c1752e4a0aec9cb6eddb579f2a56a00"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "7555855c34ad804e48412641c83a096d"
  },
  {
    "url": "frontend/electron.html",
    "revision": "7c22c58da4c6a271f9e452505708a688"
  },
  {
    "url": "frontend/points.html",
    "revision": "d1578c41e3a99cd8afd3f3dc770c42c1"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "d7f0cb499015e266d92e723ba2c792a6"
  },
  {
    "url": "frontend/tools/index.html",
    "revision": "bff1aa1a0b669b1cd19afdeffef2ce95"
  },
  {
    "url": "frontend/tools/Lerna.html",
    "revision": "2f352b63fb745abc88097433b7e32c0f"
  },
  {
    "url": "frontend/tools/NPM.html",
    "revision": "410068e856b2f3c504291e9cca5067b4"
  },
  {
    "url": "frontend/tools/nvm.html",
    "revision": "78228c26cebc1bb08ac4c43e399dbdd6"
  },
  {
    "url": "frontend/tools/pnpm.html",
    "revision": "f644df0fecd17bfbf187b2e0850ede9f"
  },
  {
    "url": "frontend/tools/Verdaccio.html",
    "revision": "d79c3c416df47abe65007f9408490c83"
  },
  {
    "url": "frontend/tools/Yarn.html",
    "revision": "41e59342fe98225eeed4da04a9c9fb23"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "e086570dd4708451a34ca39001e4b66c"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "b9b6291bee39d07a78b36abf4cdacbd8"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "ab4154f2073ba159a879bb6c8e18fb22"
  },
  {
    "url": "guide.html",
    "revision": "c7d506527f42114ffa6a15e967520b0a"
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
    "revision": "c2bc4a2b2dc542cb73a9de0001516530"
  },
  {
    "url": "other/c.html",
    "revision": "c17295897a50a5730fcf774af7cb5b05"
  },
  {
    "url": "other/cook.html",
    "revision": "5f82a637d37235f217a24cd96f51e988"
  },
  {
    "url": "other/countup.html",
    "revision": "9ad75a37f2326bb662c0798b5c996db2"
  },
  {
    "url": "other/english.html",
    "revision": "6c12f929e143de02b5da8b7cc63fc3ad"
  },
  {
    "url": "other/image.html",
    "revision": "a75c522225bb4452e8da69f66b024284"
  },
  {
    "url": "other/index.html",
    "revision": "68dbc1aa509997a38224e25bd76bcd5f"
  },
  {
    "url": "python/basic.html",
    "revision": "6d377f76dd3a8d469d2feed7c0826e0b"
  },
  {
    "url": "python/django.html",
    "revision": "e06714c3bbfa53fad0ac60276d20d1ac"
  },
  {
    "url": "python/lib.html",
    "revision": "be5b9d7e85ad638e49913375e651d7e4"
  },
  {
    "url": "python/tools.html",
    "revision": "c3ada50fc1b533265739ddaa1546c4d0"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "64e3b46fcafb464c72f02964a9d9a5bc"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "64638db1745821bcb7026050eb30e61d"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "2a5ad33f781fcb65b702ba6be126bc36"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "741ea59cab2edd305fcaad2647447a07"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "c867a1c1843d1d2c57d22511ec86898e"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "4d39925056f2ac7c198363b2e86df101"
  },
  {
    "url": "tools/system/docker.html",
    "revision": "433cbfc7f1f19f71bdcb2305d8913ea0"
  },
  {
    "url": "tools/system/git.html",
    "revision": "4ba4f82db6dba38583893f901c285fae"
  },
  {
    "url": "tools/system/index.html",
    "revision": "ecfdaa2d7b893be551f00f30715ce11c"
  },
  {
    "url": "tools/system/linux.html",
    "revision": "8c987bd667744fb25330bb7ed26ac92b"
  },
  {
    "url": "tools/system/mac.html",
    "revision": "b56592da7d4c7acbcdf1c1a4c3b8323f"
  },
  {
    "url": "tools/system/ubuntu.html",
    "revision": "7e34c4eb1d4a8306afb67bad8c523ab8"
  },
  {
    "url": "tools/system/vim.html",
    "revision": "ef46ae1fbed34cea912d02d33af4bd82"
  },
  {
    "url": "tools/system/VS Code.html",
    "revision": "fb00b1978e806e71ecf12d2e08551eef"
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
