if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),o={module:{uri:n},exports:t,require:r};s[n]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-d25a3628"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"e51b095cd44174b04d2e4bbbea0ff4e2"},{url:"/_next/static/chunks/0f993a33-9eb0572e0524006b.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/1133.a175a9e19be5c2a9.js",revision:"a175a9e19be5c2a9"},{url:"/_next/static/chunks/2326-eb80665d79bda4af.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/2353-e43e060be68fb437.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/2376-6da1ed04e1827969.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/3635-218fe5d857d2c606.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/4127-3635a8c8e191950d.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/4373.8e68c93fa3d167f4.js",revision:"8e68c93fa3d167f4"},{url:"/_next/static/chunks/4439-9dc495f8b9c7c001.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/4605-9493d88afc355347.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/5280-e92ee8bd5ca1f0cc.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/5443-98b06b5f198a07a4.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/578-2aab02e3d5de438f.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/6264-3d7937297fc76240.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/7077-945506816bd452e5.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/7454.0af31e29e7626c64.js",revision:"0af31e29e7626c64"},{url:"/_next/static/chunks/7975-c36783bebdb27cb2.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/7999-a4410a049c3355e5.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/8441-3d45ee4be7b8e5d2.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/8461863f-b031fd345c448c85.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/871-513dc9ad9633e4f8.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/9780-20714c7ca401a74a.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/9e33a154-0f43969d7d0ff119.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/a5d84b75-9ae8b36fdd5a9de5.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/a76aede9-7857af2fe9ad94d7.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/(splash)/(root)/page-e39fa82f1f34c7ae.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/(splash)/home/page-6462bd0e4a138ddf.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/(splash)/layout-d9b81f04ffce5843.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/(splash)/pricing/page-4e9565a63bead85f.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/(splash)/support/page-eeac9d179063a744.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/app/(root)/layout-6caa029d8acdf398.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/app/(root)/page-e253065b84cf4de6.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/app/billing/page-ef42b4ed0b2d1c89.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/app/cookbooks/first/page-2ae93470fdd7ae6a.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/app/cookbooks/page-2e5958640d300ec9.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/app/flow/%5BflowId%5D/page-c694343eecdb975d.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/app/flow/layout-2fc4e0d8619e3d06.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/app/flow/page-b1e7d8049c7d71df.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/app/layout-73fc6052232e41d7.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/app/loading-bde6fc15a0ae22e0.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/app/recent/layout-61b8296ed56bde0a.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/app/recent/page-441da98a29142465.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/app/settings/account/page-c3ee90693fbf1ffa.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/app/settings/appearance/page-dbb10b7ecf5c8fbf.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/app/settings/layout-6f472c5319cb2463.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/app/settings/page-d0194fa413a923e7.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/app/workspace/%5BworkspaceId%5D/flow/%5BflowId%5D/layout-0ac15b3fd47e3d81.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/app/workspace/%5BworkspaceId%5D/flow/%5BflowId%5D/page-6e7b33be08e92baa.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/app/workspace/%5BworkspaceId%5D/flow/create/page-a541900be0fc28a0.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/app/workspace/%5BworkspaceId%5D/flow/page-69017833355539a8.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/app/workspace/%5BworkspaceId%5D/page-7d9de622b69b206c.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/app/workspace/create/page-c62536b0d5f690e6.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/app/workspace/page-cb2c017ff782b9a5.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/auth/(public)/forgot-password/page-76259525f127ad54.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/auth/(public)/login/page-5d1921fdd87129aa.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/auth/(public)/register/page-18f47d14b4d2cfd5.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/auth/layout-f25d418b4750b971.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/auth/reset-password/page-6239da75ce2aa44b.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/auth/welcome/page-39a686cc96d13dd4.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/early-access/%5Bid%5D/page-dd1828d224204710.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/early-access/layout-50fc9fdf01e56bcf.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/early-access/page-adf765e07bc38f22.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/global-error-3a5342151243a661.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/layout-737e759c78956c44.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/loading-235e8b0360718ef0.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/not-found-3989cac68bc65e9f.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/privacy/page-e3dd2d3cd7043838.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/app/terms/page-df7e53155caf6670.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/framework-0cff74432866ca0f.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/main-app-63ea51d4064141f8.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/main-c9b224de7c42a3eb.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/pages/_app-8ae3999c915ab5b8.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/pages/_error-0862b793ceab2d03.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-9d1ee3136264bf6e.js",revision:"lbhP1K3R4myEhGqO6LF_G"},{url:"/_next/static/css/6256e3c4d2333454.css",revision:"6256e3c4d2333454"},{url:"/_next/static/css/b793817ccac5fe0b.css",revision:"b793817ccac5fe0b"},{url:"/_next/static/lbhP1K3R4myEhGqO6LF_G/_buildManifest.js",revision:"b0633fc25895136c2958026df6743563"},{url:"/_next/static/lbhP1K3R4myEhGqO6LF_G/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/07103e16d41c9190-s.woff2",revision:"865bfc77817e078122fba2ff0a8e259c"},{url:"/_next/static/media/0fb93cc812fb4b50-s.woff2",revision:"a18ad80bf268ef612116d884c2af418f"},{url:"/_next/static/media/32702a3715dbd7c1-s.woff2",revision:"8c6c9a0ed2815ab4659cf6f10388aea2"},{url:"/_next/static/media/6dc02f179ba8da8f-s.woff2",revision:"ec321a873a0a3dbb51083da484c6182c"},{url:"/_next/static/media/7b9ca6a1d31c5662-s.p.woff2",revision:"817c5aeb992050a67c54c8bf028a28a8"},{url:"/_next/static/media/84a39d905077a976-s.woff2",revision:"cd3fed32b75d04b79cf48a95ef63b9a5"},{url:"/_next/static/media/931105f8d96e7f26-s.p.woff2",revision:"6d1f2c44bd135848c7321937f7371e37"},{url:"/_next/static/media/9450a5aa688b86af-s.woff2",revision:"ad7ab63936b2f4518d04ebbdf704c8ca"},{url:"/_next/static/media/bd2489da38fb1d0b-s.woff2",revision:"ca4dd28ee25e096804bbb0dab6fc7dfe"},{url:"/_next/static/media/clicking.71eb9975.gif",revision:"c9976f9dade81d5d4b6d0425e4ffb5a0"},{url:"/_next/static/media/f1d4c48219b1bd72-s.woff2",revision:"e46df47bb1e1cf796f08f67211174cef"},{url:"/_next/static/media/lian-lian.359e1ef9.png",revision:"d84ae94cdeba38c9be5d3b95312bc3ec"},{url:"/_next/static/media/payoneer.5c4aadbd.png",revision:"f4581505e847b955ff7337a7793ab5b6"},{url:"/_next/static/media/ping-pong.4c15a421.png",revision:"716ca33972487faaf36adfa92f3a229a"},{url:"/_next/static/media/world-first.9f9c400e.png",revision:"89d8f15ce7c7bde26083b340644e6916"},{url:"/apple-touch-icon.png",revision:"f99b55cfd227f27b93500a7969e94b24"},{url:"/favicon-16x16.png",revision:"1a269572e41e44ef0b4a75f81d72d73c"},{url:"/favicon.ico",revision:"f183a9cf471d8bc30187d8c582a2785a"},{url:"/favicon.png",revision:"f183a9cf471d8bc30187d8c582a2785a"},{url:"/icon512_maskable.png",revision:"c067032b3f4084700280cb3b8c6b0433"},{url:"/icon512_rounded.png",revision:"c067032b3f4084700280cb3b8c6b0433"},{url:"/manifest.json",revision:"5e1019813c8aac1cf085c7bc99ac1d2a"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/screenshot1.png",revision:"16b47d98a940edf237a1b522c31ca858"},{url:"/screenshot2.png",revision:"a9627e73c9d5169e440b43be85cb7b9c"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
