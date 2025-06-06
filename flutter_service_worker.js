'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "99207c6753d9cb18aa8c872fce4b278a",
"assets/AssetManifest.bin.json": "c04e639ba2f11514aba74e12f1202a8f",
"assets/AssetManifest.json": "ca239e621df7380399cf967108eeb161",
"assets/assets/images/back_arrow_blue_theme.png": "4aff9428d16eaaaee112d359789e5eaf",
"assets/assets/images/boo_image.jpg": "0035f46e3e2ce771bd36f687d2a54f77",
"assets/assets/images/check_in_calendar.png": "d068fe27ee1bce59ecf3ab7a8fd14f69",
"assets/assets/images/Ellipse%25201.png": "4fc02dca76aba467521af0c5b26afd5b",
"assets/assets/images/hrm_roll_call.png": "8706a26171884499c63bb70068296643",
"assets/assets/images/hr_attendance.png": "dea21ffa3d9ed8d69d98797de5a544af",
"assets/assets/images/hr_checkin_logo.jpg": "fc8ab86cd5166b24285fb01a12725df3",
"assets/assets/images/hr_checkout_logo.png": "e82a219a86df3d8ccb401f8319cf6152",
"assets/assets/images/hr_kwin_logo.png": "ac60cb1f038caea990f0c30a28a438f7",
"assets/assets/images/hr_kwin_logo_only.png": "cca41a3dfa4ae89b67901a7ddecbd7bb",
"assets/assets/images/hr_leave.png": "f5581ce45496a1c634d9071735a11a27",
"assets/assets/images/hr_leave_image.png": "585fdccab3c9c4ee07915432d36b180d",
"assets/assets/images/hr_leave_image_jpeg.jpg": "d1d9bc60cf3a343c0f42c6d510788024",
"assets/assets/images/hr_login_banner.jpg": "8084cca83f6817d277474c4c8d48b85b",
"assets/assets/images/hr_login_sky_blue.jpg": "0413dc55dbc66f1e86c5787cf29db690",
"assets/assets/images/hr_office_building.png": "42fd5b6c845ab26c72b6d7a6e6d4ed97",
"assets/assets/images/hr_ok_logo.png": "c87ba8c858cdcf41583800e00f1a62bc",
"assets/assets/images/hr_onboard_background.jpg": "0413dc55dbc66f1e86c5787cf29db690",
"assets/assets/images/hr_onboard_front.png": "6b9943a40a46665b1f39228289d309d8",
"assets/assets/images/hr_onboard_frontground.jpg": "c858b1f9a1485535215998715911d730",
"assets/assets/images/hr_payslip.jpg": "bd2e7c50d586e44cdc42c78a91d96828",
"assets/assets/images/hr_profile.png": "8dff49985d0d8afa53751d9ba8907aed",
"assets/assets/images/hr_profile_place_holder.jpg": "0b9235c3b9875ba7995fef1d5b4b287a",
"assets/assets/images/hr_realtimepayment.png": "39f80f7ae2538590f745b31571f2dded",
"assets/assets/images/hr_rules_and_regulations.jpg": "43d3bfa79570860780f2ace3d9750cf8",
"assets/assets/images/medical_world_checkin.png": "d72a0a396b4c319e58010aaa0cee0b0c",
"assets/assets/images/rollcall_clock_within_card.png": "6f06352c79c24a2f4a59dfa800f399d9",
"assets/assets/images/rollcall_notok.png": "b550b08227a557c7e708b9e6c8800278",
"assets/assets/images/rollcall_ok.png": "56232b0777b51b06ff765a18adb7465e",
"assets/assets/images/rollcall_warning.png": "3b12116ad976d0c2378f4c197ff8bd6f",
"assets/assets/images/roll_call_date.png": "0a26e8cedfbc197b581cba5f1e894abe",
"assets/assets/images/roll_call_location.png": "7e80ad4cd43ae101487ddf22b158309d",
"assets/assets/images/salary-slip.jpg": "730cfdc4d1c06cf5cb2137fdbd9b9739",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "f4d8fc22361d4fa3728b9665e7098044",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "d10ac4ee5ebe8c8fff90505150ba2a76",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "afe56657e2ad7e3aa9d84749c052a1d3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "50e3cec800ff5b1ba561813fc7891dc2",
"/": "50e3cec800ff5b1ba561813fc7891dc2",
"main.dart.js": "bebd9cd4df12d213f2570bfebd8aac03",
"manifest.json": "fb79c80141385cc358fca3926d692dcc",
"version.json": "f038d7e22a3ded89ebc2d520427931ea"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
