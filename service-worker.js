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
    "revision": "56adcaaae1c453401fc7d58e62736e4b"
  },
  {
    "url": "about.html",
    "revision": "ef30a0c3676a50530656c6ad6a527e19"
  },
  {
    "url": "ai/ollama.html",
    "revision": "6aef4d386792a3fed2edbf32eebdecd4"
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
    "url": "assets/js/1.d6895475.js",
    "revision": "3b72551e8b41b41604d9c701c37dfbea"
  },
  {
    "url": "assets/js/11.33db5bb5.js",
    "revision": "48fec71b3d009f6b39fd9bddc20f2f96"
  },
  {
    "url": "assets/js/12.0e162a86.js",
    "revision": "1ee423bb520a2f99413717486f6bcb3d"
  },
  {
    "url": "assets/js/13.e6b6eadf.js",
    "revision": "a9fb1ead75e807dd05c35c11b25b41b8"
  },
  {
    "url": "assets/js/14.6c021a44.js",
    "revision": "78d136f5f69a9749f620679ae477aac5"
  },
  {
    "url": "assets/js/15.492308f5.js",
    "revision": "d817825953b47aa56cce4a446f29ea46"
  },
  {
    "url": "assets/js/16.216de069.js",
    "revision": "2e1c963553519eaa119d89d7ebbf4646"
  },
  {
    "url": "assets/js/17.a8a1133d.js",
    "revision": "8218ddfcc3771e73b07aeae4e934ab58"
  },
  {
    "url": "assets/js/18.8770c154.js",
    "revision": "7a504bd48e56cb10214e7d27123dee52"
  },
  {
    "url": "assets/js/19.e5817c71.js",
    "revision": "edf25a10466300cd062c3525fc686072"
  },
  {
    "url": "assets/js/2.2575a896.js",
    "revision": "dc6009cf89e288a8248ab5096a0c172e"
  },
  {
    "url": "assets/js/20.8943a5d0.js",
    "revision": "707de49c87d277cd2a445d701ba90b79"
  },
  {
    "url": "assets/js/21.f99420c3.js",
    "revision": "c6c2c979b19a697271301f6a20c831a4"
  },
  {
    "url": "assets/js/22.d3a0ab99.js",
    "revision": "07b855273b0d685fb93168c7deda6a3a"
  },
  {
    "url": "assets/js/23.17ee3813.js",
    "revision": "b988cab908a91edccb6ada09d977758a"
  },
  {
    "url": "assets/js/24.c6fd0e00.js",
    "revision": "9f1f051b76f6b1736eef9744b92f3a12"
  },
  {
    "url": "assets/js/25.6b07453f.js",
    "revision": "990e0632a76a72c4cbc42aa70b2fb158"
  },
  {
    "url": "assets/js/26.9f8e82a2.js",
    "revision": "89b21282a0c918b3cac0f433ee63acbf"
  },
  {
    "url": "assets/js/27.1f3d0f12.js",
    "revision": "2cf05f1852467470b58c58b256f89939"
  },
  {
    "url": "assets/js/28.38756ba8.js",
    "revision": "62ad99e1dc6bb92e6e7ed0ba6d4f2a66"
  },
  {
    "url": "assets/js/29.af99be2f.js",
    "revision": "a53811e042b96359fbaf818374a672f0"
  },
  {
    "url": "assets/js/3.365bde26.js",
    "revision": "266165a4f8b164f5752b9c52b2397604"
  },
  {
    "url": "assets/js/30.1b1b9336.js",
    "revision": "4a16f89ee2dff004ca8c1567aec2f4b8"
  },
  {
    "url": "assets/js/31.846471af.js",
    "revision": "a1f69f3f6dff18b54a1c4e467a3a1228"
  },
  {
    "url": "assets/js/32.230d1d50.js",
    "revision": "cbacf776ee7d49752d4c0f48052a10a3"
  },
  {
    "url": "assets/js/33.c04273dc.js",
    "revision": "8b5c743e3871a5dd0af1c667d8b05823"
  },
  {
    "url": "assets/js/34.99e8047a.js",
    "revision": "c355fc65980808982d2ccc604613b87a"
  },
  {
    "url": "assets/js/35.338607f1.js",
    "revision": "49cfa4e043c647accb5ba284287756fc"
  },
  {
    "url": "assets/js/36.7f911cda.js",
    "revision": "8bee73e34c006f8d84f38129d80c3992"
  },
  {
    "url": "assets/js/37.a2c0e6f9.js",
    "revision": "cc6a180c02143381b9d52cadfcec9de0"
  },
  {
    "url": "assets/js/38.4a968021.js",
    "revision": "485708915ca45268ba1d930e7ce88a03"
  },
  {
    "url": "assets/js/39.745183ed.js",
    "revision": "086e60e754c546c2ac211a2922c31868"
  },
  {
    "url": "assets/js/4.96f1d9f0.js",
    "revision": "33162bd8a791ab306e1473bd7a65f22c"
  },
  {
    "url": "assets/js/40.dbd6a157.js",
    "revision": "c5be787d5292e315c62147bd490d09b7"
  },
  {
    "url": "assets/js/41.20b20373.js",
    "revision": "57ef412b5a3bc4a29fa89a949a3e6aec"
  },
  {
    "url": "assets/js/42.664b6a16.js",
    "revision": "8db80864c1c35555e0dd0fa6d2491c08"
  },
  {
    "url": "assets/js/43.c15ec305.js",
    "revision": "27a5c4dca6168b47f0da3d61583c7f7a"
  },
  {
    "url": "assets/js/44.49bc9a00.js",
    "revision": "ffdabb4df2e2857707c7ad56f77e2584"
  },
  {
    "url": "assets/js/45.ede8d49b.js",
    "revision": "bbf179e05166053f3bff975b42854b33"
  },
  {
    "url": "assets/js/46.0b105071.js",
    "revision": "c48746ac32d1fedf146a105b63f80c78"
  },
  {
    "url": "assets/js/47.09976f40.js",
    "revision": "d86a292d31461b8b8c19462c49666752"
  },
  {
    "url": "assets/js/48.87015a83.js",
    "revision": "45dbf13fb081b83baa617a94602cdb56"
  },
  {
    "url": "assets/js/49.b56c4b20.js",
    "revision": "2b672e7ba7f5d1002231e2b350c5c018"
  },
  {
    "url": "assets/js/5.f0a470ed.js",
    "revision": "6d478f6f5757a2e4b82300117ac96abd"
  },
  {
    "url": "assets/js/50.8fb35f03.js",
    "revision": "cf075bfe6a9e4b28d3dfb7415d45839f"
  },
  {
    "url": "assets/js/51.279279a9.js",
    "revision": "6c236db3664de4721ba00904cf129c03"
  },
  {
    "url": "assets/js/52.b7147cab.js",
    "revision": "5e378af46d27937a61f8c7ff6938b2d8"
  },
  {
    "url": "assets/js/53.74cd4db5.js",
    "revision": "9987c37729dd136828290d3ce93e5b78"
  },
  {
    "url": "assets/js/54.129094b1.js",
    "revision": "4849895758c423c7528b3149a191105d"
  },
  {
    "url": "assets/js/55.102eb30a.js",
    "revision": "f4c1db84bfffa47c24789b4f1148f766"
  },
  {
    "url": "assets/js/56.490191e4.js",
    "revision": "29a2fd2737c8e0abb961cf8a6af38097"
  },
  {
    "url": "assets/js/57.375060e7.js",
    "revision": "138ac112a719dd09dd3fc7807ae6099b"
  },
  {
    "url": "assets/js/58.1878c255.js",
    "revision": "306bdc9e58ece06c360b2920f30fc6bc"
  },
  {
    "url": "assets/js/59.ec7b447e.js",
    "revision": "8c11c1a180230442438fceee8b70f5b7"
  },
  {
    "url": "assets/js/6.ed7f4b6c.js",
    "revision": "e0b27c4e4c86141ca3c668c449a2a271"
  },
  {
    "url": "assets/js/60.fa4cc918.js",
    "revision": "9678a60ce30455c407452529cbbc7a88"
  },
  {
    "url": "assets/js/61.85875de6.js",
    "revision": "245b294b0024365a6f5c79074d057b32"
  },
  {
    "url": "assets/js/62.11e38885.js",
    "revision": "17622326fcd544a3d449422fd42a0929"
  },
  {
    "url": "assets/js/63.4efe956c.js",
    "revision": "7acbd824887298aa72385248feee5af8"
  },
  {
    "url": "assets/js/64.c9e39284.js",
    "revision": "84991ece0348cff304dc4a4903b61961"
  },
  {
    "url": "assets/js/65.305e85bf.js",
    "revision": "dcf270fda5949df6d64c6600c230fabe"
  },
  {
    "url": "assets/js/66.e96d5251.js",
    "revision": "8a4720e6647d80235dfa3267150755c8"
  },
  {
    "url": "assets/js/67.d4064b6c.js",
    "revision": "5ed60e368e4d216d1316740fec9dd238"
  },
  {
    "url": "assets/js/68.2da3303d.js",
    "revision": "f62a08f3aa4fbec4780f6c877153a8a1"
  },
  {
    "url": "assets/js/69.f23ab4ad.js",
    "revision": "6294b3181557a0d6011a1a0ea049b760"
  },
  {
    "url": "assets/js/7.cb301dbd.js",
    "revision": "1a52e3e04e49c24b4cb10552ff290379"
  },
  {
    "url": "assets/js/70.52bcd310.js",
    "revision": "07d2136de3b86d521f687f6ffb87df70"
  },
  {
    "url": "assets/js/71.6a6218d6.js",
    "revision": "b9b77767635a739b3d1cb361246be4cd"
  },
  {
    "url": "assets/js/72.88d0b155.js",
    "revision": "81b1987b3a616eb1620ea0a24b7ccf6d"
  },
  {
    "url": "assets/js/73.0f56b83a.js",
    "revision": "4983103cc5abf341ecb4a2a9bee21a6d"
  },
  {
    "url": "assets/js/74.529cdf4a.js",
    "revision": "85dcacde958148c13222fc58b88799c2"
  },
  {
    "url": "assets/js/75.af172028.js",
    "revision": "3cfc1d361a669f8cdc9d7a5b5851fe29"
  },
  {
    "url": "assets/js/76.95bfd153.js",
    "revision": "555d801586dd192dc3acb674ddac8290"
  },
  {
    "url": "assets/js/77.eafdbdd1.js",
    "revision": "84013339458e909f6095579f3de7aa58"
  },
  {
    "url": "assets/js/78.db2aab07.js",
    "revision": "ca479f85561228af9815a76b9180bf1e"
  },
  {
    "url": "assets/js/79.d4bfe4b8.js",
    "revision": "b6b184f391260c9179bcf135cc59e277"
  },
  {
    "url": "assets/js/8.b896ac99.js",
    "revision": "1a3cd65ea90c8d0d1ee2fc2dc0db0056"
  },
  {
    "url": "assets/js/80.c77c11de.js",
    "revision": "39c4210200d760ef4b4d197618b902f1"
  },
  {
    "url": "assets/js/81.035fbd0a.js",
    "revision": "35fba1b68c7dff2a08ea1cf4484ceb7a"
  },
  {
    "url": "assets/js/82.85d9b0ff.js",
    "revision": "99a3e065ffae70e6c000f16be2684c76"
  },
  {
    "url": "assets/js/app.b90a717e.js",
    "revision": "34e4a642229d0c8102aaa01db34664f4"
  },
  {
    "url": "assets/js/vendors~docsearch.8bd86921.js",
    "revision": "acad32c55720808108feec68182e98f9"
  },
  {
    "url": "bookmarks/index.html",
    "revision": "d5b077b3d01377e16fc248fbf4c509aa"
  },
  {
    "url": "frontend/Android.html",
    "revision": "93655059770727fe770510815f5cfd89"
  },
  {
    "url": "frontend/cli.html",
    "revision": "ed770b0498dd71f396791805cc4d3f1a"
  },
  {
    "url": "frontend/electron.html",
    "revision": "ec825ca7a19793679bcfead853217fe9"
  },
  {
    "url": "frontend/express.html",
    "revision": "9f2e131ae02d54184e7f221281657f08"
  },
  {
    "url": "frontend/Flutter.html",
    "revision": "81ae81305a5775b084020e1cc4c3be07"
  },
  {
    "url": "frontend/HarmonyOs.html",
    "revision": "520e858a0f174dc812bf2d267f2f96fc"
  },
  {
    "url": "frontend/iOS.html",
    "revision": "08a13b4aefa0561e013e011ae8acf5fa"
  },
  {
    "url": "frontend/MicroApp.html",
    "revision": "eb795d00d3d952642b2e84f6447e6720"
  },
  {
    "url": "frontend/MiniApp.html",
    "revision": "548ea5a9a0e86364851348c6842ff4cb"
  },
  {
    "url": "frontend/points.html",
    "revision": "69ac5192729d1602492fd9c98bc341d2"
  },
  {
    "url": "frontend/React.html",
    "revision": "70dfa983da46da8b30a745b3b9243926"
  },
  {
    "url": "frontend/ReactNative.html",
    "revision": "61b9b853877c1ab29a3d69e43ab880c2"
  },
  {
    "url": "frontend/SSR.html",
    "revision": "4ba4d69314d32fdb72663155e2a488b6"
  },
  {
    "url": "frontend/tools/index.html",
    "revision": "fdb85907e35543d712a635d224f6921b"
  },
  {
    "url": "frontend/tools/Lerna.html",
    "revision": "5ff1d7a88b720f23d91f49ca83f9adce"
  },
  {
    "url": "frontend/tools/NPM.html",
    "revision": "b8499f4d692a499f13cbe13b0ecd1c67"
  },
  {
    "url": "frontend/tools/nvm.html",
    "revision": "86efd5c2b86cbc7db6506d43f3fdf7ba"
  },
  {
    "url": "frontend/tools/pnpm.html",
    "revision": "28c77ff23f65540dde7259936990b899"
  },
  {
    "url": "frontend/tools/Verdaccio.html",
    "revision": "320eb39ea9a3f02685c5e400eaf948c0"
  },
  {
    "url": "frontend/tools/Yarn.html",
    "revision": "3c54d5b13a526b5cff9f4830209025ae"
  },
  {
    "url": "frontend/vue3.html",
    "revision": "643a8847288ff4daa83b8c3fc331450e"
  },
  {
    "url": "frontend/webpack4.html",
    "revision": "90d08649a15e2b4cded647d9f92fd30c"
  },
  {
    "url": "guide.html",
    "revision": "aa6f7ce4f1f4e7ff2cfb8a20d26a6862"
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
    "revision": "c9196eda391dff8f2c539dd38edea5cd"
  },
  {
    "url": "other/example/countup.html",
    "revision": "861abfe33da3f3d4e70bfaae126961d2"
  },
  {
    "url": "other/example/image.html",
    "revision": "02b54781fcdfd684c1d46cdc61cc6ab4"
  },
  {
    "url": "other/index.html",
    "revision": "4ab0cf9e422ae8e1cf744e8d470450be"
  },
  {
    "url": "other/Java/index.html",
    "revision": "88cb53bf17ec4fa99e9b56a03a11ce47"
  },
  {
    "url": "other/PHP/index.html",
    "revision": "4cb4de508d59aeca5a239d50f933c53e"
  },
  {
    "url": "other/产品/index.html",
    "revision": "741ee987a55329e8a85998b5ee7022a6"
  },
  {
    "url": "other/算法/index.html",
    "revision": "39bdf54306e7df55ad249efeae1cd39b"
  },
  {
    "url": "other/设计/index.html",
    "revision": "9e5952797fcf19f57c3929b207f51d12"
  },
  {
    "url": "python/base.html",
    "revision": "954b23139b42f123365d348562335a60"
  },
  {
    "url": "python/django.html",
    "revision": "015bfaa50880444fa0da3619c92348ce"
  },
  {
    "url": "python/packages.html",
    "revision": "801e632f60e40fc8d3f5edd869b93ee3"
  },
  {
    "url": "python/tools.html",
    "revision": "8e703e1915d85085cb8deabe6a2ecd5b"
  },
  {
    "url": "python/数据挖掘/index.html",
    "revision": "36b3aa8d0a2c6d428d85cc25eb9db9d4"
  },
  {
    "url": "python/数据挖掘/matplotlib.html",
    "revision": "55ec805beb16590625904950e2fed56b"
  },
  {
    "url": "python/数据挖掘/numpy.html",
    "revision": "a15b938915ce80c2517cf4e9f6e1d79b"
  },
  {
    "url": "python/数据挖掘/pandas.html",
    "revision": "e6b298329031f263bbc06e6f13a94707"
  },
  {
    "url": "python/机器学习/index.html",
    "revision": "95f6147ccaabce17471ea7d831cb33a9"
  },
  {
    "url": "python/机器学习/特征工程.html",
    "revision": "2cd7d7df4857f482dc54190ee57dd5bf"
  },
  {
    "url": "python/深度学习/index.html",
    "revision": "4cb84b8a77238eddd02716aacafeac72"
  },
  {
    "url": "tools/centos.html",
    "revision": "297e4ca3d5f8d9471fc1d35bc4016efe"
  },
  {
    "url": "tools/docker.html",
    "revision": "cc77db7b62eeca575d377378451c9ea6"
  },
  {
    "url": "tools/git.html",
    "revision": "3ff6b31fb0b2f8ccd43a1486c6d9a668"
  },
  {
    "url": "tools/idea.html",
    "revision": "1fa79e06dc86ce37431c628630841fb1"
  },
  {
    "url": "tools/index.html",
    "revision": "0fa517c8be027af088bd89b4be4108e5"
  },
  {
    "url": "tools/linux.html",
    "revision": "6bad02d9d021f5199651fb3183bd45ab"
  },
  {
    "url": "tools/mac.html",
    "revision": "505417a9bdd465ba6889a9130eeae227"
  },
  {
    "url": "tools/ubuntu.html",
    "revision": "4daf6be76a3b1f1ed1800cb4bdf67786"
  },
  {
    "url": "tools/vim.html",
    "revision": "8561887a1f9389fdcb41d261abae52c4"
  },
  {
    "url": "tools/VSCode.html",
    "revision": "270ec4a9533df9365331fbb55955212b"
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
