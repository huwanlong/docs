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
    "revision": "36beb74667b7678964b08fc64f8dc133"
  },
  {
    "url": "about.html",
    "revision": "ecbfcacf4bac78ac007efaee44cb8eea"
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
    "url": "assets/img/wechat.4de542c4.png",
    "revision": "4de542c4c13071232f7d7f0eed1cf754"
  },
  {
    "url": "assets/img/wechat.png",
    "revision": "4de542c4c13071232f7d7f0eed1cf754"
  },
  {
    "url": "assets/js/10.36eb6cfb.js",
    "revision": "f5405a3f56896ddcf9dcc632d6440575"
  },
  {
    "url": "assets/js/11.0ae83278.js",
    "revision": "28b6934286aa07b279b4d008cbd0683a"
  },
  {
    "url": "assets/js/12.305121a7.js",
    "revision": "d023b1668062c11a1d9e255d9729d957"
  },
  {
    "url": "assets/js/13.2773ed5c.js",
    "revision": "d42e4b6b39a681bf08fab53ba5493027"
  },
  {
    "url": "assets/js/14.8c91859e.js",
    "revision": "9b55d8963d8dedffc53e3c2cf5dedbca"
  },
  {
    "url": "assets/js/15.85dbe54b.js",
    "revision": "01b60315a98881e37619a7cbab19bc8f"
  },
  {
    "url": "assets/js/16.e2b0c7f1.js",
    "revision": "e58907a2d33f3133202eb3a94af8d86e"
  },
  {
    "url": "assets/js/17.d0667240.js",
    "revision": "293ac100c6da93b1b5d82e7e4436e386"
  },
  {
    "url": "assets/js/18.f2a3f974.js",
    "revision": "de1e9c8226a24ff8f7c04554534b5d7d"
  },
  {
    "url": "assets/js/19.cc58ae00.js",
    "revision": "4a3eee812de6ec429b05d8ffda3d755c"
  },
  {
    "url": "assets/js/2.ef01529f.js",
    "revision": "8788225561acb721be9fc79af92ec8b4"
  },
  {
    "url": "assets/js/20.55314627.js",
    "revision": "903e6222cbf1cfa1cf56ce093e0d789d"
  },
  {
    "url": "assets/js/21.4c42d4f8.js",
    "revision": "f467b917b19055bc5d6c0f789bba84e5"
  },
  {
    "url": "assets/js/22.950f6f32.js",
    "revision": "8888215d5ec176c7497a2fdbf1477861"
  },
  {
    "url": "assets/js/23.ed2e32dd.js",
    "revision": "b5abe9bf765968ea61c99d14d4824a0d"
  },
  {
    "url": "assets/js/24.f95dabdf.js",
    "revision": "d07cb551076a9e2b7de5096d4cb6090d"
  },
  {
    "url": "assets/js/25.b85eecf4.js",
    "revision": "ffb4fdb842f836bbb11c98565ccb3173"
  },
  {
    "url": "assets/js/26.65c040f4.js",
    "revision": "b5cf813514678daa578208b6ce650e7a"
  },
  {
    "url": "assets/js/27.22f640e8.js",
    "revision": "6c92766e5bcc7fd25d4eca3e33ab8e60"
  },
  {
    "url": "assets/js/28.3a40f840.js",
    "revision": "52a88e51b558bb98f53cbe460748a7e6"
  },
  {
    "url": "assets/js/29.d399a1da.js",
    "revision": "0201693d36723fdbf47481165e2d41b3"
  },
  {
    "url": "assets/js/3.58d8f62c.js",
    "revision": "b3fa421dec30b620c0da0810220fd4ec"
  },
  {
    "url": "assets/js/30.e5e92ec4.js",
    "revision": "90880d5bc2e23fdfd1e8c2fd616626a4"
  },
  {
    "url": "assets/js/31.b3b3554f.js",
    "revision": "d2a492f365822c21524e802f3540cb78"
  },
  {
    "url": "assets/js/32.21e218b1.js",
    "revision": "94b66e72a8f67266a3adf2381ef744c3"
  },
  {
    "url": "assets/js/33.a8a3aba2.js",
    "revision": "0634d0395dc146435cb58cf1ca6d0182"
  },
  {
    "url": "assets/js/34.b723ca75.js",
    "revision": "e66a4a92d4ce67ca25dc548a83f1bc30"
  },
  {
    "url": "assets/js/35.2ed1f694.js",
    "revision": "aa27078d5ab451b983206e283f31929d"
  },
  {
    "url": "assets/js/36.3d9f78b1.js",
    "revision": "6c0584e77db83fad6b4b0cb71015b0da"
  },
  {
    "url": "assets/js/37.af1b5a1c.js",
    "revision": "64d37453ebb15cfdc066a69e94b0e6dc"
  },
  {
    "url": "assets/js/38.6fa81f82.js",
    "revision": "428e4986ca549405f463a8be858cb790"
  },
  {
    "url": "assets/js/39.d940c345.js",
    "revision": "2821af56c0d3193a6b2ca24233f85894"
  },
  {
    "url": "assets/js/4.6bab11f4.js",
    "revision": "78f5d917889e97a215c1f713e78ba459"
  },
  {
    "url": "assets/js/40.c5734a22.js",
    "revision": "41729bda6c7b8eb66d00be5061305825"
  },
  {
    "url": "assets/js/41.c79751fa.js",
    "revision": "94fcc3455ad4714d482eb459fb234532"
  },
  {
    "url": "assets/js/42.0c5c27f4.js",
    "revision": "3af5bb215479a2700307f1d2c2fdcaf2"
  },
  {
    "url": "assets/js/43.25251fcf.js",
    "revision": "58f54bfdbc7f8ce3cdee1c9663f60a68"
  },
  {
    "url": "assets/js/44.7d35f60f.js",
    "revision": "e6defd7f056f008e5089b940bf7ea0d7"
  },
  {
    "url": "assets/js/45.9a466668.js",
    "revision": "1666dd95a904b55f029f440263be3dc2"
  },
  {
    "url": "assets/js/46.1208c610.js",
    "revision": "c1640b4da79b93182a0bdb0ebff04b86"
  },
  {
    "url": "assets/js/47.220ce289.js",
    "revision": "98dbb28505a98ceb30c57dbd97e22d0d"
  },
  {
    "url": "assets/js/48.704205a5.js",
    "revision": "b29141b43f7642f9130f649a25662f45"
  },
  {
    "url": "assets/js/49.9b363a2b.js",
    "revision": "d6be37196a90259c4c2f345affb60b57"
  },
  {
    "url": "assets/js/5.a3b85563.js",
    "revision": "74fe95124013dea535df20cd9d1e7e46"
  },
  {
    "url": "assets/js/6.e2b62cbe.js",
    "revision": "2f2b45d186700354716dd8d72094293b"
  },
  {
    "url": "assets/js/7.356a2dbd.js",
    "revision": "f9a7037b83d0368834a3b92b34e313a9"
  },
  {
    "url": "assets/js/8.a3692d86.js",
    "revision": "6da907261a801ddbfe6720e675367d56"
  },
  {
    "url": "assets/js/9.78fa4c07.js",
    "revision": "57b01091ba383e71638307fa7b353dfc"
  },
  {
    "url": "assets/js/app.027e1750.js",
    "revision": "0bbc32bd464cb2bfcc2fb49210d5c655"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "a48a814a725d67f5342165884fd4b402"
  },
  {
    "url": "frontend/electron.html",
    "revision": "3de37046d230eba4aa55ea3f94d239dd"
  },
  {
    "url": "frontend/points.html",
    "revision": "ee17ee1307cb3dcc111d04e8db148f6d"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "87ddd7b30dc43c41ac6d1787243dd37d"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "99936ce28df658eda0cf0d55d1a3599f"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "d1e73a6f4d687130c44ed153c0464fb8"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "a7971632292e5b3db221a652b7428c93"
  },
  {
    "url": "guide.html",
    "revision": "94bd953104b21d25cc10bfc4a83ca4c5"
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
    "revision": "2083426abac16305be1d183b623f864f"
  },
  {
    "url": "other/c.html",
    "revision": "4ebb24e4753193e248482a30e0008833"
  },
  {
    "url": "other/cook.html",
    "revision": "d78f80dd168f4fe27b0449a4cff2ee09"
  },
  {
    "url": "other/countup.html",
    "revision": "fb2d09ab579c94517b3061033c922e4c"
  },
  {
    "url": "other/english.html",
    "revision": "7e217a93067e0cd013a7130be5d05a2e"
  },
  {
    "url": "other/image.html",
    "revision": "25d8a06e203c3da47abf4b372cc13200"
  },
  {
    "url": "other/index.html",
    "revision": "72db7bd4dd2bc2f32552dd0aab19318d"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "4784a8dac00c1ae59b44f681370c597b"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "d9221145776790772e2f7dc1c04f5c8a"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "f6829bef8a032d32ca9c6cb1fd98ccaa"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "0af24ae1dc38ad615a17534da162702a"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "4b04be7083013b6af72995a9f8344942"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "8ff5f3d10aa13c9d945d190d002f5e2a"
  },
  {
    "url": "tools/frontend/index.html",
    "revision": "db4bd524f0611e246b5fa136d42b0014"
  },
  {
    "url": "tools/frontend/Lerna.html",
    "revision": "5ed686aa1c22c9a06ccf79ea8b557e73"
  },
  {
    "url": "tools/frontend/NPM.html",
    "revision": "89052179320fa67c1652a2ea3ced5708"
  },
  {
    "url": "tools/frontend/nvm.html",
    "revision": "439960b2b83507d15734a69ff4f976d7"
  },
  {
    "url": "tools/frontend/Verdaccio.html",
    "revision": "7af8ad3a6ba05f2704a6175d896ae723"
  },
  {
    "url": "tools/frontend/VS Code.html",
    "revision": "19609ec811d57d3bc7678d79adb3ff66"
  },
  {
    "url": "tools/frontend/Yarn.html",
    "revision": "a9e1a62e32bade307c784245d329a427"
  },
  {
    "url": "tools/python/anaconda.html",
    "revision": "3f6c258226d77c445ad674ea78d3fe6f"
  },
  {
    "url": "tools/python/index.html",
    "revision": "15f4d0b1c94eca7a28d3e18a9dbee4f2"
  },
  {
    "url": "tools/python/pip.html",
    "revision": "d0eb56e755a5c11bf3be7bc1d93bf033"
  },
  {
    "url": "tools/system/docker.html",
    "revision": "5f93e2c2b5f587a19b280bc208911670"
  },
  {
    "url": "tools/system/git.html",
    "revision": "8ea13c811dcada6702ab5c9a137bcf71"
  },
  {
    "url": "tools/system/index.html",
    "revision": "90cdae5cc0ec89078cc8c61aff2a21fc"
  },
  {
    "url": "tools/system/linux.html",
    "revision": "117f11b797cefe06b04d4960c9d5b3fa"
  },
  {
    "url": "tools/system/ubuntu.html",
    "revision": "08415c5430f08449f7acbc2a6dac6f45"
  },
  {
    "url": "tools/system/vim.html",
    "revision": "6e82867a1fc5cbcb1aeaa574d9e6f1d5"
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
