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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "5189845347ed1e1c1016ff064eed6c84"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.e789a666.css",
    "revision": "e02e557c87fcf97706c27f96f6e1924b"
  },
  {
    "url": "assets/img/add-user.335b0b72.png",
    "revision": "335b0b729fe10c51e840f717816e3879"
  },
  {
    "url": "assets/img/create-project.e4bd6386.png",
    "revision": "e4bd638664a221ac40b996d89813c869"
  },
  {
    "url": "assets/img/create-task.0abdc32e.png",
    "revision": "0abdc32e00ba1e4042e10b8e9998c072"
  },
  {
    "url": "assets/img/create-user-error.4693e02d.png",
    "revision": "4693e02dbcf7761a43c8e5a56f3779d0"
  },
  {
    "url": "assets/img/delete-project-error.322fd7e9.png",
    "revision": "322fd7e90bfedbc19f67ce469089990f"
  },
  {
    "url": "assets/img/delete-project.39f57953.png",
    "revision": "39f579532b3c0dcc863cc2d7a58ea195"
  },
  {
    "url": "assets/img/delete-task-error.b9449f71.png",
    "revision": "b9449f71d10d7f3582dbb6ed8c36caf2"
  },
  {
    "url": "assets/img/delete-task.cfd6adf5.png",
    "revision": "cfd6adf5fcca1ddbc5427a922dc6de3d"
  },
  {
    "url": "assets/img/delete-user-error.ec017eaf.png",
    "revision": "ec017eaf2816e8f78590c1a135444ca1"
  },
  {
    "url": "assets/img/delete-user.15df5baf.png",
    "revision": "15df5baf8d613661967697864e30629c"
  },
  {
    "url": "assets/img/get-project.1db785ea.png",
    "revision": "1db785ea1d775980cda0950696f62525"
  },
  {
    "url": "assets/img/get-task-error.439cbe7c.png",
    "revision": "439cbe7c156c29d60e242992d3c64489"
  },
  {
    "url": "assets/img/get-task.c4484e10.png",
    "revision": "c4484e106be0d77bd07ccb5914ca9114"
  },
  {
    "url": "assets/img/get-user-error.02b5ce2a.png",
    "revision": "02b5ce2a888bcd4596fadad6f9acbaaa"
  },
  {
    "url": "assets/img/get-user.7f2e7c96.png",
    "revision": "7f2e7c96261ae7206f4b6de206f9d3b7"
  },
  {
    "url": "assets/img/project-get-error.0eff0f0e.png",
    "revision": "0eff0f0e865b4e72771d55f6ece70c9f"
  },
  {
    "url": "assets/img/relationalSchema.03c9cba4.png",
    "revision": "03c9cba456d7d301109ba0cfdbecafec"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/start.dac013e1.png",
    "revision": "dac013e18b385df38024fb6b770d0477"
  },
  {
    "url": "assets/img/update-project-error.bcd6cb90.png",
    "revision": "bcd6cb9051bc681833b3c2770a21909f"
  },
  {
    "url": "assets/img/update-project.3d819e29.png",
    "revision": "3d819e29fd55a90b2b9fb60467fccf82"
  },
  {
    "url": "assets/img/update-task-error.8fc4fbed.png",
    "revision": "8fc4fbed43208f0d88cc3e2636cda58a"
  },
  {
    "url": "assets/img/update-task.442064ab.png",
    "revision": "442064ab2edaffe7c7d574b9440201bc"
  },
  {
    "url": "assets/img/update-user-error-email.1f330cc5.png",
    "revision": "1f330cc5603b1e596f447ff125eb483a"
  },
  {
    "url": "assets/img/update-user-error.66121f8e.png",
    "revision": "66121f8e4b6a4025b55f679c1905b445"
  },
  {
    "url": "assets/img/update-user-password-error.3c27a95b.png",
    "revision": "3c27a95bb520fb20488f84687dc6064a"
  },
  {
    "url": "assets/img/update-user-without-password.3839a69c.png",
    "revision": "3839a69c4eade4cce85ad210c5f87c65"
  },
  {
    "url": "assets/img/user-update-wih-password.becdbefa.png",
    "revision": "becdbefa4fd8aeb62a4747e6a3043dd5"
  },
  {
    "url": "assets/js/1.834dd91f.js",
    "revision": "94eb3008057975f05573579cf33821d8"
  },
  {
    "url": "assets/js/10.a4625d36.js",
    "revision": "7bac89484019b1f00e7d735f712111a3"
  },
  {
    "url": "assets/js/13.03185a53.js",
    "revision": "9798042625aaf359340f2d3c6d94dfa6"
  },
  {
    "url": "assets/js/14.55c9547e.js",
    "revision": "d42acd4d4ce5d446aeb4ba90eaa145c9"
  },
  {
    "url": "assets/js/15.99633a4f.js",
    "revision": "86a28369a719249c9b78821ec49d13c9"
  },
  {
    "url": "assets/js/16.2bc577d7.js",
    "revision": "18e9a7b58be1e7e5f75822bfa14c22e0"
  },
  {
    "url": "assets/js/17.668d253f.js",
    "revision": "26346ea944646c1e5dd6af400ee6657e"
  },
  {
    "url": "assets/js/18.bbb3bd3c.js",
    "revision": "0f8fcc5459702246f890a0e38ffafda6"
  },
  {
    "url": "assets/js/19.9b8f087f.js",
    "revision": "324990ca660d7ed766a310931c2b5664"
  },
  {
    "url": "assets/js/2.7836774f.js",
    "revision": "e6e90367d03d040dcc2aa73a2cc7d5db"
  },
  {
    "url": "assets/js/20.c5844bec.js",
    "revision": "913aca44e52242c03f96e6e148d82520"
  },
  {
    "url": "assets/js/21.39425e04.js",
    "revision": "8b7c9b61e56f99d768ff23d21e9d935d"
  },
  {
    "url": "assets/js/22.d2077878.js",
    "revision": "9f6e9904ba0cfa4dc7bc50e47142a6e3"
  },
  {
    "url": "assets/js/23.3ec6ef11.js",
    "revision": "d0e91598f11e346698d9855ebb1cde0b"
  },
  {
    "url": "assets/js/24.b4a8c27d.js",
    "revision": "cf8023ea5dc44d1d38649c1d0eb8be5a"
  },
  {
    "url": "assets/js/25.9b82b3b9.js",
    "revision": "2e9bc8583fc2d0dfe0e546a919f8359a"
  },
  {
    "url": "assets/js/26.590bbba7.js",
    "revision": "263fdeb3a6421d841b88e0d0908be681"
  },
  {
    "url": "assets/js/27.4e997785.js",
    "revision": "b3edce3fbd3bd899e41d5538b476d663"
  },
  {
    "url": "assets/js/28.a5cf640c.js",
    "revision": "67a17105a9603bab9a6edefdeaf3a1b4"
  },
  {
    "url": "assets/js/29.0f027b3a.js",
    "revision": "24591ff2410c79551419409f8f0edf9b"
  },
  {
    "url": "assets/js/3.3a389e6a.js",
    "revision": "54c2d66a75926ab0b7e2caed46600a3e"
  },
  {
    "url": "assets/js/30.aad78a50.js",
    "revision": "2acc4e9a0ad364cbc5f9b8b78a858993"
  },
  {
    "url": "assets/js/31.c71b97ff.js",
    "revision": "e065d05b7038365fbad7abf9f165e99f"
  },
  {
    "url": "assets/js/32.343baea0.js",
    "revision": "f8c7e52a296a766c63e9b3983b7c62ea"
  },
  {
    "url": "assets/js/33.13503102.js",
    "revision": "e0d05b0a839c7626877be574221d0d0e"
  },
  {
    "url": "assets/js/34.3b4d1dbc.js",
    "revision": "9f161102fe08c8f6072b8458bbea0063"
  },
  {
    "url": "assets/js/35.b98f137d.js",
    "revision": "4ebbe90623d7f2f2c2770d90587c8899"
  },
  {
    "url": "assets/js/36.95ebbde6.js",
    "revision": "57064e6f51ef38dad453142fb2195537"
  },
  {
    "url": "assets/js/37.d8cd6d08.js",
    "revision": "918d8bd363fdd9b6153e241024a0a255"
  },
  {
    "url": "assets/js/38.1a73f270.js",
    "revision": "9167c9fdf66227e59930339a1febbf9c"
  },
  {
    "url": "assets/js/39.e6334d5a.js",
    "revision": "bd46028bba55ab5575dc864bddbe8885"
  },
  {
    "url": "assets/js/4.c102986a.js",
    "revision": "32e589467861cc3ec8f71a894b82ea61"
  },
  {
    "url": "assets/js/41.90e9f43a.js",
    "revision": "e921979dda659dc575b64b3d20c2300f"
  },
  {
    "url": "assets/js/5.e89ca9c3.js",
    "revision": "1e240be14e756630eaa27c286b96121e"
  },
  {
    "url": "assets/js/6.3e7a7eab.js",
    "revision": "045f564ec152940c519e421ae5d8a5d3"
  },
  {
    "url": "assets/js/7.ee518490.js",
    "revision": "5c8690672e3a0c2f07ce97403f1f0d78"
  },
  {
    "url": "assets/js/8.2c2a42c6.js",
    "revision": "82e94290d4b1523bfba5376ee3f8c03d"
  },
  {
    "url": "assets/js/9.ea77156f.js",
    "revision": "de9baf9dc491ff4083351e5fff127a9d"
  },
  {
    "url": "assets/js/app.11e8ed89.js",
    "revision": "7df0eee785f3c761ba536aa962c69986"
  },
  {
    "url": "assets/js/vendors~docsearch.e52e434f.js",
    "revision": "eb031b9eeb0702fffa4f1d3778e42ee0"
  },
  {
    "url": "conclusion/index.html",
    "revision": "6de5174f5675e3c96b5d94352f1ec11b"
  },
  {
    "url": "design/index.html",
    "revision": "8105e6546f757fd60353a585a26b25b6"
  },
  {
    "url": "index.html",
    "revision": "fb0a9d094546ceacb371492fd0e6d36e"
  },
  {
    "url": "intro/index.html",
    "revision": "d16445c01e004dcd918dba4d05a01ce2"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "478d1fa9278dd1ac9a37f8b549a6347f"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "5ce246b918a92238648acf97da2cb642"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "d1e8165556b5722b117b69ec8e1c5588"
  },
  {
    "url": "software/index.html",
    "revision": "9642559a3ed5cdba4c5cf57a215929d3"
  },
  {
    "url": "test/index.html",
    "revision": "0905512f1e514d1ba633a4d18c15a12b"
  },
  {
    "url": "use cases/index.html",
    "revision": "dadf7de9d848c57f096a75fb88bc18b7"
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
