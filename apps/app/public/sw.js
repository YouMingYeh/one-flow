if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let n={};const r=e=>a(e,i),o={module:{uri:i},exports:n,require:r};s[i]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(t(...e),n)))}}define(["./workbox-d25a3628"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"a2eea427fae16392701103bf51f8f9b8"},{url:"/_next/static/chunks/0f993a33-9eb0572e0524006b.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/1133.46b3bd952121abf8.js",revision:"46b3bd952121abf8"},{url:"/_next/static/chunks/1633-cf397f8be8b6f572.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/2237-9fe2df87a2c4766e.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/3157-bd3e078a8bc83570.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/3635-002d2c271713ca15.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/4309-a05ae9764011c135.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/4373.8e68c93fa3d167f4.js",revision:"8e68c93fa3d167f4"},{url:"/_next/static/chunks/4605-1c2ef36f6f147d5d.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/5280-ce9c856a920e1145.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/6309-0dc4d42b554dfebb.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/6351-3540fb56c578227c.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/6360-8d1297347af46be9.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/6559-437c932cf7e466b5.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/6562-0a79693e37e9100a.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/7077-f5981aaa8994692e.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/7454.106be091d5563d94.js",revision:"106be091d5563d94"},{url:"/_next/static/chunks/7975-3cd41e7a939ae645.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/8130-aa130ed9128d9ab9.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/8461863f-b031fd345c448c85.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/8509-d1c3af6b7f8ed988.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/909-a7fc22d027324dae.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/9780-ce0991f68e68198f.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/9e33a154-e448000ab8889daf.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/a5d84b75-1c35614ab661cfb9.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/(splash)/(root)/layout-41b1d8417debc04a.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/(splash)/(root)/page-006c61420d35d189.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/(splash)/home/page-100a8a051f4a840d.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/(splash)/layout-1e9fe67499a1177e.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/(splash)/pricing/page-a2effba09dc51594.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/_not-found-8a0f59bbb94f56b0.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/app/(root)/layout-d03719b40b22797a.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/app/(root)/page-41e9bd0403389faa.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/app/billing/page-82a8486d8128d1f2.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/app/cookbooks/page-4e83912d1fe3f443.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/app/cookbooks/youtube/page-7ba16a75fc4d22eb.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/app/layout-15e5a46652ffba9c.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/app/recent/layout-a662936cce2866e8.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/app/recent/page-2aa6c49f4dc0b340.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/app/settings/account/page-b4161575028d3618.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/app/settings/appearance/page-6ecbce48bb5bfca3.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/app/settings/layout-6392d9f32b08afbb.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/app/settings/page-483b5e9054a7b9fc.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/app/workspace/%5BworkspaceId%5D/page-8c605ecefb440cf6.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/app/workspace/%5BworkspaceId%5D/project/%5BprojectId%5D/page-3ad296f3310703bd.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/app/workspace/%5BworkspaceId%5D/project/create/page-2d227bf4ad54e112.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/app/workspace/%5BworkspaceId%5D/project/page-9c783ff631575ca6.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/app/workspace/create/page-7d1f5eb1e8c6cd81.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/app/workspace/page-43730bdf52c87804.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/auth/(public)/forgot-password/page-e25295b1b9f21071.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/auth/(public)/layout-712cef3f5b08be74.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/auth/(public)/login/page-95d154d56b79dbb4.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/auth/(public)/register/page-7e0df16d3697cf39.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/auth/layout-bc5b5b5ebfcee1ca.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/auth/reset-password/page-887fea17c407b8da.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/auth/welcome/page-ab9f2cea2b0e2b2c.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/experimental/page-72963695e95e1c86.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/global-error-8b7a8fe6f7de7195.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/layout-658f0327cb0b8e2e.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/privacy/page-dcbe4b75cd699e33.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/app/terms/page-64d25801572ce91f.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/framework-0cff74432866ca0f.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/main-6d4367d0ac38f18e.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/main-app-1f268b6537e79cc7.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/pages/_app-8ae3999c915ab5b8.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/pages/_error-0862b793ceab2d03.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-76bbd16d597d67f1.js",revision:"sc0brlUEmI0hRvwQYQBN9"},{url:"/_next/static/css/5bd79c8383d3102c.css",revision:"5bd79c8383d3102c"},{url:"/_next/static/css/a150cede35959ba5.css",revision:"a150cede35959ba5"},{url:"/_next/static/media/07103e16d41c9190-s.woff2",revision:"865bfc77817e078122fba2ff0a8e259c"},{url:"/_next/static/media/0fb93cc812fb4b50-s.woff2",revision:"a18ad80bf268ef612116d884c2af418f"},{url:"/_next/static/media/32702a3715dbd7c1-s.woff2",revision:"8c6c9a0ed2815ab4659cf6f10388aea2"},{url:"/_next/static/media/6dc02f179ba8da8f-s.woff2",revision:"ec321a873a0a3dbb51083da484c6182c"},{url:"/_next/static/media/7b9ca6a1d31c5662-s.p.woff2",revision:"817c5aeb992050a67c54c8bf028a28a8"},{url:"/_next/static/media/84a39d905077a976-s.woff2",revision:"cd3fed32b75d04b79cf48a95ef63b9a5"},{url:"/_next/static/media/931105f8d96e7f26-s.p.woff2",revision:"6d1f2c44bd135848c7321937f7371e37"},{url:"/_next/static/media/9450a5aa688b86af-s.woff2",revision:"ad7ab63936b2f4518d04ebbdf704c8ca"},{url:"/_next/static/media/bd2489da38fb1d0b-s.woff2",revision:"ca4dd28ee25e096804bbb0dab6fc7dfe"},{url:"/_next/static/media/clicking.71eb9975.gif",revision:"c9976f9dade81d5d4b6d0425e4ffb5a0"},{url:"/_next/static/media/cta.b0b8a12f.png",revision:"45d9b343a14d0994364b3c62808de0fb"},{url:"/_next/static/media/dashboard.238b7a34.png",revision:"2332899f9f657744ddac2e376842d48d"},{url:"/_next/static/media/f1d4c48219b1bd72-s.woff2",revision:"e46df47bb1e1cf796f08f67211174cef"},{url:"/_next/static/media/sg.eb4a8fa5.png",revision:"25f4fee6a9501067b6843c0b2a058a0e"},{url:"/_next/static/media/step1-1.0a935b6b.png",revision:"9e91406ae6d7b4eb56c15423a9ce96ca"},{url:"/_next/static/media/step3-1.6c2aea62.png",revision:"05f2ee2ea5b63482dcfbf3a59eda7eb5"},{url:"/_next/static/media/step4-1.f9f46753.png",revision:"700972ac3c8345820d1319009dc54295"},{url:"/_next/static/media/step5-1.c53a1ecc.png",revision:"ccc040c76c60549a75fc9ea068db2b0c"},{url:"/_next/static/media/tts.53ea9122.png",revision:"3ce825718366deba0dfd19c379156f71"},{url:"/_next/static/sc0brlUEmI0hRvwQYQBN9/_buildManifest.js",revision:"b0633fc25895136c2958026df6743563"},{url:"/_next/static/sc0brlUEmI0hRvwQYQBN9/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/apple-touch-icon.png",revision:"cbf95eb5afe3096b94229080077d05e2"},{url:"/favicon-16x16.png",revision:"cbf95eb5afe3096b94229080077d05e2"},{url:"/favicon.ico",revision:"cbf95eb5afe3096b94229080077d05e2"},{url:"/icon512_maskable.png",revision:"1fa02d81283cc93d777c0e7518146923"},{url:"/icon512_rounded.png",revision:"cbf95eb5afe3096b94229080077d05e2"},{url:"/manifest.json",revision:"38dc8c131bfd916ae246a6aebb418bd7"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/podcast.mov",revision:"3edbe1039ccdfafdac86411e06d4f3c2"},{url:"/podcast.wav",revision:"1ac18b8566d9f5fbadfd9221b1bbf62d"},{url:"/sample.mp3",revision:"233c7065ff441c0d1a4c1dc4bf03baf6"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
