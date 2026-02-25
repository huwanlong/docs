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
    "revision": "8ec6e1b275ddbb06e376534aa42d785d"
  },
  {
    "url": "about.html",
    "revision": "10d063038a75d8286a4411ac41734a04"
  },
  {
    "url": "ai/code/claude-code.html",
    "revision": "cc4499282ad734c141aee6c6032de36e"
  },
  {
    "url": "ai/code/index.html",
    "revision": "515122152a3e61f04c0e8856563b5dec"
  },
  {
    "url": "ai/code/openspec.html",
    "revision": "bcbb34d12454c08c219d5f1e1561f65b"
  },
  {
    "url": "ai/code/qwen-code.html",
    "revision": "fde517b54dcd1152f43068b07c9254fa"
  },
  {
    "url": "ai/code/spec-kit.html",
    "revision": "7a6a57fc3dc6f28c68f089001a28ac32"
  },
  {
    "url": "ai/ollama.html",
    "revision": "0be2a0da1f90c91e1a2236a717d6fc61"
  },
  {
    "url": "app.png",
    "revision": "9ea40a18fbbd5e1562c5bf9607d0b1eb"
  },
  {
    "url": "app/Android.html",
    "revision": "382ccf6a4e39a1aeb7968efb8239a869"
  },
  {
    "url": "app/Flutter.html",
    "revision": "299b11078d46dd1ca88d42567cd01114"
  },
  {
    "url": "app/HarmonyOs.html",
    "revision": "0e88975e5a0f08d6b178a9e5013ad1a6"
  },
  {
    "url": "app/iOS.html",
    "revision": "eec178ad37754a1dd9c8955036b3611b"
  },
  {
    "url": "app/MiniApp.html",
    "revision": "3454b4893a657dd71221055162ecf57b"
  },
  {
    "url": "app/ReactNative.html",
    "revision": "69ff127d6c216ebc3eed01e36bfc5bdc"
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
    "url": "assets/js/1.c790cd91.js",
    "revision": "9dd9e61778d9c8d68c887ea6ace086a5"
  },
  {
    "url": "assets/js/11.f7f09f72.js",
    "revision": "dfd0161f270b473a1a83c8f36bb6a7d5"
  },
  {
    "url": "assets/js/12.c4e05c15.js",
    "revision": "6321a3745ddf81a8678b43f408e0f5ea"
  },
  {
    "url": "assets/js/13.1aa142d9.js",
    "revision": "deb9efe7e8f426b143c181917951754c"
  },
  {
    "url": "assets/js/14.bdb23f24.js",
    "revision": "2f7d822ca6e4d95ea557812a6456915d"
  },
  {
    "url": "assets/js/15.7cde4368.js",
    "revision": "0d6f5320076caf67ef1006ea458161be"
  },
  {
    "url": "assets/js/16.13e4bf5c.js",
    "revision": "3af0b3201b695c8ad51e7e658bc9b362"
  },
  {
    "url": "assets/js/17.d858b4be.js",
    "revision": "1d2bd3d2c829a567eeab0c1fa6df705d"
  },
  {
    "url": "assets/js/18.973da852.js",
    "revision": "0e71f652a4dc694176d093cc97e252d2"
  },
  {
    "url": "assets/js/19.f98b04b7.js",
    "revision": "96707f2754a744ae8578cd102fc8888c"
  },
  {
    "url": "assets/js/2.29bbff75.js",
    "revision": "c7c41b610f826e960bcb2c48d875af9b"
  },
  {
    "url": "assets/js/20.dbb9904b.js",
    "revision": "634212ff544054fe64120b1e31394d4d"
  },
  {
    "url": "assets/js/21.0a192537.js",
    "revision": "c64aa5280bc29e75d9faab3bb08c1fce"
  },
  {
    "url": "assets/js/22.865f18d1.js",
    "revision": "e6d7b9508be3eb9749413c555c45d3af"
  },
  {
    "url": "assets/js/23.8fcaddd7.js",
    "revision": "55ecf61d683c72a12872d11c247be8a7"
  },
  {
    "url": "assets/js/24.7aefb55d.js",
    "revision": "c42ce80404745c7c1316d8d14b04bd1c"
  },
  {
    "url": "assets/js/25.0b0145e2.js",
    "revision": "544a40d0095af21c9f4927c37bad860b"
  },
  {
    "url": "assets/js/26.1b06c063.js",
    "revision": "c216517bebf90c2dc33252d07a523efc"
  },
  {
    "url": "assets/js/27.6694f9e9.js",
    "revision": "498121d7b488883af4bbc724b7036cb1"
  },
  {
    "url": "assets/js/28.807a9df0.js",
    "revision": "9e4b76dd833a609f1068b9b5806e160e"
  },
  {
    "url": "assets/js/29.86dfa7a2.js",
    "revision": "18d48bbafe43ee04257c6d31249788b2"
  },
  {
    "url": "assets/js/3.7717ca6e.js",
    "revision": "becff40126241cd963c310d690b7fd1b"
  },
  {
    "url": "assets/js/30.868bd21a.js",
    "revision": "9bc2f1d5a081cf7bd266ef9a1fd6e056"
  },
  {
    "url": "assets/js/31.bcda3842.js",
    "revision": "8416802623d42b3f5cccf2476ddb44f9"
  },
  {
    "url": "assets/js/32.d1a049df.js",
    "revision": "341ead0e0fe4d277b32be6ca6f389a9e"
  },
  {
    "url": "assets/js/33.9c560469.js",
    "revision": "80e9582713b5ebbf508484e5d78ec11b"
  },
  {
    "url": "assets/js/34.3791f1f6.js",
    "revision": "b3992945d0f9265bb267736375c73464"
  },
  {
    "url": "assets/js/35.a37e02b3.js",
    "revision": "867ad510555f09b06413dfe7941230e1"
  },
  {
    "url": "assets/js/36.ca48d745.js",
    "revision": "92d4735e36f60f26d0b6c963c7313360"
  },
  {
    "url": "assets/js/37.5ba9ed7c.js",
    "revision": "e717a56c364aba38495923ffbb66b8d8"
  },
  {
    "url": "assets/js/38.308941d0.js",
    "revision": "3be67438cd47a59cec24de0fbe77164d"
  },
  {
    "url": "assets/js/39.1ecf595c.js",
    "revision": "29981054b81e4333a51ec80341e7bbaf"
  },
  {
    "url": "assets/js/4.258c2f7a.js",
    "revision": "7c7f86267b54f21006398cd443aef229"
  },
  {
    "url": "assets/js/40.73ff43a3.js",
    "revision": "4dbcac9b12abc0a72898b19b19b1e3dd"
  },
  {
    "url": "assets/js/41.4b681d87.js",
    "revision": "c1a314d0e9276938308344e60d53b79e"
  },
  {
    "url": "assets/js/42.56ee4cde.js",
    "revision": "18069a7cc6ee1d4560881844d1f8253f"
  },
  {
    "url": "assets/js/43.a14cc7ab.js",
    "revision": "27b9842003808a90d7d294c01be9114a"
  },
  {
    "url": "assets/js/44.ff21a42c.js",
    "revision": "062d462bae42530e4d6c3e287160399c"
  },
  {
    "url": "assets/js/45.1bbe0397.js",
    "revision": "233add083c4a24d845442ae8cda81de3"
  },
  {
    "url": "assets/js/46.80286ba2.js",
    "revision": "07877c6a9bfa4ca0211b09ba80a12ad2"
  },
  {
    "url": "assets/js/47.991a39e0.js",
    "revision": "3b8598a80859682eea26da97a1b60969"
  },
  {
    "url": "assets/js/48.70bf57e6.js",
    "revision": "489bd6c096c25f6feb7a6d0e6e2a728b"
  },
  {
    "url": "assets/js/49.8e6f821b.js",
    "revision": "9286b4c35e8437d6377a6263eb72a927"
  },
  {
    "url": "assets/js/5.0a97944e.js",
    "revision": "fbfea3119c89586af5afb5fda7ed68b6"
  },
  {
    "url": "assets/js/50.a134dc4c.js",
    "revision": "85f624d510948f6066c43c762f15ac7c"
  },
  {
    "url": "assets/js/51.efcaaaf8.js",
    "revision": "d437f29e9f339c4516a655a2b1362057"
  },
  {
    "url": "assets/js/52.9fb8db34.js",
    "revision": "fa246c05ba7d66e45373b5c13b967f30"
  },
  {
    "url": "assets/js/53.288eb25f.js",
    "revision": "bca9e7c133a34a49b4eda42121479fe3"
  },
  {
    "url": "assets/js/54.95e59822.js",
    "revision": "24b98352c2ef9561aabd40ab8d7b38d4"
  },
  {
    "url": "assets/js/55.66eb6cf3.js",
    "revision": "84b35635d8ab8cdfc7012f3fb771f00f"
  },
  {
    "url": "assets/js/56.46c5eaa8.js",
    "revision": "2ccac2b2b668532b1760926b4cd12f17"
  },
  {
    "url": "assets/js/57.ce16cff8.js",
    "revision": "ca70823d3033cbcdfc47086e6f5fb54c"
  },
  {
    "url": "assets/js/58.d737baef.js",
    "revision": "555afbd930a4a23494c7d597ed63167f"
  },
  {
    "url": "assets/js/59.c49a3789.js",
    "revision": "98c9ec9b5f528f91019f13df6a647634"
  },
  {
    "url": "assets/js/6.9d68e669.js",
    "revision": "468efaf1b8003a0026a3304b030e50b0"
  },
  {
    "url": "assets/js/60.758b1bbb.js",
    "revision": "ed8bbfef200a76ed84835387cb92d975"
  },
  {
    "url": "assets/js/61.af928a3b.js",
    "revision": "52dfae6ab19ef7653f0ff979e2bbb929"
  },
  {
    "url": "assets/js/62.eccebbbb.js",
    "revision": "a71cfb08e01c7d9f5ef02a4e6dcc4089"
  },
  {
    "url": "assets/js/63.54dd1ef0.js",
    "revision": "d0e9fc54aaacb407ba2d025f616ab602"
  },
  {
    "url": "assets/js/64.4b6f0b68.js",
    "revision": "d62a3927bfdf0496c84987e1e5c9caa5"
  },
  {
    "url": "assets/js/65.5f24dad2.js",
    "revision": "06cf48656734944777f5148f63317fde"
  },
  {
    "url": "assets/js/66.1a2ed0e0.js",
    "revision": "bb5af076f0e5482ae187d36d79415d9c"
  },
  {
    "url": "assets/js/67.27fdc254.js",
    "revision": "533e03ae272ee7b7a529187c16f0ef13"
  },
  {
    "url": "assets/js/68.1bcd4a39.js",
    "revision": "790c331cf92ec9945220dce8b164fe05"
  },
  {
    "url": "assets/js/69.dbcd7078.js",
    "revision": "31cfd6f486d252dc5b151b56450c6bde"
  },
  {
    "url": "assets/js/7.1dc1de6c.js",
    "revision": "4e5ba3a1f6d00399184a9fc4a49a589f"
  },
  {
    "url": "assets/js/70.23059a02.js",
    "revision": "33ea4084e3393ff8ba8a5a88c11c223c"
  },
  {
    "url": "assets/js/71.2fed7544.js",
    "revision": "7fede4c6a69fae20c5177c9a27d611eb"
  },
  {
    "url": "assets/js/72.eb2e41e3.js",
    "revision": "d3411686c846723a2490a76ec2be87cd"
  },
  {
    "url": "assets/js/73.82aec459.js",
    "revision": "c179649859d0e64976ee1cdc137f1465"
  },
  {
    "url": "assets/js/74.9e94bc24.js",
    "revision": "b6bbdd6fdef50bc476a1997ce9837591"
  },
  {
    "url": "assets/js/75.3aba7f6a.js",
    "revision": "f873d69d087bcb1ec4bbb838fcdd09a7"
  },
  {
    "url": "assets/js/76.3626115d.js",
    "revision": "70e5a2b9162e41dd6c9e511289b08b5c"
  },
  {
    "url": "assets/js/77.c515c46f.js",
    "revision": "984f7b6105ad8fb435dbadac88327493"
  },
  {
    "url": "assets/js/78.f9fb8019.js",
    "revision": "03ba2122b5c295069da7f80c15f51809"
  },
  {
    "url": "assets/js/79.2978ac0f.js",
    "revision": "40b2068af7b40d3019d5607b19da9d18"
  },
  {
    "url": "assets/js/8.11420ad1.js",
    "revision": "6d0dda88f4e9ad4e0d56c3ce664b528f"
  },
  {
    "url": "assets/js/80.72c5e094.js",
    "revision": "611a1cfecc50e224c81d115b7855b0db"
  },
  {
    "url": "assets/js/81.478ace98.js",
    "revision": "8caec0e09155657f506f397969d2e7a6"
  },
  {
    "url": "assets/js/82.eea6b3f6.js",
    "revision": "547312b09adafd3931307e44afab9b95"
  },
  {
    "url": "assets/js/83.9062a1e0.js",
    "revision": "00835294a884179feda35619a2a1165f"
  },
  {
    "url": "assets/js/84.844515ce.js",
    "revision": "a522a49f7096949beb1e9335535a5fc1"
  },
  {
    "url": "assets/js/85.28e6337f.js",
    "revision": "7069465066d4b10ba7b89b378f9c61e7"
  },
  {
    "url": "assets/js/86.9967f62c.js",
    "revision": "a4355044ac32edabb1f1fba19be78afb"
  },
  {
    "url": "assets/js/87.8e8a1572.js",
    "revision": "c311e51c24f776a0943e0de514b4e97f"
  },
  {
    "url": "assets/js/88.d40d3d07.js",
    "revision": "80b7180df1a07f9abcafa67def2845e2"
  },
  {
    "url": "assets/js/89.75cc14bc.js",
    "revision": "361a601f79d47a666a6e448c2629b811"
  },
  {
    "url": "assets/js/app.8711feac.js",
    "revision": "d4a647e2a0f8022082f20c91a0bbfdb6"
  },
  {
    "url": "assets/js/vendors~docsearch.8bd86921.js",
    "revision": "acad32c55720808108feec68182e98f9"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "f4759fde86410e2b5a25282c8cb0df54"
  },
  {
    "url": "guide.html",
    "revision": "ccd53c8addac6bb7283f12846b91fc2d"
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
    "revision": "8b27cc57d1e7f52a35d6ddd80a9465c0"
  },
  {
    "url": "js/electron.html",
    "revision": "d645351e734b39b2ae6f61b18e017e29"
  },
  {
    "url": "js/express.html",
    "revision": "596dc0a2a83cf9c766fd4189dffea3b6"
  },
  {
    "url": "js/MicroApp.html",
    "revision": "a722e1dc58ea27c93ea08f1cf4a5911a"
  },
  {
    "url": "js/points.html",
    "revision": "3e2fba81a9566c20e8a50bd865b3bdb4"
  },
  {
    "url": "js/React.html",
    "revision": "1bdc58b62c67a690dad5e4889f5e1093"
  },
  {
    "url": "js/SSR.html",
    "revision": "131abe181713a850ab9571e9451955b9"
  },
  {
    "url": "js/tools/index.html",
    "revision": "72c5ceb1b6cafa2619926e9be7a024d3"
  },
  {
    "url": "js/tools/Lerna.html",
    "revision": "6c44fa8119fb3a64d4cc4f7d1a260c1d"
  },
  {
    "url": "js/tools/NPM.html",
    "revision": "7d27b26315bbd18a4ff0319fa23566bf"
  },
  {
    "url": "js/tools/nvm.html",
    "revision": "453aa01bd973a5d9486c94ad53de61b6"
  },
  {
    "url": "js/tools/pnpm.html",
    "revision": "20cbba808d1150de62ffdefcda8214c5"
  },
  {
    "url": "js/tools/Verdaccio.html",
    "revision": "145c82eb15fcc28df75f652e330100bd"
  },
  {
    "url": "js/tools/Yarn.html",
    "revision": "b68de20faca66cba512f1b66703e3902"
  },
  {
    "url": "js/VitePress.html",
    "revision": "e4187c808f87effdf371297f3036eab8"
  },
  {
    "url": "js/vue3.html",
    "revision": "e1ff271ad0b47c8d0d6947c19773055a"
  },
  {
    "url": "js/webpack4.html",
    "revision": "d6fa57f96b76ae0a906915e34f04ef7d"
  },
  {
    "url": "other/example/countup.html",
    "revision": "3b23adf18d195d45cf845a92d162beb1"
  },
  {
    "url": "other/example/image.html",
    "revision": "a6f4c26a3fed02037ce6a37a164d3a18"
  },
  {
    "url": "other/index.html",
    "revision": "ac35d08f890aadf2f5b4f15068a8712e"
  },
  {
    "url": "other/java/index.html",
    "revision": "3e1fa8311b499abb15127669664c4773"
  },
  {
    "url": "other/Java/index.html",
    "revision": "3e1fa8311b499abb15127669664c4773"
  },
  {
    "url": "other/php/index.html",
    "revision": "303314b84b36081d65d6a68b7aa844b3"
  },
  {
    "url": "other/PHP/index.html",
    "revision": "303314b84b36081d65d6a68b7aa844b3"
  },
  {
    "url": "other/产品/index.html",
    "revision": "bfad96776d659a7b74ebb95e88a71300"
  },
  {
    "url": "other/算法/index.html",
    "revision": "d36a519134134ac209a8c5aa3044f9e2"
  },
  {
    "url": "other/设计/index.html",
    "revision": "449ba2af6cb067dd602bd2c8d7c10b73"
  },
  {
    "url": "python/django.html",
    "revision": "04a495409f9f0da60355fcb856aa4a90"
  },
  {
    "url": "python/packages.html",
    "revision": "6dfbaa67f6a0107973f6108b668ece0a"
  },
  {
    "url": "python/tools.html",
    "revision": "eefa5be9947d440574f888b86d5404cf"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "fe96cfe954ff14bac7590f1e3614526f"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "81d44150d07e483ad1d19e47db15a9a5"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "7b21c6cfaac0344df8811b2b33802cc4"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "5f7333c6439c39eedebc19fa3f53a0a1"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "eb9e824afd89a57024df35010696cf8e"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "1f743714643aa96bbe3e095dd0253adb"
  },
  {
    "url": "python/深度学习/index.html",
    "revision": "810504cf89cf55418f75715e889d6580"
  },
  {
    "url": "tools/centos.html",
    "revision": "db1a7ea5824c345fbb02c9d065af6efd"
  },
  {
    "url": "tools/docker.html",
    "revision": "13a81cd73df15e37a344ea98626ab070"
  },
  {
    "url": "tools/git.html",
    "revision": "ea51f1137f0606a9d85643086f702d7b"
  },
  {
    "url": "tools/idea.html",
    "revision": "bb0eb6c63c0865b687d39b94e4ad8efe"
  },
  {
    "url": "tools/index.html",
    "revision": "ea7ef90260821cd3074ba76ff7b8b874"
  },
  {
    "url": "tools/linux.html",
    "revision": "6fc311f17d12eed43cac79743468bfa4"
  },
  {
    "url": "tools/mac.html",
    "revision": "d18b2bbd7ad1a163b627acc0426b2bc9"
  },
  {
    "url": "tools/ubuntu.html",
    "revision": "4945c9bdf2dad9c0ed3fc577a78f069a"
  },
  {
    "url": "tools/vim.html",
    "revision": "c435ba5b3d14f05867aac73f5415d581"
  },
  {
    "url": "tools/VSCode.html",
    "revision": "022f5eab366b484c3a4469c27f82b3a4"
  },
  {
    "url": "tools/wsl.html",
    "revision": "453faedb625b70255f0db78212c545a7"
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
