'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "a15866ce654d635f5720905bbbb94f17",
"/": "a15866ce654d635f5720905bbbb94f17",
"firebase-messaging-sw.js": "f4b8a8fb167b5ab2d3ac17cead9d3426",
"pdf.worker.min.js": "1b21a52673403baa815d90e3c9347714",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"favicon.png": "c8c39d1c9ff6fa9f01c0bb9a82e8f8c8",
"assets/FontManifest.json": "b536ff641356f4563a646797acbaa734",
"assets/fonts/MaterialIcons-Regular.otf": "abec498dd0b227c7aee7902b5d241df8",
"assets/fonts/OnMedium.otf": "ab32af601834d9eea47ce7905eecb476",
"assets/fonts/OnSemiBold-EngNum.otf": "db36698a19f93235cc75725d3fdf0864",
"assets/fonts/OnSemiBold.otf": "6a86b1adad28f2f2412c19769697690f",
"assets/fonts/OnMedium-EngNum.otf": "53ec668c0e6268cd585236ef14ad1a2b",
"assets/AssetManifest.bin.json": "2ac3bcb9e3e8771c0f1b17381233eed8",
"assets/assets/png/ic_lock.png": "a0341fb21ae4055c50f7a5e6803c6fe0",
"assets/assets/png/icon_share2.png": "bd1679a1dc0e30dd796438a623d7d48b",
"assets/assets/png/intro_img1.png": "2f4f2b56f7543b8b48064bc71547f228",
"assets/assets/png/ic_gift.png": "ba797619c1d5d671e6359b857bb16bbd",
"assets/assets/png/icon_dashboard.png": "fa69cb9d1866c282509788bfe0fa8056",
"assets/assets/png/ic_query_builder_24px.png": "3ed0b2bd9722c4329425de3692346062",
"assets/assets/png/icon_send.png": "33c754decaccd67e1dc0919be6402d21",
"assets/assets/png/ic_back_to_work.png": "33e0787f9b480436f69f3f30e1e5a3ba",
"assets/assets/png/ic_email_24px.png": "5bb905c3447df96120b6aa53b8aefddc",
"assets/assets/png/icon_edit.png": "a432884d003d806eec93f1d280255b60",
"assets/assets/png/ic_phone.png": "58877e19fceddd04c1e7080278d1aa13",
"assets/assets/png/cube_icon.png": "a5ea5224e1b31d7736a77e9abaa5c2e2",
"assets/assets/png/icon_bottom.png": "61543da18c022e1dbacdabb4651c0c19",
"assets/assets/png/ic_school_24px.png": "59620dae1f08428f7862a6d5cbd5a841",
"assets/assets/png/payment_result_pic.png": "961ee0fb8b10e888470babc9647fb1b2",
"assets/assets/png/icon_actions.png": "ec9a703742110f3771aa330f56faeacd",
"assets/assets/png/icon_share.png": "96a70ab63a44f97e2c8486dc00e7d2bc",
"assets/assets/png/back.png": "5259ca6f56de2386885ff0701b18de2b",
"assets/assets/png/empty_profile.png": "3221e5f369d0d9a818701cd343b6de96",
"assets/assets/png/ic_alarm.png": "565edc3e3d12a51c727cbd1d96088127",
"assets/assets/png/ic_settings_power_24px.png": "95ea700eae043244e77f3e57559a0965",
"assets/assets/png/ic_queue_play_next_24px.png": "57db44f218a29bf2f283c91e2c28adea",
"assets/assets/png/icon_personlist.png": "93736687979c1663803be994b9d7b6ac",
"assets/assets/png/ic_ondemand_video.png": "0563626fb7a8007a285a6d71cb9ae595",
"assets/assets/png/icon_pay.png": "a8cfb7605c9b37c25980e22842ecee93",
"assets/assets/png/ic_employer.png": "416710ca3bf9621d679620796ac001b7",
"assets/assets/png/ic_instagram_r.png": "bf68b810af495d86256764cea9787bb6",
"assets/assets/png/icon_field_help.png": "549a00460040f9e719de983b9e711af8",
"assets/assets/png/icon_help2.png": "a8d103bd1a4359894e2a08f3d280cdd5",
"assets/assets/png/ic_trending_up.png": "a3fad0b085c2a3962df893ee29b6d0f1",
"assets/assets/png/icon_instructions.png": "f8eff9e718f60388d9395e3ad7eb92fd",
"assets/assets/png/ic_attach_money_24px.png": "5f460ea1981a70df2b6625c84944fe78",
"assets/assets/png/icon_wallet.png": "e79929c30cecbad2b22fe223fef0efe2",
"assets/assets/png/ic_address.png": "9c1d4574a15585a3f283d1fd2ea98b86",
"assets/assets/png/ic_download.png": "b7de71e1b3f5ee7e59e7f0b0c5f81341",
"assets/assets/png/ic_twitter_r.png": "c59eaf1cbbca96848ce2a2753560530c",
"assets/assets/png/ic_fingerprint_24px.png": "8aa2260d857b81aca0c1038ebcf1eb32",
"assets/assets/png/iran_flag.png": "1a9efcf51b6d2d3de24ca10e54a87052",
"assets/assets/png/ic_hokm.png": "8ffbf8c0875eb1e4cb10fd235bd877a2",
"assets/assets/png/icon_profile.png": "9c9a3571882dac825abd4b8a378537d8",
"assets/assets/png/ic_filter.png": "056291374b5664cd15d157f0dc4e8c9e",
"assets/assets/png/ic_event_24px.png": "d9d2ba705b54efc60fc78108eced4334",
"assets/assets/png/icon_dollar.png": "50f3f3e5545bde7e4c03e1852b8ee90e",
"assets/assets/png/icon_whatsapp.png": "e91cc1683786f8673cd793dafaea5fd2",
"assets/assets/png/ic_message.png": "537253f857428c62756d53f508ea7cbf",
"assets/assets/png/icon_eye.png": "e201fafc0ec40fe9916aa761d51d8178",
"assets/assets/png/icon.png": "280fdf6b290c390e8ba45d2a421179bf",
"assets/assets/png/icon_clock.png": "f8676a99c5e2948e0aea450faa24ab13",
"assets/assets/png/ic_mail_r.png": "82d57d2023457219f230cab9436123f1",
"assets/assets/png/ic_sms.png": "7c1cf07a4d272ae4eed8e214b99c723e",
"assets/assets/png/ic_linkedin_r.png": "8cf6a111b3dcc8e7cd80818fe47efe06",
"assets/assets/png/ic_excel.png": "19a05ce711fa575d3bf216cdcbb1f948",
"assets/assets/png/banner_excel.png": "2b44fbfc8a19d5288a4e560bd233bc36",
"assets/assets/png/moshir_left_arrow.png": "1290ee8a9a9470ffb03497fb7ef74871",
"assets/assets/png/icon_add.png": "8838b0769bbbe53c21d6c57a629d6a46",
"assets/assets/png/splashlogo.png": "fd3408a42cdf7c61d0359dac749a7026",
"assets/assets/png/ic_telegram_r.png": "263142e68a18fe3b0b1534d968d3d39b",
"assets/assets/png/icon_headset.png": "eec491dbb16e1c4dcff96a95a4693183",
"assets/assets/png/ic_pdf.png": "081cafdf9a4347d7ced264b7e4c939b2",
"assets/assets/png/ic_supervisor_account_24px.png": "6bd60232c3880814c3bdf10851f60e6a",
"assets/assets/png/intro_img2.png": "bea00c992fd411600051f793fa95729c",
"assets/assets/png/payment_page_pic.png": "bcbc943c91eca84796d1424d30cc8501",
"assets/assets/png/ic_done_all.png": "08014288d1f91b9ab4e1196446d0a4c2",
"assets/assets/png/ic_facebook_r.png": "4353138e213b21c1f4b9a7da70e7efb9",
"assets/assets/png/moshir_logo.png": "be8b5991583ffd553d2af2a5b9dbc80e",
"assets/assets/png/ic_ussd.png": "7b9b8eef5673ccc2ac81f2cbaf043621",
"assets/assets/png/icon_loc.png": "2918316916f0615ae06594df51ce9840",
"assets/assets/png/icon_add_staff.png": "d8c67bbc4fd6d8d9886865611938e973",
"assets/assets/png/ic_whatsapp_r.png": "eb7a5dbc4b35ecd713d4d23781ca0ebf",
"assets/assets/png/plan_expire_pic.png": "1ed96c624db519714086517acf05cae3",
"assets/assets/png/icon_more.png": "22f3f298b399d4c9d5fa8a9d711cade2",
"assets/assets/png/icon_calender.png": "fea20e62f00b2e41396bd3fa273f6242",
"assets/assets/png/icon_search.png": "bd80c5b7744091ec643fdc623f8290a6",
"assets/assets/png/moshir_logo_small.png": "467a547081a65a974f9d7a54f6481aa9",
"assets/assets/png/intro_img3.png": "59852733c35198628d216f1b6084bca1",
"assets/assets/png/icon_camera.png": "4b4c1e88e0bf14d1d672d74609f758e1",
"assets/assets/png/ic_picture_as_pdf_24px.png": "8ae1d3bea9ff053149e301bfcd115b3b",
"assets/assets/gif/splash.gif": "9609aac2586ea8a467943b610d8d35ea",
"assets/assets/svg/icon_field_help.svg": "30e783158e50c1a5e323d5b0a285834f",
"assets/assets/svg/ic_trending_up.svg": "0effb732deeb706e681f9f0b3f83b7c6",
"assets/assets/svg/ic_facebook_r.svg": "2fb9b15491025bdb02d322f6cdc145f5",
"assets/assets/svg/icon_share2.svg": "a206fc19cb57c8dc8d23d69986cf4432",
"assets/assets/svg/ic_alarm.svg": "08440c5d1d61de211186a37c00219f8e",
"assets/assets/svg/ic_query_builder_24px.svg": "594005f20787aaf9c2bf0fc23d3d367a",
"assets/assets/svg/ic_sms.svg": "ac2092f1b2e415a21e4688d29d33ed90",
"assets/assets/svg/ic_linkedin_r.svg": "31d6d5ecb991e593760298b9f13ed793",
"assets/assets/svg/ic_instagram_r.svg": "4a27b34564f072777910c77dcf64762f",
"assets/assets/svg/ic_lock.svg": "bb717f69a341f2a752e7bdd466f57714",
"assets/assets/svg/ic_queue_play_next_24px.svg": "26bd243041c6187ed3f49209e834d522",
"assets/assets/svg/ic_whatsapp_r.svg": "60c73e2b5dcdc92d63f6ba61302a4dcc",
"assets/assets/svg/ic_message.svg": "a5a784c675978d4234462f13f0c364f9",
"assets/assets/svg/icon_instructions.svg": "a402fc4e9ae7a59cea59f31cc2f10b3b",
"assets/assets/svg/icon_search.svg": "2388b6237ab0142b6f3351fa3d271f10",
"assets/assets/svg/ic_telegram_r.svg": "1c56802dfa3f0e4ef9b2f004580aab31",
"assets/assets/svg/ic_school_24px.svg": "50487a3d442fce78a69f51682cadfe4f",
"assets/assets/svg/icon_add_staff.svg": "3fa60efee9beb03e586ac30080fdd1c7",
"assets/assets/svg/ic_filter.svg": "03e3159d8a4f9f43cc2ef465ed727287",
"assets/assets/svg/ic_back_to_work.svg": "00268a4c18bb5403e6027eaafa611844",
"assets/assets/svg/icon_whatsapp.svg": "dff70b956f3afd21868704b87a87719a",
"assets/assets/svg/icon_actions.svg": "61034aecbac25acc5be0c59088eece09",
"assets/assets/svg/ic_supervisor_account_24px.svg": "3a206e736ce4b882618b75ccd86cd783",
"assets/assets/svg/icon_share.svg": "c204dc6cfc1345157156047c862f7567",
"assets/assets/svg/moshir_left_arrow.svg": "e38aeab5fd7348f92da7626cdf4b1ff8",
"assets/assets/svg/ic_hokm.svg": "c09463e333aea5b663ada02b7ee9a6c9",
"assets/assets/svg/ic_settings_power_24px.svg": "50f5d3683070c1e1044775e77acd97d0",
"assets/assets/svg/icon_camera.svg": "017c66041035d21c9b312f41332a7b83",
"assets/assets/svg/icon_profile.svg": "04eae0c33db37734b92adff2d0370b8f",
"assets/assets/svg/ic_picture_as_pdf_24px.svg": "779be8ed43e12d8a6c9850b200ec69b1",
"assets/assets/svg/ic_ussd.svg": "78b549f00a4172df081dc4c47daf16f5",
"assets/assets/svg/ic_address.svg": "1691b38049396d4f2507eb4ab214e86e",
"assets/assets/svg/icon_help2.svg": "95155bd8dd1f695bf8579599436cf853",
"assets/assets/svg/ic_email_24px.svg": "14caad9dd43b8e3845532518aab13ed7",
"assets/assets/svg/ic_event_24px.svg": "802a57379de4cb8c12dfdeb01987fde7",
"assets/assets/svg/icon_add.svg": "c464c71c64508c9cabde1d57191251aa",
"assets/assets/svg/ic_pdf.svg": "5fd0d817e5195a26a90682b5c91a62a0",
"assets/assets/svg/ic_attach_money_24px.svg": "c5dce4e1e8bf17d40a79b5e30ccc0842",
"assets/assets/svg/icon_eye.svg": "b36b36ba816c228efe37379cdc15425a",
"assets/assets/svg/icon_wallet.svg": "e238b25787b13d0f25609cf697da5ba3",
"assets/assets/svg/ic_gift.svg": "9b954f7b9124f217b876f0f5ebb240f3",
"assets/assets/svg/icon_headset.svg": "c0290111914a707b6ad7be0263cf35cc",
"assets/assets/svg/icon_send.svg": "ef99ce4dd2c686c9978840609ce688e4",
"assets/assets/svg/ic_ondemand_video.svg": "0b7970c253bb0aae078b26f95a6a9f83",
"assets/assets/svg/icon_loc.svg": "48e7e8c070deb1f79214f9821e6e3372",
"assets/assets/svg/ic_fingerprint_24px.svg": "b6a19840bedfb604142f88f5c65c052b",
"assets/assets/svg/icon_bottom.svg": "e3826875593ae49d7525adb6013ad539",
"assets/assets/svg/icon_calender.svg": "215405bad682b33b687609b5386912b4",
"assets/assets/svg/icon_clock.svg": "fade135f931cc6b1cde32b02c296faa5",
"assets/assets/svg/back.svg": "1323ac0617dc1b3e585a1f60fec9ac27",
"assets/assets/svg/cube_icon.svg": "bd1d86a84f95411d3154606cb20ee11c",
"assets/assets/svg/ic_employer.svg": "2601ea9c2b5a78463f8030979fefa2b7",
"assets/assets/svg/icon_dollar.svg": "326d7473b1645ee1ff62dec93cac6205",
"assets/assets/svg/ic_done_all.svg": "42f259ab2daaf207427d22ee6468718a",
"assets/assets/svg/icon_personlist.svg": "d3071d99e63afebcba7783fd8ffb357d",
"assets/assets/svg/ic_phone.svg": "5ab32a227c5c72e48f956e828bdb9273",
"assets/assets/svg/icon_pay.svg": "51ebf274ba22fb4c3d9d46706fd2d75b",
"assets/assets/svg/icon_more.svg": "d2c5d9d2522f4a1e421feb0da8e58250",
"assets/assets/svg/icon_edit.svg": "22ea75bec1091feb5bc8c57ac2c43a7d",
"assets/assets/svg/ic_download.svg": "e97b5527a7623f5537b212393d919e50",
"assets/assets/svg/icon_dashboard.svg": "9c4d097d8d96911a4dd05eaf998c3cf2",
"assets/assets/svg/ic_twitter_r.svg": "c736c72efc4152d15da80f4e12bde981",
"assets/assets/svg/ic_mail_r.svg": "63551863fd0e5a8bbde9ac291f6154c0",
"assets/assets/db/location.json": "808b243e5d9409678dd590039234ea15",
"assets/assets/jpg/map.jpg": "44c9e45afc543a78c2d92db7d00171d2",
"assets/AssetManifest.bin": "0632a44f5d3716a0451494a999ddf213",
"assets/NOTICES": "bba18f4215b9e11543886f1ac2558474",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/read_more_less/assets/example.gif": "2d74700ee9276388b42fc2e015a1615d",
"assets/packages/read_more_less/assets/screen2.png": "ec2e2825f66e8c0c00ac7f1fcb31a747",
"assets/packages/read_more_less/assets/screen1.png": "8223deabb708be4688035157217aa848",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/AssetManifest.json": "728e3a972efadf4ed8d83ccaea9165e3",
"version.json": "644bae93d403a2222f0f49fcf6563475",
"icons/icon-maskable-192.png": "aebd8f03c03a22dc123e3d1098e6f377",
"icons/icon-maskable-512.png": "280fdf6b290c390e8ba45d2a421179bf",
"icons/icon-512.png": "280fdf6b290c390e8ba45d2a421179bf",
"icons/icon-192.png": "aebd8f03c03a22dc123e3d1098e6f377",
"favicon.ico": "4c4234613c9065a0bc053ba18dc31425",
"manifest.json": "5be66ec0de8e378dd0361f68abf16add",
"splashlogo.png": "fd3408a42cdf7c61d0359dac749a7026",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"pdf.min.js": "e2f5e1f9451c8a897484861679857823",
"main.dart.js": "7a54941a4b0dcdb7134daa00df0fc7b7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
