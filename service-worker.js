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
    "revision": "14e01438a3cd704193205ee18a1c836d"
  },
  {
    "url": "about.html",
    "revision": "24a585d7ec9238b46b6b10d5c9f4b02e"
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
    "url": "assets/js/10.cae2baf7.js",
    "revision": "bc415587ec7354e121928d4ad913821f"
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
    "url": "assets/js/13.edf3d14d.js",
    "revision": "a6ce452c828c83eef5f5d065369656a6"
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
    "url": "assets/js/3.509f37ef.js",
    "revision": "9f7d9a6e5694d71b3c47557b7f5eb8b4"
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
    "url": "assets/js/39.13e6971f.js",
    "revision": "8dd009a87d04724d8468d0948078aab0"
  },
  {
    "url": "assets/js/4.afa35d7b.js",
    "revision": "09de8873d886280ad04ff573835bfb45"
  },
  {
    "url": "assets/js/40.c5734a22.js",
    "revision": "41729bda6c7b8eb66d00be5061305825"
  },
  {
    "url": "assets/js/41.548ea61f.js",
    "revision": "a028f7e668d6caeb9bbb0e950c68b7af"
  },
  {
    "url": "assets/js/42.b2010eae.js",
    "revision": "ef2932413fae6f8ecc07b836ef520d2f"
  },
  {
    "url": "assets/js/43.81fd85f8.js",
    "revision": "df86be37dca2a5b2b81d4be76664dd9f"
  },
  {
    "url": "assets/js/44.74f9243b.js",
    "revision": "288a3e8b219ec070540b40406ba593a9"
  },
  {
    "url": "assets/js/45.1f752d56.js",
    "revision": "fc54de8b847bab8be13df9fbee348f9e"
  },
  {
    "url": "assets/js/46.97f8f29c.js",
    "revision": "d1bef395be00a55e149987cf1040f481"
  },
  {
    "url": "assets/js/47.8b61cc5c.js",
    "revision": "53f3846b9a52763e5727fa4ebe1637de"
  },
  {
    "url": "assets/js/48.3e8432bb.js",
    "revision": "c3d57bc03e0be495998b3af7bfbb1f29"
  },
  {
    "url": "assets/js/49.637d066b.js",
    "revision": "036440ae6d248e2701f7e20a2bbb5545"
  },
  {
    "url": "assets/js/5.a3b85563.js",
    "revision": "74fe95124013dea535df20cd9d1e7e46"
  },
  {
    "url": "assets/js/50.590bf31a.js",
    "revision": "6ed0afb3d054325114d3054b6eaf0f22"
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
    "url": "assets/js/9.f073ed86.js",
    "revision": "56df74ecb7b45cebc7ad91280abab09e"
  },
  {
    "url": "assets/js/app.a22a553b.js",
    "revision": "e8a61644618b6d02aeaca7a61c1ecb4f"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "86923a84b0bfffaf106ea1f854a99ac8"
  },
  {
    "url": "frontend/electron.html",
    "revision": "d69dd059c18c4208b3608d02a4169400"
  },
  {
    "url": "frontend/points.html",
    "revision": "9a9c96c91c991c419179a410040253e2"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "703520e1a5444f5c84c24c8a4416f696"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "0252cf611437b11ed1ec03fe763c845e"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "0677c892357372e5748c731d825b82fc"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "db7b8d3e585fbdef681d120f47284f0a"
  },
  {
    "url": "guide.html",
    "revision": "986c5ef1ca2aadc98824a7b811f75bd0"
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
    "revision": "8e9b60f4d997aa3574cc51720217664a"
  },
  {
    "url": "other/c.html",
    "revision": "f1b09c201c513b27698bf84a0afd5d37"
  },
  {
    "url": "other/cook.html",
    "revision": "d3ef4a2b4b37cc5f2c495a8ba88ee3c1"
  },
  {
    "url": "other/countup.html",
    "revision": "932286c98a6866514e91fd4597891629"
  },
  {
    "url": "other/english.html",
    "revision": "faa538a982038556b58e5b6c292f9543"
  },
  {
    "url": "other/image.html",
    "revision": "8f49d6d653dde98e9be389fb8b0b9343"
  },
  {
    "url": "other/index.html",
    "revision": "e9847e46a5b5668688bd7ae14eafa395"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "114b559ecf5014f3e48fe7084712e001"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "67882d2e9c072b152779f706735edd79"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "fa50212618e3398be87af9e2cefaf076"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "ad9d60cba80addef8a65a0f33f63ac45"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "a2d2c6e2d0d4c712d3f4a15a2585e9ca"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "9ed72045bce157bcc4ae66e447d6155e"
  },
  {
    "url": "tools/frontend/index.html",
    "revision": "9f8d4fb70e076c78e973d56a89809339"
  },
  {
    "url": "tools/frontend/Lerna.html",
    "revision": "8967637afff2548d212540bc7b78fe75"
  },
  {
    "url": "tools/frontend/NPM.html",
    "revision": "91ec1e1193f74799b176f27b09e82504"
  },
  {
    "url": "tools/frontend/nvm.html",
    "revision": "803899bd568d3746f11750019bf0bf5b"
  },
  {
    "url": "tools/frontend/Verdaccio.html",
    "revision": "1d2f78fa0ad138b979342348b65ea426"
  },
  {
    "url": "tools/frontend/VS Code.html",
    "revision": "cd7cc21127ee29080e7985398b5abb99"
  },
  {
    "url": "tools/frontend/Yarn.html",
    "revision": "1f2e7244576634cfda3a55189d5e7f5d"
  },
  {
    "url": "tools/python/anaconda.html",
    "revision": "0c063bc25a65828bd767a8918513fab5"
  },
  {
    "url": "tools/python/index.html",
    "revision": "b06659d346c43d8733a7e093c8dc309b"
  },
  {
    "url": "tools/python/pip.html",
    "revision": "23478967a21d5c80b16c9d2056b0f523"
  },
  {
    "url": "tools/python/pyenv.html",
    "revision": "c5b729ac3cae818c1e586bfbbb60132e"
  },
  {
    "url": "tools/system/docker.html",
    "revision": "91193b3dda133b001f58e8c9774b5dbc"
  },
  {
    "url": "tools/system/git.html",
    "revision": "dfe5634fb9ae091ea7e3a24e5ffd4735"
  },
  {
    "url": "tools/system/index.html",
    "revision": "6868fc5cf871db398fa67a8bd6385a2f"
  },
  {
    "url": "tools/system/linux.html",
    "revision": "b4ff889395c85532b44ec1cf7ef419a1"
  },
  {
    "url": "tools/system/ubuntu.html",
    "revision": "4254c653e43b2ca61771cf2ee3e0e34b"
  },
  {
    "url": "tools/system/vim.html",
    "revision": "b403368a70914707e1250a4adf904248"
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
