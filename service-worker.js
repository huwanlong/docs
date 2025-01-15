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
    "revision": "ca83292e61c738e1f0c262275c8b5407"
  },
  {
    "url": "about.html",
    "revision": "43ac7ec0ce66b5a5689260889b560112"
  },
  {
    "url": "app.png",
    "revision": "9ea40a18fbbd5e1562c5bf9607d0b1eb"
  },
  {
    "url": "assets/css/0.styles.11e05494.css",
    "revision": "429d4dc92034cdaa205b179139d72729"
  },
  {
    "url": "assets/img/12972541-bf7e95c93cd4e36c.74a24ac0.png",
    "revision": "74a24ac0e02fc1e31195277b8724156d"
  },
  {
    "url": "assets/img/12972541-bf7e95c93cd4e36c.png",
    "revision": "74a24ac0e02fc1e31195277b8724156d"
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
    "url": "assets/js/1.f360ed32.js",
    "revision": "3b72551e8b41b41604d9c701c37dfbea"
  },
  {
    "url": "assets/js/11.7be77c1e.js",
    "revision": "48fec71b3d009f6b39fd9bddc20f2f96"
  },
  {
    "url": "assets/js/12.689b6a36.js",
    "revision": "1ee423bb520a2f99413717486f6bcb3d"
  },
  {
    "url": "assets/js/13.19750853.js",
    "revision": "a9fb1ead75e807dd05c35c11b25b41b8"
  },
  {
    "url": "assets/js/14.252bf9aa.js",
    "revision": "78d136f5f69a9749f620679ae477aac5"
  },
  {
    "url": "assets/js/15.c24cb561.js",
    "revision": "d817825953b47aa56cce4a446f29ea46"
  },
  {
    "url": "assets/js/16.4d2d0d33.js",
    "revision": "2e1c963553519eaa119d89d7ebbf4646"
  },
  {
    "url": "assets/js/17.5068d105.js",
    "revision": "8218ddfcc3771e73b07aeae4e934ab58"
  },
  {
    "url": "assets/js/18.bf575433.js",
    "revision": "7a504bd48e56cb10214e7d27123dee52"
  },
  {
    "url": "assets/js/19.8ff886ff.js",
    "revision": "edf25a10466300cd062c3525fc686072"
  },
  {
    "url": "assets/js/2.71c5a790.js",
    "revision": "dc6009cf89e288a8248ab5096a0c172e"
  },
  {
    "url": "assets/js/20.598b74e8.js",
    "revision": "707de49c87d277cd2a445d701ba90b79"
  },
  {
    "url": "assets/js/21.1d1ceb49.js",
    "revision": "c6c2c979b19a697271301f6a20c831a4"
  },
  {
    "url": "assets/js/22.fa775f88.js",
    "revision": "07b855273b0d685fb93168c7deda6a3a"
  },
  {
    "url": "assets/js/23.885397af.js",
    "revision": "d81768f9d43c31e351ed0fa1e1c040c9"
  },
  {
    "url": "assets/js/24.550ea0e3.js",
    "revision": "9f1f051b76f6b1736eef9744b92f3a12"
  },
  {
    "url": "assets/js/25.ed2649ed.js",
    "revision": "990e0632a76a72c4cbc42aa70b2fb158"
  },
  {
    "url": "assets/js/26.2d451f49.js",
    "revision": "89b21282a0c918b3cac0f433ee63acbf"
  },
  {
    "url": "assets/js/27.91d0941f.js",
    "revision": "8010dc576b113ecaf9dce57ba13309ea"
  },
  {
    "url": "assets/js/28.b584595e.js",
    "revision": "5819d5f08dfa134680e1d1eb4d513e2e"
  },
  {
    "url": "assets/js/29.c63f1e1f.js",
    "revision": "a6e4a3b9a2547320331c6a97f25ceb44"
  },
  {
    "url": "assets/js/3.83555617.js",
    "revision": "266165a4f8b164f5752b9c52b2397604"
  },
  {
    "url": "assets/js/30.09e486fe.js",
    "revision": "178937277ffb45a0ef10cb5afa595036"
  },
  {
    "url": "assets/js/31.5acdd9bc.js",
    "revision": "e526fcbf3f456563d8b1f1f2a4faa344"
  },
  {
    "url": "assets/js/32.1d2a99f3.js",
    "revision": "d979b96d9c534186bb1a5a43f6e7ac6f"
  },
  {
    "url": "assets/js/33.563a6b2e.js",
    "revision": "984883853a7574ba49f66c6d926bd63b"
  },
  {
    "url": "assets/js/34.29c54ee1.js",
    "revision": "c355fc65980808982d2ccc604613b87a"
  },
  {
    "url": "assets/js/35.90c0320a.js",
    "revision": "32300c6c6388fe16b8e4987186fdf2d7"
  },
  {
    "url": "assets/js/36.37124275.js",
    "revision": "de10a78cb245d735606895f82133b787"
  },
  {
    "url": "assets/js/37.106acb94.js",
    "revision": "52e810dc51fd229bfb971935694d8281"
  },
  {
    "url": "assets/js/38.c730d85c.js",
    "revision": "ab609708197bf4753c328b295bea6924"
  },
  {
    "url": "assets/js/39.b7a1027a.js",
    "revision": "2d211a7a7f8813ed9b8ffc7b4b2b6dcf"
  },
  {
    "url": "assets/js/4.474e6a8d.js",
    "revision": "33162bd8a791ab306e1473bd7a65f22c"
  },
  {
    "url": "assets/js/40.1ef49930.js",
    "revision": "03c28e12de5ecf6dfaa5e462e7e0e018"
  },
  {
    "url": "assets/js/41.e2064a4a.js",
    "revision": "644605b8335c4364ff460ccb24218a8c"
  },
  {
    "url": "assets/js/42.f60bb73a.js",
    "revision": "1ada17027417d609d7a02f0afc9c5227"
  },
  {
    "url": "assets/js/43.08bf0f58.js",
    "revision": "54331022563e052a992d719a63391d73"
  },
  {
    "url": "assets/js/44.29cc365a.js",
    "revision": "f8d5fa329906e95bece283f7eccdd7b2"
  },
  {
    "url": "assets/js/45.3a1acb21.js",
    "revision": "bbd4a1b8c79f1fbd369d6331c652d8d6"
  },
  {
    "url": "assets/js/46.d0ea58dc.js",
    "revision": "3efb89200c3c60ad14e62c1120cffdb5"
  },
  {
    "url": "assets/js/47.f28733c4.js",
    "revision": "9f2ac7ba2075999d07da64bcecaeafbe"
  },
  {
    "url": "assets/js/48.0592d321.js",
    "revision": "caf06ac4bcbf74879fa0fbc042272f43"
  },
  {
    "url": "assets/js/49.a53de937.js",
    "revision": "2caf7fab639258dc5ac12f2aa67be88c"
  },
  {
    "url": "assets/js/5.39ccdf11.js",
    "revision": "6d478f6f5757a2e4b82300117ac96abd"
  },
  {
    "url": "assets/js/50.3e1f7057.js",
    "revision": "8e85f7401d32f2ec8c6349d60bfad8e6"
  },
  {
    "url": "assets/js/51.ce06e7bb.js",
    "revision": "9cc2d55762135bbef7f26ac43bf04fc8"
  },
  {
    "url": "assets/js/52.4a020c86.js",
    "revision": "1ce291f719f35bd3025714beec381ed3"
  },
  {
    "url": "assets/js/53.71af90dd.js",
    "revision": "9356d691cf0ce7b902931b850a78fe37"
  },
  {
    "url": "assets/js/54.1825ade7.js",
    "revision": "7b0e33dbe0ad598ea7c3b8cc95c75726"
  },
  {
    "url": "assets/js/55.0eda5bc0.js",
    "revision": "2ef72af5afaf2729f13ca4b6480fba6c"
  },
  {
    "url": "assets/js/56.27e8426b.js",
    "revision": "53f26859941f41af32c8d7dfcaee2090"
  },
  {
    "url": "assets/js/57.33ff9c49.js",
    "revision": "fb6c3cc75875d094fb589d8a830dde20"
  },
  {
    "url": "assets/js/58.b77fb3ae.js",
    "revision": "cd657e611ce7b9c04e81188db501ee89"
  },
  {
    "url": "assets/js/59.ace699c1.js",
    "revision": "8c11c1a180230442438fceee8b70f5b7"
  },
  {
    "url": "assets/js/6.fea202be.js",
    "revision": "e0b27c4e4c86141ca3c668c449a2a271"
  },
  {
    "url": "assets/js/60.13341b6d.js",
    "revision": "9678a60ce30455c407452529cbbc7a88"
  },
  {
    "url": "assets/js/61.5302dbbd.js",
    "revision": "3978c3924442315bba4478c01174c6ce"
  },
  {
    "url": "assets/js/62.d7c90190.js",
    "revision": "610fd3a4632998d2b2dacafed1b31672"
  },
  {
    "url": "assets/js/63.441a7d7f.js",
    "revision": "5574deb2f375d1dfbb8b000ce1cfbbfb"
  },
  {
    "url": "assets/js/64.47f8e888.js",
    "revision": "9b4c0ea6b221d69de99fb44e5d2edc9e"
  },
  {
    "url": "assets/js/65.71d41a89.js",
    "revision": "9eee5fc121ec078c860a1517adaaf9c1"
  },
  {
    "url": "assets/js/66.7100673e.js",
    "revision": "0a01beab4c8e489a25958e49f062bae3"
  },
  {
    "url": "assets/js/67.26e271b6.js",
    "revision": "527f65c02127be288c8bf58cf98b3b1a"
  },
  {
    "url": "assets/js/68.b64148af.js",
    "revision": "1efc0089dea664f40c8cd6e3d7290345"
  },
  {
    "url": "assets/js/69.9f148882.js",
    "revision": "9bc10922200c0041f52a7d3d01cffb0a"
  },
  {
    "url": "assets/js/7.3d2f9434.js",
    "revision": "1a52e3e04e49c24b4cb10552ff290379"
  },
  {
    "url": "assets/js/70.5d6333e4.js",
    "revision": "b15c4518c99ce9f8ea0a70e3911c6718"
  },
  {
    "url": "assets/js/71.33f84cc7.js",
    "revision": "8fa58a2f0f9db5faf8951679f5908052"
  },
  {
    "url": "assets/js/72.b6fe991e.js",
    "revision": "abfcb0fb38b57b5deace040f3a8b2816"
  },
  {
    "url": "assets/js/73.4c046f80.js",
    "revision": "e8dd42817076907eea90452cac717d2f"
  },
  {
    "url": "assets/js/74.c384c8fb.js",
    "revision": "33b556062b616cde8a99f9f61180c92f"
  },
  {
    "url": "assets/js/75.24b22458.js",
    "revision": "ee80650524e3c280c51d2b3fed2abcba"
  },
  {
    "url": "assets/js/76.7f53b429.js",
    "revision": "c261a0e21d3d5055f9cd890fa94f1d4e"
  },
  {
    "url": "assets/js/77.c2aae549.js",
    "revision": "3b42f5767c31b7b850737b825680c4c8"
  },
  {
    "url": "assets/js/78.90dcf8fb.js",
    "revision": "57962ab55082ea1d3aa0b77877dcb2bd"
  },
  {
    "url": "assets/js/79.e8994609.js",
    "revision": "ad232ee00a8f5b62e1577848362a9c52"
  },
  {
    "url": "assets/js/8.25771709.js",
    "revision": "1a3cd65ea90c8d0d1ee2fc2dc0db0056"
  },
  {
    "url": "assets/js/app.d62406be.js",
    "revision": "31859c712e7bce7dbae61d53e9e8de76"
  },
  {
    "url": "assets/js/vendors~docsearch.8bd86921.js",
    "revision": "acad32c55720808108feec68182e98f9"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "25356aa37b78d328ad775bc219e1603a"
  },
  {
    "url": "frontend/Android.html",
    "revision": "afbd43f9b6ac02af299b8b2767854c1b"
  },
  {
    "url": "frontend/cli.html",
    "revision": "4ddbc9969a8dc430b3a395d40754ec8f"
  },
  {
    "url": "frontend/electron.html",
    "revision": "e1d674c2a7453786d51f3ef356a65324"
  },
  {
    "url": "frontend/Flutter.html",
    "revision": "d128de3df145cf41a4c71df775636cde"
  },
  {
    "url": "frontend/HarmonyOs.html",
    "revision": "92ee84bc902fff87c267798117c7c37a"
  },
  {
    "url": "frontend/iOS.html",
    "revision": "31bed5b8cb262a7ff7394faf9143537e"
  },
  {
    "url": "frontend/MicroApp.html",
    "revision": "4958d184678ae9d5dfaa156ccc1f346b"
  },
  {
    "url": "frontend/MiniApp.html",
    "revision": "c4b05f87c891d13c21b584342160d4f4"
  },
  {
    "url": "frontend/points.html",
    "revision": "5f8e0bdf9e887353c7b5d82f2ce46264"
  },
  {
    "url": "frontend/React.html",
    "revision": "2db37bce17cf596ad116acc7a985e8f0"
  },
  {
    "url": "frontend/ReactNative.html",
    "revision": "779eb554317160f5c8487b76ba6d2d09"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "733cd8b8e28f2ef87ddef4946bf03196"
  },
  {
    "url": "frontend/tools/index.html",
    "revision": "6e7f495bdaf1634cf0e51d6fe5278959"
  },
  {
    "url": "frontend/tools/Lerna.html",
    "revision": "213c8a84bfa68f9916388ddc47e127ef"
  },
  {
    "url": "frontend/tools/NPM.html",
    "revision": "445290641cb8c774d7c894e58ad9714c"
  },
  {
    "url": "frontend/tools/nvm.html",
    "revision": "b6539c3c4fa7796924b3646ceb8e6eb4"
  },
  {
    "url": "frontend/tools/pnpm.html",
    "revision": "c161266ce70678ed3a14fbb542e53c76"
  },
  {
    "url": "frontend/tools/Verdaccio.html",
    "revision": "1fc3a5143ea5f1575cdac372b88a31db"
  },
  {
    "url": "frontend/tools/Yarn.html",
    "revision": "81444f5a331eb050895514e93965079d"
  },
  {
    "url": "frontend/vue3.html",
    "revision": "426088cf12025566b7bab87bb74fb350"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "608a0976e69d049f0db7feaa758cf18a"
  },
  {
    "url": "guide.html",
    "revision": "b8bef0d449c10e127faee936b1982790"
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
    "revision": "804246960f11b4ff1617263137606988"
  },
  {
    "url": "other/example/countup.html",
    "revision": "a6a4aae0e4435e6cdec741190e992d90"
  },
  {
    "url": "other/example/image.html",
    "revision": "d1d8efdee5d90ee7dc0b6a4fac665a15"
  },
  {
    "url": "other/index.html",
    "revision": "0ff97b2e6323462a018bcbae997ef9dc"
  },
  {
    "url": "other/Java/index.html",
    "revision": "fb82067f9193a3c292ed1856b450e9b5"
  },
  {
    "url": "other/PHP/index.html",
    "revision": "5f1185aa825a4312b1d5152fdbfe510c"
  },
  {
    "url": "other/产品/index.html",
    "revision": "b18b37f5420561b3997ccb628709562f"
  },
  {
    "url": "other/算法/index.html",
    "revision": "de0dfdea924643b38598615168bfefca"
  },
  {
    "url": "other/设计/index.html",
    "revision": "675d89d91df483c5c0ca68dcaf301b20"
  },
  {
    "url": "python/basic.html",
    "revision": "f4438b5d045ee12a0441eafbb065fc9d"
  },
  {
    "url": "python/django.html",
    "revision": "f5bd656d790dd8060ff49d9965551418"
  },
  {
    "url": "python/tools.html",
    "revision": "de0cd9db59a6ca40b2eac7664548ce26"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "f0e1a25b929d5e3efb8f55b38456da87"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "5035c425a9fe80f116f41e3e24497a3c"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "b00a53eb9f53d37ac2abb820feb21cb6"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "8013dee09a5ef8c7e22b98a4db82b439"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "d4affd1984257cbc3f988bdde472ecbe"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "ed755fe37b89a3ad5e4f3d8c6d9fd2e0"
  },
  {
    "url": "python/深度学习/index.html",
    "revision": "6ad8b9b8934677f5d7269fd87235728a"
  },
  {
    "url": "tools/centos.html",
    "revision": "90c45276db916102594288a9bff14e5d"
  },
  {
    "url": "tools/docker.html",
    "revision": "cf0ad53a9ee4620698704611300ad843"
  },
  {
    "url": "tools/git.html",
    "revision": "aaa81ea8d1b3aa07ba1f64b5e58e0058"
  },
  {
    "url": "tools/idea.html",
    "revision": "24a49a80fad1542006629dfd8c4ffe3c"
  },
  {
    "url": "tools/index.html",
    "revision": "59d0dba2ea982348f5ba5644ee724aef"
  },
  {
    "url": "tools/linux.html",
    "revision": "ba4239a119a45ce0a714b2b8eac2a7cc"
  },
  {
    "url": "tools/mac.html",
    "revision": "c3c561784ecc54ec8b0991ef441ac43d"
  },
  {
    "url": "tools/ubuntu.html",
    "revision": "277b80561b2a1ffce67ee9e7345cde56"
  },
  {
    "url": "tools/vim.html",
    "revision": "a3834415976583140e4ed58a449c53e9"
  },
  {
    "url": "tools/VSCode.html",
    "revision": "4e6c6439a5d281d4cbcaea834c803d4c"
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
