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
    "revision": "5076b8864ab34119ca97ce8f665e99fe"
  },
  {
    "url": "about.html",
    "revision": "bebaceb2245ef787f5c26fb0a2d481ec"
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
    "url": "assets/js/13.51a68bd2.js",
    "revision": "93bc435bfed8a860d62fb4ad90b0f9d9"
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
    "url": "assets/js/21.a0e55943.js",
    "revision": "58ea7e6bd190c991c7fb69daadfedcc2"
  },
  {
    "url": "assets/js/22.d4a753d2.js",
    "revision": "852076ad4e975fadfecddd3abfb3e51a"
  },
  {
    "url": "assets/js/23.eaa00d09.js",
    "revision": "8ccd4b055efa29a81f7732dc539f8105"
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
    "url": "assets/js/4.85673b61.js",
    "revision": "ab9566a829e4bcfe2f90931479d97674"
  },
  {
    "url": "assets/js/40.5bcf5b31.js",
    "revision": "dfc88de452d39f6e03a04bd6028debca"
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
    "url": "assets/js/43.c682cb6e.js",
    "revision": "d46340863cbf6dcbf6ce8e08b3bf8d91"
  },
  {
    "url": "assets/js/44.d52ff930.js",
    "revision": "e02809b657e3113e23e98000938c27cb"
  },
  {
    "url": "assets/js/45.64b52cdb.js",
    "revision": "d3795a64af5e0cda4652e909a010bfdf"
  },
  {
    "url": "assets/js/46.48818138.js",
    "revision": "105aa7b751dc9462147c0907bbe377e1"
  },
  {
    "url": "assets/js/47.74588e9d.js",
    "revision": "d0af2298dfe21020c8c019c0265a1501"
  },
  {
    "url": "assets/js/48.56034e46.js",
    "revision": "e22ce258b0c7180d11eb716bec5b2e6c"
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
    "url": "assets/js/8.dd8ac3b7.js",
    "revision": "6c8ce60954668d763b579e4cc42faeb7"
  },
  {
    "url": "assets/js/9.2ba08c6b.js",
    "revision": "484f0797ab8b5aefc3a71da629345158"
  },
  {
    "url": "assets/js/app.16d0aa5c.js",
    "revision": "9ec7d3395c74fbfafbe2919fe76a3571"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "fef16d41cf1ca60f3a031c8be99efdbb"
  },
  {
    "url": "frontend/electron.html",
    "revision": "3f211631f824b3e8a2d31ead549396e1"
  },
  {
    "url": "frontend/points.html",
    "revision": "30b628a9d7e2abc5ea1b5ae352c3b872"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "176cd53bc58a47cd8fa5394151a7862f"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "1c7e36545111c4fe20d426d3ede14575"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "997d4c623013fe25ee689c5a59e14d08"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "4bd98116cc72343238f7a12dc2b44b05"
  },
  {
    "url": "guide.html",
    "revision": "4ea2c6b56939dd7344ef436998941292"
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
    "revision": "777234c5e378c059c8dad99675600188"
  },
  {
    "url": "other/cook.html",
    "revision": "2afa5fc5be576bc53b7bafd0793f6fff"
  },
  {
    "url": "other/countup.html",
    "revision": "9d14e94fd59a59f3e82cade5d22a4029"
  },
  {
    "url": "other/english.html",
    "revision": "4db8996f5a60a8f01a1028255e5a6327"
  },
  {
    "url": "other/image.html",
    "revision": "e0dbbdb414fc1838df72a950b237065c"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "3eea69b95f3ff211d0abed1df6f0feb8"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "cbae3c05dc806a7a33bfe91074b3e76c"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "32069ff804518c3325ead01fb40641b4"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "020d0b378c2349821289aae678915da6"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "124dba46641e163dcd47038a4336d535"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "aa0cf019827e1106718993a987f50cd3"
  },
  {
    "url": "tools/frontend/index.html",
    "revision": "cc4479dc5a78c66b973c71dfdebf06b3"
  },
  {
    "url": "tools/frontend/Lerna.html",
    "revision": "69818b29c57ca21c556dec433c41f1de"
  },
  {
    "url": "tools/frontend/NPM.html",
    "revision": "63e26d7b6809425d973807440b9baf17"
  },
  {
    "url": "tools/frontend/nvm.html",
    "revision": "33042ac761338a787c85ff432695b64b"
  },
  {
    "url": "tools/frontend/Verdaccio.html",
    "revision": "fef98680ff2f94ad13cf46cd5572275a"
  },
  {
    "url": "tools/frontend/VS Code.html",
    "revision": "c7f4ad59ef9405a92c169f5556f04ffe"
  },
  {
    "url": "tools/frontend/Yarn.html",
    "revision": "1dbb93f6708f72054f01fbf52c2926c0"
  },
  {
    "url": "tools/python/anaconda.html",
    "revision": "468a583dde55f661b433a6409447ca94"
  },
  {
    "url": "tools/python/index.html",
    "revision": "106e708b236af3357fd1d60798a20067"
  },
  {
    "url": "tools/python/pip.html",
    "revision": "188c9dc775004fcd6430fa9a3c9d8cb1"
  },
  {
    "url": "tools/system/docker.html",
    "revision": "73373f7c4f37a6e4548a0c7b45eb9d80"
  },
  {
    "url": "tools/system/git.html",
    "revision": "e5917e01475c5c38822c01376da6afec"
  },
  {
    "url": "tools/system/index.html",
    "revision": "e1143b37f19e6d66aecaf28951eac3ff"
  },
  {
    "url": "tools/system/linux.html",
    "revision": "5dcc7e18c8563c517ec5d41b978ca99a"
  },
  {
    "url": "tools/system/ubuntu.html",
    "revision": "2968197d8cd8d8a50bd532a49cfeaa80"
  },
  {
    "url": "tools/system/vim.html",
    "revision": "85dd0bc0fd387e57974744d6f023600d"
  },
  {
    "url": "物联网/c.html",
    "revision": "fb1083e0aee69039dded90f07788422b"
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
