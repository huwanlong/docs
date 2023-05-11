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
    "revision": "4eedfeae90cd05957e411cd8a1b34fe4"
  },
  {
    "url": "about.html",
    "revision": "ba7ad11ac3ad3bd18399140542d195c5"
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
    "url": "assets/js/46.1177bc2a.js",
    "revision": "82fe8d905780ccbf0feaca3d34c876c0"
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
    "url": "assets/js/app.00f5a3c0.js",
    "revision": "c46de060047a4ffe3e50e2d3a93dabe4"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "b71d98b75290dbc79ea5bb648b5a5480"
  },
  {
    "url": "frontend/electron.html",
    "revision": "14019a98d4a03884aca290d2c6bf5a89"
  },
  {
    "url": "frontend/points.html",
    "revision": "53329b221275d701b4ff73716d96f0fe"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "c0ce5e19bad81d3ce6156e155c0d625c"
  },
  {
    "url": "frontend/tools/index.html",
    "revision": "e10892dbe661ddf89e1095d9ea97a62d"
  },
  {
    "url": "frontend/tools/Lerna.html",
    "revision": "6d0893dc0e01d7d2e0ae9cc7063d9fc2"
  },
  {
    "url": "frontend/tools/NPM.html",
    "revision": "b6d878a303f4787072cf36eafbf18bea"
  },
  {
    "url": "frontend/tools/nvm.html",
    "revision": "ec2f66bf4a651ff2dad2d597c8908e8c"
  },
  {
    "url": "frontend/tools/Verdaccio.html",
    "revision": "b22056a96d0690bcdadc090cf0cd48fb"
  },
  {
    "url": "frontend/tools/Yarn.html",
    "revision": "a12d7da1ab4ebd06a8fdef9d6e86814d"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "13e297acb1c88ba60674b3106f2cc92b"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "85781afa60bf0a45198d06d53fb0055a"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "84943b68f31ff693ecb63b39572ce82a"
  },
  {
    "url": "guide.html",
    "revision": "f34b701dbfe8946c5e32d63c80117025"
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
    "revision": "ed29a586af8705332e844f1bbc990ff3"
  },
  {
    "url": "other/c.html",
    "revision": "d4fb0f1fc4493954b4905f7830e109a9"
  },
  {
    "url": "other/cook.html",
    "revision": "a5bf65c0b276e9b53e1b2bd7ea7258a0"
  },
  {
    "url": "other/countup.html",
    "revision": "10e4b4e3b3ef94ca82bbd3c0d11cddec"
  },
  {
    "url": "other/english.html",
    "revision": "68b7a2adc65b29098859f09aa65e8035"
  },
  {
    "url": "other/image.html",
    "revision": "15c986c54670a1b438483504f3fdf0f2"
  },
  {
    "url": "other/index.html",
    "revision": "0d3a70b81936cdae450d8a01b468d052"
  },
  {
    "url": "python/basic.html",
    "revision": "c2d7f76421203053af8422ad7cc1d0e9"
  },
  {
    "url": "python/django.html",
    "revision": "1e53770997d8a94ec824580a29e85f2a"
  },
  {
    "url": "python/lib.html",
    "revision": "d1fd8988314189d15a7b44e90043c544"
  },
  {
    "url": "python/tools.html",
    "revision": "c36e6abd1d087f51793a7cdfcb179481"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "3132b96d75b4a717b77e0e1ebd4eb760"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "68f30854551a6c6fd0da19844734ac9e"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "f7a0ba9fd9081124128fa96903d96e23"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "7c3c04c286415b503511dcda104c8d12"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "fb21409d9f1d92cf3193705f4febd0de"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "3048fe064f6d372edbfe64bbca1f2e53"
  },
  {
    "url": "tools/system/docker.html",
    "revision": "b93a2672fde6275686d79e9f096dcfa8"
  },
  {
    "url": "tools/system/git.html",
    "revision": "a5341912f5a9455abea89d22f1ef3719"
  },
  {
    "url": "tools/system/index.html",
    "revision": "4f7e8ab1acd3037632e2ad97410f61be"
  },
  {
    "url": "tools/system/linux.html",
    "revision": "e1d57cae9cfa516cd09184b9618fca64"
  },
  {
    "url": "tools/system/ubuntu.html",
    "revision": "a273f971300f141a9b2e67f9d6ca709a"
  },
  {
    "url": "tools/system/vim.html",
    "revision": "09860a763a349d1a92434f17b8ad17d5"
  },
  {
    "url": "tools/system/VS Code.html",
    "revision": "e9d7cb6e8e8ee4a49b642a89d421bdfe"
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
