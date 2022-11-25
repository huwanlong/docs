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
    "revision": "54b536e9d732408837ecfd8d2cacaa9b"
  },
  {
    "url": "about.html",
    "revision": "1416c57d26d4709bb201572c51176f7a"
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
    "url": "assets/js/10.b269a061.js",
    "revision": "55754a18450f3369c892c75f44bd4cd4"
  },
  {
    "url": "assets/js/11.777306f6.js",
    "revision": "39ba7c8af2922db0e204a7a176aac753"
  },
  {
    "url": "assets/js/12.255e9867.js",
    "revision": "bc8b4204fc0c0b43b498c963f14a7386"
  },
  {
    "url": "assets/js/13.7425e519.js",
    "revision": "3fddaeb9f21354af0177dbca47dff156"
  },
  {
    "url": "assets/js/14.ea5b26f5.js",
    "revision": "bd1c11f58e79c79d0eb74b379eecf474"
  },
  {
    "url": "assets/js/15.4f0ba5f2.js",
    "revision": "60a4f30b6f416ac80074edaf9164ba0a"
  },
  {
    "url": "assets/js/16.eaa88491.js",
    "revision": "5bc1fe648d1c0d05a31bc1cbafb57f93"
  },
  {
    "url": "assets/js/17.4c6e5e4d.js",
    "revision": "0c22d27e7963195d7742ec339fba6813"
  },
  {
    "url": "assets/js/18.b44d32bb.js",
    "revision": "78640b3c3bd106bdb70bbe3fde492ea4"
  },
  {
    "url": "assets/js/19.f8577fec.js",
    "revision": "514194a7eba81221aefb3fc9c9a14e2a"
  },
  {
    "url": "assets/js/2.23b71ba4.js",
    "revision": "3bbfc7bb79ce079d21fd86c69ff61cd4"
  },
  {
    "url": "assets/js/20.4c939ca6.js",
    "revision": "94e67ae15e4020ce852be0b9daa41bad"
  },
  {
    "url": "assets/js/21.66a9b6a8.js",
    "revision": "c1241c9f6121fe752d61bf52a5f13c39"
  },
  {
    "url": "assets/js/22.7c648a86.js",
    "revision": "761f3e96f307ba9c9bf6e1bcc4fce49f"
  },
  {
    "url": "assets/js/23.ae144767.js",
    "revision": "a20b445593b0f1edc9b5a2a7d4ff5272"
  },
  {
    "url": "assets/js/24.4778946e.js",
    "revision": "8109bc9fd36048b4ca8bf7f255ea0b60"
  },
  {
    "url": "assets/js/25.d1f6d340.js",
    "revision": "612468920391394c3955c2df0ffa4d2f"
  },
  {
    "url": "assets/js/26.0ba6c816.js",
    "revision": "d83a89decb8f287c0571b19ae3d7fd3b"
  },
  {
    "url": "assets/js/27.4f7007f4.js",
    "revision": "457cc139bff9d124d0f0dc4f21bd830d"
  },
  {
    "url": "assets/js/28.c85dda87.js",
    "revision": "f4c5fbc986ef3e60f68164913babf812"
  },
  {
    "url": "assets/js/29.462d19fc.js",
    "revision": "7f6b0e1d3f5dd5d92f6571013c75ec3a"
  },
  {
    "url": "assets/js/3.8e2ee442.js",
    "revision": "bb2c44534f8fd91e5e362bc3ba2e6b26"
  },
  {
    "url": "assets/js/30.2e1f5cd7.js",
    "revision": "5a31bcda68f0bdcd82e45c49f20b314f"
  },
  {
    "url": "assets/js/31.1ffd120a.js",
    "revision": "8d654118deb5d254b2837489d482e50c"
  },
  {
    "url": "assets/js/32.266f8799.js",
    "revision": "9f51d3bd515700b3f3c54cc396a7716b"
  },
  {
    "url": "assets/js/33.48d1f296.js",
    "revision": "5bc41a77017c02582f2a980346b10932"
  },
  {
    "url": "assets/js/34.45465f84.js",
    "revision": "1eb6dbec1e3d867e9ae9ff1bfe9b4dda"
  },
  {
    "url": "assets/js/35.4750d415.js",
    "revision": "2ccc6e3ae886e380ee15dea0261f5c92"
  },
  {
    "url": "assets/js/36.2f168a04.js",
    "revision": "d6e48553573e603decc7f88ebea43233"
  },
  {
    "url": "assets/js/37.6252b436.js",
    "revision": "211adcaba77c57bc323881df7ff5e245"
  },
  {
    "url": "assets/js/38.20eea1e0.js",
    "revision": "6b86284095083007952c2a24a0dc8a00"
  },
  {
    "url": "assets/js/39.814f6f7e.js",
    "revision": "791ebf26ea6aaff088d21e3f6c57b43a"
  },
  {
    "url": "assets/js/4.8b632220.js",
    "revision": "68d18914f53d0ad7706dd892f40e9f54"
  },
  {
    "url": "assets/js/40.b17129fd.js",
    "revision": "7a760418f375a4d3fc4f06f7141cbf70"
  },
  {
    "url": "assets/js/41.2c8db1e6.js",
    "revision": "d5147e1384200b0b74285d1c2e0589ec"
  },
  {
    "url": "assets/js/42.fa248ccc.js",
    "revision": "3107c59257ab53fa8196b531c3df2fd7"
  },
  {
    "url": "assets/js/43.710d29f5.js",
    "revision": "3d9775a39ecb5571f49310ef30ccabfe"
  },
  {
    "url": "assets/js/44.ee72a960.js",
    "revision": "b47dae12c1af7deef4810c88fe23b6ea"
  },
  {
    "url": "assets/js/45.7c3e9179.js",
    "revision": "2d9d34d9305ebd955f14bb781405fe0b"
  },
  {
    "url": "assets/js/46.2df82552.js",
    "revision": "fceac6c40a7020e2d83829d03766f6db"
  },
  {
    "url": "assets/js/47.a715b849.js",
    "revision": "2f53f3f038a0fc182f101608cf5cc6ce"
  },
  {
    "url": "assets/js/48.6a932d87.js",
    "revision": "b879b2aaf9bc622da7a612c5a402320b"
  },
  {
    "url": "assets/js/49.b7003438.js",
    "revision": "c92713b6a2d303243a86b53367d8fae1"
  },
  {
    "url": "assets/js/5.a497d5b5.js",
    "revision": "98d7e15ea92e893cd916dff4471b3bd4"
  },
  {
    "url": "assets/js/50.fb379eca.js",
    "revision": "95703a9db77a777ea51a1b285c1a44ec"
  },
  {
    "url": "assets/js/51.eb8d4c56.js",
    "revision": "0aa8953bdcea8c6d01374bf6bf7ca673"
  },
  {
    "url": "assets/js/6.edfecbac.js",
    "revision": "a0a6de54fc6beacd6657237b464e567e"
  },
  {
    "url": "assets/js/7.01cf758b.js",
    "revision": "7a445d9a66b535336e8c9e43a6510343"
  },
  {
    "url": "assets/js/8.0d6e3d75.js",
    "revision": "302f44cf881fd6a2df048a8489658fc1"
  },
  {
    "url": "assets/js/9.c91191c5.js",
    "revision": "13b967a28b2183daed6b604b0c123fc3"
  },
  {
    "url": "assets/js/app.de1f712a.js",
    "revision": "79dfbd274d3db5d308b4bbaa72e7b4e2"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "b6097557d6e59b9723628a8a2673839f"
  },
  {
    "url": "frontend/electron.html",
    "revision": "e3fe828de505d2ec690ac7fcb188204b"
  },
  {
    "url": "frontend/points.html",
    "revision": "7ab66a4ddb0f607cd5298ebefe156835"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "322591d3f4962ecd76675ace237f00cc"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "7ae33db0e0b639b390ef7b16f644d200"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "672d8ea54f5b48fbc429d8574f7d9552"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "97fa6080638a846acccdaa1f72b55fff"
  },
  {
    "url": "guide.html",
    "revision": "fffb49ca22f718e1e1148993945814c7"
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
    "revision": "e381ba5ce0e5d5959446c93dc1998a13"
  },
  {
    "url": "other/c.html",
    "revision": "5e20f52371913a7624cd2487103cfe8a"
  },
  {
    "url": "other/cook.html",
    "revision": "9b6e2fa4ce2b96b4f2024de8139fa358"
  },
  {
    "url": "other/countup.html",
    "revision": "7f5b6dddb023b51181edc98a1844560a"
  },
  {
    "url": "other/english.html",
    "revision": "17c34051c5a120c492a7bd576a7cec69"
  },
  {
    "url": "other/image.html",
    "revision": "8e348309587317e3dd39475fb05b38c1"
  },
  {
    "url": "other/index.html",
    "revision": "f608c8586cabae2a52ed21466ce17a14"
  },
  {
    "url": "python/Django.html",
    "revision": "ca94798bc82ba18facda013d3d3acb26"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "c50175d5227f13f29f0860856362bf91"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "be8cf5a24bb319601a12c5ad3fc43aee"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "993061c636e2999552c139a3eb69ceed"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "a510c7a6de0106e5635acde4f89352c3"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "e7b070db4a2814e107dcc4fdbd7bdce3"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "62aea76b821e88db8ed066997f988a63"
  },
  {
    "url": "tools/frontend/index.html",
    "revision": "4d77cc92e62fc95bcf12ae411929f725"
  },
  {
    "url": "tools/frontend/Lerna.html",
    "revision": "da11f6cbcdcd706fdd9566410283e9c8"
  },
  {
    "url": "tools/frontend/NPM.html",
    "revision": "8cbcddd4813c9bbe97bad08130854569"
  },
  {
    "url": "tools/frontend/nvm.html",
    "revision": "dbd2c16c89fae1eb966c5e4cc0531494"
  },
  {
    "url": "tools/frontend/Verdaccio.html",
    "revision": "1a481755b43168727f0a611d9df3bcca"
  },
  {
    "url": "tools/frontend/VS Code.html",
    "revision": "cbec237ee65cfe066fab750b7e95ab4b"
  },
  {
    "url": "tools/frontend/Yarn.html",
    "revision": "25300840445a9b05b2eeaab4815271db"
  },
  {
    "url": "tools/python/anaconda.html",
    "revision": "148fcf4b89176aff2d279119a4521fa7"
  },
  {
    "url": "tools/python/index.html",
    "revision": "abcb5c8cf0132b99be5d2b051aedf431"
  },
  {
    "url": "tools/python/pip.html",
    "revision": "a2bf55480f33c62dfe383ce039cfe4e1"
  },
  {
    "url": "tools/python/pyenv.html",
    "revision": "73f14df7ab475d9a0d3ae8b864c27c05"
  },
  {
    "url": "tools/system/docker.html",
    "revision": "1c9ed3a5ea74ff571a7091a40e4d18d2"
  },
  {
    "url": "tools/system/git.html",
    "revision": "3c571ef47cdda225c3cd59e224efa759"
  },
  {
    "url": "tools/system/index.html",
    "revision": "3043670763027c6a4317461025121efb"
  },
  {
    "url": "tools/system/linux.html",
    "revision": "130ef10c99298242b04d9ac7eebe5d16"
  },
  {
    "url": "tools/system/ubuntu.html",
    "revision": "198b8234a78b843af8b1a6d283ff0a88"
  },
  {
    "url": "tools/system/vim.html",
    "revision": "b0c0c22c9fad57b6b3084d8eaa58968c"
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
