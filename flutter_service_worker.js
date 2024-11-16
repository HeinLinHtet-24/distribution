'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2fd6f356290c347533a3a97fbaebf41e",
"assets/AssetManifest.bin.json": "5ec13b2da31de9bb0c78b4d69775d488",
"assets/AssetManifest.json": "e293c8fbb64ef0c4be7c83844e669071",
"assets/assets/fonts/myanmar3.ttf": "9f5a341130e95ae1acd6c1e0424d6a3b",
"assets/assets/fonts/NotoSansMyanmar-Regular.ttf": "3c1e968f38c486b824675f4971a9ad1e",
"assets/assets/fonts/PADAUKSAGAR.ttf": "d004f90895436559488c433bbd9f5e19",
"assets/assets/fonts/SFPRODISPLAYBOLD.otf": "644563f48ab5fe8e9082b64b2729b068",
"assets/assets/fonts/SFPRODISPLAYMEDIUM.otf": "51fd7406327f2b1dbc8e708e6a9da9a5",
"assets/assets/fonts/SFPRODISPLAYREGULAR.otf": "aaeac71d99a345145a126a8c9dd2615f",
"assets/assets/images/icons/add_shop.png": "94dc49a8b636352a48cec94d17c8d34b",
"assets/assets/images/icons/attendance.png": "0a1c991c286bca20856bf2e553d595a6",
"assets/assets/images/icons/bank.png": "bcd9eb42471353e65c4d9caa185655d8",
"assets/assets/images/icons/box.png": "e1e1d6b2516f7fb45a52f08f35453771",
"assets/assets/images/icons/box_product.png": "c496e16125135f1c6a76935e027bef1a",
"assets/assets/images/icons/buy.png": "55473198bcc1ab8b61f4bbef6c647cc8",
"assets/assets/images/icons/cash.png": "0151680bd73c666bf74efa682283cfb1",
"assets/assets/images/icons/clipboard.png": "78ccf5a4c4463b9548f6d112ea984190",
"assets/assets/images/icons/courier.png": "0ed1231d81e87660cf2f97db44f878bc",
"assets/assets/images/icons/delivery-truck.png": "aaba19dea2e1d58e2aad173e755cc7ac",
"assets/assets/images/icons/delivery.png": "8bf1594c0c61326cf304977d326e0979",
"assets/assets/images/icons/dollar-coin.png": "694fc9a355ffcb3d559289b7b8fb388a",
"assets/assets/images/icons/Invoice.png": "0c11f9b7c88832e1e851d994a93125cb",
"assets/assets/images/icons/list.png": "fc491622ee8910ba518fb07f2f2fde64",
"assets/assets/images/icons/location.png": "366126682edbfa106812d17e350dbf6f",
"assets/assets/images/icons/logo.png": "595e39de01ab510adc846a88233d3543",
"assets/assets/images/icons/money-bag.png": "c97c7ce66279d6fe526adc884aee2963",
"assets/assets/images/icons/product-box.png": "fb00911e438c34e4a9dff4daa720ec06",
"assets/assets/images/icons/product-view.png": "8845d5b5b16e45508ae079aa741ea699",
"assets/assets/images/icons/product.png": "3cdfa9d21165ad5b23bd3824613adbe7",
"assets/assets/images/icons/purchase.png": "91595cb0e048d8e0d668b669de096e7c",
"assets/assets/images/icons/route.png": "2e87b82c97284f166a70036f71530fff",
"assets/assets/images/icons/Sales.png": "b48625de8eccc4062a77fdc34e7634a5",
"assets/assets/images/icons/Stock.png": "b1a1787a3e0457866a986231fdd1a89d",
"assets/assets/images/icons/transport.png": "988d292ddaa20dbce085bbc15e474dd1",
"assets/assets/images/icons/upload.png": "90d24ab6d186114afa74c5c6077c2904",
"assets/FontManifest.json": "17efc8e62f0c90861d8172db23fae278",
"assets/fonts/MaterialIcons-Regular.otf": "700923666968b61051ea93ea2b179042",
"assets/NOTICES": "d85e4dbb402f0611e745a56318937ad7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "08ab5ee7d1f815fdf8dd740736e21fcd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1e0ecac042f3c9de07eaf240a5c269b5",
"/": "1e0ecac042f3c9de07eaf240a5c269b5",
"main.dart.js": "6f07e8780b26ac35cb2d256b23fd6ef6",
"manifest.json": "5eeee12766b597d2cf4cb456e2a1ce79",
"version.json": "305303e37b423aca78e217f405e6eb9c"};
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
