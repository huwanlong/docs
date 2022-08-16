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
    "revision": "b4d897715adf747774ea7162ceaf265e"
  },
  {
    "url": "about.html",
    "revision": "f7445f3205e51bc17e768c7d3cc665be"
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
    "url": "assets/js/10.2f2f1c5b.js",
    "revision": "c48f8512a5ff50b6ec03cf9043466ff3"
  },
  {
    "url": "assets/js/11.5f4e5b04.js",
    "revision": "bceda3b6ee78e97126a8eb773f1ea1c1"
  },
  {
    "url": "assets/js/12.f92aadfa.js",
    "revision": "b60a1157f2c8b05807f46e80b455f66f"
  },
  {
    "url": "assets/js/13.b60951b7.js",
    "revision": "0ef13ed9764147148fb31e04d2a11506"
  },
  {
    "url": "assets/js/14.4ed16264.js",
    "revision": "690f94fde937b1753cd43b016d70404f"
  },
  {
    "url": "assets/js/15.f42fc753.js",
    "revision": "dd9ea92615a461edca830b07f4dcd072"
  },
  {
    "url": "assets/js/16.af64bd3e.js",
    "revision": "f300174d587f5c1f9ca1d6e9762a4a8f"
  },
  {
    "url": "assets/js/17.4a8a45ef.js",
    "revision": "edcfdd58d5686d2df3b53a5accc6e55b"
  },
  {
    "url": "assets/js/18.5df19b06.js",
    "revision": "1e5359a8100584a1b1fe4b26f1e545e6"
  },
  {
    "url": "assets/js/19.b0d48a84.js",
    "revision": "fcf95c3a633c73c204ae28de7878d21b"
  },
  {
    "url": "assets/js/2.fd2efaec.js",
    "revision": "df0c67210f1167afb637b731a796d8b9"
  },
  {
    "url": "assets/js/20.011aef9e.js",
    "revision": "bc30c430e5af1c91c9fc8934cdeca88d"
  },
  {
    "url": "assets/js/21.52f99816.js",
    "revision": "1500f8baeb2d2009cd1f03ba7c1f1ec1"
  },
  {
    "url": "assets/js/22.88be2967.js",
    "revision": "5446ef9b219c5bd69c9dd18101204c94"
  },
  {
    "url": "assets/js/23.02fbcc62.js",
    "revision": "93d45dab875188c5b7861b5a5f1f6419"
  },
  {
    "url": "assets/js/24.a38aa605.js",
    "revision": "28c4a1d02f6c5c76768c9c09983c0e43"
  },
  {
    "url": "assets/js/25.b4f7d656.js",
    "revision": "8e34a92b9f82564b719a97a919c4c770"
  },
  {
    "url": "assets/js/26.4d43ad32.js",
    "revision": "c0413ac2b3d94cd13cbd8699aed18e9c"
  },
  {
    "url": "assets/js/27.a165d3ad.js",
    "revision": "3eb9257ff7dbd5bd6adb2e0b71fb9234"
  },
  {
    "url": "assets/js/28.2f8ffbf5.js",
    "revision": "e8819b7c65bc0c30522e44f348c0350c"
  },
  {
    "url": "assets/js/29.8ebcbbf3.js",
    "revision": "a2a036e2087d72d573812993e8a30df2"
  },
  {
    "url": "assets/js/3.f1d9a899.js",
    "revision": "1e96c720f7bcdef8c01f9fedd4053065"
  },
  {
    "url": "assets/js/30.8b9f4189.js",
    "revision": "2b7d2b88e144c60812d4be70d7c7bdfa"
  },
  {
    "url": "assets/js/31.0f263b41.js",
    "revision": "8c4a1f4efd085a8583daf6b93cf39a7c"
  },
  {
    "url": "assets/js/32.ab27e3bf.js",
    "revision": "4a634f2cb70e9fa2cc8ea91a438c8b89"
  },
  {
    "url": "assets/js/33.d832387d.js",
    "revision": "5d16ab31b58a4b34faba90bb54fd137b"
  },
  {
    "url": "assets/js/34.5cdc7473.js",
    "revision": "db9a033ce5d911d353b754833ed9cd3d"
  },
  {
    "url": "assets/js/35.068dd44d.js",
    "revision": "610e77fcd8fb8ef2f24533ba74f861cb"
  },
  {
    "url": "assets/js/36.4201bd3a.js",
    "revision": "a73728f235087d94a456d492e3719635"
  },
  {
    "url": "assets/js/37.2a6fb23e.js",
    "revision": "9012c44d1636d3671d7c0c63b17e0193"
  },
  {
    "url": "assets/js/38.875bf68c.js",
    "revision": "0c97ef138c32ef9e835df71883bc8c1f"
  },
  {
    "url": "assets/js/39.9d6937cb.js",
    "revision": "0fb80d95ce28d941d1acc65c24a628f8"
  },
  {
    "url": "assets/js/4.6ede1592.js",
    "revision": "b3bd13cd5e2062f00561f46ddf461f4d"
  },
  {
    "url": "assets/js/40.e0a43244.js",
    "revision": "0ad122f64ad3640a5ab94b94216b03c3"
  },
  {
    "url": "assets/js/41.49b2f6a3.js",
    "revision": "b4fb817ae90e615ec53680543fe57c2b"
  },
  {
    "url": "assets/js/42.2f009e93.js",
    "revision": "559eb9c91173ae2ff087bf5a81e91e2d"
  },
  {
    "url": "assets/js/43.732614ec.js",
    "revision": "aaf03ab733320213b2f52d3cbb2e3e1d"
  },
  {
    "url": "assets/js/44.f4faf882.js",
    "revision": "9b969496c364c1eea9c9474f5eb388d7"
  },
  {
    "url": "assets/js/45.3c63ebba.js",
    "revision": "181dbe61ddbdc663a88c0f05f26fd623"
  },
  {
    "url": "assets/js/46.66134bf9.js",
    "revision": "fd8db57189901766d41f2ffc4c7cb45b"
  },
  {
    "url": "assets/js/47.2034093a.js",
    "revision": "5d16eca21a351d89312a34c079a835e6"
  },
  {
    "url": "assets/js/5.269ed1bb.js",
    "revision": "af903bf9fa25137b66d87cfab9e5afe9"
  },
  {
    "url": "assets/js/6.673b47bb.js",
    "revision": "01eb27786cd4765da76479d67b87c730"
  },
  {
    "url": "assets/js/7.5ebe59a6.js",
    "revision": "acd690e582ae49c5a1664b14a629f2a7"
  },
  {
    "url": "assets/js/8.2484c681.js",
    "revision": "86409944aef0ecd4dc0d261508a432d8"
  },
  {
    "url": "assets/js/9.2ba08c6b.js",
    "revision": "484f0797ab8b5aefc3a71da629345158"
  },
  {
    "url": "assets/js/app.8fee34c6.js",
    "revision": "643409a082861c9f67f32e4b1f97b244"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "b615fb0e4bfef3e0145ee8367c852ff3"
  },
  {
    "url": "frontend/electron.html",
    "revision": "03edceb94778a9d02a8b2ec1e7df0f12"
  },
  {
    "url": "frontend/points.html",
    "revision": "9bc68f61c9dc38cb44b69b84c68370bd"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "196baf871b64e0fab7f0a2ea242d7e8e"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "16d9395a84a93801c5c0383ef117a351"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "61063f14c73442074563ce5d7244054e"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "1dd435b1dc5f079fc6acd3548cf0ea75"
  },
  {
    "url": "guide.html",
    "revision": "98107fd1e5775c74bdb797208659ac27"
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
    "revision": "e0c37256ccf8bb309a478daf798a360a"
  },
  {
    "url": "languages/english/zero.html",
    "revision": "788f660aa735f34fa870fe64efbf2bbd"
  },
  {
    "url": "other/cook.html",
    "revision": "4e35d752e4d935b96387ac534537ce5d"
  },
  {
    "url": "other/countup.html",
    "revision": "d42c21868c9baa579fe672de5cfb5460"
  },
  {
    "url": "other/image.html",
    "revision": "332e4a2bb20e3c51b3f68cfd758e4815"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "7f4e117722759c931069a048cc7cfba6"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "9d397b7a5303c7d161a5a25f3946edf5"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "8a7a2e72edb08e053230e6bd11d7bc8a"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "d5dbc70749ea1d477a4a13bdf40ddd17"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "d231ab6039bb254bb22cdda41f523eaf"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "25a8656aec3ec5adcac25f836d91e84d"
  },
  {
    "url": "tools/frontend/index.html",
    "revision": "af00c4db6164bb7ddfc352cde359ff5a"
  },
  {
    "url": "tools/frontend/Lerna.html",
    "revision": "6103c4115bf2078258f20ef02c9fa732"
  },
  {
    "url": "tools/frontend/NPM.html",
    "revision": "d4efc12e6d1d71a5fbddd05da27f70d8"
  },
  {
    "url": "tools/frontend/nvm.html",
    "revision": "0e5bba4afd51646f6ba5631ce4489527"
  },
  {
    "url": "tools/frontend/Verdaccio.html",
    "revision": "8b92a243a17c59ac86d1747d0a4f7af3"
  },
  {
    "url": "tools/frontend/VS Code.html",
    "revision": "72e696fa7fca34569b88fd81b6cde9fd"
  },
  {
    "url": "tools/frontend/Yarn.html",
    "revision": "dabdda627e4c13d8822492bccb6a372d"
  },
  {
    "url": "tools/python/anaconda.html",
    "revision": "b0ab3b7ad47bae5f22fb384983f79995"
  },
  {
    "url": "tools/python/index.html",
    "revision": "66c26d6b2ebef5d1b171f8345ba745e8"
  },
  {
    "url": "tools/python/pip.html",
    "revision": "8bc0613633cedde643c56c2043ce421f"
  },
  {
    "url": "tools/system/docker.html",
    "revision": "2efafdbaf171f52d335466a6d61d2fe5"
  },
  {
    "url": "tools/system/git.html",
    "revision": "104130f17b25019092a76992b61213c4"
  },
  {
    "url": "tools/system/index.html",
    "revision": "0ea31ba9a0f6bac7be422a0a4dc173c1"
  },
  {
    "url": "tools/system/linux.html",
    "revision": "c7bfbce13f9df637ef1ebaa6b320b8b6"
  },
  {
    "url": "tools/system/ubuntu.html",
    "revision": "bf6d3bf82a51806340e18ea31bfde439"
  },
  {
    "url": "物联网/c.html",
    "revision": "9dca66fe421355558ce06c40cb13bd66"
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
