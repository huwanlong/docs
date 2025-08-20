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
    "revision": "f382e7096584dffe865d806a28382ae0"
  },
  {
    "url": "about.html",
    "revision": "923432b2080a4d9db798c354873319e2"
  },
  {
    "url": "ai/ollama.html",
    "revision": "73549b2c65a069bc6f7039d68eb12e3a"
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
    "url": "assets/js/1.84f82c79.js",
    "revision": "8a295ae9fe06605f6902e1b34bcf5e86"
  },
  {
    "url": "assets/js/11.81a3a7d4.js",
    "revision": "ee50a1f8dc505bb766cda4fdc8d0be50"
  },
  {
    "url": "assets/js/12.5f6a63f0.js",
    "revision": "22193307f44fb8eb4696b2945f2e2752"
  },
  {
    "url": "assets/js/13.8f602365.js",
    "revision": "0953c56942239795cd70a16a64f90e53"
  },
  {
    "url": "assets/js/14.f0188899.js",
    "revision": "2855aa7b32a07a7fd90695f944e9d0a2"
  },
  {
    "url": "assets/js/15.1b0f9d37.js",
    "revision": "3d47fbe083c89859505d65357b429579"
  },
  {
    "url": "assets/js/16.f2616d8f.js",
    "revision": "9072c4cd18f6d284167da07b906b18f0"
  },
  {
    "url": "assets/js/17.e9e6bcff.js",
    "revision": "c927513a31d34d2a1ae4f2dae1deefbd"
  },
  {
    "url": "assets/js/18.f5316e12.js",
    "revision": "a9aa3fb25b39aae74d7f369f3339136a"
  },
  {
    "url": "assets/js/19.b64a7403.js",
    "revision": "42342d774d592bb45bfd99e3ac3fd725"
  },
  {
    "url": "assets/js/2.e03e7da5.js",
    "revision": "7492c93da29e6350c08aad37d02ee3cd"
  },
  {
    "url": "assets/js/20.f46ba7de.js",
    "revision": "18addb94ae91cc8c8f0f7e614b16888b"
  },
  {
    "url": "assets/js/21.10bc53a0.js",
    "revision": "625dc0a022d909a343ec13d87dc92229"
  },
  {
    "url": "assets/js/22.223cc498.js",
    "revision": "474b860824bfdace165798e7cd96ccc4"
  },
  {
    "url": "assets/js/23.8ca36167.js",
    "revision": "9d185defac42f53a911d749f400fbda2"
  },
  {
    "url": "assets/js/24.67868ad6.js",
    "revision": "c20a84f182511a4fe82843b918b22fc2"
  },
  {
    "url": "assets/js/25.4338c9e6.js",
    "revision": "fe2d3c33fa1e9f4ef891a26ab75babbf"
  },
  {
    "url": "assets/js/26.e392500e.js",
    "revision": "70cce94f01aa4d4c18abbe9abdc19a5f"
  },
  {
    "url": "assets/js/27.462d1d15.js",
    "revision": "ec9b62f4a1e0c49a99328595d4b66e97"
  },
  {
    "url": "assets/js/28.35b540f6.js",
    "revision": "7f23ae956ae01429c1efbd1bfcdaa543"
  },
  {
    "url": "assets/js/29.8d8ab66b.js",
    "revision": "164e92c024c704363e81491827a24910"
  },
  {
    "url": "assets/js/3.02bb00c6.js",
    "revision": "c2aa1a5560fdcd23301c774a955c16c3"
  },
  {
    "url": "assets/js/30.6386e507.js",
    "revision": "418c0e7568419d885a109cfcb4c40846"
  },
  {
    "url": "assets/js/31.f33a0a6b.js",
    "revision": "6568cd4bbfd4e5bd12515d293c849c3e"
  },
  {
    "url": "assets/js/32.d6fabc9c.js",
    "revision": "1796e821ea2c49cb4dda265ca811ed9a"
  },
  {
    "url": "assets/js/33.a979c0ed.js",
    "revision": "7081d63d770c730ee58e393fd14c34f8"
  },
  {
    "url": "assets/js/34.bd740f5f.js",
    "revision": "88d7f4b8085be61ce47a1528becb88bb"
  },
  {
    "url": "assets/js/35.976ec23f.js",
    "revision": "07542cc04186e8fbc7ced98c11beed78"
  },
  {
    "url": "assets/js/36.2daa14a6.js",
    "revision": "3e564ce510df742f499ed8af1a3b42e2"
  },
  {
    "url": "assets/js/37.383dffb9.js",
    "revision": "7a34d0cfab56aca5aac9988986976562"
  },
  {
    "url": "assets/js/38.43b21d87.js",
    "revision": "5523cbccb7e7d3f0a409805823b0fb39"
  },
  {
    "url": "assets/js/39.9b7fcd6a.js",
    "revision": "acfcf0b06f02c730c7aa13a7dbdbd262"
  },
  {
    "url": "assets/js/4.2c96444b.js",
    "revision": "9ee3af1e03364ad8fb44ca4563048cca"
  },
  {
    "url": "assets/js/40.e3a99a88.js",
    "revision": "7b810b6a525ffa1895328a7d579f3c13"
  },
  {
    "url": "assets/js/41.889b2b2d.js",
    "revision": "73462f369fbcbc0ee335c82c78f7c568"
  },
  {
    "url": "assets/js/42.fc163c9e.js",
    "revision": "424c907effc5fe88590511f672749e24"
  },
  {
    "url": "assets/js/43.d2bdafc9.js",
    "revision": "6339956a9939b4e2ea8d582f204e9d48"
  },
  {
    "url": "assets/js/44.25ef43cf.js",
    "revision": "08311e5d278f66c1751d437b13b3f183"
  },
  {
    "url": "assets/js/45.59255d3a.js",
    "revision": "aa89e94053c1594d0fe5866305e4c12a"
  },
  {
    "url": "assets/js/46.9ef3450d.js",
    "revision": "95275ab718b33b12b06a4dcaa8597490"
  },
  {
    "url": "assets/js/47.23e84a2f.js",
    "revision": "a531dc72c73e706c346e0080781255f0"
  },
  {
    "url": "assets/js/48.ee27acf9.js",
    "revision": "6fd930c63c803f9089614599c343b951"
  },
  {
    "url": "assets/js/49.2fa4bef1.js",
    "revision": "7b6714628222a3441009251d821d4910"
  },
  {
    "url": "assets/js/5.ff1c866d.js",
    "revision": "02e6b0a56b18f4254be66442690eeaa6"
  },
  {
    "url": "assets/js/50.71c7c785.js",
    "revision": "caa5bd9a3157db43e0304291d0eba0f2"
  },
  {
    "url": "assets/js/51.5c2359f6.js",
    "revision": "aca85c6a2df37f5059725e1a6a8606f6"
  },
  {
    "url": "assets/js/52.50396884.js",
    "revision": "34fb088e6d834a6b7b7ecae6f802f7a6"
  },
  {
    "url": "assets/js/53.b1924980.js",
    "revision": "8bcd13f283fb31f8929fa143c67d4582"
  },
  {
    "url": "assets/js/54.47f05cb0.js",
    "revision": "a6ab354c4625db6bc4115e6feb0d1ce4"
  },
  {
    "url": "assets/js/55.f1485f0e.js",
    "revision": "a00e46494c04855b7bc33cfb1cac2202"
  },
  {
    "url": "assets/js/56.4a0af0c7.js",
    "revision": "b10d4bf970be7af04c6179abe39f733f"
  },
  {
    "url": "assets/js/57.64cf2ed2.js",
    "revision": "3e0c40617abc69eb95f881721d18d52d"
  },
  {
    "url": "assets/js/58.0b88e517.js",
    "revision": "360e1bf4c4307c1d0bfeab53bdac4367"
  },
  {
    "url": "assets/js/59.9101ba46.js",
    "revision": "1ceddfb9ee4429c4df5fadcdb86e6fb6"
  },
  {
    "url": "assets/js/6.9026ff0e.js",
    "revision": "56cefab76c3d4d297f6bf1aa61b2a55a"
  },
  {
    "url": "assets/js/60.1f2ceffb.js",
    "revision": "5c0bc1c11bf9df38ec6590791a83a6af"
  },
  {
    "url": "assets/js/61.33feba43.js",
    "revision": "2fd05e9cc2946ec2949081ff8fe0b08f"
  },
  {
    "url": "assets/js/62.cbb09f54.js",
    "revision": "915a54c93f35f2fc72b551bcd508a406"
  },
  {
    "url": "assets/js/63.5aa9b9f4.js",
    "revision": "870a286e040f08e1a04ee1ab0044ffa7"
  },
  {
    "url": "assets/js/64.a35890f3.js",
    "revision": "eae4fc52d35a21fcc8d24d35192a0399"
  },
  {
    "url": "assets/js/65.106f8073.js",
    "revision": "e509b907a26bb405f2bcba331ddc35c3"
  },
  {
    "url": "assets/js/66.246ddc76.js",
    "revision": "69882630c53073e84a8ef7764e153467"
  },
  {
    "url": "assets/js/67.d2f82597.js",
    "revision": "45a0ba28c5d529a6ebb76597743e87b3"
  },
  {
    "url": "assets/js/68.4364e595.js",
    "revision": "c5f54155e68bad67bb3f53a6279929db"
  },
  {
    "url": "assets/js/69.4b66ec62.js",
    "revision": "d3c5b1f0fdb35d5f418ad79b8346ee09"
  },
  {
    "url": "assets/js/7.812686ce.js",
    "revision": "1982fdc0fffdc90208de7a86b3c360d5"
  },
  {
    "url": "assets/js/70.73306e9e.js",
    "revision": "2bd923d5539a90c68ec7e0618cb3d3b3"
  },
  {
    "url": "assets/js/71.370f59c3.js",
    "revision": "0078e2945af4e60fb0d7a88cbde39ddd"
  },
  {
    "url": "assets/js/72.83481a98.js",
    "revision": "f6ab0ea3cfa8171cc547142dd04388a2"
  },
  {
    "url": "assets/js/73.b602eede.js",
    "revision": "5bf8847b43fd82e05fbfbe26b08eb6f5"
  },
  {
    "url": "assets/js/74.3d2fb3a5.js",
    "revision": "f8ad924f82fe2f2fa5914d64d57cd157"
  },
  {
    "url": "assets/js/75.29899ec9.js",
    "revision": "c9196e424527aa75c443f3e58984561c"
  },
  {
    "url": "assets/js/76.4c8539e1.js",
    "revision": "e33bdbb2e2dfd1cc44fe483dd4f3e809"
  },
  {
    "url": "assets/js/77.5b58d611.js",
    "revision": "6cd5fe497248eb91772f4602a29853c7"
  },
  {
    "url": "assets/js/78.b54dd942.js",
    "revision": "cf00dee904684dc4d2fb1d1cb5babdef"
  },
  {
    "url": "assets/js/79.490f5d61.js",
    "revision": "4f44504bfbc7982064ea0d7a8596d2ed"
  },
  {
    "url": "assets/js/8.8bb5a2fc.js",
    "revision": "968521b45de0cccc787357391fae5474"
  },
  {
    "url": "assets/js/80.b8381259.js",
    "revision": "99423ddb0d1209296fcf7c354897d2e0"
  },
  {
    "url": "assets/js/81.c14c6e33.js",
    "revision": "733f26bdaa695ad862cfe72f8026a703"
  },
  {
    "url": "assets/js/82.a731cda4.js",
    "revision": "e9c908c424a12e2ff6de7fa323caf15d"
  },
  {
    "url": "assets/js/app.809f2f40.js",
    "revision": "17bd06caad58f8a5688e30040bbce237"
  },
  {
    "url": "assets/js/vendors~docsearch.15664e14.js",
    "revision": "66d03341617820cdddc5e21f18416a4c"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "25cb99c1ed33b16a616f278b9b3ad376"
  },
  {
    "url": "frontend/Android.html",
    "revision": "d1b688f72fbb58f9bdbd4828800f7a24"
  },
  {
    "url": "frontend/cli.html",
    "revision": "20a998a88bf07e5e80a0be89130efea7"
  },
  {
    "url": "frontend/electron.html",
    "revision": "d9fbc35f5b0ed829dbb79cdcfdc8e156"
  },
  {
    "url": "frontend/express.html",
    "revision": "e191e8bab0f2780a2a6d86eccaa2837c"
  },
  {
    "url": "frontend/Flutter.html",
    "revision": "3d9ab0daff642547d346472f519b6e9d"
  },
  {
    "url": "frontend/HarmonyOs.html",
    "revision": "ea3178e1766814a82a94740c30837a1f"
  },
  {
    "url": "frontend/iOS.html",
    "revision": "93871934fbcd979f0b5de4d88b42bab6"
  },
  {
    "url": "frontend/MicroApp.html",
    "revision": "bff3a041832662a95bdbb79c6f34369b"
  },
  {
    "url": "frontend/MiniApp.html",
    "revision": "3da69862fefca51398fcc100044fd9e4"
  },
  {
    "url": "frontend/points.html",
    "revision": "f34e53bc1876b8678d79aebca9c1e6c0"
  },
  {
    "url": "frontend/React.html",
    "revision": "8401ddb396397bd363f9c1eddb61f327"
  },
  {
    "url": "frontend/ReactNative.html",
    "revision": "03f5bd27bdb9a52accd5b68ce2d26f16"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "53789d556ed7b062c491753810befc87"
  },
  {
    "url": "frontend/tools/index.html",
    "revision": "faa4b0fc064f353c51edc402a6a3e3e1"
  },
  {
    "url": "frontend/tools/Lerna.html",
    "revision": "9c39e02423d0dbf3107c7705f21b579f"
  },
  {
    "url": "frontend/tools/NPM.html",
    "revision": "185c1264bf6228d72b3acbeab0c3ce5b"
  },
  {
    "url": "frontend/tools/nvm.html",
    "revision": "53ef1341eddca73b308e242c42eb3280"
  },
  {
    "url": "frontend/tools/pnpm.html",
    "revision": "4952a7ac45d41cfb4392919655d826b8"
  },
  {
    "url": "frontend/tools/Verdaccio.html",
    "revision": "ff5b318a99e6f39c632fef06e4489d62"
  },
  {
    "url": "frontend/tools/Yarn.html",
    "revision": "ce1ce8ff583133906fd6aadfc9d60794"
  },
  {
    "url": "frontend/vue3.html",
    "revision": "758e368335a2012618aff67d96618c3a"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "ff1b38659ad08097a8d53c0c4b6c94ec"
  },
  {
    "url": "guide.html",
    "revision": "910ba9c9288dafedfd8ff07024a9415a"
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
    "revision": "cf548dc2522110db92db41b3b8d1e2ee"
  },
  {
    "url": "other/example/countup.html",
    "revision": "81dd356bfa0133340782bfc04a21ece4"
  },
  {
    "url": "other/example/image.html",
    "revision": "16c87b49845f3c132e63a108772fd9a5"
  },
  {
    "url": "other/index.html",
    "revision": "82c172f83675e29915a49db534875e87"
  },
  {
    "url": "other/Java/index.html",
    "revision": "eb69555a85e28cbd2dbf249f63f6a01c"
  },
  {
    "url": "other/PHP/index.html",
    "revision": "af6f69c5ef0e7b9c7df87dbcad5ca571"
  },
  {
    "url": "other/产品/index.html",
    "revision": "d127fbfc97a915117cbd599ab8c9d319"
  },
  {
    "url": "other/算法/index.html",
    "revision": "e51ad178ec4292365be79f94229785d9"
  },
  {
    "url": "other/设计/index.html",
    "revision": "459aaaffb722eeabc6b9227f77dc4e5f"
  },
  {
    "url": "python/base.html",
    "revision": "89a839438926120a2a6557e54016c97c"
  },
  {
    "url": "python/django.html",
    "revision": "3ed94eab2eaacf24c7f3c11557d63742"
  },
  {
    "url": "python/packages.html",
    "revision": "b5c1889321ea98877097f69d8f125ed1"
  },
  {
    "url": "python/tools.html",
    "revision": "71e453775da7f40a7cb6c18fd35352be"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "93e813c32c0d290db9681647990346c8"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "750d1541f9a170440b1093946e345a6b"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "15a341edded8fdd917117cb18ffea1b5"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "42a07a2f9fd5746e65e55dd785627e5d"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "da344d3cc421ff0198c256d43299c67b"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "64eb017000f1be7a8807265746224bb3"
  },
  {
    "url": "python/深度学习/index.html",
    "revision": "d2c538e14a2dfdc85f0bf77e066607a8"
  },
  {
    "url": "tools/centos.html",
    "revision": "11c845052f90f7ddda36ea014f98fcfa"
  },
  {
    "url": "tools/docker.html",
    "revision": "f3f6608783c674a877731a2f216491fe"
  },
  {
    "url": "tools/git.html",
    "revision": "def605a89ebe5c022bf01b17965ecff7"
  },
  {
    "url": "tools/idea.html",
    "revision": "0abf81197e7f6fd4661fb31d644a3c04"
  },
  {
    "url": "tools/index.html",
    "revision": "e799934a303a816dc1916d02c0394e3c"
  },
  {
    "url": "tools/linux.html",
    "revision": "8447f7be25d2255220aec2b12bec8012"
  },
  {
    "url": "tools/mac.html",
    "revision": "1fde8bdb158de685a6e33de96160bd7f"
  },
  {
    "url": "tools/ubuntu.html",
    "revision": "06577d9d74534acabcbf18c7c399f9e3"
  },
  {
    "url": "tools/vim.html",
    "revision": "7b8661c7ffc3b57b6e61357b1127d435"
  },
  {
    "url": "tools/VSCode.html",
    "revision": "83a2265338505376e8c355ee061bb174"
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
