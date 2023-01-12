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
    "revision": "7788f5fc6f6aed099f4c79378028ed8c"
  },
  {
    "url": "about.html",
    "revision": "a77fc904e2b59f12ff25790677acb800"
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
    "url": "assets/js/10.f2c7c9c2.js",
    "revision": "4739f42f626ea6d2cab5334f18e0b6f2"
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
    "url": "assets/js/32.2d1e2adc.js",
    "revision": "1c011c28f381a9664e084e13273deee9"
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
    "url": "assets/js/4.70dfa914.js",
    "revision": "3380b039704474f2cba4fbc7ca191daf"
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
    "url": "assets/js/43.0ea4f1d9.js",
    "revision": "3209c15e5effdb8d6e5ce6052084e53d"
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
    "url": "assets/js/46.92d32b30.js",
    "revision": "be691f11f737fb2a56973b550d2ecd54"
  },
  {
    "url": "assets/js/47.d6a0a4b7.js",
    "revision": "f32daf867e8bc8e0aae229ea879416ec"
  },
  {
    "url": "assets/js/48.c4f830be.js",
    "revision": "578f2606f0bb26e86c32a3b70b2b12d3"
  },
  {
    "url": "assets/js/49.4bcefcc4.js",
    "revision": "6fbf83aebedbef1474472c910f61b802"
  },
  {
    "url": "assets/js/5.a497d5b5.js",
    "revision": "98d7e15ea92e893cd916dff4471b3bd4"
  },
  {
    "url": "assets/js/50.bcd5d0c9.js",
    "revision": "b0c6982454bd95c186205d454a9c587c"
  },
  {
    "url": "assets/js/6.edfecbac.js",
    "revision": "a0a6de54fc6beacd6657237b464e567e"
  },
  {
    "url": "assets/js/7.48daebed.js",
    "revision": "73bad64fc498244298d65554817315c3"
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
    "url": "assets/js/app.a747f241.js",
    "revision": "932d9054ea336be8c3195d2ef022dfcf"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "96d25c2c7a56ea5fbc10fb0d0362473d"
  },
  {
    "url": "frontend/electron.html",
    "revision": "1a774192b7575d490863c409b041563e"
  },
  {
    "url": "frontend/points.html",
    "revision": "302716cc1446047ab7e6a0aa27c8e92f"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "825949e8d59ddf5193b9247edc40ecb2"
  },
  {
    "url": "frontend/tools/index.html",
    "revision": "6f25bc6de179e2ef2a9f83697c16556a"
  },
  {
    "url": "frontend/tools/Lerna.html",
    "revision": "e422a0bd55b3b3e251ad59635652898d"
  },
  {
    "url": "frontend/tools/NPM.html",
    "revision": "1d2280a353cbdf1cecc08099330af874"
  },
  {
    "url": "frontend/tools/nvm.html",
    "revision": "c4333dfc47360bda74fbad1fd5f9933f"
  },
  {
    "url": "frontend/tools/Verdaccio.html",
    "revision": "d22bda029ecc489139e94ae29690baa5"
  },
  {
    "url": "frontend/tools/Yarn.html",
    "revision": "141b61a26146608af6e41ca72d22d7bb"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "dcc4bdbbbe917a851c3a44031d315455"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "3b57c9c91071013c0015f8a91a10191b"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "165a23d8b89cb8bbe6ee50299878441f"
  },
  {
    "url": "guide.html",
    "revision": "17f8075963fdf6b4e5d7839970e4f118"
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
    "revision": "78ab4956f832bf54f113540aec39f01a"
  },
  {
    "url": "other/c.html",
    "revision": "1ccd0b4680904446de4f5a2ff22c8189"
  },
  {
    "url": "other/cook.html",
    "revision": "63a8529a555bdfb956c705c8daaba40f"
  },
  {
    "url": "other/countup.html",
    "revision": "93308f8816ccccf0ccb207b2bfe6cdfd"
  },
  {
    "url": "other/english.html",
    "revision": "c9a7e2c80eb674d3c7b615f1d66a11fa"
  },
  {
    "url": "other/image.html",
    "revision": "f2b0c26dd0fb66467dbb1bc5f1a08e3e"
  },
  {
    "url": "other/index.html",
    "revision": "92773a5485dce9e7ddaf9ad32e961214"
  },
  {
    "url": "python/basic.html",
    "revision": "59c9fea3896a116d61a18911689a4808"
  },
  {
    "url": "python/django.html",
    "revision": "40dc66bb0f30963d800c8c0e1bd8c22b"
  },
  {
    "url": "python/lib.html",
    "revision": "48e896cf1c3991e8c8368ace70d38174"
  },
  {
    "url": "python/tools.html",
    "revision": "ad0a30c551e4e06e59b8b9df5f5e8b61"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "b19d19ea9209b3946cc5b428e0d7e27b"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "55929d6a42257094053f2e3029f4bebc"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "06ee591335e16e60cf59bb9e40913c54"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "6f0db43bfebcf825bb15db11192f4bf6"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "4994ae2d09d914add3ece30cbb6ee128"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "9aac5a2e439da2c787475caaa61ed416"
  },
  {
    "url": "tools/system/docker.html",
    "revision": "521675a175dd4950406f32295a798984"
  },
  {
    "url": "tools/system/git.html",
    "revision": "33c25fb73be79e21941b72b61b846f43"
  },
  {
    "url": "tools/system/index.html",
    "revision": "5c95611ffda5ed9cd5b420ebf1f19662"
  },
  {
    "url": "tools/system/linux.html",
    "revision": "ab273cfc309ab429154a52073b8850f1"
  },
  {
    "url": "tools/system/ubuntu.html",
    "revision": "486ce090a0a234f443d72c2bd8cc834a"
  },
  {
    "url": "tools/system/vim.html",
    "revision": "42e437e2d7131af4104c83856db95b23"
  },
  {
    "url": "tools/system/VS Code.html",
    "revision": "00db450506f9b29e98c136dd96dd463f"
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
