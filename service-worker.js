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
    "revision": "a461a3f9721215a396094f330e692f2d"
  },
  {
    "url": "api/index.html",
    "revision": "9ef195b39bba4c6635f9b927cff40cc7"
  },
  {
    "url": "api/rules.html",
    "revision": "e8eb2257eb3415f4b094c6683c280bb3"
  },
  {
    "url": "assets/css/0.styles.ec501a74.css",
    "revision": "81ebd01c4e57ed7b2b8ddbd9d26d141d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.271d6482.js",
    "revision": "3b9104aa1eb608a6cfad26f28fea4452"
  },
  {
    "url": "assets/js/11.63ff9b24.js",
    "revision": "8d1e1dd6314162ad8b31df63eeda8139"
  },
  {
    "url": "assets/js/12.01cdf6e7.js",
    "revision": "549e913ed1cef4d0962b68cb62bc14d1"
  },
  {
    "url": "assets/js/13.bded823d.js",
    "revision": "261111cee6c40784942bc1c73af4c55e"
  },
  {
    "url": "assets/js/14.1eaa7b3c.js",
    "revision": "2c7675e277a2d7771647e6d9782f2672"
  },
  {
    "url": "assets/js/15.14442974.js",
    "revision": "b794cdeaa43b50c57d41769cd4489c26"
  },
  {
    "url": "assets/js/16.c0586cb4.js",
    "revision": "ac52668cd5f19852a821f6e2354911ba"
  },
  {
    "url": "assets/js/17.8be95ddf.js",
    "revision": "d8e4c81c592b569655757fbdb410fcd9"
  },
  {
    "url": "assets/js/18.df8211b3.js",
    "revision": "3b924f29e7a8a0c7ab6aee5468935f37"
  },
  {
    "url": "assets/js/19.d1a05436.js",
    "revision": "b2ea2ea69fc44fb3e1835b71ddf5cc7a"
  },
  {
    "url": "assets/js/2.b87d4e36.js",
    "revision": "9b7d40ec29c8e86c5b5a984f0440f074"
  },
  {
    "url": "assets/js/20.8296486e.js",
    "revision": "0c64233eed8fcfa343980f2af90c719d"
  },
  {
    "url": "assets/js/21.fb09eb17.js",
    "revision": "20453b12e3790b8450b68e55a90770a2"
  },
  {
    "url": "assets/js/22.6d710d00.js",
    "revision": "65e2298741e669db69119ac12b118b4a"
  },
  {
    "url": "assets/js/23.2051fa65.js",
    "revision": "a82d84c6dd9fe9c7a3c1548cbd518818"
  },
  {
    "url": "assets/js/24.d2cc9238.js",
    "revision": "2d1c452fce9053121aef41af02a6fd81"
  },
  {
    "url": "assets/js/25.8204078c.js",
    "revision": "c16b17c19ec95ccceaf94811cb6b2642"
  },
  {
    "url": "assets/js/26.4e8cbb99.js",
    "revision": "c98bf13d746e5acbcceacad82a597c76"
  },
  {
    "url": "assets/js/27.7d1e5e3b.js",
    "revision": "fb41451b8e8e41015753df442480d7de"
  },
  {
    "url": "assets/js/28.968c634b.js",
    "revision": "35e53a3910f115cb809b7309d96c607f"
  },
  {
    "url": "assets/js/29.f5e7e9d8.js",
    "revision": "ed989b188712344aab5e88fbe2b31bcc"
  },
  {
    "url": "assets/js/3.be22be2a.js",
    "revision": "97ae5f88db5e89d2c8e4788bae6b9359"
  },
  {
    "url": "assets/js/30.df48d690.js",
    "revision": "727195e5685e34627c81c653719cb87e"
  },
  {
    "url": "assets/js/31.9bda6d87.js",
    "revision": "f0dcea6c6e6bce89e4d12add6ebb9075"
  },
  {
    "url": "assets/js/32.4f112ad0.js",
    "revision": "d4b247b9947347df2f1236700cc692bd"
  },
  {
    "url": "assets/js/33.35156a56.js",
    "revision": "271fb1093a87d59ea9592ab4bcbe3e80"
  },
  {
    "url": "assets/js/4.aa15dd72.js",
    "revision": "376b450add625bc37948168946e55299"
  },
  {
    "url": "assets/js/5.8a7ebdf8.js",
    "revision": "96bb7527d130ca969767821e688907a8"
  },
  {
    "url": "assets/js/6.d2990636.js",
    "revision": "5333eaaea95a5fd72824c1ba69928349"
  },
  {
    "url": "assets/js/7.99df0aeb.js",
    "revision": "a82c8ce833daaf31d62e1b0431f113a4"
  },
  {
    "url": "assets/js/8.99f046b2.js",
    "revision": "07b8440596ca918c7406bbc37160bebd"
  },
  {
    "url": "assets/js/9.62169a67.js",
    "revision": "f785552729abdf8a4156912dd1cf22e4"
  },
  {
    "url": "assets/js/app.2c8ba577.js",
    "revision": "8da9f0d6d0bc9b97c06555c4316e117d"
  },
  {
    "url": "configuration.html",
    "revision": "4418203cf6e40d91001177cfdb015844"
  },
  {
    "url": "examples/backend.html",
    "revision": "320fa7d478b28749176565936e713123"
  },
  {
    "url": "examples/i18n.html",
    "revision": "274208ca9ba79d12262d480a14c8e4a8"
  },
  {
    "url": "examples/index.html",
    "revision": "1d94d163ff6a908d4c1a1d975e9c0efc"
  },
  {
    "url": "examples/multiple-forms.html",
    "revision": "67d7865dc12864d4ed0ee1dc1f6e41cc"
  },
  {
    "url": "examples/nuxt.html",
    "revision": "f232b0f5b23a14f8c091323e4772463b"
  },
  {
    "url": "examples/ui-libraries.html",
    "revision": "ec849e39d17c8bb811644a589ec95b6d"
  },
  {
    "url": "guide/a11y.html",
    "revision": "c29cd823412c445914b1bc87aabdee18"
  },
  {
    "url": "guide/advanced-validation.html",
    "revision": "2fe3727e1a48fcf869c994804d5516d3"
  },
  {
    "url": "guide/applying-rules.html",
    "revision": "d85baf9e042b2a1230e7f70793f2e8b4"
  },
  {
    "url": "guide/basic-validation.html",
    "revision": "7a5c7910e7625df243a82df74b983dcb"
  },
  {
    "url": "guide/displaying-errors.html",
    "revision": "64fa3866e1343335a2eb89bfba7c21e0"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "637004369682a43a51863cc29b5ea687"
  },
  {
    "url": "guide/html5-validation.html",
    "revision": "0faf0e2bab0971a237c17da61dd640a9"
  },
  {
    "url": "guide/index.html",
    "revision": "91a9d04eddd87c4883d0ca657966f915"
  },
  {
    "url": "guide/interaction-and-ux.html",
    "revision": "83129fbdaeb07c96e2c04e44f292495c"
  },
  {
    "url": "guide/localization.html",
    "revision": "f500959c77716d64e02b288aafac30af"
  },
  {
    "url": "guide/styling.html",
    "revision": "a09f0295d29f78c6c43f950dcc4ae3f2"
  },
  {
    "url": "guide/testing.html",
    "revision": "3b705303200799e434b65e09a607712e"
  },
  {
    "url": "guide/validation-observer.html",
    "revision": "679d36849583150dd2d830f3eac752f1"
  },
  {
    "url": "guide/validation-provider.html",
    "revision": "5ffdb8d32b090f709b0ac2f99cab7a38"
  },
  {
    "url": "img/android-icon-144x144.png",
    "revision": "6e62ce50be0bcd4880124743b11f42b1"
  },
  {
    "url": "img/android-icon-192x192.png",
    "revision": "749eb7570911aa13fa7a305f7dfdb042"
  },
  {
    "url": "img/android-icon-36x36.png",
    "revision": "94d70fb19e77b88129a2a4b44d30273f"
  },
  {
    "url": "img/android-icon-48x48.png",
    "revision": "6e039016a0d1721277e863e6400107a9"
  },
  {
    "url": "img/android-icon-72x72.png",
    "revision": "cf3bbf6c5c50306cb1d2af34148fd4ad"
  },
  {
    "url": "img/android-icon-96x96.png",
    "revision": "171c58f6d99812028cdc433f706fab88"
  },
  {
    "url": "img/apple-icon-114x114.png",
    "revision": "a1612722a53e36417890844f4aaca4bd"
  },
  {
    "url": "img/apple-icon-120x120.png",
    "revision": "0fdcdb4e43499467315916e07d5a09e0"
  },
  {
    "url": "img/apple-icon-144x144.png",
    "revision": "6e62ce50be0bcd4880124743b11f42b1"
  },
  {
    "url": "img/apple-icon-152x152.png",
    "revision": "bdd5fb6d3e9976d4b66199750e7398a0"
  },
  {
    "url": "img/apple-icon-180x180.png",
    "revision": "6e4bfb481a5f5546673674ea2f53a80d"
  },
  {
    "url": "img/apple-icon-57x57.png",
    "revision": "2a3e81c26413d7cfb085132e4d0d78ed"
  },
  {
    "url": "img/apple-icon-60x60.png",
    "revision": "f3f63dae941a269726cecb63d5eb8ae4"
  },
  {
    "url": "img/apple-icon-72x72.png",
    "revision": "cf3bbf6c5c50306cb1d2af34148fd4ad"
  },
  {
    "url": "img/apple-icon-76x76.png",
    "revision": "8df9e1335515138c89abe7489d3331ee"
  },
  {
    "url": "img/apple-icon-precomposed.png",
    "revision": "0ae26495c87bea19c3238efac57100db"
  },
  {
    "url": "img/apple-icon.png",
    "revision": "0ae26495c87bea19c3238efac57100db"
  },
  {
    "url": "img/favicon-16x16.png",
    "revision": "50325b55b6decbf164f49e8ab2ef3a82"
  },
  {
    "url": "img/favicon-32x32.png",
    "revision": "7d8244cb1190e5818aaf3b5bc7dbe523"
  },
  {
    "url": "img/favicon-96x96.png",
    "revision": "171c58f6d99812028cdc433f706fab88"
  },
  {
    "url": "img/ms-icon-144x144.png",
    "revision": "6e62ce50be0bcd4880124743b11f42b1"
  },
  {
    "url": "img/ms-icon-150x150.png",
    "revision": "868ea201b8975a3f505a31992da8bf60"
  },
  {
    "url": "img/ms-icon-310x310.png",
    "revision": "635b0545d3369a88a7a3238089a38853"
  },
  {
    "url": "img/ms-icon-70x70.png",
    "revision": "476a4d57938b8a33701124593cb2301b"
  },
  {
    "url": "index.html",
    "revision": "b1fe0393ba5bdbb39858201d4990b558"
  },
  {
    "url": "logo.svg",
    "revision": "851182946aa8e35268efa9a9ccd410d2"
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
