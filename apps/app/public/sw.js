if(!self.define){let e,a={};const s=(s,t)=>(s=new URL(s+".js",t).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(t,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let c={};const r=e=>s(e,n),u={module:{uri:n},exports:c,require:r};a[n]=Promise.all(t.map((e=>u[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-d25a3628"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"a3f95696dc3dcabbbe77768a54bc4788"},{url:"/_next/static/aU6JA25DD076GUKztuZJ5/_buildManifest.js",revision:"b0633fc25895136c2958026df6743563"},{url:"/_next/static/aU6JA25DD076GUKztuZJ5/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0f993a33-9eb0572e0524006b.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/1061-13f4acbd748223dc.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/1133.908f29f7b3d3828e.js",revision:"908f29f7b3d3828e"},{url:"/_next/static/chunks/2278-b14abf0e5213ee86.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/2326-eb80665d79bda4af.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/2376-6da1ed04e1827969.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/4373.8e68c93fa3d167f4.js",revision:"8e68c93fa3d167f4"},{url:"/_next/static/chunks/4605-9493d88afc355347.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/5280-e92ee8bd5ca1f0cc.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/578-1b4c57a5350e7999.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/604-1687499a2312b4fa.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/7064-86b00405deb972fe.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/7077-945506816bd452e5.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/7454.4488a658600e884f.js",revision:"4488a658600e884f"},{url:"/_next/static/chunks/7975-c36783bebdb27cb2.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/8079-e35cdcaca2a2cdf9.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/8441-3d45ee4be7b8e5d2.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/8461863f-b031fd345c448c85.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/909-a7fc22d027324dae.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/9121-ddd3e34115fb954c.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/9780-20714c7ca401a74a.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/9e33a154-0f43969d7d0ff119.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/a5d84b75-9ae8b36fdd5a9de5.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/a76aede9-7857af2fe9ad94d7.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/(splash)/(root)/page-c1ffeab5d364921b.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/(splash)/layout-d9a09f9d275d3389.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/(splash)/support/page-486857569f59cedc.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/app/(root)/layout-be7256faa50df210.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/app/(root)/page-dd99dd5328db3705.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/app/billing/page-2720f1b170b0c5c2.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/app/cookbooks/first/page-75135928f9be72a3.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/app/cookbooks/page-6abfae3b6b3b3a16.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/app/flow/%5BflowId%5D/page-22bb1362a2a78941.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/app/flow/layout-3f56084f798f0456.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/app/flow/page-727a5b835bbe2433.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/app/layout-24ee8ee431c268c1.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/app/loading-149b4708ad45eee3.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/app/recent/layout-0ef8cd7733b46f04.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/app/recent/page-6f661d859aa227d6.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/app/settings/account/page-518b9ba5ca721694.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/app/settings/appearance/page-69ed9f6d55c897f7.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/app/settings/layout-1de17e4a6fc041f5.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/app/settings/page-21f7370a9917ae39.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/app/workspace/%5BworkspaceId%5D/flow/%5BflowId%5D/layout-78f0b71cfcd3aab0.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/app/workspace/%5BworkspaceId%5D/flow/%5BflowId%5D/page-36e9021b4fbff2bf.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/app/workspace/%5BworkspaceId%5D/flow/create/page-9a8d5e6f5fbf5a30.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/app/workspace/%5BworkspaceId%5D/flow/page-3aff3a3ebbcf8760.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/app/workspace/%5BworkspaceId%5D/page-b53e32135547d140.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/app/workspace/create/page-c6cbff36a30d1c1a.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/app/workspace/page-8bc5d5f3dd1213cd.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/auth/(public)/forgot-password/page-d199967ad083bc83.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/auth/(public)/login/page-d1c84aa299e3bb04.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/auth/(public)/register/page-c5211ca9dfed9d6e.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/auth/layout-d0a41af5bbbc198a.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/auth/reset-password/page-32d8636ef56f1db6.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/auth/welcome/page-4a72bf142a2669ed.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/early-access/%5Bid%5D/page-0e3e9e51c9357f32.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/early-access/layout-d799398abdb1bff3.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/early-access/page-6872855da4fee9c5.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/early-access/results/%5Bid%5D/page-6eedb7e902739df5.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/early-access/run/%5Bid%5D/page-dbda62f419608b56.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/global-error-10b40a1a7b3a4922.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/layout-099a243248b3e949.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/loading-edf1831ab7c43588.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/not-found-0b0ba1fdca2f9453.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/privacy/page-daf534b037b1fdda.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/app/terms/page-4a56b1e10e26bca9.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/framework-0cff74432866ca0f.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/main-app-a1d687137cd3c759.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/main-c770ca73544e56a4.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/pages/_app-8ae3999c915ab5b8.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/pages/_error-0862b793ceab2d03.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-87e04f85578d8b44.js",revision:"aU6JA25DD076GUKztuZJ5"},{url:"/_next/static/css/3b41b29ab8574ea7.css",revision:"3b41b29ab8574ea7"},{url:"/_next/static/css/98cb57f5d813f3a3.css",revision:"98cb57f5d813f3a3"},{url:"/_next/static/media/07103e16d41c9190-s.woff2",revision:"865bfc77817e078122fba2ff0a8e259c"},{url:"/_next/static/media/0fb93cc812fb4b50-s.woff2",revision:"a18ad80bf268ef612116d884c2af418f"},{url:"/_next/static/media/32702a3715dbd7c1-s.woff2",revision:"8c6c9a0ed2815ab4659cf6f10388aea2"},{url:"/_next/static/media/6dc02f179ba8da8f-s.woff2",revision:"ec321a873a0a3dbb51083da484c6182c"},{url:"/_next/static/media/7b9ca6a1d31c5662-s.p.woff2",revision:"817c5aeb992050a67c54c8bf028a28a8"},{url:"/_next/static/media/84a39d905077a976-s.woff2",revision:"cd3fed32b75d04b79cf48a95ef63b9a5"},{url:"/_next/static/media/931105f8d96e7f26-s.p.woff2",revision:"6d1f2c44bd135848c7321937f7371e37"},{url:"/_next/static/media/9450a5aa688b86af-s.woff2",revision:"ad7ab63936b2f4518d04ebbdf704c8ca"},{url:"/_next/static/media/bd2489da38fb1d0b-s.woff2",revision:"ca4dd28ee25e096804bbb0dab6fc7dfe"},{url:"/_next/static/media/clicking.71eb9975.gif",revision:"c9976f9dade81d5d4b6d0425e4ffb5a0"},{url:"/_next/static/media/f1d4c48219b1bd72-s.woff2",revision:"e46df47bb1e1cf796f08f67211174cef"},{url:"/_next/static/media/lian-lian.359e1ef9.png",revision:"d84ae94cdeba38c9be5d3b95312bc3ec"},{url:"/_next/static/media/payoneer.5c4aadbd.png",revision:"f4581505e847b955ff7337a7793ab5b6"},{url:"/_next/static/media/ping-pong.4c15a421.png",revision:"716ca33972487faaf36adfa92f3a229a"},{url:"/_next/static/media/world-first.9f9c400e.png",revision:"89d8f15ce7c7bde26083b340644e6916"},{url:"/apple-touch-icon.png",revision:"f99b55cfd227f27b93500a7969e94b24"},{url:"/favicon-16x16.png",revision:"1a269572e41e44ef0b4a75f81d72d73c"},{url:"/favicon.ico",revision:"f183a9cf471d8bc30187d8c582a2785a"},{url:"/favicon.png",revision:"f183a9cf471d8bc30187d8c582a2785a"},{url:"/icon512_maskable.png",revision:"c067032b3f4084700280cb3b8c6b0433"},{url:"/icon512_rounded.png",revision:"c067032b3f4084700280cb3b8c6b0433"},{url:"/manifest.json",revision:"5e1019813c8aac1cf085c7bc99ac1d2a"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/screenshot1.png",revision:"16b47d98a940edf237a1b522c31ca858"},{url:"/screenshot2.png",revision:"a9627e73c9d5169e440b43be85cb7b9c"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:t})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
