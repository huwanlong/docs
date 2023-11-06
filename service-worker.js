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
    "revision": "75e689fac75c848ca9db7a71ddb4b15f"
  },
  {
    "url": "about.html",
    "revision": "905690a620aa032e8f574598bb9c8b7b"
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
    "url": "assets/js/10.a06447b9.js",
    "revision": "616205dbb9a9dae76e20ae09a2695da1"
  },
  {
    "url": "assets/js/11.af1f01b0.js",
    "revision": "ae73bd4b69d76fe3335a56deb49e621d"
  },
  {
    "url": "assets/js/12.b0a404c8.js",
    "revision": "136d3f919b23ca4091d50e90456c1e2e"
  },
  {
    "url": "assets/js/13.e9998838.js",
    "revision": "0e0b9b6558360a02997095b1e3b919bb"
  },
  {
    "url": "assets/js/14.b2e3a221.js",
    "revision": "cadbab54638525cae87731dfca590668"
  },
  {
    "url": "assets/js/15.0a9ef2ba.js",
    "revision": "562d415e27eed719f001c301f6518b88"
  },
  {
    "url": "assets/js/16.22751f59.js",
    "revision": "071d61402d40eac3aa65b1fc04347af5"
  },
  {
    "url": "assets/js/17.900f438a.js",
    "revision": "07b5262a33a52aa3683806240d1d2317"
  },
  {
    "url": "assets/js/18.00ba396c.js",
    "revision": "cec9b9b6797ce9279fe7e80b4aea2ce2"
  },
  {
    "url": "assets/js/19.c952c3d9.js",
    "revision": "af5fbbbbf2010dedd14e2c919b8628a7"
  },
  {
    "url": "assets/js/2.e6903011.js",
    "revision": "7d50b1cfd40d5c6a65adf6d3325e11ed"
  },
  {
    "url": "assets/js/20.79f3ece4.js",
    "revision": "1b49505232ca210d811ee8db4b90bb18"
  },
  {
    "url": "assets/js/21.9f4a6111.js",
    "revision": "8f65e1b2846257d0bc243978728e550d"
  },
  {
    "url": "assets/js/22.97a82fd7.js",
    "revision": "513a70e92a61b23099d7b12a06b4a9e6"
  },
  {
    "url": "assets/js/23.8da6f330.js",
    "revision": "e2efa1e57f82d6998f1c395cc3e1fc97"
  },
  {
    "url": "assets/js/24.0940535c.js",
    "revision": "ff87e2a29c34d692d19dfd106863804f"
  },
  {
    "url": "assets/js/25.1908568a.js",
    "revision": "b3135c5518ba70e4b663370a5e203470"
  },
  {
    "url": "assets/js/26.0e3f75a8.js",
    "revision": "4f781d78f43380b841c824867190a517"
  },
  {
    "url": "assets/js/27.8ec6865b.js",
    "revision": "d1efa437fae4c11aea839cb4929ffad8"
  },
  {
    "url": "assets/js/28.2ec42ec5.js",
    "revision": "1a7c7d22e6e1bde67e50643af2ede112"
  },
  {
    "url": "assets/js/29.a029bac0.js",
    "revision": "ec296025e70b6327432ede44acf1c825"
  },
  {
    "url": "assets/js/3.5bd84dd0.js",
    "revision": "3045a90d4a43814cf64416dd9a361e43"
  },
  {
    "url": "assets/js/30.7134eabf.js",
    "revision": "a7502186e6d8ce2c2f1b92618e92a8fb"
  },
  {
    "url": "assets/js/31.94201162.js",
    "revision": "8d6cfdfb084cd4ea330eea0b6c9cc729"
  },
  {
    "url": "assets/js/32.b6b688b5.js",
    "revision": "29ac245b568dabcf7f34d5eea630a884"
  },
  {
    "url": "assets/js/33.5a4f3924.js",
    "revision": "8c676789161d6ddf2fc1ba76071494a0"
  },
  {
    "url": "assets/js/34.caee773c.js",
    "revision": "4598b8e67e1eaaba5a75a3eab0f7881e"
  },
  {
    "url": "assets/js/35.82c40eea.js",
    "revision": "3b2e5025917dd56f46d6d12f6894779a"
  },
  {
    "url": "assets/js/36.f1a9fe2b.js",
    "revision": "0001e303536ea0eee0ee0e4fba5874c3"
  },
  {
    "url": "assets/js/37.b8b24d2a.js",
    "revision": "1f8e1aa50a66df198425733150e97a75"
  },
  {
    "url": "assets/js/38.fef82340.js",
    "revision": "07222e4d46d7a5806b7de9b14f502b49"
  },
  {
    "url": "assets/js/39.51f42eed.js",
    "revision": "efda7d31be85a9cf2aad0fb2de066839"
  },
  {
    "url": "assets/js/4.9bd43c14.js",
    "revision": "919c8d36252ac12879983652721c3d55"
  },
  {
    "url": "assets/js/40.134cbc87.js",
    "revision": "699a1928f634302bd8bbdce9122b0e22"
  },
  {
    "url": "assets/js/41.835d33f5.js",
    "revision": "93c0d09b86a8e7748dc027040649d128"
  },
  {
    "url": "assets/js/42.5d0c8e76.js",
    "revision": "df8b7e7f537f2d492d2282e04a87f998"
  },
  {
    "url": "assets/js/43.ffde29a2.js",
    "revision": "ea9043bb6f8b5d378db86ba8ab3d77ac"
  },
  {
    "url": "assets/js/44.d95cd49a.js",
    "revision": "55611741bf4bf678e8728af2df0d91bf"
  },
  {
    "url": "assets/js/45.ad993734.js",
    "revision": "e67e4ba02cac81f6d3eaa79f345fb543"
  },
  {
    "url": "assets/js/46.dfc15a5a.js",
    "revision": "d4562114f204e2e473cbe86edb276046"
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
    "url": "assets/js/5.f2e29312.js",
    "revision": "45d74084e71d2b0e00ee21247c75834b"
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
    "url": "assets/js/6.8128a10e.js",
    "revision": "3859f903f132aaa5d85803451da890d4"
  },
  {
    "url": "assets/js/7.1af00e5d.js",
    "revision": "1a2ef867b139c2b410c213255ea09158"
  },
  {
    "url": "assets/js/8.bf8bd387.js",
    "revision": "9884c34d2421295b75a92f44dddc91e7"
  },
  {
    "url": "assets/js/9.171d11f1.js",
    "revision": "df6e1a23bac5588d45410cd8d093d939"
  },
  {
    "url": "assets/js/app.ce547775.js",
    "revision": "2bcf2b35143fa7cfed180ec47b5fa82d"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "a7d24ad6901e78d9b6fcc67fd0c060c9"
  },
  {
    "url": "frontend/electron.html",
    "revision": "1390c7a8891bcda76eb84ec84bca8a74"
  },
  {
    "url": "frontend/points.html",
    "revision": "e4aeee155d952a63a4701e0e4a94367d"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "a9f7c27322fdc083cd646fa403d5b195"
  },
  {
    "url": "frontend/tools/index.html",
    "revision": "85e2286f1688864b7b32ecb6f16627ce"
  },
  {
    "url": "frontend/tools/Lerna.html",
    "revision": "564da0cf27de2534bef33905ff5415c0"
  },
  {
    "url": "frontend/tools/NPM.html",
    "revision": "0bdf8d9e248725538fc80b0c116ae341"
  },
  {
    "url": "frontend/tools/nvm.html",
    "revision": "806d1a89798b43e645014f8c982bf7bb"
  },
  {
    "url": "frontend/tools/pnpm.html",
    "revision": "84f0272932135f90b1a6656bd9531b97"
  },
  {
    "url": "frontend/tools/Verdaccio.html",
    "revision": "170b0075f10d23b2bc3d205af175c363"
  },
  {
    "url": "frontend/tools/Yarn.html",
    "revision": "da463535502c918d4016a19cb70df39a"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "5d962ea88a25e8de972859623b22ee3c"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "1e914f69a489380ef17ef98f644af7d1"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "eb4801b4f54a3f4ec18a981d2433300a"
  },
  {
    "url": "guide.html",
    "revision": "72d455472bf4e51e93394f3535653d92"
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
    "revision": "c3fa19c773dce75e22eabbcf75c79942"
  },
  {
    "url": "other/example/countup.html",
    "revision": "2318bfe4be9aadf0b36b6cc80cab9bb9"
  },
  {
    "url": "other/example/image.html",
    "revision": "942170f0d7354b5adbb18b66e1167ede"
  },
  {
    "url": "other/index.html",
    "revision": "2c565ce380199b6f0d10cb69dbfaa24f"
  },
  {
    "url": "python/basic.html",
    "revision": "f78944580db0243f3f4e479fe987a91d"
  },
  {
    "url": "python/django.html",
    "revision": "d36d824c01280842904fe7d5484e970a"
  },
  {
    "url": "python/lib.html",
    "revision": "4d8faf270e3d7b0281118508033fe856"
  },
  {
    "url": "python/tools.html",
    "revision": "7a3e53a8b2116d7c21d5b3368386c2fb"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "5f3d553aab2ecdbdeccc449eb44ae6b3"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "a6957e9217db6d0f8a956382f13dd0e5"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "e281e564d65771a66972b28543c19f0d"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "6502fdb3d93e1ab9683cf6cf2c847b20"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "809fe0ba995f7e848a94c6c89d3d6184"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "758b3eccae9fbf147709462846c1cd38"
  },
  {
    "url": "tools/system/centos.html",
    "revision": "428416368b3a5d1efdaefbb345630fc5"
  },
  {
    "url": "tools/system/docker.html",
    "revision": "d04e0728540e9eb8f9bce037d6040299"
  },
  {
    "url": "tools/system/git.html",
    "revision": "9416effb5134f117f4a14d13416a4a56"
  },
  {
    "url": "tools/system/idea.html",
    "revision": "8dae4be8acf2d616f653d0bc87b30240"
  },
  {
    "url": "tools/system/index.html",
    "revision": "3f8ab1af591db611a215aa6fb0a28879"
  },
  {
    "url": "tools/system/linux.html",
    "revision": "018f0de67e6f93e057367bb6c3ee9582"
  },
  {
    "url": "tools/system/mac.html",
    "revision": "26cb65c3915576d4adad0035f0bf1bc3"
  },
  {
    "url": "tools/system/ubuntu.html",
    "revision": "302f4221f12d8401c102dbb551ea9366"
  },
  {
    "url": "tools/system/vim.html",
    "revision": "e929d0ae0e7db397eccd4e97a921c824"
  },
  {
    "url": "tools/system/VS Code.html",
    "revision": "cf3eb4f3cd8930a432f79b3ed64e02cf"
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
