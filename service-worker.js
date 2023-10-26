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
    "revision": "15c381654e3b526e34d408274c92edd7"
  },
  {
    "url": "about.html",
    "revision": "12eb2d8a091ba920ad9e1980e7a51477"
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
    "url": "assets/js/10.f2c7c9c2.js",
    "revision": "4739f42f626ea6d2cab5334f18e0b6f2"
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
    "url": "assets/js/18.bd112856.js",
    "revision": "f316e887b7b9c689fc555178302c5774"
  },
  {
    "url": "assets/js/19.bb05d55c.js",
    "revision": "0db286d8e55ba593f6458b32b109a2c0"
  },
  {
    "url": "assets/js/2.c0ec5dc5.js",
    "revision": "3bbfc7bb79ce079d21fd86c69ff61cd4"
  },
  {
    "url": "assets/js/20.072a522f.js",
    "revision": "54f2a579b3fa672d0563ef88b753b113"
  },
  {
    "url": "assets/js/21.06291757.js",
    "revision": "a09182924ca0d02e5469a05a3b5cb318"
  },
  {
    "url": "assets/js/22.0dde2fb2.js",
    "revision": "a95e8945a8ee6e6298e62e0b6807af6e"
  },
  {
    "url": "assets/js/23.a67f58bc.js",
    "revision": "9a1af009db69034981bf456ae27becb2"
  },
  {
    "url": "assets/js/24.b3db9ac6.js",
    "revision": "e3363ad9757f1685a10b4256a5776b2d"
  },
  {
    "url": "assets/js/25.1140e21c.js",
    "revision": "7fd4b5cfab71d75480e90b276c9d9cc0"
  },
  {
    "url": "assets/js/26.3110f4e1.js",
    "revision": "357fa8f7cdaadeb731b9829a8217516d"
  },
  {
    "url": "assets/js/27.653e8cba.js",
    "revision": "b1f755c26150dcb7f029d81935d56370"
  },
  {
    "url": "assets/js/28.b92738d9.js",
    "revision": "8dd4eb87fbdd2e1702159490588fe773"
  },
  {
    "url": "assets/js/29.0feeba05.js",
    "revision": "f1e533e4fa76d5919f958e7ab9b337d4"
  },
  {
    "url": "assets/js/3.8e2ee442.js",
    "revision": "bb2c44534f8fd91e5e362bc3ba2e6b26"
  },
  {
    "url": "assets/js/30.075dc902.js",
    "revision": "d4089d473ddea24fd6e4b5a9aba55e51"
  },
  {
    "url": "assets/js/31.f4dfd81f.js",
    "revision": "76229be42448d0a1d0355fb47300c210"
  },
  {
    "url": "assets/js/32.6b16e16a.js",
    "revision": "40e4174cd2598334277adc306ce8a0c7"
  },
  {
    "url": "assets/js/33.0b48a3e6.js",
    "revision": "9bdd51eb33597803bfd05ccb685a3d7d"
  },
  {
    "url": "assets/js/34.2d06429a.js",
    "revision": "462dbd6b35063455e2521df47f0f8d4e"
  },
  {
    "url": "assets/js/35.811e1141.js",
    "revision": "68ee17034d3c018d35d5f704ca205eab"
  },
  {
    "url": "assets/js/36.13086705.js",
    "revision": "f9e2991a9d10a144f0a0f1b0e516e244"
  },
  {
    "url": "assets/js/37.a0409bc0.js",
    "revision": "efac79e6f58e7d20646c335cce753574"
  },
  {
    "url": "assets/js/38.8fd697d7.js",
    "revision": "e1ac49a9f57c259468951254fbe42499"
  },
  {
    "url": "assets/js/39.97bf0169.js",
    "revision": "e5bf36c8c345e849a70c74bf0d6d43f2"
  },
  {
    "url": "assets/js/4.70dfa914.js",
    "revision": "3380b039704474f2cba4fbc7ca191daf"
  },
  {
    "url": "assets/js/40.26812922.js",
    "revision": "9d594529dd00ddf51350a910e8a97da7"
  },
  {
    "url": "assets/js/41.07cb923c.js",
    "revision": "4177b83fcd97f22582f60042b65e7627"
  },
  {
    "url": "assets/js/42.2178cf76.js",
    "revision": "5c483d4e4276b7abc22d1928675a914b"
  },
  {
    "url": "assets/js/43.6708c328.js",
    "revision": "78f09ca8b96bf70a74aa3796649e4a12"
  },
  {
    "url": "assets/js/44.878120e9.js",
    "revision": "01f0e0201652c571ee5ead87d27de102"
  },
  {
    "url": "assets/js/45.947c5116.js",
    "revision": "78433de3f96f609f67851269e9265a09"
  },
  {
    "url": "assets/js/46.f36fbc74.js",
    "revision": "8dc503ba17b8825960a2616340d161c8"
  },
  {
    "url": "assets/js/47.2589976f.js",
    "revision": "8561ed2e685b8cf75307cc6f4313c1ed"
  },
  {
    "url": "assets/js/48.c4f830be.js",
    "revision": "578f2606f0bb26e86c32a3b70b2b12d3"
  },
  {
    "url": "assets/js/49.4bcefcc4.js",
    "revision": "6fbf83aebedbef1474472c910f61b802"
  },
  {
    "url": "assets/js/5.a497d5b5.js",
    "revision": "98d7e15ea92e893cd916dff4471b3bd4"
  },
  {
    "url": "assets/js/50.bcd5d0c9.js",
    "revision": "b0c6982454bd95c186205d454a9c587c"
  },
  {
    "url": "assets/js/6.edfecbac.js",
    "revision": "a0a6de54fc6beacd6657237b464e567e"
  },
  {
    "url": "assets/js/7.48daebed.js",
    "revision": "73bad64fc498244298d65554817315c3"
  },
  {
    "url": "assets/js/8.0d6e3d75.js",
    "revision": "302f44cf881fd6a2df048a8489658fc1"
  },
  {
    "url": "assets/js/9.1c7c358e.js",
    "revision": "f7517350707b91baa984d5666eda3a5e"
  },
  {
    "url": "assets/js/app.4b2a9238.js",
    "revision": "24ad76a8cacefd4fcca007d11d0bb0bc"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "18cf14e03fe1fbadc1f0e87ad86d3763"
  },
  {
    "url": "frontend/electron.html",
    "revision": "bd4e8d578f33020d3dcb66b6d0c1baff"
  },
  {
    "url": "frontend/points.html",
    "revision": "cc34bdc00d7ea7dcb0d9116a7733fc25"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "1f2ffd9d8ea715c39129f8d4ecea0c2a"
  },
  {
    "url": "frontend/tools/index.html",
    "revision": "16467cfb257d051f86e71efe4f71c5c6"
  },
  {
    "url": "frontend/tools/Lerna.html",
    "revision": "9d83e5704da9db38dd678d4e78fd4241"
  },
  {
    "url": "frontend/tools/NPM.html",
    "revision": "24983bf7755e2822fed78727e257c821"
  },
  {
    "url": "frontend/tools/nvm.html",
    "revision": "1e635368eae19fb50d6a653e2327f6c2"
  },
  {
    "url": "frontend/tools/pnpm.html",
    "revision": "88695bdf2a3b52450cc6dc1cf6efd772"
  },
  {
    "url": "frontend/tools/Verdaccio.html",
    "revision": "511c64f5439546ac23c368b25095f48a"
  },
  {
    "url": "frontend/tools/Yarn.html",
    "revision": "1da737d51cc81c463fe9e7a39cd75240"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "28cac924186d0daf10fb59f1acffda07"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "28960292d198e2b9fe0a2c78e56c9323"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "70f51306d80d91e0cda9ced9354eda60"
  },
  {
    "url": "guide.html",
    "revision": "09a696a421717108624c3cbddfb7d28d"
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
    "revision": "4112b98ac24eeed48271755e32928a0b"
  },
  {
    "url": "other/example/countup.html",
    "revision": "b84582b55abc0e4339fa3fe28245af29"
  },
  {
    "url": "other/example/image.html",
    "revision": "e07a2cbd9227db85b22d86d6573d2758"
  },
  {
    "url": "other/index.html",
    "revision": "be88aa8f9c7cf30deaa7239e43965c80"
  },
  {
    "url": "python/basic.html",
    "revision": "2f83b265a2657aa998bff2e1d6f36c07"
  },
  {
    "url": "python/django.html",
    "revision": "39470f2c13a22777cea0fdc2284ecdce"
  },
  {
    "url": "python/lib.html",
    "revision": "c6ad02f30c65ab2a620bb82a03d82959"
  },
  {
    "url": "python/tools.html",
    "revision": "9e3863e21c34fa9b3bd14fb6b412f3af"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "35f18f9283b7714c3bfd00b148fe71c2"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "c2645bb233c64370be94393321e880f8"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "689cbf7eea09a5ad9083b64fb2e67bce"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "623272006feca72e911e14845b2a5eb8"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "50a7e7e650cde52fd50a85665a63481f"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "a27ac454018d99db66cde0ed7d5a3f49"
  },
  {
    "url": "tools/system/docker.html",
    "revision": "70a4be25be1f135779ca373cf6780c98"
  },
  {
    "url": "tools/system/git.html",
    "revision": "011ba1bfabba88d9faadf8114934a26c"
  },
  {
    "url": "tools/system/idea.html",
    "revision": "44e5c8b27b5ee80655277ea29bf07309"
  },
  {
    "url": "tools/system/index.html",
    "revision": "7817dbbc3b40cca0a03070f88977a907"
  },
  {
    "url": "tools/system/linux.html",
    "revision": "2d140c4434341cd6203c5f8ce8efa406"
  },
  {
    "url": "tools/system/mac.html",
    "revision": "80f25cd9cbd4fcfe4d279e63885a533f"
  },
  {
    "url": "tools/system/ubuntu.html",
    "revision": "4b4e9ec1ba077dcd49973ef92b47315f"
  },
  {
    "url": "tools/system/vim.html",
    "revision": "548e0ccf3168ca423f0b745c9c6607d8"
  },
  {
    "url": "tools/system/VS Code.html",
    "revision": "2ddb0d8fadfbf724093c85db4884eb4e"
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
