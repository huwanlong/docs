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
    "revision": "32f598e448e8ac0e2c5dc013cd42ffba"
  },
  {
    "url": "about.html",
    "revision": "af4f36082e8d6e464f5de04f26d944fd"
  },
  {
    "url": "app.png",
    "revision": "9ea40a18fbbd5e1562c5bf9607d0b1eb"
  },
  {
    "url": "assets/css/0.styles.a48934a1.css",
    "revision": "6608814c92bceb16b276e7a0a360fd97"
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
    "url": "assets/js/1.b1ef3f4b.js",
    "revision": "25a64e7d9ee97236539bab3b26eb429b"
  },
  {
    "url": "assets/js/11.2081239d.js",
    "revision": "b18163349107e61a7cd393dc38e81e8b"
  },
  {
    "url": "assets/js/12.63d6fcdb.js",
    "revision": "8b5f062e9415b5e2414608aa687ae789"
  },
  {
    "url": "assets/js/13.d21da585.js",
    "revision": "4d7175340769c9d2b4899aaade7e4d38"
  },
  {
    "url": "assets/js/14.6148f91e.js",
    "revision": "ba01963de66a09b2f23e8f64523efcaf"
  },
  {
    "url": "assets/js/15.63a3fb6b.js",
    "revision": "ca92172be2b99066a5b69efbc57b805c"
  },
  {
    "url": "assets/js/16.a8765973.js",
    "revision": "48da51c40cf04a365956b39e91eea6d5"
  },
  {
    "url": "assets/js/17.a88bc018.js",
    "revision": "a88e71a76859a55b2fcc2f4b0957abf3"
  },
  {
    "url": "assets/js/18.afa83e6e.js",
    "revision": "8969ba79b13d0eb177c8a2a2423f2819"
  },
  {
    "url": "assets/js/19.41a21b0c.js",
    "revision": "04da1d7a2eb96c69e3dbb06e285147cc"
  },
  {
    "url": "assets/js/2.fd2e74f7.js",
    "revision": "c0f5386767b51b986734deca727c3ed3"
  },
  {
    "url": "assets/js/20.3ea9e8ea.js",
    "revision": "6a8db6748c39b580a0fd8b39b42ac1f4"
  },
  {
    "url": "assets/js/21.5cd3de4a.js",
    "revision": "522c6f49c531fffcf6fdc6b9e9a5a65c"
  },
  {
    "url": "assets/js/22.5ed7a00c.js",
    "revision": "4f2bdc6a64034dcdbcb2a2271453607a"
  },
  {
    "url": "assets/js/23.08a81acb.js",
    "revision": "97575d18f0a26ef3abbca524551ca835"
  },
  {
    "url": "assets/js/24.ed1f5ea9.js",
    "revision": "83b794e8b1ab867526b1be88c81ba9b9"
  },
  {
    "url": "assets/js/25.fb1cf4ca.js",
    "revision": "3fe4dd34cb528e4dc31518548befa172"
  },
  {
    "url": "assets/js/26.0db6975e.js",
    "revision": "2c4054ffadf22faefe346ea9149707c9"
  },
  {
    "url": "assets/js/27.77772869.js",
    "revision": "b370b2232da15060d52314eb79fc10af"
  },
  {
    "url": "assets/js/28.7e13ab4f.js",
    "revision": "c942c1b882e2d70326dca0b2c0a76276"
  },
  {
    "url": "assets/js/29.9cdf00cb.js",
    "revision": "3895a32b90480a7e39ebf63d85fd0444"
  },
  {
    "url": "assets/js/3.b5700252.js",
    "revision": "b6f0c50aa586e003d01867ec984d33ac"
  },
  {
    "url": "assets/js/30.e92d8b6b.js",
    "revision": "7c7cb514cf391f221e40052a05e549bd"
  },
  {
    "url": "assets/js/31.5b64287c.js",
    "revision": "d1927cb8554b1c3847ce7e9c7374603b"
  },
  {
    "url": "assets/js/32.2575c8bb.js",
    "revision": "058c428448a74f44808e9cf9b7356ee1"
  },
  {
    "url": "assets/js/33.4e02607e.js",
    "revision": "1b336808bf358cabd89dd6b011241532"
  },
  {
    "url": "assets/js/34.05915975.js",
    "revision": "7178308f6ee29ff5d9ea27e9c65e703e"
  },
  {
    "url": "assets/js/35.a641aac3.js",
    "revision": "ed8576db9bcaa8dc0b7750ed17cc01b6"
  },
  {
    "url": "assets/js/36.67f66a40.js",
    "revision": "d72aee5557f37de076c663e609f3b9bd"
  },
  {
    "url": "assets/js/37.93fd7574.js",
    "revision": "99949f5d1d658ec44f59d61949eec749"
  },
  {
    "url": "assets/js/38.283e219b.js",
    "revision": "0d2165dfe009a243a5429f614bb83a3b"
  },
  {
    "url": "assets/js/39.a2748913.js",
    "revision": "33ce314c8913b58ec2096015cea4927e"
  },
  {
    "url": "assets/js/4.b98455f4.js",
    "revision": "85ad84889ad2a9b4fba21c4ec79fe2f2"
  },
  {
    "url": "assets/js/40.b059f05e.js",
    "revision": "51f1a8d7b52a0e54e6c019305a9604b9"
  },
  {
    "url": "assets/js/41.de274fb6.js",
    "revision": "39c04fdc318179f6c4e47c968c778e2d"
  },
  {
    "url": "assets/js/42.93ec7c40.js",
    "revision": "c51235d71233e070874814ba81d88469"
  },
  {
    "url": "assets/js/43.23835a6f.js",
    "revision": "e6aa663c699aced4f9fd1ba6ed4e777a"
  },
  {
    "url": "assets/js/44.7e7cee7e.js",
    "revision": "684d3f379421753cff5b800cda4a848d"
  },
  {
    "url": "assets/js/45.725b1567.js",
    "revision": "a0734be82c0e6a67a6f8b75b206861da"
  },
  {
    "url": "assets/js/46.d257693b.js",
    "revision": "de916f69a60057511af3cda09fa3fcc4"
  },
  {
    "url": "assets/js/47.ad59961c.js",
    "revision": "f9b8b9d63e5ff567ebca6904127aa815"
  },
  {
    "url": "assets/js/48.ab8c2ce2.js",
    "revision": "00eb4c189024bb6eaebe683d22e70d80"
  },
  {
    "url": "assets/js/49.62f4e333.js",
    "revision": "d91c9eb1d38c5b2abdf77b4c4a0d77b8"
  },
  {
    "url": "assets/js/5.9962e2a3.js",
    "revision": "d1722d807df48e5f6b075356b73de6f9"
  },
  {
    "url": "assets/js/50.1774e908.js",
    "revision": "296c21c0319fd08ace569d50007aa8ff"
  },
  {
    "url": "assets/js/51.ba4743bf.js",
    "revision": "f9cf696c8e5da5f2b5b9d8aef26b459f"
  },
  {
    "url": "assets/js/52.30b92944.js",
    "revision": "9c44c81f4c1258e65d3a9e8aa839e897"
  },
  {
    "url": "assets/js/53.8a62652c.js",
    "revision": "b15e1f41324e7f5f126c6fea0e75e2ad"
  },
  {
    "url": "assets/js/54.bded3999.js",
    "revision": "a5980ab7786314ba8cf210448e570d27"
  },
  {
    "url": "assets/js/55.5a120c80.js",
    "revision": "8d2da915175986bfb437904c92fa28e2"
  },
  {
    "url": "assets/js/56.750daf55.js",
    "revision": "0b903d89c3a272f03ad5d24bb2d26dd9"
  },
  {
    "url": "assets/js/57.53126b92.js",
    "revision": "7443f2b627b9859b0e6e41405c0cd250"
  },
  {
    "url": "assets/js/58.34863144.js",
    "revision": "68531ed3e0013818c52d8c7d9acfeac5"
  },
  {
    "url": "assets/js/59.6e6a3591.js",
    "revision": "d26413363d52680eb94b0aea82a534aa"
  },
  {
    "url": "assets/js/6.4ff94a19.js",
    "revision": "20087b803475eb3dc7fbc0371f53d042"
  },
  {
    "url": "assets/js/60.2759528c.js",
    "revision": "08854a19ec34743cdf832b160dc04e20"
  },
  {
    "url": "assets/js/61.bb47ec91.js",
    "revision": "ee117fe9f6224dc2026a7c0cc26d9b39"
  },
  {
    "url": "assets/js/62.b71b590c.js",
    "revision": "0c90f49a507562f51b98e7bc6305dd36"
  },
  {
    "url": "assets/js/63.27e63d8c.js",
    "revision": "793205f073a298c76fbb001f8e643958"
  },
  {
    "url": "assets/js/64.bf5b457c.js",
    "revision": "a5d9da25939cc843d62a3e0a6c6ae191"
  },
  {
    "url": "assets/js/65.4f92e241.js",
    "revision": "c7a5392b6c3eb0cb3c090e3e153883a9"
  },
  {
    "url": "assets/js/7.34a66f62.js",
    "revision": "5f3727df93d7833ab23cdc987aaf3c28"
  },
  {
    "url": "assets/js/8.60e3e766.js",
    "revision": "92da691e6517943163619754dad95d7e"
  },
  {
    "url": "assets/js/app.9c2a46f6.js",
    "revision": "e39d0ecae8d482c076900b98adf72d43"
  },
  {
    "url": "assets/js/vendors~docsearch.26f41c14.js",
    "revision": "e3adfac55021ea042846e5bc5f98d977"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "aa4c2c4b75c315bafd758e51a83a3909"
  },
  {
    "url": "frontend/electron.html",
    "revision": "8328e3acf69c2a72611418d6015e1f59"
  },
  {
    "url": "frontend/points.html",
    "revision": "4fd8643f461e215f6e808b6d9a55e8f0"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "7c12bb49197d18c27c9c691a8f5e84ce"
  },
  {
    "url": "frontend/tools/index.html",
    "revision": "da3358aee29ac91489610356c3241991"
  },
  {
    "url": "frontend/tools/Lerna.html",
    "revision": "8d018c68eaddb34f261e6e33acad866f"
  },
  {
    "url": "frontend/tools/NPM.html",
    "revision": "a8071ab8716654a31ab34e572dec1b3b"
  },
  {
    "url": "frontend/tools/nvm.html",
    "revision": "6a00671512d4a81e2c2aaaacc64ef5dc"
  },
  {
    "url": "frontend/tools/pnpm.html",
    "revision": "92f7489b370a68c4a8c85ed9e87f1b51"
  },
  {
    "url": "frontend/tools/Verdaccio.html",
    "revision": "6505b2cffd538526247d948e2d000cf3"
  },
  {
    "url": "frontend/tools/Yarn.html",
    "revision": "ac2c40bd2e91b293d8da6c00bd9305b4"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "4da131131b5e12d86db66e676cb98e7f"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "bc6a23eebf2b1d094a6cc3898a8f7a2e"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "5a3d63bd6e9639df2c59553c5d20146e"
  },
  {
    "url": "guide.html",
    "revision": "60d5d52905cbc62180f09a4ec4e38d91"
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
    "revision": "3ba39eab87ccc67f7680bc3105f6069d"
  },
  {
    "url": "other/example/countup.html",
    "revision": "47e4f3c22f6fbd292028f3c76f2833e1"
  },
  {
    "url": "other/example/image.html",
    "revision": "9a47197204448bd45f05c368eb004116"
  },
  {
    "url": "other/index.html",
    "revision": "7c5c51970d3a4012249236df0d1f8ffe"
  },
  {
    "url": "python/basic.html",
    "revision": "e5dae7f77de22cb7cff83de1752722b8"
  },
  {
    "url": "python/django.html",
    "revision": "9c7a83a4b048f4952f26679c5796df30"
  },
  {
    "url": "python/tools.html",
    "revision": "49f036ae12ca7d41bee3e77262b9ed75"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "1eeda398a470c87eb7473fbe561de709"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "5f051fc205300700594fc53d71291875"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "a46a35d246f96f7aa4928b44728c96f7"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "1abc587e4a11073da096bb4efd67066e"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "0fa4c48927974642dfd1871848dcde8c"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "d3681a42144b90e2a275c324bf4702ce"
  },
  {
    "url": "tools/centos.html",
    "revision": "e305dc4ede67f626a84dccd7ecef1106"
  },
  {
    "url": "tools/docker.html",
    "revision": "29ee130628b7048f89bce68a8f408b01"
  },
  {
    "url": "tools/git.html",
    "revision": "a7b33d2f101c510dc390cbcffb052fe4"
  },
  {
    "url": "tools/idea.html",
    "revision": "f5d43768f9d18d634dc1afaf741c8f2e"
  },
  {
    "url": "tools/index.html",
    "revision": "1ef95ee0d7d59fbc15a14a08da267f98"
  },
  {
    "url": "tools/linux.html",
    "revision": "30403b8fe8d041b7f68b3df3430f1690"
  },
  {
    "url": "tools/mac.html",
    "revision": "dffdb5975e5977223b8a816b1dfc0457"
  },
  {
    "url": "tools/ubuntu.html",
    "revision": "f9e2f69384c444be135bafdf96e1f627"
  },
  {
    "url": "tools/vim.html",
    "revision": "0f5cee2296d6f91863e76657a62b5d23"
  },
  {
    "url": "tools/VS Code.html",
    "revision": "72f50ff0e98f083692c40b52e52fb990"
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
