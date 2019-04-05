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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js");

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
    "url": "images/favicon.ico",
    "revision": "cb37e714680f4381058dc42b9c6e9885"
  },
  {
    "url": "images/github.svg",
    "revision": "ea8bb7f4b65e7f8b2438d45463270d82"
  },
  {
    "url": "images/google.svg",
    "revision": "b990e10a7ce6807be25f91756a47a62c"
  },
  {
    "url": "images/logo_placeholder.png",
    "revision": "303be7f4d2bd224ef4a2fb8b44e4b7fe"
  },
  {
    "url": "images/logo.png",
    "revision": "6df15b3731f49f5b6dc2d9dd1ee6a27f"
  },
  {
    "url": "images/manifest/icon-144x144.png",
    "revision": "0dc666fc83c5c49d1c2bd66cfe3f654a"
  },
  {
    "url": "images/manifest/icon-192x192.png",
    "revision": "efd1576606d49bd7968a1bfc66521bb2"
  },
  {
    "url": "images/manifest/icon-48x48.png",
    "revision": "fe9f1040c4fe8199892f2e79a5acf860"
  },
  {
    "url": "images/manifest/icon-512x512.png",
    "revision": "a5e728b4bc1b3d48b13294ea621151b6"
  },
  {
    "url": "images/manifest/icon-72x72.png",
    "revision": "783b02ac247747a5bde6a2f84df8effd"
  },
  {
    "url": "images/manifest/icon-96x96.png",
    "revision": "81bcad111bc9711aa73d016dd6c6345f"
  },
  {
    "url": "images/twitter.svg",
    "revision": "93a9fd6aa377d5fe5cb299c3927b8a15"
  },
  {
    "url": "index.html",
    "revision": "15e1da31089e3c75dd1ae43fb26911d4"
  },
  {
    "url": "manifest.json",
    "revision": "c1fcfbd7bd20f92b9f90efb7d14c9fc1"
  },
  {
    "url": "package-lock.json",
    "revision": "7568e8fc97c5f8b76e9bf2547490d0d9"
  },
  {
    "url": "package.json",
    "revision": "25bc572ad936f1ef6a3e9d778f72a81d"
  },
  {
    "url": "src/kib-app.js",
    "revision": "8bf79c62d66a7521892f9f6706d39865"
  },
  {
    "url": "static/fonts/RNS-B.ttf",
    "revision": "51b87cd186b5ab4b81ac7da38384df8d"
  },
  {
    "url": "workbox-config.js",
    "revision": "f538be3a8158dddd69be204d6f621099"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
