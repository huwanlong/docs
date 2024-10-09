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
    "revision": "faadd86450912d2e3e642846ab16ed93"
  },
  {
    "url": "about.html",
    "revision": "37ab2b236f6943f7f5c44e618061dc53"
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
    "url": "assets/js/1.3cb30640.js",
    "revision": "e0003bd7434b3ba12bce19e495966c3e"
  },
  {
    "url": "assets/js/11.6068c323.js",
    "revision": "b3cc4b61f89a11fc0473359c548d4438"
  },
  {
    "url": "assets/js/12.53ffd918.js",
    "revision": "d88af3b7c64f32c79bef21a4a591047d"
  },
  {
    "url": "assets/js/13.edccca4e.js",
    "revision": "5800a346ec826dbe01481f05dce8fe8b"
  },
  {
    "url": "assets/js/14.2a12d85a.js",
    "revision": "ca15f3a475fa247913a25eb04a3d8cb5"
  },
  {
    "url": "assets/js/15.8de28a6a.js",
    "revision": "5caba703fd749d6eb931430641214a2f"
  },
  {
    "url": "assets/js/16.6309751b.js",
    "revision": "331577576cebbf63c1ae022489d25794"
  },
  {
    "url": "assets/js/17.7fd875b7.js",
    "revision": "076b287b29ea3b236b1ec8b3a1caf2b6"
  },
  {
    "url": "assets/js/18.c618c5d1.js",
    "revision": "c3fc34f68e5bb4c55a2f8a3ff482df60"
  },
  {
    "url": "assets/js/19.dc264aa5.js",
    "revision": "099e213766de00c14ba82e2a34d8d0ba"
  },
  {
    "url": "assets/js/2.895eac14.js",
    "revision": "d4ebadddeeda2054bdfb7fcf3245c52b"
  },
  {
    "url": "assets/js/20.ac169d45.js",
    "revision": "e8d12876c3413911b0ad529b3929c399"
  },
  {
    "url": "assets/js/21.03e49485.js",
    "revision": "990c5b5388967e3b72687b30339fb402"
  },
  {
    "url": "assets/js/22.7e6ffdd1.js",
    "revision": "912645127aa7ea7a68c2ac904f009973"
  },
  {
    "url": "assets/js/23.54638cf3.js",
    "revision": "796d19a7b9b54ee54825c110b544fe68"
  },
  {
    "url": "assets/js/24.35de1144.js",
    "revision": "8c56ea2f4d2f19d2e752233e47bea2db"
  },
  {
    "url": "assets/js/25.891d07a8.js",
    "revision": "b8cbeb2f0debf7a9d04e3bc546234b55"
  },
  {
    "url": "assets/js/26.20209955.js",
    "revision": "3cbfc86c449d838715df983619f7eb10"
  },
  {
    "url": "assets/js/27.5d41a260.js",
    "revision": "a13d18843656a59df8b2565a493261df"
  },
  {
    "url": "assets/js/28.c1471a73.js",
    "revision": "abb5ee828ba6fd99ede3b91698f5d16e"
  },
  {
    "url": "assets/js/29.525e9529.js",
    "revision": "411a5d3568fb28ba8ab28eecad8a6e49"
  },
  {
    "url": "assets/js/3.58380373.js",
    "revision": "ddd29b6c9ec580395b408a40bec0c715"
  },
  {
    "url": "assets/js/30.375524a6.js",
    "revision": "67576c74421b1cddba024927f744f0e0"
  },
  {
    "url": "assets/js/31.8cdb61a1.js",
    "revision": "2786a0e66014e4554b4dcf45c1cb58e9"
  },
  {
    "url": "assets/js/32.2a74623c.js",
    "revision": "12cc1c711f499d4c68af4b8ad110c87c"
  },
  {
    "url": "assets/js/33.db827b7b.js",
    "revision": "1c3175aa5769e22e59f6bc812bb79acb"
  },
  {
    "url": "assets/js/34.148a2574.js",
    "revision": "767c400c705ab08a8aee05564d646986"
  },
  {
    "url": "assets/js/35.7a43a842.js",
    "revision": "c7ed15146142f49374390129fdaecb64"
  },
  {
    "url": "assets/js/36.26395fcf.js",
    "revision": "0685bfb68ce0a316767fd27379b9a183"
  },
  {
    "url": "assets/js/37.0d0418ec.js",
    "revision": "a5c1067312f874cd6be571a6476beb71"
  },
  {
    "url": "assets/js/38.8bff113d.js",
    "revision": "34752dfc1e994e70f53d7d9bf4ee8374"
  },
  {
    "url": "assets/js/39.3cf4643f.js",
    "revision": "4ae6a236eb594e8e5fd8d1584549d849"
  },
  {
    "url": "assets/js/4.eaee1878.js",
    "revision": "be030821fcd9da940dcd74f78b0611dd"
  },
  {
    "url": "assets/js/40.4e9b365c.js",
    "revision": "2c53f516b1d3ba859f7d7f7bb6c1288a"
  },
  {
    "url": "assets/js/41.a3fd5e22.js",
    "revision": "8d51f3266c1b2e13871aac07f055180b"
  },
  {
    "url": "assets/js/42.bb395e42.js",
    "revision": "313439cfdcbd5f6045953ce93e47ee64"
  },
  {
    "url": "assets/js/43.6c9685c4.js",
    "revision": "18f81dbba5dfdf1068c153250c3de745"
  },
  {
    "url": "assets/js/44.701dc5a5.js",
    "revision": "9ca25af6b447c17f159ef79220a759a0"
  },
  {
    "url": "assets/js/45.8d1e6fad.js",
    "revision": "0227208d46c29dfe49d673209ebd804f"
  },
  {
    "url": "assets/js/46.793d65bd.js",
    "revision": "790fe450d597eca205aadec8591ce29c"
  },
  {
    "url": "assets/js/47.47ceaadf.js",
    "revision": "6399d894b822ce463111a73d5ac15c67"
  },
  {
    "url": "assets/js/48.b5ddff8e.js",
    "revision": "cb2ea29f393b8b0ec2ba38641045ec41"
  },
  {
    "url": "assets/js/49.b3491d14.js",
    "revision": "583c6f798a4a7a2f3a3aab7537f14f09"
  },
  {
    "url": "assets/js/5.ff7980b4.js",
    "revision": "95cd95ddf476995311d2456e8f7b67f7"
  },
  {
    "url": "assets/js/50.0f49ef4a.js",
    "revision": "266efde03ecc1d7b6ba5dbee2eb55ae2"
  },
  {
    "url": "assets/js/51.639f9aed.js",
    "revision": "fec2b57ddb2a1188fa948fa054575b61"
  },
  {
    "url": "assets/js/52.9def7bd5.js",
    "revision": "e056af3a8e499ffe9867b36731f1b698"
  },
  {
    "url": "assets/js/53.5bd57e41.js",
    "revision": "ffab5fc0a5c9315b9c6f171471d5dd1a"
  },
  {
    "url": "assets/js/54.c40e7fd9.js",
    "revision": "3cfcbdb5782f8f5937c532517aeee734"
  },
  {
    "url": "assets/js/55.5212ff93.js",
    "revision": "c0bcfd11e04a8d702edbb1203b9a233e"
  },
  {
    "url": "assets/js/56.cbc2521e.js",
    "revision": "d03cdbc3b6800ae3250fb30932a35cc8"
  },
  {
    "url": "assets/js/57.a7732e50.js",
    "revision": "597e57233e78db95b411cd4cc5f210e1"
  },
  {
    "url": "assets/js/58.fe34b738.js",
    "revision": "6d0c9ccc6f7552582a9fc8e16376df43"
  },
  {
    "url": "assets/js/59.09b4a3a9.js",
    "revision": "b3dda971f25578f93674869eec046cae"
  },
  {
    "url": "assets/js/6.7c17e28a.js",
    "revision": "4c194530228adbd12a4076075bafe0a0"
  },
  {
    "url": "assets/js/60.9c505b8a.js",
    "revision": "806f44528052e1f505486be86de4f128"
  },
  {
    "url": "assets/js/61.b5d86738.js",
    "revision": "3826e288495afc9b7113300af3d3eab6"
  },
  {
    "url": "assets/js/62.31b396b6.js",
    "revision": "a2996cf723dac7d88c30fdcba95eff1a"
  },
  {
    "url": "assets/js/63.d7b7f303.js",
    "revision": "0723f0f7d00fc6cdffe240867d131b16"
  },
  {
    "url": "assets/js/64.5146f901.js",
    "revision": "e426477ea124c7820be2455a2dc7fbf5"
  },
  {
    "url": "assets/js/65.4b1f8e30.js",
    "revision": "aa914c303fdc60f578633da6c204b92c"
  },
  {
    "url": "assets/js/66.056ce79f.js",
    "revision": "31a5072e303e9b90ca89da04d9a24c27"
  },
  {
    "url": "assets/js/67.bbcbc4e2.js",
    "revision": "983f93e5b79ec02431cf88b8dc6644b6"
  },
  {
    "url": "assets/js/68.8c64cf16.js",
    "revision": "3f93d1657594490da29160a5646bae3c"
  },
  {
    "url": "assets/js/69.e7e2646f.js",
    "revision": "96cf4afb3bd644a1bb2f39de0763860f"
  },
  {
    "url": "assets/js/7.cd421c24.js",
    "revision": "a9881c63fad40b00001f3130d965ebfa"
  },
  {
    "url": "assets/js/70.d4fc19d7.js",
    "revision": "7968b748f1788b2f08f08642a028626c"
  },
  {
    "url": "assets/js/71.ca31d4b7.js",
    "revision": "c0bf6df04883ff776c3e06239837163a"
  },
  {
    "url": "assets/js/72.f5748aba.js",
    "revision": "4b1d62b278b41dba18d78847fcc10a1d"
  },
  {
    "url": "assets/js/73.ca9b4af0.js",
    "revision": "ac14f4b3708cf176c76ed60cc6f43e32"
  },
  {
    "url": "assets/js/74.c7c27960.js",
    "revision": "5ecea541305f4f7beb4d7434e060bc14"
  },
  {
    "url": "assets/js/75.cda971f0.js",
    "revision": "19525638a453e468918c34e498994b92"
  },
  {
    "url": "assets/js/76.d0b239af.js",
    "revision": "be628d3bc9be18f23c68cacfd44c425c"
  },
  {
    "url": "assets/js/77.ce611829.js",
    "revision": "5ebe95c969c576e6896af49150909c32"
  },
  {
    "url": "assets/js/78.f849ce09.js",
    "revision": "76e40d0c459e4923e60d35059782b83a"
  },
  {
    "url": "assets/js/79.38626852.js",
    "revision": "192af46c12977bda35d866fb42c9b6f4"
  },
  {
    "url": "assets/js/8.32497a6a.js",
    "revision": "d9e9a2c7198c7c459aeb674adaafe33b"
  },
  {
    "url": "assets/js/app.d7332c63.js",
    "revision": "7c1ad45cc605a300341dfd4e0258ce0e"
  },
  {
    "url": "assets/js/vendors~docsearch.6d9018ea.js",
    "revision": "ab3150ae5678ba52bca4bfa91f8f97e1"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "2af8516338c51c9d7d462cb912837525"
  },
  {
    "url": "frontend/Android.html",
    "revision": "a273353977a43f5f85be9de689f97e00"
  },
  {
    "url": "frontend/cli.html",
    "revision": "4fbc059977607a25c94e2206262afdb4"
  },
  {
    "url": "frontend/electron.html",
    "revision": "3ff1a490fb972a94cc95e2dcddae0fa9"
  },
  {
    "url": "frontend/Flutter.html",
    "revision": "48e8005f67f89a3b397bd2d24e6c2efc"
  },
  {
    "url": "frontend/HarmonyOs.html",
    "revision": "ca92906b21eb1aabed41c9a3c25d0f62"
  },
  {
    "url": "frontend/iOS.html",
    "revision": "417dae6fe4ad538e6e2593102fafb827"
  },
  {
    "url": "frontend/MicroApp.html",
    "revision": "725ad5a245ac654458297ae781d45e8c"
  },
  {
    "url": "frontend/MiniApp.html",
    "revision": "c9cc5f48d50d00e9050e2fc81829b0da"
  },
  {
    "url": "frontend/points.html",
    "revision": "c60bbd6e3417df024c81126d278468c1"
  },
  {
    "url": "frontend/React.html",
    "revision": "423707a44f2bbd6d8dc6008147894ef0"
  },
  {
    "url": "frontend/ReactNative.html",
    "revision": "959a3f0873923acf4d6f3fb1a1a8571d"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "e84855dbdfb33da981286da9213132bb"
  },
  {
    "url": "frontend/tools/index.html",
    "revision": "801b08567129bcb88737ffe4fe0569c7"
  },
  {
    "url": "frontend/tools/Lerna.html",
    "revision": "54ce1def1ee352ac078c1b121e1282ea"
  },
  {
    "url": "frontend/tools/NPM.html",
    "revision": "e02c6d2bb1c52915c24cd9eec12ca858"
  },
  {
    "url": "frontend/tools/nvm.html",
    "revision": "c3f771f8d289d6d6c2d96742933de39d"
  },
  {
    "url": "frontend/tools/pnpm.html",
    "revision": "d02240f085d965dbcd572b89b784db35"
  },
  {
    "url": "frontend/tools/Verdaccio.html",
    "revision": "155044c9d351bf16c0a962fc891462b8"
  },
  {
    "url": "frontend/tools/Yarn.html",
    "revision": "ea2945f1d403ee029f95b203b457b39e"
  },
  {
    "url": "frontend/vue3.html",
    "revision": "beb69ce96903b6760f671220de267264"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "b17945a0670f695ede32a1aac3e7ce37"
  },
  {
    "url": "guide.html",
    "revision": "f0b54ec8a4411d75e347408c432a662b"
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
    "revision": "ff58a358bbd9a0edda0e9ffbc96acfb5"
  },
  {
    "url": "other/example/countup.html",
    "revision": "7fd85ed6384024b694d24a2916b746b7"
  },
  {
    "url": "other/example/image.html",
    "revision": "cc201c22d095120442198f842bca0b39"
  },
  {
    "url": "other/index.html",
    "revision": "766c5a033e641c4792aeb3147c752de4"
  },
  {
    "url": "other/Java/index.html",
    "revision": "e64d1f33880fb623e9dd52770ed53e88"
  },
  {
    "url": "other/PHP/index.html",
    "revision": "7717428bdf3d8e72ff4b394e995d0adf"
  },
  {
    "url": "other/产品/index.html",
    "revision": "5de6fcebb30585493401b201be66c8ff"
  },
  {
    "url": "other/算法/index.html",
    "revision": "230abb9915f6867f858c74e6e111a215"
  },
  {
    "url": "other/设计/index.html",
    "revision": "b4b87ca32b157976f2350b065d74f95b"
  },
  {
    "url": "python/basic.html",
    "revision": "d520343b43308eafb7523cf09d076a64"
  },
  {
    "url": "python/django.html",
    "revision": "16b87d9758262ab2e015d4a432a5a8f0"
  },
  {
    "url": "python/tools.html",
    "revision": "582d62450370086dddfc10010146f682"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "5d974a76d0e5d87ff4c3ca5d754145cf"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "67237e9b83a16d57568a0b4c240aa8da"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "eb8e9fffcc0b1ead73e04e8cf841386f"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "479371309e3991862ca735b216d15b5c"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "a8d363b39888c603c05e17692fab4e9a"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "d829abcd45cc9335cd85440c4b4c4fb6"
  },
  {
    "url": "python/深度学习/index.html",
    "revision": "4dbc86f64b9b77cca5f09242c34b8d16"
  },
  {
    "url": "tools/centos.html",
    "revision": "428f81457f12f286884e99a81720dfc7"
  },
  {
    "url": "tools/docker.html",
    "revision": "87aaaa52606e68eaad61728afe059cca"
  },
  {
    "url": "tools/git.html",
    "revision": "743a8aeee364dd31613a82424bf096b2"
  },
  {
    "url": "tools/idea.html",
    "revision": "0d649d3570d9acf67f906c34308119de"
  },
  {
    "url": "tools/index.html",
    "revision": "86ae513e239a887623e1f4c8aad30416"
  },
  {
    "url": "tools/linux.html",
    "revision": "0b6872f77ccc1c2bff15a27419399728"
  },
  {
    "url": "tools/mac.html",
    "revision": "fca574eac34c88523040a269c1ae391a"
  },
  {
    "url": "tools/ubuntu.html",
    "revision": "bd2fcbf88c531f1e03f787e9b64cbb5b"
  },
  {
    "url": "tools/vim.html",
    "revision": "f994ec0b62dfa115670f01f51a21a7fc"
  },
  {
    "url": "tools/VSCode.html",
    "revision": "541493f3bfc09eaa00495c9fdfec2e34"
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
