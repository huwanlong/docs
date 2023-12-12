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
    "revision": "825b3807f8a51906c21a1d5ff555f437"
  },
  {
    "url": "about.html",
    "revision": "8e8362bb575785e6da4ec5cab167c427"
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
    "url": "assets/js/10.a06447b9.js",
    "revision": "616205dbb9a9dae76e20ae09a2695da1"
  },
  {
    "url": "assets/js/11.3c32c581.js",
    "revision": "bf8670997ab580c54ffc1339ba4a0b52"
  },
  {
    "url": "assets/js/12.b0a404c8.js",
    "revision": "136d3f919b23ca4091d50e90456c1e2e"
  },
  {
    "url": "assets/js/13.e9998838.js",
    "revision": "0e0b9b6558360a02997095b1e3b919bb"
  },
  {
    "url": "assets/js/14.5afb75f4.js",
    "revision": "f1b3d7a9d31e3c0df3b95f0f1a03b5cb"
  },
  {
    "url": "assets/js/15.275aca65.js",
    "revision": "5a5cc35c246c5f060d553a8a7b2f2d33"
  },
  {
    "url": "assets/js/16.22751f59.js",
    "revision": "071d61402d40eac3aa65b1fc04347af5"
  },
  {
    "url": "assets/js/17.900f438a.js",
    "revision": "07b5262a33a52aa3683806240d1d2317"
  },
  {
    "url": "assets/js/18.ea78f88a.js",
    "revision": "4814021152058df9d1982be7412f9067"
  },
  {
    "url": "assets/js/19.66a50c4b.js",
    "revision": "ad496d5f208a02301bc2ddf428ef53eb"
  },
  {
    "url": "assets/js/2.e6903011.js",
    "revision": "7d50b1cfd40d5c6a65adf6d3325e11ed"
  },
  {
    "url": "assets/js/20.79f3ece4.js",
    "revision": "1b49505232ca210d811ee8db4b90bb18"
  },
  {
    "url": "assets/js/21.9f4a6111.js",
    "revision": "8f65e1b2846257d0bc243978728e550d"
  },
  {
    "url": "assets/js/22.fe422689.js",
    "revision": "3957ff2794025d3123d0f6523fb5b6b5"
  },
  {
    "url": "assets/js/23.6785b3f3.js",
    "revision": "a6a83efa057af3be8cee04136e6df375"
  },
  {
    "url": "assets/js/24.aaa78b1a.js",
    "revision": "abeb93edf8dae36874fbf33a946010e8"
  },
  {
    "url": "assets/js/25.1908568a.js",
    "revision": "b3135c5518ba70e4b663370a5e203470"
  },
  {
    "url": "assets/js/26.0e3f75a8.js",
    "revision": "4f781d78f43380b841c824867190a517"
  },
  {
    "url": "assets/js/27.10658199.js",
    "revision": "a48d1ced41457691fea7d8ce2a3c0917"
  },
  {
    "url": "assets/js/28.96ca3e36.js",
    "revision": "202f15a8acea63cf07df4b2b656b0931"
  },
  {
    "url": "assets/js/29.4cc81a12.js",
    "revision": "7aa9753cac3f32ccd01275d47b0500d5"
  },
  {
    "url": "assets/js/3.5bd84dd0.js",
    "revision": "3045a90d4a43814cf64416dd9a361e43"
  },
  {
    "url": "assets/js/30.fd65d95c.js",
    "revision": "a040c05f572c0bdd19b9f4851ee191ec"
  },
  {
    "url": "assets/js/31.94201162.js",
    "revision": "8d6cfdfb084cd4ea330eea0b6c9cc729"
  },
  {
    "url": "assets/js/32.b6b688b5.js",
    "revision": "29ac245b568dabcf7f34d5eea630a884"
  },
  {
    "url": "assets/js/33.5a4f3924.js",
    "revision": "8c676789161d6ddf2fc1ba76071494a0"
  },
  {
    "url": "assets/js/34.a6c64de3.js",
    "revision": "a7b869ce97db95b77d8702cd5ef068e4"
  },
  {
    "url": "assets/js/35.8e385a84.js",
    "revision": "0d7b6806246ec3e68762d5c961893897"
  },
  {
    "url": "assets/js/36.4d2d898d.js",
    "revision": "b567da9a8d532022b9e82154fff39826"
  },
  {
    "url": "assets/js/37.5be2e393.js",
    "revision": "15cd981d31d148e52008acace01f396d"
  },
  {
    "url": "assets/js/38.f1e11d8e.js",
    "revision": "c76b6fcc2aa4e5f7c2e967348d65dbde"
  },
  {
    "url": "assets/js/39.a08dcb23.js",
    "revision": "e3991076034d9a9a574cdeea95ce9b4f"
  },
  {
    "url": "assets/js/4.8ebceb4a.js",
    "revision": "ee3977afc39e07f35da99ebd81b5dde3"
  },
  {
    "url": "assets/js/40.0a6c6c43.js",
    "revision": "ecab320dcf1c86081554662525cb5610"
  },
  {
    "url": "assets/js/41.1ffbfb74.js",
    "revision": "1b669b169e0684803126b747292761c6"
  },
  {
    "url": "assets/js/42.1ec71ac6.js",
    "revision": "7beeeb8c75d0529245411b4d20aa5ec2"
  },
  {
    "url": "assets/js/43.00566102.js",
    "revision": "2556433e4afc088a7cd008210ccce40f"
  },
  {
    "url": "assets/js/44.1342d342.js",
    "revision": "0554fe882f1d7acf2df223578ab4da96"
  },
  {
    "url": "assets/js/45.e10e2dd4.js",
    "revision": "a98a67f4efae94401196e7a88bb15fe3"
  },
  {
    "url": "assets/js/46.619f5516.js",
    "revision": "81468a4eda9795f4ba6c392a6504d2ec"
  },
  {
    "url": "assets/js/47.79136038.js",
    "revision": "00b0ee27609c91b5eada2fb15976840f"
  },
  {
    "url": "assets/js/48.092f3233.js",
    "revision": "578f2606f0bb26e86c32a3b70b2b12d3"
  },
  {
    "url": "assets/js/49.4bcefcc4.js",
    "revision": "6fbf83aebedbef1474472c910f61b802"
  },
  {
    "url": "assets/js/5.f2e29312.js",
    "revision": "45d74084e71d2b0e00ee21247c75834b"
  },
  {
    "url": "assets/js/50.bcd5d0c9.js",
    "revision": "b0c6982454bd95c186205d454a9c587c"
  },
  {
    "url": "assets/js/6.8128a10e.js",
    "revision": "3859f903f132aaa5d85803451da890d4"
  },
  {
    "url": "assets/js/7.3d446cb0.js",
    "revision": "6a59495f2999409b562721c7840203d4"
  },
  {
    "url": "assets/js/8.1e6d2dcf.js",
    "revision": "e7f9f086df28a01bc786f478fc5f9e27"
  },
  {
    "url": "assets/js/9.171d11f1.js",
    "revision": "df6e1a23bac5588d45410cd8d093d939"
  },
  {
    "url": "assets/js/app.a0371bfa.js",
    "revision": "c0c3a9053a16055d43481cc775cd3d8b"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "a6fffd8006a4fa4c1c71eb712f6c17df"
  },
  {
    "url": "frontend/electron.html",
    "revision": "65c0a63ef05aeec1a641841a905676f0"
  },
  {
    "url": "frontend/points.html",
    "revision": "d70003ecaecc408c0bb87e66a00109fa"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "f956c25cffb71eab0ee49947be98dbd4"
  },
  {
    "url": "frontend/tools/index.html",
    "revision": "619efa9661e480dca519e032f370bcae"
  },
  {
    "url": "frontend/tools/Lerna.html",
    "revision": "5b759b833d5120ee8d79073e8b8d67c2"
  },
  {
    "url": "frontend/tools/NPM.html",
    "revision": "98d7462196bcb4068236a3e73285ec95"
  },
  {
    "url": "frontend/tools/nvm.html",
    "revision": "806a4084999e390d1da277ee0b78c141"
  },
  {
    "url": "frontend/tools/pnpm.html",
    "revision": "83755b7c394367804b6611645b3c632a"
  },
  {
    "url": "frontend/tools/Verdaccio.html",
    "revision": "af666d0a7281621b9d11d2d798bb5c98"
  },
  {
    "url": "frontend/tools/Yarn.html",
    "revision": "96e84748570ade6667e5592819549d60"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "44b03dcbe8014f254740d9d8ccabfad4"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "dec46dfec9f9c08f88e84b8fa4a2d418"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "4fd53eb276fb362fe9f22c3e88846364"
  },
  {
    "url": "guide.html",
    "revision": "d5aa1a6c6c15fae4ab16ff59a42849d6"
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
    "revision": "110d5d0200881c39f93e146c899c5a59"
  },
  {
    "url": "other/example/countup.html",
    "revision": "6f9cc0ee92867213f91419075b7f334c"
  },
  {
    "url": "other/example/image.html",
    "revision": "41878194925c3823e1538728dd806d62"
  },
  {
    "url": "other/index.html",
    "revision": "b2e2291e5c287afa4bf73578ac03b1f4"
  },
  {
    "url": "python/basic.html",
    "revision": "33eeff3715bc0de3cc63d919101cbb46"
  },
  {
    "url": "python/django.html",
    "revision": "da241e54fc3dbb7fdab6bccd0bd78ba3"
  },
  {
    "url": "python/tools.html",
    "revision": "d983a511d0062391d23f78cc16e1607c"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "be3c333a860a0173f32754ea762c4cd4"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "6ac6b54fd6a4db1123c74c5c13769648"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "9d86d29983ce5fe610ef3dc6006e6f5b"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "eb2efff9e2e7ab45cda6e41f6a294606"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "004a82fa3be0b37f48e8d4b18e7eba8c"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "27294302fa4595eb06f86acc3a385782"
  },
  {
    "url": "tools/centos.html",
    "revision": "2089a69f5d9aaa2e0802e6627c6da730"
  },
  {
    "url": "tools/docker.html",
    "revision": "50325df5ab61b8301d3c8de066081f92"
  },
  {
    "url": "tools/git.html",
    "revision": "f335a1de64a60ba44bc27d72e89133ac"
  },
  {
    "url": "tools/idea.html",
    "revision": "ae42a817669e22ce3038ccd9c7e997db"
  },
  {
    "url": "tools/index.html",
    "revision": "192d14cf7a7d710748e69c490ae08bb7"
  },
  {
    "url": "tools/linux.html",
    "revision": "e2b81ed76716389ebd9c63c313847be6"
  },
  {
    "url": "tools/mac.html",
    "revision": "9a92b5febe7a60c158ea821ca5f23552"
  },
  {
    "url": "tools/ubuntu.html",
    "revision": "a27608f8d669b3ca506bd54a3e3861fc"
  },
  {
    "url": "tools/vim.html",
    "revision": "2499bd12a99d6e565cc8d7cc9bbcf014"
  },
  {
    "url": "tools/VS Code.html",
    "revision": "96a5a775102e802da8b0ade12cb6a996"
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
