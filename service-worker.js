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
    "revision": "4c706f51406953bee4875f57cce27bf4"
  },
  {
    "url": "about.html",
    "revision": "4b75821453c1e784ddf69d1dbd9540cd"
  },
  {
    "url": "ai/code/claude-code.html",
    "revision": "c5437ac9b7ab59721d4cc7127bf6e348"
  },
  {
    "url": "ai/code/index.html",
    "revision": "e83714ff93e94d94ddeca4cba4481180"
  },
  {
    "url": "ai/code/openspec.html",
    "revision": "37b4ef840ddfd18ade8d5065aa755311"
  },
  {
    "url": "ai/code/qwen-code.html",
    "revision": "a358aaa5cf1695ae78857e705fcb3492"
  },
  {
    "url": "ai/code/spec-kit.html",
    "revision": "d2cd78825857253b4705eee60ab8879e"
  },
  {
    "url": "ai/ollama.html",
    "revision": "327ff4182f2c2bcffaf17e46e9515e14"
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
    "url": "assets/js/1.995ca145.js",
    "revision": "a9fdb8ef6c174c05ef96558d6a708be8"
  },
  {
    "url": "assets/js/11.f262fc5e.js",
    "revision": "b9395ecc8317453bf202857de5202fa2"
  },
  {
    "url": "assets/js/12.df61d47f.js",
    "revision": "5bede71cc65148dfb71df43e213f3fca"
  },
  {
    "url": "assets/js/13.089a3473.js",
    "revision": "2d1a3c1dc22ca4386491621de5fe8680"
  },
  {
    "url": "assets/js/14.5e2b1cb7.js",
    "revision": "5c40bab2a7152629a342683c17414d05"
  },
  {
    "url": "assets/js/15.0c8ade59.js",
    "revision": "8d3474f8abb21f46a75e135162f9bb68"
  },
  {
    "url": "assets/js/16.0e15d777.js",
    "revision": "ff5dacf63f1c99cae6ab7c856eda7b75"
  },
  {
    "url": "assets/js/17.4c3da0ed.js",
    "revision": "3527574a91a977f92c6370b949a032b1"
  },
  {
    "url": "assets/js/18.ce80ea6b.js",
    "revision": "6688f2e280ee1cdf9e9c3903a0290e6b"
  },
  {
    "url": "assets/js/19.31f0d4b6.js",
    "revision": "642508e59931f73ced025754ba5fcd98"
  },
  {
    "url": "assets/js/2.c436bc2d.js",
    "revision": "9d9aa56f32db3bea7a915ff0d5755884"
  },
  {
    "url": "assets/js/20.d75b32e3.js",
    "revision": "ddd4ba0b04bdce175602b89675b76b55"
  },
  {
    "url": "assets/js/21.a327031d.js",
    "revision": "ea3126016f9579c826f2ce23a9280210"
  },
  {
    "url": "assets/js/22.065f494d.js",
    "revision": "4073403a9ae4976bdc23a02037a7e994"
  },
  {
    "url": "assets/js/23.16652fa1.js",
    "revision": "80e85155809511459f12b9f871e878aa"
  },
  {
    "url": "assets/js/24.7b8b09f6.js",
    "revision": "b21fa89c07be902b2fecc12602b0d078"
  },
  {
    "url": "assets/js/25.bf1f08d1.js",
    "revision": "e29f2075c426652acfbaf74f40f0f552"
  },
  {
    "url": "assets/js/26.d17763cf.js",
    "revision": "67eb602ac8072866d984e80602c21168"
  },
  {
    "url": "assets/js/27.4a6501c9.js",
    "revision": "317323b2df7dde877c48f7475daa8462"
  },
  {
    "url": "assets/js/28.e7556470.js",
    "revision": "cdd0d2b6682ff234694a3ae93f6ae938"
  },
  {
    "url": "assets/js/29.43b64b3c.js",
    "revision": "0a5b1bf70ae761f4675f60ac96996e17"
  },
  {
    "url": "assets/js/3.4b786e77.js",
    "revision": "fa5b2e1e58bb6c30d47899ac82d9c11a"
  },
  {
    "url": "assets/js/30.33c9bfae.js",
    "revision": "55f4b74df68504e6debe83bced053661"
  },
  {
    "url": "assets/js/31.ff992e31.js",
    "revision": "46f6acd9bcfcf157f77daa6f5196cdf3"
  },
  {
    "url": "assets/js/32.d82db76b.js",
    "revision": "88502840288c96bd53d5184740876f97"
  },
  {
    "url": "assets/js/33.9923150a.js",
    "revision": "ffa4383ee91cdf30d031baf9ae4f3601"
  },
  {
    "url": "assets/js/34.b414b43a.js",
    "revision": "c318795ede399ef54d885c1c11c4dcb8"
  },
  {
    "url": "assets/js/35.44a9aab4.js",
    "revision": "892257e2f5e25cf68164baa3ac431420"
  },
  {
    "url": "assets/js/36.0cd171d1.js",
    "revision": "115cbfa84a33713579960616eac8a80d"
  },
  {
    "url": "assets/js/37.d22195e5.js",
    "revision": "40eb2597d2c586fa8948fd1bc97e5fd9"
  },
  {
    "url": "assets/js/38.853b8d16.js",
    "revision": "80fc6ced78304c48abb5a4d8d3fd226a"
  },
  {
    "url": "assets/js/39.04d23bfa.js",
    "revision": "a83019541900f469cc2b6f093c927a14"
  },
  {
    "url": "assets/js/4.c56bc10b.js",
    "revision": "92075b7a078dd6509e15996a8c1a22f7"
  },
  {
    "url": "assets/js/40.761f769a.js",
    "revision": "4dbcac9b12abc0a72898b19b19b1e3dd"
  },
  {
    "url": "assets/js/41.05b7dbdb.js",
    "revision": "3f5b4892c7f6a73b551170c5096f5eea"
  },
  {
    "url": "assets/js/42.30b831b0.js",
    "revision": "be7d21e121c22470ffc431074b6897d8"
  },
  {
    "url": "assets/js/43.7b78b7a2.js",
    "revision": "defe227d4383bc3b12e7693916ede26b"
  },
  {
    "url": "assets/js/44.0ff7b5fe.js",
    "revision": "a57b05d56a5da0f8792c8c174f7b7722"
  },
  {
    "url": "assets/js/45.220bd241.js",
    "revision": "c04f4b2f0a64de214650cdd99ff564a9"
  },
  {
    "url": "assets/js/46.7232ce6a.js",
    "revision": "b31dbc4b8060c4a3926bd26fda972d0b"
  },
  {
    "url": "assets/js/47.176b7728.js",
    "revision": "40bfa81ffcb6de897e7e1590c17f13e0"
  },
  {
    "url": "assets/js/48.e087e926.js",
    "revision": "6a348a5df4acc28a84805ca12982851b"
  },
  {
    "url": "assets/js/49.413df859.js",
    "revision": "e302c30186ffab5127aac95a25e55074"
  },
  {
    "url": "assets/js/5.8c55bf74.js",
    "revision": "6530588ec8b886e7de4b77b0df7e213b"
  },
  {
    "url": "assets/js/50.e10e9ec4.js",
    "revision": "a7ee75a2d4a5a3fefbead42ad9d3d9c2"
  },
  {
    "url": "assets/js/51.5e46d134.js",
    "revision": "1a4e59d5c299e5527c78ccb9c3ee70a4"
  },
  {
    "url": "assets/js/52.90f09217.js",
    "revision": "74f3fb87e440100137769672566ca79e"
  },
  {
    "url": "assets/js/53.ef02c2f8.js",
    "revision": "337b4ecc163b2d6cdba9000bcbf8cf15"
  },
  {
    "url": "assets/js/54.13828b97.js",
    "revision": "a9236c4e9c0f4ab5408611dde1980ca2"
  },
  {
    "url": "assets/js/55.da4d55d5.js",
    "revision": "4f96e2e6a0ac46149f76d89d2ebec69b"
  },
  {
    "url": "assets/js/56.17dddd19.js",
    "revision": "d5638c053571ce8254ae3a87d646b759"
  },
  {
    "url": "assets/js/57.a5de258e.js",
    "revision": "bb853db5d787e25f36c4b5aacc405aa5"
  },
  {
    "url": "assets/js/58.13b09f79.js",
    "revision": "f8695772cf7e43348228206cb774ab5c"
  },
  {
    "url": "assets/js/59.89f90484.js",
    "revision": "e86a55fccf86f694e3fac334a6654783"
  },
  {
    "url": "assets/js/6.78114ced.js",
    "revision": "9ffde8a178d3faf692aa4f2f80434caa"
  },
  {
    "url": "assets/js/60.f0aca6a5.js",
    "revision": "427e61c760da76055d2458c4a6e0376d"
  },
  {
    "url": "assets/js/61.fde1876c.js",
    "revision": "52dfae6ab19ef7653f0ff979e2bbb929"
  },
  {
    "url": "assets/js/62.18f8b4ec.js",
    "revision": "3d3d2c1c89789ce6069aec2ec77453aa"
  },
  {
    "url": "assets/js/63.621586fe.js",
    "revision": "90691d0d847121a996d3b914474dab6a"
  },
  {
    "url": "assets/js/64.e0843469.js",
    "revision": "456875e80ada2f052dc68bbbdc2832c8"
  },
  {
    "url": "assets/js/65.4713798e.js",
    "revision": "8839e626369b9b3afcda0fc00775b9c3"
  },
  {
    "url": "assets/js/66.ed2d3361.js",
    "revision": "bb5af076f0e5482ae187d36d79415d9c"
  },
  {
    "url": "assets/js/67.f727b617.js",
    "revision": "96b753b8c0093f2e6249a68605088b1c"
  },
  {
    "url": "assets/js/68.190e1f85.js",
    "revision": "21f2fa0817d2e447a344af02d0b9f7f7"
  },
  {
    "url": "assets/js/69.b6044089.js",
    "revision": "ba84a8ffd83239adf049ed7d96e00c76"
  },
  {
    "url": "assets/js/7.4debe5a5.js",
    "revision": "69c3e39730c44f8236ac5141102a7048"
  },
  {
    "url": "assets/js/70.0db59403.js",
    "revision": "d0cca8d86d749bfbdf0ffd29d3de8805"
  },
  {
    "url": "assets/js/71.116cda70.js",
    "revision": "12b2640579280f4ddfd0618a57a9c353"
  },
  {
    "url": "assets/js/72.b7ec51ed.js",
    "revision": "ab2e74aab1deb3842fb5ab9447c137db"
  },
  {
    "url": "assets/js/73.3ebe81ac.js",
    "revision": "616d4f95921df7925729e5a1532e84a2"
  },
  {
    "url": "assets/js/74.2919977a.js",
    "revision": "778cd20795dc9238e406f5de591971b1"
  },
  {
    "url": "assets/js/75.0d0a4a46.js",
    "revision": "fbe8b3514f23208d556e4329071d463a"
  },
  {
    "url": "assets/js/76.85b787b1.js",
    "revision": "0e14325d73aac89642574f0462f91d73"
  },
  {
    "url": "assets/js/77.19a5cc46.js",
    "revision": "171ddd0ff3ef422499835283a2f6bab2"
  },
  {
    "url": "assets/js/78.98e8840a.js",
    "revision": "8f12bd38a6153681f88bdbc9656ac60d"
  },
  {
    "url": "assets/js/79.54228e81.js",
    "revision": "1c151f3c00928fe8e1cab9e0038d3b6c"
  },
  {
    "url": "assets/js/8.053debf5.js",
    "revision": "6a902237e43f334e6cf98f1964c03bb0"
  },
  {
    "url": "assets/js/80.35f2aa98.js",
    "revision": "49235dda45abd68ca4e786987470abbd"
  },
  {
    "url": "assets/js/81.ee3c5524.js",
    "revision": "7673c6f5476dc6e9cd25f3481f703ec7"
  },
  {
    "url": "assets/js/82.ce947d9b.js",
    "revision": "bb0e37220bb012e191cef64ef71f2c74"
  },
  {
    "url": "assets/js/83.777e0a66.js",
    "revision": "0720e887eb3f28a1cd4e4bf08369f81d"
  },
  {
    "url": "assets/js/84.9767eb9c.js",
    "revision": "9a8f342ce2565f3fb483b0c2fd5d736c"
  },
  {
    "url": "assets/js/85.4a1628bc.js",
    "revision": "7d90f3a49e23e0da4e6ec754a354610d"
  },
  {
    "url": "assets/js/86.ec13eb53.js",
    "revision": "9b1f628d7722a4cfafa20f071124d02c"
  },
  {
    "url": "assets/js/87.62078dfe.js",
    "revision": "6f8b09d1857444b384251d5957b0040b"
  },
  {
    "url": "assets/js/88.90a2565f.js",
    "revision": "1b1020c8fa3054b0db82969f0cf917e9"
  },
  {
    "url": "assets/js/app.1ec2d512.js",
    "revision": "cc9db838518555baf5545ba92019a66f"
  },
  {
    "url": "assets/js/vendors~docsearch.f938c3c4.js",
    "revision": "40bfd90564840f5388e6d46728a00582"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "45bd26d1472d6c73daa5f563ae150f75"
  },
  {
    "url": "frontend/Android.html",
    "revision": "2b9ac67159b5f79b6a3955baabcbea7a"
  },
  {
    "url": "frontend/cli.html",
    "revision": "a9233517ce7fba2aa53e467e4c8ebfa1"
  },
  {
    "url": "frontend/electron.html",
    "revision": "50e62da3ffeb1b0517ce852a2ebcf81a"
  },
  {
    "url": "frontend/express.html",
    "revision": "863408ac2fb1dd42419010cfb89ffec2"
  },
  {
    "url": "frontend/Flutter.html",
    "revision": "a7f7c4ebf00902f637d5ddbd7f5af459"
  },
  {
    "url": "frontend/HarmonyOs.html",
    "revision": "bffd418f7fe018e144e95498a2d9794e"
  },
  {
    "url": "frontend/iOS.html",
    "revision": "6368d7ef1d3784280a808e1a514e206d"
  },
  {
    "url": "frontend/MicroApp.html",
    "revision": "94159efbbec1e417c95a2a4a02c1f15f"
  },
  {
    "url": "frontend/MiniApp.html",
    "revision": "d6d2c87448e1735f1652ed3aece1583b"
  },
  {
    "url": "frontend/points.html",
    "revision": "063670ce133503e6d7338dc9c0b88511"
  },
  {
    "url": "frontend/React.html",
    "revision": "8c0d395454638cb268e9765af5c0b3c6"
  },
  {
    "url": "frontend/ReactNative.html",
    "revision": "2ccad5f61a95fda477f1aef213ca7bf9"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "51231838a1a666470b9ad329e0eab190"
  },
  {
    "url": "frontend/tools/index.html",
    "revision": "f6ce4495d25a65572c51221872851820"
  },
  {
    "url": "frontend/tools/Lerna.html",
    "revision": "c6383d6c8a3b2a46c5eed6a9e00b77fb"
  },
  {
    "url": "frontend/tools/NPM.html",
    "revision": "f66f84d5275e38662892f8d0aa93ac88"
  },
  {
    "url": "frontend/tools/nvm.html",
    "revision": "f7f84a763a606c3704cba8557894ac05"
  },
  {
    "url": "frontend/tools/pnpm.html",
    "revision": "4a58aa292212d50eca32af565cc763fb"
  },
  {
    "url": "frontend/tools/Verdaccio.html",
    "revision": "d83e5e7761af2e185727ec9c29649dd1"
  },
  {
    "url": "frontend/tools/Yarn.html",
    "revision": "4b1331d59343d2e56b3da657bd79fd85"
  },
  {
    "url": "frontend/vue3.html",
    "revision": "c72ed838214d200f930d789b326cfe49"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "6339f76971c3c9b4ee7154000eedef46"
  },
  {
    "url": "guide.html",
    "revision": "5cc19ca92e2e77d24e8f5ae951a769c8"
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
    "revision": "0046dad02a9664a3b5bcb768b0b546c8"
  },
  {
    "url": "other/example/countup.html",
    "revision": "9d2f4f4435b0dcaed31ba4a69584da5c"
  },
  {
    "url": "other/example/image.html",
    "revision": "be79549ba7418b5cf3b6bc462a540218"
  },
  {
    "url": "other/index.html",
    "revision": "790231343da0a4a3e900c5d1d041a8e5"
  },
  {
    "url": "other/Java/index.html",
    "revision": "6cf9ab1aaddf6b798d1de40f01c83fa4"
  },
  {
    "url": "other/PHP/index.html",
    "revision": "484a3e0d91b90a387ddd14c518b0eab2"
  },
  {
    "url": "other/产品/index.html",
    "revision": "2d87e26878fb95aa467a2506eef25d6c"
  },
  {
    "url": "other/算法/index.html",
    "revision": "b3363ffe713904f6a147c1f587fa6480"
  },
  {
    "url": "other/设计/index.html",
    "revision": "764ae4fec9b0dccb7abb9c3a5e21085a"
  },
  {
    "url": "python/base.html",
    "revision": "7a95057eeb463f7b0068144cd01b1157"
  },
  {
    "url": "python/django.html",
    "revision": "f86a3bb9959be51b8319316473de0272"
  },
  {
    "url": "python/packages.html",
    "revision": "d85aca0b73e95ae59d4edafabe84cb34"
  },
  {
    "url": "python/tools.html",
    "revision": "012deb11fe1b06b5dfbd2d9d9d67b764"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "663c497d2b760c9ff1656208fef999d6"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "1482509f454a8578470b7dce8342a0a8"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "e3b51f447fbd792ff87cd59a1b7b9bf1"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "f15e4e55d555aa8f3665cd5fc46ba2b6"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "1b28502ceb0e007338c065d749f91fbd"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "91900e9f9d94ecd0ec95384ecb971076"
  },
  {
    "url": "python/深度学习/index.html",
    "revision": "5892cf9f6f6412b7313285de537002ce"
  },
  {
    "url": "tools/centos.html",
    "revision": "1e0d7598bff26eb5c4b6f2a64b9b6f56"
  },
  {
    "url": "tools/docker.html",
    "revision": "cfaebf6372c84fd6632d2e1f1b3a4676"
  },
  {
    "url": "tools/git.html",
    "revision": "a77f2210d3fe1b1956a9ce0ec696d97b"
  },
  {
    "url": "tools/idea.html",
    "revision": "21182db85934ee63a6581069179090cb"
  },
  {
    "url": "tools/index.html",
    "revision": "c5ae91ffeede6786287cfec72cb0da84"
  },
  {
    "url": "tools/linux.html",
    "revision": "02a8a3a913b46cdfc4f1c94324579f42"
  },
  {
    "url": "tools/mac.html",
    "revision": "a6fd2bea84825fd62ecb8a41854e9da9"
  },
  {
    "url": "tools/ubuntu.html",
    "revision": "ce967c5605230888a08c58b2c930e1e5"
  },
  {
    "url": "tools/vim.html",
    "revision": "1fd764bef926f8fdaf6dd54832e97dcf"
  },
  {
    "url": "tools/VSCode.html",
    "revision": "2aafb349f6f5beb3282a021b22860787"
  },
  {
    "url": "tools/wsl.html",
    "revision": "37ac96839571bee6bd0624b64c067ce8"
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
