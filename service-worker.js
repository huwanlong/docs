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
    "revision": "872fc6e4eee0590bba60d5e951a03813"
  },
  {
    "url": "about.html",
    "revision": "a731035e6a8ab35f95a976ccab862bba"
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
    "url": "assets/js/22.c77ce2b9.js",
    "revision": "4b745d0dda54d13c405a0a17f749b2bc"
  },
  {
    "url": "assets/js/23.074311b8.js",
    "revision": "aced2fbcfeadb2b9b725a77cea2b1264"
  },
  {
    "url": "assets/js/24.56ef239f.js",
    "revision": "1ea5c5b646182b58599e6d52c7575498"
  },
  {
    "url": "assets/js/25.92f041a9.js",
    "revision": "857b6c80acc9f1f65722c47a29d06b36"
  },
  {
    "url": "assets/js/26.e8c655be.js",
    "revision": "136839783bd84ff9d54612c181eba217"
  },
  {
    "url": "assets/js/27.c47d623d.js",
    "revision": "0b4656d7592b7dc8c9cf7b289b51db91"
  },
  {
    "url": "assets/js/28.827141cd.js",
    "revision": "e1743db283837f2018dfb27b2b74119c"
  },
  {
    "url": "assets/js/29.2d8127dc.js",
    "revision": "3ab231f71f029a29d625ed2a162309ca"
  },
  {
    "url": "assets/js/3.58d8f62c.js",
    "revision": "b3fa421dec30b620c0da0810220fd4ec"
  },
  {
    "url": "assets/js/30.8126bf82.js",
    "revision": "124a793fd35c8cbe5837c196b874faac"
  },
  {
    "url": "assets/js/31.b4513409.js",
    "revision": "cfa4308530bfe065b2463ad78696d826"
  },
  {
    "url": "assets/js/32.f84dbf25.js",
    "revision": "69ca65230e4d57f0d77eda878a5ae750"
  },
  {
    "url": "assets/js/33.f9db4afa.js",
    "revision": "56f886895e27244821978a61e0873d5e"
  },
  {
    "url": "assets/js/34.6ff82d13.js",
    "revision": "1680bbd3464bca0a15de1e919f8ecab4"
  },
  {
    "url": "assets/js/35.92b7862f.js",
    "revision": "36ca70066122ba1ecc513e4e04ddb3fd"
  },
  {
    "url": "assets/js/36.a5309348.js",
    "revision": "3647890422881c021e297f8294528508"
  },
  {
    "url": "assets/js/37.7d637b34.js",
    "revision": "5c8a158442dfb19a46a8651b9fb1c43f"
  },
  {
    "url": "assets/js/38.86f169d4.js",
    "revision": "d27dd73470115267adcc0b945a8b30bf"
  },
  {
    "url": "assets/js/39.ccfe1552.js",
    "revision": "a2843637674c2fd7fc622ac7bdb7056e"
  },
  {
    "url": "assets/js/4.6bab11f4.js",
    "revision": "78f5d917889e97a215c1f713e78ba459"
  },
  {
    "url": "assets/js/40.596cf63d.js",
    "revision": "6daea62bc35dd7871ef617b1b73c06d4"
  },
  {
    "url": "assets/js/41.e6decd5f.js",
    "revision": "e0f116e5d76bc3d6abf856cabfdaadd5"
  },
  {
    "url": "assets/js/42.53675abb.js",
    "revision": "c6b146bd163d03004f76263762d92d06"
  },
  {
    "url": "assets/js/43.d307933a.js",
    "revision": "39fada18c6d679666c5aaa95291a4f07"
  },
  {
    "url": "assets/js/44.7d63de8d.js",
    "revision": "dc02029722c4197a06f41b8dd0f7c742"
  },
  {
    "url": "assets/js/45.b8093420.js",
    "revision": "97a5298c2d2aace8504a693022fe57a5"
  },
  {
    "url": "assets/js/46.a9a18842.js",
    "revision": "661b5221794658aca2c74f2e411e519a"
  },
  {
    "url": "assets/js/47.ff81ed01.js",
    "revision": "f2fd1b9d94b555f491dfdb6435439ab4"
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
    "url": "assets/js/8.3a13def7.js",
    "revision": "862681a5eafd89ad702e854a6951a1e0"
  },
  {
    "url": "assets/js/9.78fa4c07.js",
    "revision": "57b01091ba383e71638307fa7b353dfc"
  },
  {
    "url": "assets/js/app.3dfc3155.js",
    "revision": "447df4f9ba954f3de9e83f27e72316df"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "81f0fad1a9782dac71e0a79204e870fa"
  },
  {
    "url": "frontend/electron.html",
    "revision": "71226ddb7b51eed2efabff7a18ba7be3"
  },
  {
    "url": "frontend/points.html",
    "revision": "ac484e8103420160ee99113aba7cf219"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "0a39f49cac6fa92f1df745f257ab3f47"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "7edfeea504d127c1d75c32b80a2bf190"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "01ac5a9a88e823a36f85db437aa90606"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "783fdb44394e9743b6b5dd2202121bc5"
  },
  {
    "url": "guide.html",
    "revision": "2c26eae6e7b9581bf07ef8a0142752c8"
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
    "revision": "990d58549a3a789798f03a82ecd565f0"
  },
  {
    "url": "other/cook.html",
    "revision": "13001e05985e7b4d40621ffe9c570cfa"
  },
  {
    "url": "other/countup.html",
    "revision": "04dc1c1bc260dddbfd3bcb374041d757"
  },
  {
    "url": "other/english.html",
    "revision": "0297ed9d115aa7a6159ec1169e84f227"
  },
  {
    "url": "other/image.html",
    "revision": "59d29bd5c687e6dac161569ac473b5b9"
  },
  {
    "url": "other/index.html",
    "revision": "07f20bd77b065cecd27a210f79f77db5"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "b5b9e666b2360ade1d3f25c3d9355e91"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "a47294ed163b2f78c8ebe8cc498be7b2"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "efa9d97fd68d5702858d0a78d59bf7a8"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "6d7e93dab68bf03fdfa35e26fe246c19"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "f07515816f84dca1b400446f619d3eab"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "a19aa4d647c09304e18b2a52b5a24c58"
  },
  {
    "url": "tools/frontend/index.html",
    "revision": "967f1b38cc34632b8b09d80f91d69a89"
  },
  {
    "url": "tools/frontend/Lerna.html",
    "revision": "51e1a2de46c03015ff3050cd37e6792c"
  },
  {
    "url": "tools/frontend/NPM.html",
    "revision": "758fda411b1d7b58f0ebdccfaeb522ef"
  },
  {
    "url": "tools/frontend/nvm.html",
    "revision": "582b1ffdfde96a9cfd709c53e4b882a1"
  },
  {
    "url": "tools/frontend/Verdaccio.html",
    "revision": "409e2b0eab504fbf5f8e73a98334825c"
  },
  {
    "url": "tools/frontend/VS Code.html",
    "revision": "ce634778e940454d62c8b2b742b28915"
  },
  {
    "url": "tools/frontend/Yarn.html",
    "revision": "3c108b04ec5c8ab929936b10c1a21e85"
  },
  {
    "url": "tools/python/anaconda.html",
    "revision": "5d9d97c39d4f1e65c536f4b0c071d4ee"
  },
  {
    "url": "tools/python/index.html",
    "revision": "bba13a843f60a777f04ee3d7bf121fda"
  },
  {
    "url": "tools/python/pip.html",
    "revision": "f1a11049a1daa67d178edb72b1cd8feb"
  },
  {
    "url": "tools/system/docker.html",
    "revision": "4d4ad25e357ecb3540f6e21c4ab5ebd4"
  },
  {
    "url": "tools/system/git.html",
    "revision": "bbec215333c0faf6241cfc1feff7acd1"
  },
  {
    "url": "tools/system/index.html",
    "revision": "97418fe5bbafb93aee99891324c2333a"
  },
  {
    "url": "tools/system/linux.html",
    "revision": "414a8bf688b68f4029b221be5db0cc16"
  },
  {
    "url": "tools/system/ubuntu.html",
    "revision": "49c13c08a7b367a0c04980504d65e4bb"
  },
  {
    "url": "tools/system/vim.html",
    "revision": "2d1b3bfc0de72d30069e0b482ebdc328"
  },
  {
    "url": "物联网/c.html",
    "revision": "3a13eee5125e0c81f2826708bc3dae28"
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
