"use strict";var precacheConfig=[["/index.html","d6326d1baf2ff8cc725b827aac888ef5"],["/static/css/main.31c26e6d.css","00a5141bcc4ddce81dd3d697c2154235"],["/static/js/main.43686a2c.js","20cd80e862282543f3c99465313d0822"],["/static/media/border-for-photo.0c74c6a3.png","0c74c6a378614912cdb3679b4d5b83a4"],["/static/media/header-bg.e055a73b.png","e055a73bbbfec1292a425ef0416edb58"],["/static/media/myriad-pro.621fec6e.woff2","621fec6e4260d005a7f89d487f48b858"],["/static/media/myriad-pro.6f78acd6.eot","6f78acd60aa3169fbe64ee1836fd79f3"],["/static/media/myriad-pro.84303634.svg","8430363477e4c6a23d7767ab50889a0a"],["/static/media/myriad-pro.8c97410c.woff","8c97410cd9f07cbf51825989b5c08c0c"],["/static/media/myriad-pro.f9036d7b.ttf","f9036d7bf618d5884e7f921a61f19d5b"],["/static/media/photo.80b2b3be.jpg","80b2b3be0281a8210814f23c58932e3b"],["/static/media/segoe-ui-light.2317f2a9.ttf","2317f2a98445597ae960e28669262441"],["/static/media/segoe-ui-light.631d266f.woff2","631d266f88dea4740469ebb64086b6a2"],["/static/media/segoe-ui-light.ae571f90.woff","ae571f9027e8f2f111bf4a5608cf6ffc"],["/static/media/segoe-ui-light.b32f307d.eot","b32f307df8bd8fd769458536418c5d4b"],["/static/media/segoe-ui.0364198a.woff2","0364198a2fc7a4d5c2d8fd0ccc8867ef"],["/static/media/segoe-ui.5927ab82.woff","5927ab82b8d3778ce7ca9e0fe81452c8"],["/static/media/segoe-ui.760e92ad.eot","760e92ad76c931749357ef3d38287886"],["/static/media/segoe-ui.81f7e5cf.ttf","81f7e5cf5a2e8fd154a0e210de57091f"],["/static/media/segoe-ui.b6e9c848.svg","b6e9c84884f682fdf5ccb54a02332ed3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});