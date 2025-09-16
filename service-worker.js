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
    "revision": "271454ba5ee2fd2c0bee39a8bff9d3c5"
  },
  {
    "url": "about.html",
    "revision": "31a49818d8172d3c826eff38f3b49736"
  },
  {
    "url": "ai/ollama.html",
    "revision": "c38fe97f174194b7c76f5aaa9bc59b31"
  },
  {
    "url": "app.png",
    "revision": "9ea40a18fbbd5e1562c5bf9607d0b1eb"
  },
  {
    "url": "assets/css/0.styles.3244b6bc.css",
    "revision": "8619147893d30b77ed1f1c782013c1d4"
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
    "url": "assets/js/1.884f0c81.js",
    "revision": "8a295ae9fe06605f6902e1b34bcf5e86"
  },
  {
    "url": "assets/js/11.9f522531.js",
    "revision": "ee50a1f8dc505bb766cda4fdc8d0be50"
  },
  {
    "url": "assets/js/12.f7ec24e4.js",
    "revision": "22193307f44fb8eb4696b2945f2e2752"
  },
  {
    "url": "assets/js/13.f347bed0.js",
    "revision": "0953c56942239795cd70a16a64f90e53"
  },
  {
    "url": "assets/js/14.5b3e0d94.js",
    "revision": "2855aa7b32a07a7fd90695f944e9d0a2"
  },
  {
    "url": "assets/js/15.8162750b.js",
    "revision": "3d47fbe083c89859505d65357b429579"
  },
  {
    "url": "assets/js/16.fba4b099.js",
    "revision": "9072c4cd18f6d284167da07b906b18f0"
  },
  {
    "url": "assets/js/17.297b13c2.js",
    "revision": "c927513a31d34d2a1ae4f2dae1deefbd"
  },
  {
    "url": "assets/js/18.c5704e74.js",
    "revision": "a9aa3fb25b39aae74d7f369f3339136a"
  },
  {
    "url": "assets/js/19.9821883c.js",
    "revision": "42342d774d592bb45bfd99e3ac3fd725"
  },
  {
    "url": "assets/js/2.ec30f522.js",
    "revision": "7492c93da29e6350c08aad37d02ee3cd"
  },
  {
    "url": "assets/js/20.a18fb072.js",
    "revision": "18addb94ae91cc8c8f0f7e614b16888b"
  },
  {
    "url": "assets/js/21.9652916b.js",
    "revision": "625dc0a022d909a343ec13d87dc92229"
  },
  {
    "url": "assets/js/22.5fa099b5.js",
    "revision": "474b860824bfdace165798e7cd96ccc4"
  },
  {
    "url": "assets/js/23.19b8bad0.js",
    "revision": "668f5fa72049e12968620a3815b947aa"
  },
  {
    "url": "assets/js/24.b3dbefa0.js",
    "revision": "c20a84f182511a4fe82843b918b22fc2"
  },
  {
    "url": "assets/js/25.0e82438f.js",
    "revision": "fe2d3c33fa1e9f4ef891a26ab75babbf"
  },
  {
    "url": "assets/js/26.ba6de903.js",
    "revision": "70cce94f01aa4d4c18abbe9abdc19a5f"
  },
  {
    "url": "assets/js/27.a11437df.js",
    "revision": "d1f9346e9326b825d59bb6f383f8c267"
  },
  {
    "url": "assets/js/28.2fdfd243.js",
    "revision": "b329f3c9966c6688281d75669838578b"
  },
  {
    "url": "assets/js/29.ddeaa57d.js",
    "revision": "4fa59b1254871dd8d1489b96ee479c9f"
  },
  {
    "url": "assets/js/3.42a04905.js",
    "revision": "c2aa1a5560fdcd23301c774a955c16c3"
  },
  {
    "url": "assets/js/30.e12a9ed9.js",
    "revision": "418c0e7568419d885a109cfcb4c40846"
  },
  {
    "url": "assets/js/31.aee80350.js",
    "revision": "6568cd4bbfd4e5bd12515d293c849c3e"
  },
  {
    "url": "assets/js/32.a8eafe03.js",
    "revision": "1796e821ea2c49cb4dda265ca811ed9a"
  },
  {
    "url": "assets/js/33.7f74e581.js",
    "revision": "7081d63d770c730ee58e393fd14c34f8"
  },
  {
    "url": "assets/js/34.84883096.js",
    "revision": "0252661bcd885195079a4e558e452e5d"
  },
  {
    "url": "assets/js/35.b2798889.js",
    "revision": "5203640639fa73d652ab6c3e4137d2f3"
  },
  {
    "url": "assets/js/36.ab744a75.js",
    "revision": "4473bdce51dd8e800f67b9a4432719ed"
  },
  {
    "url": "assets/js/37.ec282544.js",
    "revision": "4a162f28d5ed3b789cc9af05dc713f23"
  },
  {
    "url": "assets/js/38.ed14e099.js",
    "revision": "5523cbccb7e7d3f0a409805823b0fb39"
  },
  {
    "url": "assets/js/39.76edc745.js",
    "revision": "acfcf0b06f02c730c7aa13a7dbdbd262"
  },
  {
    "url": "assets/js/4.6967fa32.js",
    "revision": "9ee3af1e03364ad8fb44ca4563048cca"
  },
  {
    "url": "assets/js/40.eaca521a.js",
    "revision": "7b810b6a525ffa1895328a7d579f3c13"
  },
  {
    "url": "assets/js/41.9a317b26.js",
    "revision": "73462f369fbcbc0ee335c82c78f7c568"
  },
  {
    "url": "assets/js/42.28a8c2e9.js",
    "revision": "424c907effc5fe88590511f672749e24"
  },
  {
    "url": "assets/js/43.1b56829e.js",
    "revision": "951101bebf2947de6999d23b13e54596"
  },
  {
    "url": "assets/js/44.678803d9.js",
    "revision": "dd247be137df83c9f1a9363884a52805"
  },
  {
    "url": "assets/js/45.93287a3a.js",
    "revision": "8e50a15c48f70b9ef59ac83be48fab57"
  },
  {
    "url": "assets/js/46.09d32dd6.js",
    "revision": "14693a6d02cb245bbcdd7a34ddfe74e8"
  },
  {
    "url": "assets/js/47.e2716d03.js",
    "revision": "a531dc72c73e706c346e0080781255f0"
  },
  {
    "url": "assets/js/48.9f1e142e.js",
    "revision": "6fd930c63c803f9089614599c343b951"
  },
  {
    "url": "assets/js/49.3dbf0fc2.js",
    "revision": "7b6714628222a3441009251d821d4910"
  },
  {
    "url": "assets/js/5.1a21dc25.js",
    "revision": "02e6b0a56b18f4254be66442690eeaa6"
  },
  {
    "url": "assets/js/50.457f2e13.js",
    "revision": "caa5bd9a3157db43e0304291d0eba0f2"
  },
  {
    "url": "assets/js/51.53edcbaf.js",
    "revision": "aca85c6a2df37f5059725e1a6a8606f6"
  },
  {
    "url": "assets/js/52.8a8d2cb7.js",
    "revision": "34fb088e6d834a6b7b7ecae6f802f7a6"
  },
  {
    "url": "assets/js/53.7c5f9cf1.js",
    "revision": "f693a33d85aefbf68317f25a54bfcdba"
  },
  {
    "url": "assets/js/54.13dcfac6.js",
    "revision": "0ce396e98fc999805ff90cd3e2aeab63"
  },
  {
    "url": "assets/js/55.44afedaf.js",
    "revision": "1ab7d2801e349a5d1598c2b80ce7363e"
  },
  {
    "url": "assets/js/56.bc1e0ee2.js",
    "revision": "d640711ca641324000aa279d0e1e93b9"
  },
  {
    "url": "assets/js/57.f65507ba.js",
    "revision": "8347f5a350b9fb0a8ccd3b2f56f5ac5c"
  },
  {
    "url": "assets/js/58.922bec59.js",
    "revision": "3b863245bbabf41da79156620cd6b13f"
  },
  {
    "url": "assets/js/59.880eddbb.js",
    "revision": "10b5aea1f0b9392ead3684d06e733b05"
  },
  {
    "url": "assets/js/6.f7798969.js",
    "revision": "56cefab76c3d4d297f6bf1aa61b2a55a"
  },
  {
    "url": "assets/js/60.50514aec.js",
    "revision": "5090ea45bae7febaf5b99f0ce34d297d"
  },
  {
    "url": "assets/js/61.44cf4e69.js",
    "revision": "2fd05e9cc2946ec2949081ff8fe0b08f"
  },
  {
    "url": "assets/js/62.b2a55195.js",
    "revision": "915a54c93f35f2fc72b551bcd508a406"
  },
  {
    "url": "assets/js/63.deacc3ea.js",
    "revision": "870a286e040f08e1a04ee1ab0044ffa7"
  },
  {
    "url": "assets/js/64.9266494b.js",
    "revision": "d87fa2ed98c6d5edb525ad987d7934e3"
  },
  {
    "url": "assets/js/65.cf68aa60.js",
    "revision": "3c8fad6a68325048e26bcb29f302c8e9"
  },
  {
    "url": "assets/js/66.2c7a5a22.js",
    "revision": "69882630c53073e84a8ef7764e153467"
  },
  {
    "url": "assets/js/67.f7b36b6f.js",
    "revision": "45a0ba28c5d529a6ebb76597743e87b3"
  },
  {
    "url": "assets/js/68.116fa4c9.js",
    "revision": "cd3c09ec814326f545bd732559da61ed"
  },
  {
    "url": "assets/js/69.b7de63e3.js",
    "revision": "f326ef7b826a195219eeef523e385342"
  },
  {
    "url": "assets/js/7.986c406d.js",
    "revision": "1982fdc0fffdc90208de7a86b3c360d5"
  },
  {
    "url": "assets/js/70.462906ca.js",
    "revision": "bd5931f37bcdbbee2d892b4469abdf58"
  },
  {
    "url": "assets/js/71.58dad522.js",
    "revision": "0078e2945af4e60fb0d7a88cbde39ddd"
  },
  {
    "url": "assets/js/72.baf146c8.js",
    "revision": "ea3ed559139d83c19ba6426ed4fcd90e"
  },
  {
    "url": "assets/js/73.d35725ef.js",
    "revision": "018fc9ec84a24f76a0760e6db330b0d9"
  },
  {
    "url": "assets/js/74.108b8cab.js",
    "revision": "d8a1573b4a52754d3906614c0abb5718"
  },
  {
    "url": "assets/js/75.ced283ae.js",
    "revision": "c9196e424527aa75c443f3e58984561c"
  },
  {
    "url": "assets/js/76.8b88100b.js",
    "revision": "3915364ff779b9064de25b1c8430dd33"
  },
  {
    "url": "assets/js/77.13146522.js",
    "revision": "561cf486188e7117db529ac246dde3d3"
  },
  {
    "url": "assets/js/78.d8b96da3.js",
    "revision": "41c0f93fa5008286f11dc9a115db5c88"
  },
  {
    "url": "assets/js/79.164f57aa.js",
    "revision": "cd3388e068818289323650f4a0a0ab77"
  },
  {
    "url": "assets/js/8.fcf2fa6b.js",
    "revision": "968521b45de0cccc787357391fae5474"
  },
  {
    "url": "assets/js/80.52f0042f.js",
    "revision": "99423ddb0d1209296fcf7c354897d2e0"
  },
  {
    "url": "assets/js/81.f2e92e3a.js",
    "revision": "b825a4b9db465f18984581a1f26363dd"
  },
  {
    "url": "assets/js/82.19fdf108.js",
    "revision": "a473e6fee933ec60416230c8b12d3be5"
  },
  {
    "url": "assets/js/83.b65c981e.js",
    "revision": "db11486b5b5e1a01ea9346c1db268dd2"
  },
  {
    "url": "assets/js/app.dc113988.js",
    "revision": "a8c5600ce898c8d4bfd820d3877eb835"
  },
  {
    "url": "assets/js/vendors~docsearch.15664e14.js",
    "revision": "66d03341617820cdddc5e21f18416a4c"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "3ff1279e0219a27300bc5f5487c16e27"
  },
  {
    "url": "frontend/Android.html",
    "revision": "82aedd550a0be16d4f23b851ecc2c4a9"
  },
  {
    "url": "frontend/cli.html",
    "revision": "a3d12858012f42907e670e7d3efd23ad"
  },
  {
    "url": "frontend/electron.html",
    "revision": "1c1727e4787e92bd9f9087f2a31afe51"
  },
  {
    "url": "frontend/express.html",
    "revision": "0c0531f4fdc5981df314a0f582009400"
  },
  {
    "url": "frontend/Flutter.html",
    "revision": "dff8a62bb5c706c2ae05167024a2fb40"
  },
  {
    "url": "frontend/HarmonyOs.html",
    "revision": "6ed2997c2e3ac9faee8c937131a97b2d"
  },
  {
    "url": "frontend/iOS.html",
    "revision": "585fea2507fa67efee932a99c02327ad"
  },
  {
    "url": "frontend/MicroApp.html",
    "revision": "1f207371e542370aee6c380582e46a56"
  },
  {
    "url": "frontend/MiniApp.html",
    "revision": "8c947c66d5c0e4c1e1520c2c07857e52"
  },
  {
    "url": "frontend/points.html",
    "revision": "52c53934167864a524eeff06cc92cdf8"
  },
  {
    "url": "frontend/React.html",
    "revision": "184c4f4f20e159c368529b1f9c80ffc1"
  },
  {
    "url": "frontend/ReactNative.html",
    "revision": "f5ea8e8fbaf03aeeaef05b79ab315bfe"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "d838fea8944d2c719d6d9eecfbf533b8"
  },
  {
    "url": "frontend/tools/index.html",
    "revision": "02034b2b1a9554ee7d316e5c88cc6d7d"
  },
  {
    "url": "frontend/tools/Lerna.html",
    "revision": "3042af181b7353aaaef78240ad4c09a8"
  },
  {
    "url": "frontend/tools/NPM.html",
    "revision": "a79de25805b3995a5f3a51ec71a40306"
  },
  {
    "url": "frontend/tools/nvm.html",
    "revision": "1d51f4049a30b09d5d627b677b79ca9f"
  },
  {
    "url": "frontend/tools/pnpm.html",
    "revision": "5c6a3885b1fbde98d8d6fe68bd47cd12"
  },
  {
    "url": "frontend/tools/Verdaccio.html",
    "revision": "60ddcc716ae81156a1ec3fab4d6cd86c"
  },
  {
    "url": "frontend/tools/Yarn.html",
    "revision": "2e0ab1a88a12f26e9224b4baae07fd10"
  },
  {
    "url": "frontend/vue3.html",
    "revision": "91073f2a20544b311f85b23e54f8f8a4"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "5738393be9ee66f1aaba7031e093b89d"
  },
  {
    "url": "guide.html",
    "revision": "620d2ca09d7388b75ff9918eff9addfb"
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
    "revision": "dd97bf2061780cd78d9be947197985b9"
  },
  {
    "url": "other/example/countup.html",
    "revision": "1e98ade1dbdc5d65f4446cca64fdc250"
  },
  {
    "url": "other/example/image.html",
    "revision": "2f51be431db647919f5afb196fdc5e03"
  },
  {
    "url": "other/index.html",
    "revision": "28c95574e04cd67085408a8a921ac234"
  },
  {
    "url": "other/Java/index.html",
    "revision": "a34bedf5ec557d7f8b780c07fcbc3af7"
  },
  {
    "url": "other/PHP/index.html",
    "revision": "4a26e23759e927d4323872434029d245"
  },
  {
    "url": "other/产品/index.html",
    "revision": "a9c3c169b603bed2c9e3d98df566ecf9"
  },
  {
    "url": "other/算法/index.html",
    "revision": "9ad8e12d803ae38c388209a0e295daba"
  },
  {
    "url": "other/设计/index.html",
    "revision": "3354c0d49c561ad5745d9f309d3fcc93"
  },
  {
    "url": "python/base.html",
    "revision": "aca2af5dd07ee39a6bef06c6b1b37de0"
  },
  {
    "url": "python/django.html",
    "revision": "50df92cc0257bcdb2cc9be7ec3f6c73a"
  },
  {
    "url": "python/packages.html",
    "revision": "9ebfab4a8af57fcfbe02de3310483e3c"
  },
  {
    "url": "python/tools.html",
    "revision": "a9dca40547d7cb6b9cb2007c7d455082"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "089dee2d92cc9ced71bebfb8e475614f"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "dc818ec2a0edc674837857540f93f953"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "e60234b0753bf586eb1aa5f6752fc405"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "4f2a31a0c159d30bd6b1b2f3883eb34b"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "8432d8609810f6151bb8feb66a3bd99e"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "6eec30f962d5cc3ba8c8de09da7e617a"
  },
  {
    "url": "python/深度学习/index.html",
    "revision": "55b641cf2572e04f4a0b777bac7d8b5f"
  },
  {
    "url": "tools/centos.html",
    "revision": "bb07937cc0ed0fdc3f344c8fdb83e706"
  },
  {
    "url": "tools/docker.html",
    "revision": "1086fe0a86a3c0cc8eb9f2c1848c0d20"
  },
  {
    "url": "tools/git.html",
    "revision": "df6609f0b9fce9c3597b8a148b386f53"
  },
  {
    "url": "tools/idea.html",
    "revision": "0d357a0be204f0a4f348854a06b389aa"
  },
  {
    "url": "tools/index.html",
    "revision": "3f7106bfb63663136cc878940d9bee54"
  },
  {
    "url": "tools/linux.html",
    "revision": "0cae766f50d1cd92dc0f231975ead129"
  },
  {
    "url": "tools/mac.html",
    "revision": "775ba26778321962fb52daaf64c30eba"
  },
  {
    "url": "tools/ubuntu.html",
    "revision": "a52df5b5f5ac34c559aca7da0736c15e"
  },
  {
    "url": "tools/vim.html",
    "revision": "5e47eb21db08c528e247edb39ad871fb"
  },
  {
    "url": "tools/VSCode.html",
    "revision": "16a521ecd8266ddc0a603583746a919e"
  },
  {
    "url": "tools/wsl.html",
    "revision": "25147fdcceae4a4cf814ad1e3f02bc77"
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
