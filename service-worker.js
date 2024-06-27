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
    "revision": "775e07ac7c8d0c6b8e808d2c177e6c89"
  },
  {
    "url": "about.html",
    "revision": "aa868ccc1037a9ce337044fcae5d55f6"
  },
  {
    "url": "app.png",
    "revision": "9ea40a18fbbd5e1562c5bf9607d0b1eb"
  },
  {
    "url": "assets/css/0.styles.a48934a1.css",
    "revision": "6608814c92bceb16b276e7a0a360fd97"
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
    "url": "assets/js/1.b1ef3f4b.js",
    "revision": "25a64e7d9ee97236539bab3b26eb429b"
  },
  {
    "url": "assets/js/11.2081239d.js",
    "revision": "b18163349107e61a7cd393dc38e81e8b"
  },
  {
    "url": "assets/js/12.63d6fcdb.js",
    "revision": "8b5f062e9415b5e2414608aa687ae789"
  },
  {
    "url": "assets/js/13.d21da585.js",
    "revision": "4d7175340769c9d2b4899aaade7e4d38"
  },
  {
    "url": "assets/js/14.6148f91e.js",
    "revision": "ba01963de66a09b2f23e8f64523efcaf"
  },
  {
    "url": "assets/js/15.63a3fb6b.js",
    "revision": "ca92172be2b99066a5b69efbc57b805c"
  },
  {
    "url": "assets/js/16.a8765973.js",
    "revision": "48da51c40cf04a365956b39e91eea6d5"
  },
  {
    "url": "assets/js/17.a88bc018.js",
    "revision": "a88e71a76859a55b2fcc2f4b0957abf3"
  },
  {
    "url": "assets/js/18.afa83e6e.js",
    "revision": "8969ba79b13d0eb177c8a2a2423f2819"
  },
  {
    "url": "assets/js/19.41a21b0c.js",
    "revision": "04da1d7a2eb96c69e3dbb06e285147cc"
  },
  {
    "url": "assets/js/2.fd2e74f7.js",
    "revision": "c0f5386767b51b986734deca727c3ed3"
  },
  {
    "url": "assets/js/20.3ea9e8ea.js",
    "revision": "6a8db6748c39b580a0fd8b39b42ac1f4"
  },
  {
    "url": "assets/js/21.5cd3de4a.js",
    "revision": "522c6f49c531fffcf6fdc6b9e9a5a65c"
  },
  {
    "url": "assets/js/22.5ed7a00c.js",
    "revision": "4f2bdc6a64034dcdbcb2a2271453607a"
  },
  {
    "url": "assets/js/23.0414bdc4.js",
    "revision": "cf36bb3a159250cdffb06dbdc39008b6"
  },
  {
    "url": "assets/js/24.ddbf449c.js",
    "revision": "c4abd5d9ce283dfa4e579135bb7c51b2"
  },
  {
    "url": "assets/js/25.fb1cf4ca.js",
    "revision": "3fe4dd34cb528e4dc31518548befa172"
  },
  {
    "url": "assets/js/26.0db6975e.js",
    "revision": "2c4054ffadf22faefe346ea9149707c9"
  },
  {
    "url": "assets/js/27.ae02f804.js",
    "revision": "13870501229505b8c793a3c17016845d"
  },
  {
    "url": "assets/js/28.1e5fe39c.js",
    "revision": "86bf88c5d3830505b32b15a0512a4644"
  },
  {
    "url": "assets/js/29.9cdf00cb.js",
    "revision": "3895a32b90480a7e39ebf63d85fd0444"
  },
  {
    "url": "assets/js/3.b5700252.js",
    "revision": "b6f0c50aa586e003d01867ec984d33ac"
  },
  {
    "url": "assets/js/30.5a3319df.js",
    "revision": "75ed8be31039565e6b684953db021740"
  },
  {
    "url": "assets/js/31.9c09fdfb.js",
    "revision": "4127b30127a4a1b6ca8c7bd1196c3bdf"
  },
  {
    "url": "assets/js/32.169d00b2.js",
    "revision": "bde5abfdcf34f52666547e2a7237cced"
  },
  {
    "url": "assets/js/33.16afeb31.js",
    "revision": "1098f770b22382f9ac543902e4d2a5af"
  },
  {
    "url": "assets/js/34.04d058a4.js",
    "revision": "f6ceae5aa6d9ec41d643f0e6e666cb40"
  },
  {
    "url": "assets/js/35.acba537f.js",
    "revision": "cc4e7f43a96717f201bebd33bed69fd5"
  },
  {
    "url": "assets/js/36.6424be1f.js",
    "revision": "58993ea3420f300dfa954944bc256fb0"
  },
  {
    "url": "assets/js/37.7691caf7.js",
    "revision": "e783ed37885e22b3ec8e027f743bf33c"
  },
  {
    "url": "assets/js/38.d6b68308.js",
    "revision": "0ad5fc25e553aeb4351c3ef167ee8a0b"
  },
  {
    "url": "assets/js/39.5fbec70c.js",
    "revision": "11e1ef02c0334eb73c2883bac80d0b48"
  },
  {
    "url": "assets/js/4.b98455f4.js",
    "revision": "85ad84889ad2a9b4fba21c4ec79fe2f2"
  },
  {
    "url": "assets/js/40.6510554f.js",
    "revision": "9f148eaaa242905d053ff4f2282e0634"
  },
  {
    "url": "assets/js/41.ce3f78d1.js",
    "revision": "821cd9902234769bd2fbcce5f90f64c6"
  },
  {
    "url": "assets/js/42.9d3eca41.js",
    "revision": "313439cfdcbd5f6045953ce93e47ee64"
  },
  {
    "url": "assets/js/43.9feac5b4.js",
    "revision": "f5d12c91a4d26e7886fadc7c804d68a9"
  },
  {
    "url": "assets/js/44.32eb2fe0.js",
    "revision": "ad4966eda1b83cd1966475091dd1efd0"
  },
  {
    "url": "assets/js/45.875eaa59.js",
    "revision": "bbce693be2119d6aae3fac091b5b37f9"
  },
  {
    "url": "assets/js/46.380b7900.js",
    "revision": "cff1841cd45c43baa1e32975f6e3c751"
  },
  {
    "url": "assets/js/47.499061b9.js",
    "revision": "88612d7a4904af041426a6acc7c42155"
  },
  {
    "url": "assets/js/48.72a8fe79.js",
    "revision": "5a75bd3cae81949e0f4461f56b045ddb"
  },
  {
    "url": "assets/js/49.0a6cb515.js",
    "revision": "4462acc4d78d8bd0b4fbd5138f462d40"
  },
  {
    "url": "assets/js/5.9962e2a3.js",
    "revision": "d1722d807df48e5f6b075356b73de6f9"
  },
  {
    "url": "assets/js/50.e0d2895e.js",
    "revision": "2de6c67b8a2fa6378fdd0ca4847c23f0"
  },
  {
    "url": "assets/js/51.3e610818.js",
    "revision": "3517c460d8853c0a59a66274681f119b"
  },
  {
    "url": "assets/js/52.f55af089.js",
    "revision": "02199b653f7d21d09e991e3d227f1655"
  },
  {
    "url": "assets/js/53.56dafd15.js",
    "revision": "427c3a265c3537fea1f99e5abebc1966"
  },
  {
    "url": "assets/js/54.5c708c18.js",
    "revision": "3cfcbdb5782f8f5937c532517aeee734"
  },
  {
    "url": "assets/js/55.06eed078.js",
    "revision": "1c889bab7a22f569db27b7765738bfb8"
  },
  {
    "url": "assets/js/56.8d3bb1a1.js",
    "revision": "24ff787994f1486594ea44f647c75def"
  },
  {
    "url": "assets/js/57.746c5664.js",
    "revision": "875a6c18d40b1abbb355c766dd709a55"
  },
  {
    "url": "assets/js/58.8aa9db39.js",
    "revision": "bfad8abfcb72fae9802cad7a96331d4b"
  },
  {
    "url": "assets/js/59.1570b3e1.js",
    "revision": "2248b9ed10e43d869556c170de0d02e3"
  },
  {
    "url": "assets/js/6.4ff94a19.js",
    "revision": "20087b803475eb3dc7fbc0371f53d042"
  },
  {
    "url": "assets/js/60.edff6b3f.js",
    "revision": "924b5fa7648cda3d691a217a70f40b2c"
  },
  {
    "url": "assets/js/61.71b645a0.js",
    "revision": "08c9c0a4b384c30279865a7dc8ecbe02"
  },
  {
    "url": "assets/js/62.ce773a2d.js",
    "revision": "67cb8572a293ed488ed3b9aa1faddb88"
  },
  {
    "url": "assets/js/63.f0f23745.js",
    "revision": "39b6155cb383c857d1c99db3862ff837"
  },
  {
    "url": "assets/js/64.afd15636.js",
    "revision": "23dc621d739b40708add5a303b6d70ba"
  },
  {
    "url": "assets/js/65.32939ed5.js",
    "revision": "f2883a01145415039d753f7cf2306e3e"
  },
  {
    "url": "assets/js/66.c8688a2d.js",
    "revision": "94b5d99e4cee453466740f46f2321d9a"
  },
  {
    "url": "assets/js/67.2d4c25ff.js",
    "revision": "4ec90b5104ca2dd9d86157f402f1942d"
  },
  {
    "url": "assets/js/68.907688bf.js",
    "revision": "aaf60d95c6e8ee64b25fbad00717e803"
  },
  {
    "url": "assets/js/69.5be14421.js",
    "revision": "4598234f5282bc57916ec34784f20213"
  },
  {
    "url": "assets/js/7.34a66f62.js",
    "revision": "5f3727df93d7833ab23cdc987aaf3c28"
  },
  {
    "url": "assets/js/70.4da675b8.js",
    "revision": "7b69a6dc752b775204b30ed49f0e6dbd"
  },
  {
    "url": "assets/js/71.b6049211.js",
    "revision": "90978a467c0fd3d26e429d41a2094f9a"
  },
  {
    "url": "assets/js/72.2e754cb2.js",
    "revision": "6e5a6c585b010cb90fece398196e616f"
  },
  {
    "url": "assets/js/73.1b556a7d.js",
    "revision": "498afb366849f120b490f66f00ba1d36"
  },
  {
    "url": "assets/js/74.d5aee6b2.js",
    "revision": "5ecea541305f4f7beb4d7434e060bc14"
  },
  {
    "url": "assets/js/75.9ef9f6b0.js",
    "revision": "2a7dce20f35c3cbfd900dd07c74ea99a"
  },
  {
    "url": "assets/js/76.69250eba.js",
    "revision": "af23dc1a7d82e263fa32371b08a336ff"
  },
  {
    "url": "assets/js/77.f1cc074e.js",
    "revision": "f57546e8d2dd0750e8d69d01d6d78ff3"
  },
  {
    "url": "assets/js/78.bf8d0e86.js",
    "revision": "79af8dfe321a329e703b6a98e5f54f98"
  },
  {
    "url": "assets/js/79.e87344e7.js",
    "revision": "31e6b707a6e8f4574ba4643b9769df95"
  },
  {
    "url": "assets/js/8.60e3e766.js",
    "revision": "92da691e6517943163619754dad95d7e"
  },
  {
    "url": "assets/js/app.a0e82791.js",
    "revision": "ee7141540bd2191e5bcbbd67f19f1f20"
  },
  {
    "url": "assets/js/vendors~docsearch.26f41c14.js",
    "revision": "e3adfac55021ea042846e5bc5f98d977"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "14c810b7cfb78601fd6806dcda1b511f"
  },
  {
    "url": "frontend/Android.html",
    "revision": "922299af95e441584bd2f43b865fd3e7"
  },
  {
    "url": "frontend/cli.html",
    "revision": "e74a1a9be8f74f2d9f3d83a617d023bf"
  },
  {
    "url": "frontend/electron.html",
    "revision": "3bd67cef23f2321629aa905facd28b21"
  },
  {
    "url": "frontend/Flutter.html",
    "revision": "51559ebc7ef3a72cd3303a6c73b50a44"
  },
  {
    "url": "frontend/HarmonyOs.html",
    "revision": "c6196710d0d1150e1449b4eb2c09e559"
  },
  {
    "url": "frontend/iOS.html",
    "revision": "8772d99026cf62bdc0ce310ee2fb17e1"
  },
  {
    "url": "frontend/MicroApp.html",
    "revision": "5b39c099168d2310268e3c13fb5768fb"
  },
  {
    "url": "frontend/MiniApp.html",
    "revision": "3d4fc87cab49608a2f6eb2dc2a994786"
  },
  {
    "url": "frontend/points.html",
    "revision": "d7122df6cdff71397336745555ce5495"
  },
  {
    "url": "frontend/React.html",
    "revision": "686103555c6dee8c9eb0e401c9cd154f"
  },
  {
    "url": "frontend/ReactNative.html",
    "revision": "5c89e02c5f9ecbe44f891f6aaae01e79"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "5eed88b88f6557e8bb65ae49d48d96ef"
  },
  {
    "url": "frontend/tools/index.html",
    "revision": "e2d23c0c88c7dd9f75376a62c5449fc7"
  },
  {
    "url": "frontend/tools/Lerna.html",
    "revision": "7b79f88d113958ae62caba47554a9661"
  },
  {
    "url": "frontend/tools/NPM.html",
    "revision": "739918c4bafdfa05e6cd022a668653fc"
  },
  {
    "url": "frontend/tools/nvm.html",
    "revision": "e44fe2bd575997ebc8ce1cbba9aa8c1b"
  },
  {
    "url": "frontend/tools/pnpm.html",
    "revision": "a812cbd3922fee07cc713c8954939aa9"
  },
  {
    "url": "frontend/tools/Verdaccio.html",
    "revision": "ffba9990cd2aec7c085b93ed853b1088"
  },
  {
    "url": "frontend/tools/Yarn.html",
    "revision": "17c82083a54b3c78be913a2800303ff0"
  },
  {
    "url": "frontend/vue3.html",
    "revision": "6c8a3b2de7e26e38eaea3e1524cb3daf"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "f73b7da4de44cd3afcdc1c6f3541da02"
  },
  {
    "url": "guide.html",
    "revision": "089b42ee4827671cca10c999efdb341b"
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
    "revision": "5fab7440bb578fc8b90626215c4d6d61"
  },
  {
    "url": "other/example/countup.html",
    "revision": "c3c0a67d99b302bef96fe5925a72e2b5"
  },
  {
    "url": "other/example/image.html",
    "revision": "cbbce5682482ee14405f27d87076d5d4"
  },
  {
    "url": "other/index.html",
    "revision": "ec73cdfaa519291d13f28eea0e4a928e"
  },
  {
    "url": "other/Java/index.html",
    "revision": "004df7d5bb20a8fe403f7a00f8c78c80"
  },
  {
    "url": "other/PHP/index.html",
    "revision": "24f72447eed3fe84c6a9fe483286850d"
  },
  {
    "url": "other/产品/index.html",
    "revision": "3edd029d577e961a0014118f63a472fc"
  },
  {
    "url": "other/算法/index.html",
    "revision": "229d534ad022313747467e20ca5a4b36"
  },
  {
    "url": "other/设计/index.html",
    "revision": "70493ac01a30941e279416a0c3664dc8"
  },
  {
    "url": "python/basic.html",
    "revision": "2519acc65466dcd328497610310d5cf4"
  },
  {
    "url": "python/django.html",
    "revision": "76b43630afae334048ebf0f7715121c4"
  },
  {
    "url": "python/tools.html",
    "revision": "450e71701e7fe255648660d20cb237a8"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "e5537a26dc8c68a9eb604bfacbdcaa27"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "a88a23f04c782c6223d48dc5a43569f9"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "e8818d9839af2f47d2981b86c0ba5e96"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "998eb0c286ab1d77d8ed4ef35e08592b"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "458dddcd9c0cdaa0dbc45c8a2d20483c"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "4cc0824b3e56d9ebb7117d527b8ff718"
  },
  {
    "url": "python/深度学习/index.html",
    "revision": "73f706b571ba17407aa03100652405e9"
  },
  {
    "url": "tools/centos.html",
    "revision": "750dc91c7605d45e898fda968f5facc1"
  },
  {
    "url": "tools/docker.html",
    "revision": "c5ad4cf459d63fda32e4e9820c5be9d3"
  },
  {
    "url": "tools/git.html",
    "revision": "cc0f4fb92527d7aaee3b656dabc852ed"
  },
  {
    "url": "tools/idea.html",
    "revision": "c466e54eda510ce4c0e509ec8ce60004"
  },
  {
    "url": "tools/index.html",
    "revision": "a124235995cf1782afbdae1a84fc4985"
  },
  {
    "url": "tools/linux.html",
    "revision": "1ddc8d3a214124bd37fdd0b296f0cd8d"
  },
  {
    "url": "tools/mac.html",
    "revision": "ed1561c4288128dc97386abdee5ce5f7"
  },
  {
    "url": "tools/ubuntu.html",
    "revision": "27d77b30e63fa5c9169fd37fd021d74e"
  },
  {
    "url": "tools/vim.html",
    "revision": "7f909132a6322b2a74c507df70efbecb"
  },
  {
    "url": "tools/VSCode.html",
    "revision": "a8b90ee123c9c61c09b2d8cb10eec9a1"
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
