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
    "revision": "5f9d0e9398c67b324933c2300fb76e27"
  },
  {
    "url": "about.html",
    "revision": "bc382c337d6cd684bdca01a5b98b35cd"
  },
  {
    "url": "ai/ollama.html",
    "revision": "bd0fe3e459988dabb2b71df6e3e3f841"
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
    "url": "assets/js/23.d5aeb318.js",
    "revision": "668f5fa72049e12968620a3815b947aa"
  },
  {
    "url": "assets/js/24.7a909b6a.js",
    "revision": "970eb02d6dbaff4297e59c3b6885f2e5"
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
    "url": "assets/js/29.4bc6eb21.js",
    "revision": "4fa59b1254871dd8d1489b96ee479c9f"
  },
  {
    "url": "assets/js/3.02bb00c6.js",
    "revision": "c2aa1a5560fdcd23301c774a955c16c3"
  },
  {
    "url": "assets/js/30.bde56353.js",
    "revision": "bc4669a4a870b822fc63f66ba336644a"
  },
  {
    "url": "assets/js/31.13084ce3.js",
    "revision": "78573c944e8f4ca2db42b10716cddeec"
  },
  {
    "url": "assets/js/32.d7109d3d.js",
    "revision": "74f189dfbfca72405e1d396193465491"
  },
  {
    "url": "assets/js/33.b1270e22.js",
    "revision": "de7fb15f7621874ae619576bebb5d9ba"
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
    "url": "assets/js/38.49143bb0.js",
    "revision": "3b648eee049aa04e42b72d2f99e2fb63"
  },
  {
    "url": "assets/js/39.a0a4436a.js",
    "revision": "e03408788ba63bd2fd0fcae462e32a07"
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
    "url": "assets/js/41.dc098999.js",
    "revision": "80e6f1fa4c3ef9f78b9685ba39f2e73f"
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
    "url": "assets/js/45.5f0af74f.js",
    "revision": "8de53efd706e3740665b2706dca53085"
  },
  {
    "url": "assets/js/46.9ef3450d.js",
    "revision": "95275ab718b33b12b06a4dcaa8597490"
  },
  {
    "url": "assets/js/47.4230f405.js",
    "revision": "cc8dbbd4efa6957747c6f14668ffde13"
  },
  {
    "url": "assets/js/48.9a577ee5.js",
    "revision": "7b1154d66f69dc13b391e819f858bb6c"
  },
  {
    "url": "assets/js/49.9070c16b.js",
    "revision": "6a18fe2f17d9f0d8ea8c40c2ee0ae15a"
  },
  {
    "url": "assets/js/5.ff1c866d.js",
    "revision": "02e6b0a56b18f4254be66442690eeaa6"
  },
  {
    "url": "assets/js/50.27c6c814.js",
    "revision": "2293b3c2ba0de0d4ff9e3da52784164b"
  },
  {
    "url": "assets/js/51.5c2359f6.js",
    "revision": "aca85c6a2df37f5059725e1a6a8606f6"
  },
  {
    "url": "assets/js/52.d5db8d0d.js",
    "revision": "cbec4d8282efd4401be35a89a17e159c"
  },
  {
    "url": "assets/js/53.9023b1c1.js",
    "revision": "fc99d5939ad4f7f822b9f0d76d7cd7c9"
  },
  {
    "url": "assets/js/54.f759b19c.js",
    "revision": "17a703cd62a1de5b0c9c5a08bffb0548"
  },
  {
    "url": "assets/js/55.bfb47005.js",
    "revision": "eeab4d396265d6f8155d71d95af93858"
  },
  {
    "url": "assets/js/56.da2a6d26.js",
    "revision": "d640711ca641324000aa279d0e1e93b9"
  },
  {
    "url": "assets/js/57.e62b110f.js",
    "revision": "cdbdd0447d01615a13b25c74de88ba72"
  },
  {
    "url": "assets/js/58.e844faa2.js",
    "revision": "3b863245bbabf41da79156620cd6b13f"
  },
  {
    "url": "assets/js/59.ed75037b.js",
    "revision": "10b5aea1f0b9392ead3684d06e733b05"
  },
  {
    "url": "assets/js/6.9026ff0e.js",
    "revision": "56cefab76c3d4d297f6bf1aa61b2a55a"
  },
  {
    "url": "assets/js/60.3eaf6c11.js",
    "revision": "5e19cab3cbb3bc7864d9a469875d896d"
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
    "url": "assets/js/64.2c93fa7e.js",
    "revision": "d87fa2ed98c6d5edb525ad987d7934e3"
  },
  {
    "url": "assets/js/65.33658a34.js",
    "revision": "ffc23108b06e38c5f6689ad89c839fe9"
  },
  {
    "url": "assets/js/66.70a7cf86.js",
    "revision": "5d6b329c484ec31bc87a2e2ea515da30"
  },
  {
    "url": "assets/js/67.ae2af82b.js",
    "revision": "24bfbcfe55f03e15052debb9339cfd62"
  },
  {
    "url": "assets/js/68.28ba9ddb.js",
    "revision": "cd3c09ec814326f545bd732559da61ed"
  },
  {
    "url": "assets/js/69.33f8d934.js",
    "revision": "9b11772137bf12d4b23d58a1f8e7a91b"
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
    "url": "assets/js/73.08e58775.js",
    "revision": "0d0af46fa5738b3ee5b86f8eb0bdf397"
  },
  {
    "url": "assets/js/74.c96c9455.js",
    "revision": "80d42d2d8ed4908ed6a8d543cf46238b"
  },
  {
    "url": "assets/js/75.395790cf.js",
    "revision": "abc95cd5cbd4e819cca776551fa4833d"
  },
  {
    "url": "assets/js/76.39de34a8.js",
    "revision": "3915364ff779b9064de25b1c8430dd33"
  },
  {
    "url": "assets/js/77.85e04397.js",
    "revision": "aa8c6fed44d714312d295c3e1d9ec37e"
  },
  {
    "url": "assets/js/78.b54dd942.js",
    "revision": "cf00dee904684dc4d2fb1d1cb5babdef"
  },
  {
    "url": "assets/js/79.fd53b5ef.js",
    "revision": "cd3388e068818289323650f4a0a0ab77"
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
    "url": "assets/js/81.b90c5e22.js",
    "revision": "e53443f89d67f897e51be5f306d97afa"
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
    "url": "assets/js/app.95e9365a.js",
    "revision": "e755c3ca9ee482fb90cfd6c6ff730926"
  },
  {
    "url": "assets/js/vendors~docsearch.15664e14.js",
    "revision": "66d03341617820cdddc5e21f18416a4c"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "4dc4990ca31df5318019664119e0c747"
  },
  {
    "url": "frontend/Android.html",
    "revision": "533794d54b3c3ee90eec9525b8c70655"
  },
  {
    "url": "frontend/cli.html",
    "revision": "013e1010c3fa357014154248e376ef2a"
  },
  {
    "url": "frontend/electron.html",
    "revision": "3996d2b1ff2783a47372b73ae2909b89"
  },
  {
    "url": "frontend/express.html",
    "revision": "1ac3cd61558a22f60e4b6eb2c3db4570"
  },
  {
    "url": "frontend/Flutter.html",
    "revision": "766b6ea04a8afd735a659b7ea94b1b1a"
  },
  {
    "url": "frontend/HarmonyOs.html",
    "revision": "5076aa12eaa48057981e5ee23f702187"
  },
  {
    "url": "frontend/iOS.html",
    "revision": "bf0243cd62d16f8b0d4715368cd27e04"
  },
  {
    "url": "frontend/MicroApp.html",
    "revision": "c403690b2f20c05a765b4c3be9bc223d"
  },
  {
    "url": "frontend/MiniApp.html",
    "revision": "9f97dce996314a968b29224404c988c6"
  },
  {
    "url": "frontend/points.html",
    "revision": "6301a2eee0d545aa952efe0e80828905"
  },
  {
    "url": "frontend/React.html",
    "revision": "42399227be92c9e790321a4f6965b3e6"
  },
  {
    "url": "frontend/ReactNative.html",
    "revision": "6c0d3805c64d4326812f6645ea45c414"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "7dc28de8c6772985b0743e412af0d42b"
  },
  {
    "url": "frontend/tools/index.html",
    "revision": "9656bfe6647fb34bf4b6d6503c3d5c8f"
  },
  {
    "url": "frontend/tools/Lerna.html",
    "revision": "b3b6c9a24c9d86aa1e1bcb47fdeff8b9"
  },
  {
    "url": "frontend/tools/NPM.html",
    "revision": "b579884840f9acf814b72c242ed82e12"
  },
  {
    "url": "frontend/tools/nvm.html",
    "revision": "5c6104cd1994de4131e50c4f6ac702d8"
  },
  {
    "url": "frontend/tools/pnpm.html",
    "revision": "0cea948f8b048f5e4e420acce93ad9aa"
  },
  {
    "url": "frontend/tools/Verdaccio.html",
    "revision": "c552b8e7ed4e493556426831c855a9a6"
  },
  {
    "url": "frontend/tools/Yarn.html",
    "revision": "a732368f04bca5792f8a3b2959041751"
  },
  {
    "url": "frontend/vue3.html",
    "revision": "f9c656949482e0b8f53254969da577a2"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "1be8cd2cbf68edcf16370e30faa76fbf"
  },
  {
    "url": "guide.html",
    "revision": "7b75f7b9d45b0d7826c39bf9a2fc9e81"
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
    "revision": "cc6ed8b397d428657cda48a4cbc71fef"
  },
  {
    "url": "other/example/countup.html",
    "revision": "a13b4db0ee4f3d761780a089f0e9b7be"
  },
  {
    "url": "other/example/image.html",
    "revision": "55accc3bdbb4c8bf8be6ac3b3d69866a"
  },
  {
    "url": "other/index.html",
    "revision": "413423ff9b16dd36c85a29e54a73f54a"
  },
  {
    "url": "other/Java/index.html",
    "revision": "53a0bf6071b09048fefaa494e0f53ea7"
  },
  {
    "url": "other/PHP/index.html",
    "revision": "dd51990334010c0bf3b301698137f431"
  },
  {
    "url": "other/产品/index.html",
    "revision": "7e40cd2213223b8ee2f3bc3c194decb5"
  },
  {
    "url": "other/算法/index.html",
    "revision": "a53687d146a69328167c5d6ca9eb80b9"
  },
  {
    "url": "other/设计/index.html",
    "revision": "fb7f3727cd453c7b7f5aacacf8d5382b"
  },
  {
    "url": "python/base.html",
    "revision": "9f7db237a9c71728f89aec18030b9cee"
  },
  {
    "url": "python/django.html",
    "revision": "3b6020d50da0b583b4a016e9182e0117"
  },
  {
    "url": "python/packages.html",
    "revision": "182f2abf38097a7380bf03e036e4c701"
  },
  {
    "url": "python/tools.html",
    "revision": "6020e2c68e5d5663dadd6685b1d53011"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "380cc38f9c95dd0a609d0d38d733bc53"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "1e92e8787ca230dc3d07c7722944596d"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "553770aa555dcb0549567fe9f2d3c617"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "0693444e3484259d8137d6278bcac3c1"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "52f514a0a18e5a63e7cc3076d1b222ee"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "f7dcb35b6cb91fda7db06f0d3b78deed"
  },
  {
    "url": "python/深度学习/index.html",
    "revision": "6ce10204e46357093aa2b015ac3a2cfd"
  },
  {
    "url": "tools/centos.html",
    "revision": "a9c5545e6c9d4182c65cbca34281060b"
  },
  {
    "url": "tools/docker.html",
    "revision": "f42f2944b332f2764d5a6eb39b7d5369"
  },
  {
    "url": "tools/git.html",
    "revision": "257592225264a2043a8a28f2d3fae84f"
  },
  {
    "url": "tools/idea.html",
    "revision": "4cb165c5354648e7edb9666ffb6cf824"
  },
  {
    "url": "tools/index.html",
    "revision": "7b97f6aae6560442ee8b6b07c87bcf30"
  },
  {
    "url": "tools/linux.html",
    "revision": "9d7d3fc74239a57227e3434c462f5ba6"
  },
  {
    "url": "tools/mac.html",
    "revision": "7ff7e7214559de98bd4225b692cf3749"
  },
  {
    "url": "tools/ubuntu.html",
    "revision": "f8dda3c87f39340e7f4e0628490c7a3e"
  },
  {
    "url": "tools/vim.html",
    "revision": "cad7dc001963073196d8aa81c11d1326"
  },
  {
    "url": "tools/VSCode.html",
    "revision": "9360fdd7481ddf28a5a269e7af245d4b"
  },
  {
    "url": "tools/wsl.html",
    "revision": "89668d939518d79bb4144e42d8734194"
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
