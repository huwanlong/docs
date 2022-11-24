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
    "revision": "bf9f9829081c3051354770bffd4caf77"
  },
  {
    "url": "about.html",
    "revision": "34be2f9bb0cc3243bc9901ddc5b160b4"
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
    "url": "assets/js/18.b44d32bb.js",
    "revision": "78640b3c3bd106bdb70bbe3fde492ea4"
  },
  {
    "url": "assets/js/19.f8577fec.js",
    "revision": "514194a7eba81221aefb3fc9c9a14e2a"
  },
  {
    "url": "assets/js/2.23b71ba4.js",
    "revision": "3bbfc7bb79ce079d21fd86c69ff61cd4"
  },
  {
    "url": "assets/js/20.4c939ca6.js",
    "revision": "94e67ae15e4020ce852be0b9daa41bad"
  },
  {
    "url": "assets/js/21.66a9b6a8.js",
    "revision": "c1241c9f6121fe752d61bf52a5f13c39"
  },
  {
    "url": "assets/js/22.7c648a86.js",
    "revision": "761f3e96f307ba9c9bf6e1bcc4fce49f"
  },
  {
    "url": "assets/js/23.ae144767.js",
    "revision": "a20b445593b0f1edc9b5a2a7d4ff5272"
  },
  {
    "url": "assets/js/24.4778946e.js",
    "revision": "8109bc9fd36048b4ca8bf7f255ea0b60"
  },
  {
    "url": "assets/js/25.d1f6d340.js",
    "revision": "612468920391394c3955c2df0ffa4d2f"
  },
  {
    "url": "assets/js/26.0ba6c816.js",
    "revision": "d83a89decb8f287c0571b19ae3d7fd3b"
  },
  {
    "url": "assets/js/27.254d7527.js",
    "revision": "7627b27f020a76d3920007d357e653dd"
  },
  {
    "url": "assets/js/28.cbcc85af.js",
    "revision": "e59c30c8db27e1c3676d1dc5b957aafb"
  },
  {
    "url": "assets/js/29.20f695ad.js",
    "revision": "ddcb5199d0430b1de189ab16afc7bdfd"
  },
  {
    "url": "assets/js/3.8e2ee442.js",
    "revision": "bb2c44534f8fd91e5e362bc3ba2e6b26"
  },
  {
    "url": "assets/js/30.4ba412db.js",
    "revision": "b42d7f2df2101339df70785d3ff675d8"
  },
  {
    "url": "assets/js/31.65ce5bb7.js",
    "revision": "653c631fb27ac490ef911fdc9c81962a"
  },
  {
    "url": "assets/js/32.d4049c13.js",
    "revision": "369a74dca93d805f2fb295cf3d11e34b"
  },
  {
    "url": "assets/js/33.031f82b2.js",
    "revision": "97a51506d3d169c7a9e3dc1f9f125fc6"
  },
  {
    "url": "assets/js/34.e5b8692b.js",
    "revision": "6bf8d639425f355b01804e5129e719ea"
  },
  {
    "url": "assets/js/35.7409b89e.js",
    "revision": "3af13170a17a1a3d9aa7a4f29d44a419"
  },
  {
    "url": "assets/js/36.85a9c9bc.js",
    "revision": "43c9027beda4efea5089bd457e2b37c4"
  },
  {
    "url": "assets/js/37.1ac6b3c5.js",
    "revision": "3be76fe826593abd8bd54610520e9c4c"
  },
  {
    "url": "assets/js/38.067e4fd4.js",
    "revision": "57b248e4e05478586d9b56857ca9e6be"
  },
  {
    "url": "assets/js/39.1b44df15.js",
    "revision": "00e59df8aa6cda9019407abc43e59069"
  },
  {
    "url": "assets/js/4.535ce189.js",
    "revision": "69feac0842804ceae87e37f4a943e810"
  },
  {
    "url": "assets/js/40.03f1e7b1.js",
    "revision": "d2abdf4084197b8bfea48ea7a6c8a85c"
  },
  {
    "url": "assets/js/41.2ddad24c.js",
    "revision": "7347c6d42a7b0006ac69e7c6f049e4ef"
  },
  {
    "url": "assets/js/42.580b11f8.js",
    "revision": "1c80316275bcc8f1097de752234d5b85"
  },
  {
    "url": "assets/js/43.01c3ea10.js",
    "revision": "2ce4fb9082aa96e403532c8101ae907c"
  },
  {
    "url": "assets/js/44.aa798d72.js",
    "revision": "e5123d267b0b9e275ee59b4cc87305be"
  },
  {
    "url": "assets/js/45.afdd5e3e.js",
    "revision": "0e5ab72e14ac10f4cc207d9c2b37995c"
  },
  {
    "url": "assets/js/46.4abe0caf.js",
    "revision": "3783234f9da4e9e8ac36ac66e388428f"
  },
  {
    "url": "assets/js/47.2290c8bd.js",
    "revision": "140d7d3ef6bf868263327cd7e21b5825"
  },
  {
    "url": "assets/js/48.8718a73f.js",
    "revision": "3cb11fcd483f63441f4f54fafc4d09fb"
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
    "url": "assets/js/7.cc28d447.js",
    "revision": "0c6b79902f8769d6f8c665babe06528a"
  },
  {
    "url": "assets/js/8.0d6e3d75.js",
    "revision": "302f44cf881fd6a2df048a8489658fc1"
  },
  {
    "url": "assets/js/9.c91191c5.js",
    "revision": "13b967a28b2183daed6b604b0c123fc3"
  },
  {
    "url": "assets/js/app.9170b7ea.js",
    "revision": "819b8473ad01f8fbfc48bf56f9855552"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "b0fd2dd9ff55173917d81de8ab3437c1"
  },
  {
    "url": "frontend/electron.html",
    "revision": "0ec7c598d09fc100a9752731270693c0"
  },
  {
    "url": "frontend/points.html",
    "revision": "69a256ef09ec695d49c96c63996bb31e"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "dae609fa2d9db7bda577a8fc5a287366"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "9b8981aa04295166e35ac864ad88a7b6"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "1c4450814a6686c2d64e61bc64830b4e"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "b61eb93ab3c76e1d30d90beed7eb32f2"
  },
  {
    "url": "guide.html",
    "revision": "1254966095f1370cd8e64a12a8ae600b"
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
    "revision": "55d627bd06c9a2ad64136d8fbcf0e8b9"
  },
  {
    "url": "other/c.html",
    "revision": "1a3bba6c031f0d641227a282a3f6585d"
  },
  {
    "url": "other/cook.html",
    "revision": "cb5f2b91e750f45a072022aed11cfbb7"
  },
  {
    "url": "other/countup.html",
    "revision": "07e598f4703ae29cb75d5740ee7a5e46"
  },
  {
    "url": "other/english.html",
    "revision": "a9b1a52c670313c6d02b909de35ecb9b"
  },
  {
    "url": "other/image.html",
    "revision": "7a8e79444a7027b9e0cc1d32e816c20c"
  },
  {
    "url": "other/index.html",
    "revision": "c5814a8058cd9be82f7c6deca89c1a8a"
  },
  {
    "url": "python/Django/command.html",
    "revision": "0ad61397fba73e6348305fecf89103b6"
  },
  {
    "url": "python/Django/index.html",
    "revision": "71ce7c4de8f34c6556eae9790e189b20"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "b39f7884193f61cfa0d5fa84a9b07707"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "b9fb717201051dbe727c53f0f8d40f48"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "42d33dba17b31ef6d3a9fd848073f3e2"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "dada6bbd5e0de977e3eda53511b0095f"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "2dd4798e18d004cbe1e4ba05fe975618"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "1d1b27bf176a440b4099dc6450f12389"
  },
  {
    "url": "tools/frontend/index.html",
    "revision": "9fc3ab472980d5a8e02911f1c9c62ed9"
  },
  {
    "url": "tools/frontend/Lerna.html",
    "revision": "93372ed794ce881956648ec112a8b4a7"
  },
  {
    "url": "tools/frontend/NPM.html",
    "revision": "c8cbbe7f994f729369827493e18677d1"
  },
  {
    "url": "tools/frontend/nvm.html",
    "revision": "5a919d8f87a057c87fc22284bc2fcac3"
  },
  {
    "url": "tools/frontend/Verdaccio.html",
    "revision": "8fe60c621acb3e01acb25e950f5c8b81"
  },
  {
    "url": "tools/frontend/VS Code.html",
    "revision": "c3238fc0c11307f201302fec0363657d"
  },
  {
    "url": "tools/frontend/Yarn.html",
    "revision": "3c4cf46b93321e4764cdd3a0cc6cd5e8"
  },
  {
    "url": "tools/python/anaconda.html",
    "revision": "169a266a494d0bce3316b3d9f360355b"
  },
  {
    "url": "tools/python/index.html",
    "revision": "3d1a84a14263d6aa87480003e5887b8a"
  },
  {
    "url": "tools/python/pip.html",
    "revision": "b2389f97ae5d5b2f10052bd8472dfc9e"
  },
  {
    "url": "tools/python/pyenv.html",
    "revision": "f8535beeb7b3f30f6c053deca72e5105"
  },
  {
    "url": "tools/system/docker.html",
    "revision": "ea050ea9ac05db94c8072665b8214445"
  },
  {
    "url": "tools/system/git.html",
    "revision": "5acc8bf44bf7496f90baacb04f6e10b6"
  },
  {
    "url": "tools/system/index.html",
    "revision": "8b203260e9a935a79acb41e981f08c2e"
  },
  {
    "url": "tools/system/linux.html",
    "revision": "778904aae84a64fd231d858f3094a6d1"
  },
  {
    "url": "tools/system/ubuntu.html",
    "revision": "41ab0cda40589be9d303463562f462dd"
  },
  {
    "url": "tools/system/vim.html",
    "revision": "ab546725e9876894087f5c6325b8a02b"
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
