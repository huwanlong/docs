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
    "revision": "fc22d613fed92ab9ae6fb05c9a6d5f79"
  },
  {
    "url": "about.html",
    "revision": "1bfbc5dc755d0c305042823646ae18e8"
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
    "url": "assets/js/1.ef27ac9b.js",
    "revision": "4bbbed377ed56f6e3ec9f6aeb27c7f6a"
  },
  {
    "url": "assets/js/11.af61e32e.js",
    "revision": "b3cc4b61f89a11fc0473359c548d4438"
  },
  {
    "url": "assets/js/12.fcea5b38.js",
    "revision": "d88af3b7c64f32c79bef21a4a591047d"
  },
  {
    "url": "assets/js/13.362bea26.js",
    "revision": "5800a346ec826dbe01481f05dce8fe8b"
  },
  {
    "url": "assets/js/14.68f6cdc3.js",
    "revision": "9b1d29dee53b05654bf4b90034283c24"
  },
  {
    "url": "assets/js/15.9e9f0ad0.js",
    "revision": "5caba703fd749d6eb931430641214a2f"
  },
  {
    "url": "assets/js/16.43078882.js",
    "revision": "331577576cebbf63c1ae022489d25794"
  },
  {
    "url": "assets/js/17.f3b9e955.js",
    "revision": "076b287b29ea3b236b1ec8b3a1caf2b6"
  },
  {
    "url": "assets/js/18.a9e9a12c.js",
    "revision": "c3fc34f68e5bb4c55a2f8a3ff482df60"
  },
  {
    "url": "assets/js/19.8297a80b.js",
    "revision": "099e213766de00c14ba82e2a34d8d0ba"
  },
  {
    "url": "assets/js/2.5a325daa.js",
    "revision": "d4ebadddeeda2054bdfb7fcf3245c52b"
  },
  {
    "url": "assets/js/20.3bcf4499.js",
    "revision": "54117bac995c4a4b7621f1237269e090"
  },
  {
    "url": "assets/js/21.6ad1bc5b.js",
    "revision": "990c5b5388967e3b72687b30339fb402"
  },
  {
    "url": "assets/js/22.36c9f2af.js",
    "revision": "912645127aa7ea7a68c2ac904f009973"
  },
  {
    "url": "assets/js/23.0cd6e03b.js",
    "revision": "eefc43b7f278c737338b6c8bcfb77f31"
  },
  {
    "url": "assets/js/24.afd8b575.js",
    "revision": "07d2e4293c26adf8e2995734054d8db9"
  },
  {
    "url": "assets/js/25.a94f9e62.js",
    "revision": "b8cbeb2f0debf7a9d04e3bc546234b55"
  },
  {
    "url": "assets/js/26.55f8ce0a.js",
    "revision": "105c3dcf6131c9501a28b4990859eb56"
  },
  {
    "url": "assets/js/27.9cd27cd8.js",
    "revision": "c7b13c1c7c0516eb336f3fdce167a1f0"
  },
  {
    "url": "assets/js/28.ecc0692f.js",
    "revision": "4495c6b496a0868fe44ec5caa47dd6c6"
  },
  {
    "url": "assets/js/29.ea004e39.js",
    "revision": "73fe5dbddc75f0222d5c2d6e3115c361"
  },
  {
    "url": "assets/js/3.44e6da7f.js",
    "revision": "ddd29b6c9ec580395b408a40bec0c715"
  },
  {
    "url": "assets/js/30.ebff20ed.js",
    "revision": "7c7cb514cf391f221e40052a05e549bd"
  },
  {
    "url": "assets/js/31.361092bc.js",
    "revision": "8b344567d590108b9026db689fa1d8fd"
  },
  {
    "url": "assets/js/32.ecd74039.js",
    "revision": "60f83d20469d339f6c4faa3602fd0ad8"
  },
  {
    "url": "assets/js/33.21032abe.js",
    "revision": "4d377082b1bf53ce5eee006c0d222f5a"
  },
  {
    "url": "assets/js/34.be942511.js",
    "revision": "f6ceae5aa6d9ec41d643f0e6e666cb40"
  },
  {
    "url": "assets/js/35.6dcd3378.js",
    "revision": "f60650ab110aaa5c6f4194d2d6aeeca8"
  },
  {
    "url": "assets/js/36.a8068938.js",
    "revision": "58993ea3420f300dfa954944bc256fb0"
  },
  {
    "url": "assets/js/37.ea731521.js",
    "revision": "fb46ab8029714a5732abcac86aa5e49e"
  },
  {
    "url": "assets/js/38.c49c24b1.js",
    "revision": "a050599eb64548c3beea27ceda70a004"
  },
  {
    "url": "assets/js/39.ecf1ce5d.js",
    "revision": "b053685da6d0ae1c9c542915be91db87"
  },
  {
    "url": "assets/js/4.9afea848.js",
    "revision": "8a13817401f38676add9ceeca0c8d628"
  },
  {
    "url": "assets/js/40.77021d06.js",
    "revision": "2918d94532f6e5e2061e2f9bc2af4c4a"
  },
  {
    "url": "assets/js/41.74673945.js",
    "revision": "a52c10d029d441373584d916f8e68237"
  },
  {
    "url": "assets/js/42.18c76a04.js",
    "revision": "6c92600f50d28072c37a48ef75b56076"
  },
  {
    "url": "assets/js/43.f6883bf1.js",
    "revision": "b3857ea477c7824f0333371932dae9c2"
  },
  {
    "url": "assets/js/44.d5e987a0.js",
    "revision": "a54775ed28f0937fa4782638e8b5b4e4"
  },
  {
    "url": "assets/js/45.0f831f29.js",
    "revision": "f6d5e1c009b523e4a9bd5cf3d486eb17"
  },
  {
    "url": "assets/js/46.a2581dfa.js",
    "revision": "9a3589085c1403a66dadfd167b2341b8"
  },
  {
    "url": "assets/js/47.d97a4dc5.js",
    "revision": "88612d7a4904af041426a6acc7c42155"
  },
  {
    "url": "assets/js/48.f6c7c66e.js",
    "revision": "5a75bd3cae81949e0f4461f56b045ddb"
  },
  {
    "url": "assets/js/49.7decce0f.js",
    "revision": "4462acc4d78d8bd0b4fbd5138f462d40"
  },
  {
    "url": "assets/js/5.6fceba9b.js",
    "revision": "a4d21cacb08c849c550d5c5e753cf80e"
  },
  {
    "url": "assets/js/50.0d348314.js",
    "revision": "bdbde150b1fd51176294ca1b0515bd89"
  },
  {
    "url": "assets/js/51.f3551550.js",
    "revision": "a77c94a9ceaf6d7e13422eb2ea7b5e7a"
  },
  {
    "url": "assets/js/52.1093ddc1.js",
    "revision": "e056af3a8e499ffe9867b36731f1b698"
  },
  {
    "url": "assets/js/53.b9a501b8.js",
    "revision": "8dad3b8f6d174af83368e0b98ff8e939"
  },
  {
    "url": "assets/js/54.5b930b25.js",
    "revision": "1d2e56d3325efdcfac8055e10ae33b48"
  },
  {
    "url": "assets/js/55.5d4091d2.js",
    "revision": "c0bcfd11e04a8d702edbb1203b9a233e"
  },
  {
    "url": "assets/js/56.a1acb2c3.js",
    "revision": "3602d0101dc54f31e5589f8cd7733a30"
  },
  {
    "url": "assets/js/57.3124639c.js",
    "revision": "875a6c18d40b1abbb355c766dd709a55"
  },
  {
    "url": "assets/js/58.5814f96d.js",
    "revision": "f4fa7cc96dd1479372469562df668e8d"
  },
  {
    "url": "assets/js/59.19e3b55b.js",
    "revision": "898cacc7e9a841e90fb3689bf5e3d378"
  },
  {
    "url": "assets/js/6.035f1f99.js",
    "revision": "f673f1bc2d9e709244e0d86df6648ada"
  },
  {
    "url": "assets/js/60.7be5f555.js",
    "revision": "cc968fa4267845637acd7a30e5561779"
  },
  {
    "url": "assets/js/61.27e3b338.js",
    "revision": "a0245f66272352a38031441e007b8f26"
  },
  {
    "url": "assets/js/62.32e0a145.js",
    "revision": "52f775a4f99ae9457d42cd5aa1411446"
  },
  {
    "url": "assets/js/63.6d478963.js",
    "revision": "3e66dbffd09be7b7fc36094b03a20197"
  },
  {
    "url": "assets/js/64.816b4e6b.js",
    "revision": "23dc621d739b40708add5a303b6d70ba"
  },
  {
    "url": "assets/js/65.b8a13c12.js",
    "revision": "e1c4c9baddde6e62c63a9b27783feb8c"
  },
  {
    "url": "assets/js/66.281cc6a5.js",
    "revision": "31a5072e303e9b90ca89da04d9a24c27"
  },
  {
    "url": "assets/js/67.c3c648bc.js",
    "revision": "3cedd4a6e89544eb57702d9d87f97d82"
  },
  {
    "url": "assets/js/68.bf13c00a.js",
    "revision": "c488e8f2cf8285172ef3c8cb10b9e73d"
  },
  {
    "url": "assets/js/69.b5238b1e.js",
    "revision": "095bff2622e9c993a43a72725d2701f2"
  },
  {
    "url": "assets/js/7.e2947872.js",
    "revision": "2f9285d3b752b7170d836d6d89bac1ad"
  },
  {
    "url": "assets/js/70.c2c93095.js",
    "revision": "7e1c60290f0df33f749321fa4c315c05"
  },
  {
    "url": "assets/js/71.5408b13d.js",
    "revision": "c0e9b075c068429eac55270959ac2721"
  },
  {
    "url": "assets/js/72.412ccfc8.js",
    "revision": "b7c0167aeea8310ba3ac330cd944612b"
  },
  {
    "url": "assets/js/73.13f9174a.js",
    "revision": "4d91a273e14ef4552c7011fbeeeaa844"
  },
  {
    "url": "assets/js/74.ff39e83a.js",
    "revision": "6c77744f78c6739282c45ec3c24fab0f"
  },
  {
    "url": "assets/js/75.4ee71941.js",
    "revision": "11e0442707d55de6a6eb3d3f21382540"
  },
  {
    "url": "assets/js/76.6e689bc7.js",
    "revision": "be628d3bc9be18f23c68cacfd44c425c"
  },
  {
    "url": "assets/js/77.2c3a1cdf.js",
    "revision": "f6cb911e7fd73bdf1e6d29c9e6173b56"
  },
  {
    "url": "assets/js/78.501f150a.js",
    "revision": "11a5e0d033defce8a018e2c71e513fd0"
  },
  {
    "url": "assets/js/79.9ba20235.js",
    "revision": "bcf149c5666a53812f3a14c4d6a94ba7"
  },
  {
    "url": "assets/js/8.3e8ae770.js",
    "revision": "3436cfb28463da306a18d8fa5ee7a550"
  },
  {
    "url": "assets/js/app.6af0b3cf.js",
    "revision": "b178b801ab87170083217f0700a5baad"
  },
  {
    "url": "assets/js/vendors~docsearch.a45ba819.js",
    "revision": "8195f9200cce07cdf1c8f5576a456917"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "c1028cbeccde895bb3d8e0f3068a8c00"
  },
  {
    "url": "frontend/Android.html",
    "revision": "59ea084a2008581c1890dfc16783295d"
  },
  {
    "url": "frontend/cli.html",
    "revision": "8dd34358b8923c1f37ffaa36681bc9a3"
  },
  {
    "url": "frontend/electron.html",
    "revision": "5812d6c7a51e4ef097072aa8505a3687"
  },
  {
    "url": "frontend/Flutter.html",
    "revision": "66c96c7c41c41335bff4997fa6f0d5a4"
  },
  {
    "url": "frontend/HarmonyOs.html",
    "revision": "4064bb16a52132d231803152ea450131"
  },
  {
    "url": "frontend/iOS.html",
    "revision": "4f9582e7ff500779ed9ac5fee8b5c677"
  },
  {
    "url": "frontend/MicroApp.html",
    "revision": "09d5cdbe5886e191d9c2839b4edca922"
  },
  {
    "url": "frontend/MiniApp.html",
    "revision": "122f9d7e438dba483c088664c43c187f"
  },
  {
    "url": "frontend/points.html",
    "revision": "1a40c7f1497c3f58bbbed365b3a4460a"
  },
  {
    "url": "frontend/React.html",
    "revision": "733fb039efa20218598fbc83103dd3cf"
  },
  {
    "url": "frontend/ReactNative.html",
    "revision": "ff9489388ca1992eadb95ca576cba619"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "00221a341de5cf16a9078630c6eb07ba"
  },
  {
    "url": "frontend/tools/index.html",
    "revision": "91e871965787cda7484dcf132672bc10"
  },
  {
    "url": "frontend/tools/Lerna.html",
    "revision": "6c2960fa678a165eb1566ed2fcb736c0"
  },
  {
    "url": "frontend/tools/NPM.html",
    "revision": "5855268ca0325d7ae7cc4c02848ca93d"
  },
  {
    "url": "frontend/tools/nvm.html",
    "revision": "5e3e436c8519d086fab835dcbc7b9deb"
  },
  {
    "url": "frontend/tools/pnpm.html",
    "revision": "83294e748f88b124ac8eff6940354958"
  },
  {
    "url": "frontend/tools/Verdaccio.html",
    "revision": "a62a53ea7aff1280d639350c94c15ac7"
  },
  {
    "url": "frontend/tools/Yarn.html",
    "revision": "d638dda3a60abf6ad871b2d195603ba9"
  },
  {
    "url": "frontend/vue3.html",
    "revision": "7c36a28e3a257cfff5a6f7b2d6398106"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "a16b736133d02ac61d399fc8e596ad79"
  },
  {
    "url": "guide.html",
    "revision": "c2b39383e8139017964c1ead365aecf4"
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
    "revision": "a444ca3cf7d9856c185c6cd47a1906d2"
  },
  {
    "url": "other/example/countup.html",
    "revision": "44b29768da2b976c4c347336998e04df"
  },
  {
    "url": "other/example/image.html",
    "revision": "e5b79330565e4ecf83811ca140c7b85f"
  },
  {
    "url": "other/index.html",
    "revision": "2ee989d1a8eebf3299968b85bb27c12c"
  },
  {
    "url": "other/Java/index.html",
    "revision": "de23c369f17139ca0b3d1b91bdaa7b5d"
  },
  {
    "url": "other/PHP/index.html",
    "revision": "3e29b7dd9bfe3eec038f73d0e4af3a6f"
  },
  {
    "url": "other/产品/index.html",
    "revision": "da75361829fee84739e15d8e9ef25f22"
  },
  {
    "url": "other/算法/index.html",
    "revision": "8e98894c7035f6526488dc96683d9a77"
  },
  {
    "url": "other/设计/index.html",
    "revision": "15fb77cb4084625e7e29eeddec2d70fb"
  },
  {
    "url": "python/basic.html",
    "revision": "74c01271b4da4b6f2f77dd23a5b649b8"
  },
  {
    "url": "python/django.html",
    "revision": "9b0a3ae64c6944fa9860f8dbaf9d5b2a"
  },
  {
    "url": "python/tools.html",
    "revision": "2a8593d8c5211ec8d42766219b501896"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "f9d3f408518e84f779b437ab74e15fef"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "4070591cc3b5c0467a93df78aebc1693"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "bd7cc34f8366f9823a59ff90099ab345"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "e7c662c7465509a2c8cf4843cc5e91a2"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "58aa4ffdcb63332b1681505766b39d1c"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "c6b72630f31b7434f4d3eccea0024e8d"
  },
  {
    "url": "python/深度学习/index.html",
    "revision": "9e225d5c3bba10a1a23e65da22555a4b"
  },
  {
    "url": "tools/centos.html",
    "revision": "21da78d6c155b4ea33828920f27dbeaf"
  },
  {
    "url": "tools/docker.html",
    "revision": "c05d0069c2a7af4d511fd5779cab583c"
  },
  {
    "url": "tools/git.html",
    "revision": "8924a7d837b70c5413a8bca73724a6ea"
  },
  {
    "url": "tools/idea.html",
    "revision": "0bccb761f191740e659dbd2d35743551"
  },
  {
    "url": "tools/index.html",
    "revision": "eda499942a24a1482afb53ab2a0e0576"
  },
  {
    "url": "tools/linux.html",
    "revision": "4a7f58d6f4f48732eba059f8fccc6bfd"
  },
  {
    "url": "tools/mac.html",
    "revision": "0d6997217e3c2175d8854264167b184f"
  },
  {
    "url": "tools/ubuntu.html",
    "revision": "0b96a4e6e59ecabff16398e5e5e6425a"
  },
  {
    "url": "tools/vim.html",
    "revision": "ee05a28eb58811c53400f7bba1e3f8a3"
  },
  {
    "url": "tools/VSCode.html",
    "revision": "0c569b0927b1a7c4d34569bd045e0db5"
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
