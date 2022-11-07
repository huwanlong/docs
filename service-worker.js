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
    "revision": "a3099540b60396076acd93297430614d"
  },
  {
    "url": "about.html",
    "revision": "6da6861a1a08b75c92279e8cc197af5e"
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
    "url": "assets/img/wechat.4de542c4.png",
    "revision": "4de542c4c13071232f7d7f0eed1cf754"
  },
  {
    "url": "assets/img/wechat.png",
    "revision": "4de542c4c13071232f7d7f0eed1cf754"
  },
  {
    "url": "assets/js/10.83bd4d1a.js",
    "revision": "bc415587ec7354e121928d4ad913821f"
  },
  {
    "url": "assets/js/11.974fe548.js",
    "revision": "28b6934286aa07b279b4d008cbd0683a"
  },
  {
    "url": "assets/js/12.da2c3cc5.js",
    "revision": "d023b1668062c11a1d9e255d9729d957"
  },
  {
    "url": "assets/js/13.835efcff.js",
    "revision": "614a97190e8161911578979ef67e39b8"
  },
  {
    "url": "assets/js/14.4a1c7d2e.js",
    "revision": "6cdcfb57dbfb3226a8db0631bf36d714"
  },
  {
    "url": "assets/js/15.26d47fca.js",
    "revision": "01df57330792c6babbaf9f635c6605f4"
  },
  {
    "url": "assets/js/16.e633a24b.js",
    "revision": "12b84af8efba47720a6a27ebae68ab96"
  },
  {
    "url": "assets/js/17.8525d56d.js",
    "revision": "f783f39c7ccd51b6275b01493a10e201"
  },
  {
    "url": "assets/js/18.8ec81303.js",
    "revision": "9797a71111316844a400d577092ce1f1"
  },
  {
    "url": "assets/js/19.fc1e8478.js",
    "revision": "4a3eee812de6ec429b05d8ffda3d755c"
  },
  {
    "url": "assets/js/2.fb950ba4.js",
    "revision": "8788225561acb721be9fc79af92ec8b4"
  },
  {
    "url": "assets/js/20.f6cc9131.js",
    "revision": "903e6222cbf1cfa1cf56ce093e0d789d"
  },
  {
    "url": "assets/js/21.6abf21d8.js",
    "revision": "f467b917b19055bc5d6c0f789bba84e5"
  },
  {
    "url": "assets/js/22.79691652.js",
    "revision": "8888215d5ec176c7497a2fdbf1477861"
  },
  {
    "url": "assets/js/23.d57513eb.js",
    "revision": "2103bbf176d54d78a16cdd6f406c0c9b"
  },
  {
    "url": "assets/js/24.40c31a6e.js",
    "revision": "a6c48d324a362f03dcd96a5ccf97c99a"
  },
  {
    "url": "assets/js/25.0d0086dd.js",
    "revision": "3a6a4828ad1d1108188f4d8d2e5e9c2c"
  },
  {
    "url": "assets/js/26.4f520062.js",
    "revision": "180d8ec5b56a3d96e16c432981edb044"
  },
  {
    "url": "assets/js/27.2c57c609.js",
    "revision": "b45eb3ba6f712e0fc8d225908e563127"
  },
  {
    "url": "assets/js/28.36ef1fbf.js",
    "revision": "409f4b67d00cbd2b6732af896d0a6f00"
  },
  {
    "url": "assets/js/29.0c1f4330.js",
    "revision": "932f5a79a64f9b81ffdc8387f434e247"
  },
  {
    "url": "assets/js/3.1065d00d.js",
    "revision": "9f7d9a6e5694d71b3c47557b7f5eb8b4"
  },
  {
    "url": "assets/js/30.5ee2ce38.js",
    "revision": "9de1a7822edd5d9074e1c1ce67290218"
  },
  {
    "url": "assets/js/31.e6949bf1.js",
    "revision": "4c92c5ee46bfc1549c37c0a4e43ba2e2"
  },
  {
    "url": "assets/js/32.fa7a635c.js",
    "revision": "8ae2a01d559db3b9fe51e0f31534cfd6"
  },
  {
    "url": "assets/js/33.01bf3364.js",
    "revision": "9ff792075bd6f60c9228adf528f1bb4d"
  },
  {
    "url": "assets/js/34.3087a28c.js",
    "revision": "e66a4a92d4ce67ca25dc548a83f1bc30"
  },
  {
    "url": "assets/js/35.7bc4a18d.js",
    "revision": "24af538e1b3d46b62cd0bc4b112bbb0e"
  },
  {
    "url": "assets/js/36.7b508837.js",
    "revision": "da23c84913489be100b3648070e07b35"
  },
  {
    "url": "assets/js/37.6a67d8d0.js",
    "revision": "b0012a6105f0c32165b4ad7be1e6646d"
  },
  {
    "url": "assets/js/38.f0693180.js",
    "revision": "321cc2320be8f009b76e7d10379ee3c4"
  },
  {
    "url": "assets/js/39.436db36b.js",
    "revision": "df181e4390006a339b316e1c377efca0"
  },
  {
    "url": "assets/js/4.afa35d7b.js",
    "revision": "09de8873d886280ad04ff573835bfb45"
  },
  {
    "url": "assets/js/40.4050bed1.js",
    "revision": "b80389844363a92015bd80f1d0db6707"
  },
  {
    "url": "assets/js/41.ae01e55a.js",
    "revision": "a028f7e668d6caeb9bbb0e950c68b7af"
  },
  {
    "url": "assets/js/42.ed6540d0.js",
    "revision": "87adc16a44bcc18f05de8204a4c5d0ce"
  },
  {
    "url": "assets/js/43.73b9afbd.js",
    "revision": "df86be37dca2a5b2b81d4be76664dd9f"
  },
  {
    "url": "assets/js/44.e12805a7.js",
    "revision": "288a3e8b219ec070540b40406ba593a9"
  },
  {
    "url": "assets/js/45.8d1a27dc.js",
    "revision": "fc54de8b847bab8be13df9fbee348f9e"
  },
  {
    "url": "assets/js/46.60487b19.js",
    "revision": "20bbaf73b781d48d3a52d0a657a5d4c3"
  },
  {
    "url": "assets/js/47.b21953a1.js",
    "revision": "7409422a64fc3315ff7628192b61e7f8"
  },
  {
    "url": "assets/js/48.fa8a16c6.js",
    "revision": "c3d57bc03e0be495998b3af7bfbb1f29"
  },
  {
    "url": "assets/js/49.637d066b.js",
    "revision": "036440ae6d248e2701f7e20a2bbb5545"
  },
  {
    "url": "assets/js/5.e16250bb.js",
    "revision": "74fe95124013dea535df20cd9d1e7e46"
  },
  {
    "url": "assets/js/50.590bf31a.js",
    "revision": "6ed0afb3d054325114d3054b6eaf0f22"
  },
  {
    "url": "assets/js/6.c65b1785.js",
    "revision": "2f2b45d186700354716dd8d72094293b"
  },
  {
    "url": "assets/js/7.4ef3c7d7.js",
    "revision": "f9a7037b83d0368834a3b92b34e313a9"
  },
  {
    "url": "assets/js/8.5737d8a4.js",
    "revision": "6da907261a801ddbfe6720e675367d56"
  },
  {
    "url": "assets/js/9.ba0a0d28.js",
    "revision": "56df74ecb7b45cebc7ad91280abab09e"
  },
  {
    "url": "assets/js/app.4cf84100.js",
    "revision": "f0b166541f448cc86cabca375130ead1"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "f6e5cf76cd78f913143f8ba32986fe15"
  },
  {
    "url": "frontend/electron.html",
    "revision": "a764b4fb66e7a5b98a33ae11e31266b2"
  },
  {
    "url": "frontend/points.html",
    "revision": "f123708f54011043b10d11e88a52a5a4"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "9048934190b169f6034548eeac741400"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "28af1b6c7c2c14f0dbd2781c0009365a"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "4e336223621e96904732b2513f28278c"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "57ede273484862c59034b42175069cf8"
  },
  {
    "url": "guide.html",
    "revision": "3238fe0588ce067ecd1f0f7c870e4b3b"
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
    "revision": "c208d9f7c51d6a2817c939a84d47319f"
  },
  {
    "url": "other/c.html",
    "revision": "359371884fe32e54052e1657b45523b2"
  },
  {
    "url": "other/cook.html",
    "revision": "1d9e0b493ef643f4888988512bc91436"
  },
  {
    "url": "other/countup.html",
    "revision": "85da792c596100c4e37a050a2e573c82"
  },
  {
    "url": "other/english.html",
    "revision": "d0a977ab4be623f28e62ce259d434611"
  },
  {
    "url": "other/image.html",
    "revision": "40fb3fe82674ec62392e475d356b49bf"
  },
  {
    "url": "other/index.html",
    "revision": "ae4b973380ead39661ec0c47f618bd32"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "dca6b50b654beb5308c2b6ecbfdaf1a5"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "636faa5a8980ff57d337e1920c241fb0"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "4d402a4763416e4d99e050c3461d1123"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "f1d7628db911a7acf908ca41f407dd08"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "8c4b0066aa89d161945f9632b890288d"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "9248281b4d7364db1b17eac68d05db56"
  },
  {
    "url": "tools/frontend/index.html",
    "revision": "764754d2892a2d4e94ee7d0f5125f5b7"
  },
  {
    "url": "tools/frontend/Lerna.html",
    "revision": "d4d6013492428fbe2307468781aa62d7"
  },
  {
    "url": "tools/frontend/NPM.html",
    "revision": "534281e722b2f6b7df348584c4aed7be"
  },
  {
    "url": "tools/frontend/nvm.html",
    "revision": "7f81d5d6465769d3c2c06c8fb35cdf7c"
  },
  {
    "url": "tools/frontend/Verdaccio.html",
    "revision": "8cc1fd0fffd5a1a0f4869e922e5bf8e0"
  },
  {
    "url": "tools/frontend/VS Code.html",
    "revision": "1b740626cca3445fa2d9dcb15f3e7b0e"
  },
  {
    "url": "tools/frontend/Yarn.html",
    "revision": "d49a08dedcb0a64a9aa9de914192a17c"
  },
  {
    "url": "tools/python/anaconda.html",
    "revision": "19eb4d4b6620b05cf338478d6c2f09fe"
  },
  {
    "url": "tools/python/index.html",
    "revision": "850ec08644f3573a9fbf80c55a4314cf"
  },
  {
    "url": "tools/python/pip.html",
    "revision": "0ae1015e87ae86c2fbeb9306981900ed"
  },
  {
    "url": "tools/python/pyenv.html",
    "revision": "dd1e6b001afe418bd07bc3d6db8bd1be"
  },
  {
    "url": "tools/system/docker.html",
    "revision": "5a4e9cb666c07a4ab87fe2fab5b50efd"
  },
  {
    "url": "tools/system/git.html",
    "revision": "97e4c96e374addf2c87253560e8cf03d"
  },
  {
    "url": "tools/system/index.html",
    "revision": "73add113fe735c68ccc7e844df86eb85"
  },
  {
    "url": "tools/system/linux.html",
    "revision": "217d4bfad4bc0d3e3b30178b91382d67"
  },
  {
    "url": "tools/system/ubuntu.html",
    "revision": "45d94077a144961ed86f42c13d6b64b3"
  },
  {
    "url": "tools/system/vim.html",
    "revision": "fba9d5ea418b7df748609347db7d1a68"
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
