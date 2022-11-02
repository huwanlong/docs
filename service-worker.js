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
    "revision": "948f6fabc3f41ea3cb012fb90a109c8c"
  },
  {
    "url": "about.html",
    "revision": "43a7c8d2bff3f6936f8c1dfbd98e5fc2"
  },
  {
    "url": "app.png",
    "revision": "9ea40a18fbbd5e1562c5bf9607d0b1eb"
  },
  {
    "url": "assets/css/0.styles.f434241d.css",
    "revision": "8bdb127577481461f20010a70aaad2dc"
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
    "url": "assets/js/10.bcf92ba4.js",
    "revision": "2f13d227e6f405c1eee62d7be3292738"
  },
  {
    "url": "assets/js/11.89d8886f.js",
    "revision": "afab802df833b56cfc77b9ddde376923"
  },
  {
    "url": "assets/js/12.1dafe405.js",
    "revision": "d283cd480ff5a3e8dbd59018c256e509"
  },
  {
    "url": "assets/js/13.16530fa7.js",
    "revision": "8cbf10488cf85e04277307d2cd5be7cb"
  },
  {
    "url": "assets/js/14.7c75e8ef.js",
    "revision": "0d615ac38f2dbe3293c93e3ea2f6b224"
  },
  {
    "url": "assets/js/15.3edc477d.js",
    "revision": "a4cd44cef462061743f2263907c0eec3"
  },
  {
    "url": "assets/js/16.e69f09f4.js",
    "revision": "cbf0ac3c5c91bcf2542eafe9dc810e95"
  },
  {
    "url": "assets/js/17.fe357b66.js",
    "revision": "03bb869d24ab6e78be4cd7878c9da1bf"
  },
  {
    "url": "assets/js/18.c5eff1da.js",
    "revision": "5cd52ac72f744b8e42a0682ad4187466"
  },
  {
    "url": "assets/js/19.22a8bf43.js",
    "revision": "8866a106137b7d6d44e511acebb372d1"
  },
  {
    "url": "assets/js/2.27eff5bf.js",
    "revision": "cdc3e5f09d7c25e18246129e6bddf172"
  },
  {
    "url": "assets/js/20.4dccc874.js",
    "revision": "0b8bde73761380cb00df76b92078b54e"
  },
  {
    "url": "assets/js/21.d2062817.js",
    "revision": "4989be9b517d00abf7df30788be0efb9"
  },
  {
    "url": "assets/js/22.4f260908.js",
    "revision": "93c51a68cf61cc19f978c090548796a9"
  },
  {
    "url": "assets/js/23.7c4763dd.js",
    "revision": "685a9787f98b835dc27eeaf9c964ce49"
  },
  {
    "url": "assets/js/24.577f0f79.js",
    "revision": "74d7cb07583d3d5e97cc1b5b4a485b4c"
  },
  {
    "url": "assets/js/25.cb87476d.js",
    "revision": "97b97a963d847a9194d5aeeaa83fad5b"
  },
  {
    "url": "assets/js/26.54f1a9e2.js",
    "revision": "f2de0dce9e4310455b02592677aca4a5"
  },
  {
    "url": "assets/js/27.b5a2e8cf.js",
    "revision": "e706f5e6c8ddb88db36a2d4994c9916e"
  },
  {
    "url": "assets/js/28.927e2c94.js",
    "revision": "2d2a5f48b94a94faa74536f8ba092f7b"
  },
  {
    "url": "assets/js/29.ecd25d33.js",
    "revision": "f32ff6ec66a5d3a33cec1ff77283f6ff"
  },
  {
    "url": "assets/js/3.46e2fdfb.js",
    "revision": "520a62ea1e4404e186b57af62b8b53d5"
  },
  {
    "url": "assets/js/30.ae4f846d.js",
    "revision": "81357e4d8af83e6cf28c311f4d40c5c8"
  },
  {
    "url": "assets/js/31.81eec855.js",
    "revision": "84cf68ea2d76b071ae3722932de0e3c2"
  },
  {
    "url": "assets/js/32.a5c922e7.js",
    "revision": "b98004d9e041084c2ae2013aa9bacc62"
  },
  {
    "url": "assets/js/33.0e5056d1.js",
    "revision": "6f35c29d7567c65e5fe58d5c80a5860a"
  },
  {
    "url": "assets/js/34.d1b68cef.js",
    "revision": "5506bb37badb3937ee09ae20affcb24c"
  },
  {
    "url": "assets/js/35.fc212dab.js",
    "revision": "649933310158dc2f69cefccdfe266e45"
  },
  {
    "url": "assets/js/36.edbfa642.js",
    "revision": "ad29a44a6ae42374afe99a7dff8afbbe"
  },
  {
    "url": "assets/js/37.1545eb01.js",
    "revision": "7f2781e2cf6c91af0c301212b679408e"
  },
  {
    "url": "assets/js/38.8b8b7e58.js",
    "revision": "bb78c165565a42574a74a2fcff2f8f4d"
  },
  {
    "url": "assets/js/39.ba049997.js",
    "revision": "5950ac48cb37fd9d5d44e95304f0671d"
  },
  {
    "url": "assets/js/4.da653fe9.js",
    "revision": "f4aa30528a8a6062c1cd4d7b4b97192d"
  },
  {
    "url": "assets/js/40.68ea76a1.js",
    "revision": "17a52b7ca3dda626654f6d212e660dce"
  },
  {
    "url": "assets/js/41.a2924ddc.js",
    "revision": "62bd87d64eb7848d06b634cef6cac9c1"
  },
  {
    "url": "assets/js/42.439f358d.js",
    "revision": "06f8f2c120471b4e9c3a0c9c69bb2f4a"
  },
  {
    "url": "assets/js/43.2dcd0f98.js",
    "revision": "8b012d2ffb1d67e634ed9a97d4495454"
  },
  {
    "url": "assets/js/44.40216bb8.js",
    "revision": "87fe7248ac89abcc569961914ca57710"
  },
  {
    "url": "assets/js/45.05d873c2.js",
    "revision": "f84499f295ad7e2094035fdd34e95bcb"
  },
  {
    "url": "assets/js/46.03adf148.js",
    "revision": "8878fcab1e45b9a57315a87da06fc45e"
  },
  {
    "url": "assets/js/47.886dc48b.js",
    "revision": "899db2e6da436834d48f366b2907fa80"
  },
  {
    "url": "assets/js/48.5b7b9ac7.js",
    "revision": "32942fef96015b6ab26eafc00d9e557e"
  },
  {
    "url": "assets/js/49.a0213c4a.js",
    "revision": "70f677e2847fdff671f1e7ba2e0a8e45"
  },
  {
    "url": "assets/js/5.ab4cde8e.js",
    "revision": "4957a28179894bcb3535c2ccf6a307bc"
  },
  {
    "url": "assets/js/50.23e124f6.js",
    "revision": "f8fb6774d0f45d6260da6194cf577260"
  },
  {
    "url": "assets/js/6.4252836e.js",
    "revision": "4d1b845601199cfcb9a1aeed0b829dd7"
  },
  {
    "url": "assets/js/7.a68f39c3.js",
    "revision": "6022d962ccb1a60b3c1478832adaae7d"
  },
  {
    "url": "assets/js/8.7836e6a3.js",
    "revision": "b9d036447fea5d9ac8effa9e9d145a1f"
  },
  {
    "url": "assets/js/9.1fcc33dc.js",
    "revision": "cafcc6ecb128d00b2a50690fd452ed77"
  },
  {
    "url": "assets/js/app.32ed07c8.js",
    "revision": "7d7928e4f9e334a2139da7647f7a5a49"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "1ca5f68fd060211df9ff50f3dd4ec529"
  },
  {
    "url": "frontend/electron.html",
    "revision": "70725cf3972f8f72447795b8f5cea12e"
  },
  {
    "url": "frontend/points.html",
    "revision": "35d771e3460156ba7e43f6e9e79d5ba4"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "568e3d1a000cef2820f619b64a0797b6"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "9001ce956b38a4d8928c73223ea56ee5"
  },
  {
    "url": "frontend/微前端.html",
    "revision": "89f65008742e1f05d707ae146f29d6c2"
  },
  {
    "url": "frontend/脚手架搭建.html",
    "revision": "530cb24a09c6c8ab7bde3f7db16a6c3a"
  },
  {
    "url": "guide.html",
    "revision": "9455432de8ea22e0eb316ac08d3a1443"
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
    "revision": "39484036dc7a813f09376a0992a6050d"
  },
  {
    "url": "other/c.html",
    "revision": "a14aa077370ca46a302180e63441978e"
  },
  {
    "url": "other/cook.html",
    "revision": "ae29d85ac25342edd7c2d856eef2d578"
  },
  {
    "url": "other/countup.html",
    "revision": "bc4fc0e3a7986bea0e9649a450090bdd"
  },
  {
    "url": "other/english.html",
    "revision": "35249d25f83e0d66cc7b00996cc7a50f"
  },
  {
    "url": "other/image.html",
    "revision": "9fef9c556ead4992e26ac10be95ef8e1"
  },
  {
    "url": "other/index.html",
    "revision": "fd1846905bb4d8c3aa33e9007a02bbb2"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "bdbde2284fe78308f8fd8dc685b5ba8d"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "14b3e23314023d2153613efb0c8487e7"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "e27d8a5096d45b4129fc0c625caa76cb"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "60bf15ef8d94a1a49807ee30815a45d4"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "8395e29a8751d6cb097811188f76f354"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "40bfc573541682d5bc07baf0a80a0930"
  },
  {
    "url": "tools/frontend/index.html",
    "revision": "5141ec469efe1a915b19cb1f709dad58"
  },
  {
    "url": "tools/frontend/Lerna.html",
    "revision": "affb9955824e44a69f9a1df42934f4af"
  },
  {
    "url": "tools/frontend/NPM.html",
    "revision": "9dc5ebbf80444008c788f9f11cb63d1b"
  },
  {
    "url": "tools/frontend/nvm.html",
    "revision": "bf258b152b82312b965f539f9b4f595d"
  },
  {
    "url": "tools/frontend/Verdaccio.html",
    "revision": "3f0cfa145c033783fcaaf6f4437871de"
  },
  {
    "url": "tools/frontend/VS Code.html",
    "revision": "e3294e71a975e706c537da5061f7a34e"
  },
  {
    "url": "tools/frontend/Yarn.html",
    "revision": "31d6d1f8d6b2b6a1da738d201690c76f"
  },
  {
    "url": "tools/python/anaconda.html",
    "revision": "4c23f7b37d4f0cd05ef9a31d33fb8cdd"
  },
  {
    "url": "tools/python/index.html",
    "revision": "eb2b72c80fccc52d2a11a7e49e808807"
  },
  {
    "url": "tools/python/pip.html",
    "revision": "1011b1c85073b715171efedc7bc7c0aa"
  },
  {
    "url": "tools/python/pyenv.html",
    "revision": "c477651c5781c84ce77302b7ae2affc2"
  },
  {
    "url": "tools/system/docker.html",
    "revision": "1931c518f0458e9800b9dabb5e0f7965"
  },
  {
    "url": "tools/system/git.html",
    "revision": "3418255e8e405d14f80ba302926db9bc"
  },
  {
    "url": "tools/system/index.html",
    "revision": "eaf174cc8bf07df1eac46bcd4155e766"
  },
  {
    "url": "tools/system/linux.html",
    "revision": "8fc5b824758ed86ee125219a91d66f75"
  },
  {
    "url": "tools/system/ubuntu.html",
    "revision": "69b04deaa2bb744c8aa2541e0710bb8a"
  },
  {
    "url": "tools/system/vim.html",
    "revision": "5921015df56a5f9b36715e3d4b5d47d1"
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
