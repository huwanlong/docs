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
    "revision": "fb12be9f5c82102dadcf45c761c9a41f"
  },
  {
    "url": "about.html",
    "revision": "3cf6299254c87f5aa81ac475c2ef8948"
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
    "url": "assets/js/23.2b66c227.js",
    "revision": "b9bdacccca175c6ec3bce82d9d11b933"
  },
  {
    "url": "assets/js/24.a32fdf4b.js",
    "revision": "384207f32d586c632562f2e377b7ffcf"
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
    "url": "assets/js/30.5a3319df.js",
    "revision": "75ed8be31039565e6b684953db021740"
  },
  {
    "url": "assets/js/31.51db1d18.js",
    "revision": "8626274c8680f3d94dfe1ca2d279e365"
  },
  {
    "url": "assets/js/32.2575c8bb.js",
    "revision": "058c428448a74f44808e9cf9b7356ee1"
  },
  {
    "url": "assets/js/33.95215068.js",
    "revision": "9844c1b74ab3ceba0d194d322b047da4"
  },
  {
    "url": "assets/js/34.00c99374.js",
    "revision": "e7559ae9b3be2395452fcb64a7ba0f28"
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
    "url": "assets/js/37.2a1e205f.js",
    "revision": "b369ce11941f665252141ecdb094165a"
  },
  {
    "url": "assets/js/38.db621be7.js",
    "revision": "468c25ea7025e52b58418509165b44a6"
  },
  {
    "url": "assets/js/39.436822af.js",
    "revision": "c8dea1c29043fbc0dee034288ffe1feb"
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
    "url": "assets/js/47.c16a449b.js",
    "revision": "6322b0a27a2478a5a8d740c94a7ccaf3"
  },
  {
    "url": "assets/js/48.d17ffac8.js",
    "revision": "841288bbfe4d50dbbb8018c58d5a1f27"
  },
  {
    "url": "assets/js/49.0107e809.js",
    "revision": "8989afac7219530874a07611b3e33f75"
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
    "url": "assets/js/55.42b9d6ec.js",
    "revision": "7e4d34eda5e583ebe04b31da99c3121c"
  },
  {
    "url": "assets/js/56.ac44157c.js",
    "revision": "c1dd46a6001586c1ffd7de2c16a99afa"
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
    "url": "assets/js/61.418b9def.js",
    "revision": "c92f1637ec24ab68b7ea0e4f209c7018"
  },
  {
    "url": "assets/js/62.ffaf1a2e.js",
    "revision": "42fa645dd70d891da7994c34985a0c1b"
  },
  {
    "url": "assets/js/63.268dfec1.js",
    "revision": "4b60c0107ae7c083689a555cc9ee4abc"
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
    "url": "assets/js/app.bc82fc47.js",
    "revision": "e35cdf0a0c03119a9c45c8c782c3664e"
  },
  {
    "url": "assets/js/vendors~docsearch.26f41c14.js",
    "revision": "e3adfac55021ea042846e5bc5f98d977"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "f5750255ddb075ffb3bef2d21de9487f"
  },
  {
    "url": "frontend/electron.html",
    "revision": "a1e9778e51bb3a366649e483ea48f72e"
  },
  {
    "url": "frontend/points.html",
    "revision": "eaf247f60744b4e18909d0c4d6dd563e"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "be19af6dcf9ceed7564e3a3e0ded6a8f"
  },
  {
    "url": "frontend/tools/index.html",
    "revision": "eaadeeacdedfa35ca89dae36ebb8022a"
  },
  {
    "url": "frontend/tools/Lerna.html",
    "revision": "725a16d4a84a5438ba94b7d87ff634bb"
  },
  {
    "url": "frontend/tools/NPM.html",
    "revision": "4d8af5513945274b76c3fb56f41a3ec5"
  },
  {
    "url": "frontend/tools/nvm.html",
    "revision": "4a353b9efbf23461d02d61a47735d363"
  },
  {
    "url": "frontend/tools/pnpm.html",
    "revision": "771bed2468fe6f9fc17d8cb3b472066b"
  },
  {
    "url": "frontend/tools/Verdaccio.html",
    "revision": "b31b7ef3feea6357ee9cd7aa63a42b22"
  },
  {
    "url": "frontend/tools/Yarn.html",
    "revision": "778a2cae82ca207cf34975526b25a387"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "3cfa1a54d498ee28ec259aa295481c7b"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "24565edcfeac54216096e18627cbe448"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "8d1b6ff0b3f029fe52445652c3cf7740"
  },
  {
    "url": "guide.html",
    "revision": "f5a539fc9a75680898ee1b440833bfe7"
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
    "revision": "8be9c311c7f94fe85ccf8b397779fc5e"
  },
  {
    "url": "other/example/countup.html",
    "revision": "554fb77bd8e8b51783005dbf9374c438"
  },
  {
    "url": "other/example/image.html",
    "revision": "7a07f80cdb19b1c578ffa9f2c159824f"
  },
  {
    "url": "other/index.html",
    "revision": "8873c2787c0798f6feb4c9c867c3a98a"
  },
  {
    "url": "python/basic.html",
    "revision": "2b4c652817322200caef2a97847f6f1d"
  },
  {
    "url": "python/django.html",
    "revision": "5b57385eab268616bf38c3e39fc37188"
  },
  {
    "url": "python/tools.html",
    "revision": "78c3f48a95a9bf19d551365081c19ba0"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "3ad009dee76a08d40f1fb27407149ba4"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "378957da84c1bd96653f8c11e67e56b2"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "9aaca08865ab19978b62b78d81cc9f11"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "6be592eb8e87e51853af737fc18624a7"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "5a1ade8ebef5c1d4dcab3a41563e9018"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "25cdae2154c41a16d45141098e457ab5"
  },
  {
    "url": "tools/centos.html",
    "revision": "a92366107818a501f1b1681986d06c29"
  },
  {
    "url": "tools/docker.html",
    "revision": "2551dc53dae9d25fea250539c3cdf1b0"
  },
  {
    "url": "tools/git.html",
    "revision": "3168a3f6b010d612371ef80569e02cfb"
  },
  {
    "url": "tools/idea.html",
    "revision": "5dfcdaf2d13be5bbbbcf843d5b9b8b8f"
  },
  {
    "url": "tools/index.html",
    "revision": "9ee5de3b92614226ad3ecfad4af86bdd"
  },
  {
    "url": "tools/linux.html",
    "revision": "4000513b8aff6e356e902eda26495a82"
  },
  {
    "url": "tools/mac.html",
    "revision": "16ec76ad5b8a747ce4903953ee572abb"
  },
  {
    "url": "tools/ubuntu.html",
    "revision": "8511a345404250b91d893a55ebbcdd28"
  },
  {
    "url": "tools/vim.html",
    "revision": "0145340f345c4129ef7f65b3226450cd"
  },
  {
    "url": "tools/VS Code.html",
    "revision": "3d59c489e04cba28de35e65e08fa3b5f"
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
