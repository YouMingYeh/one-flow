if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),d={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-d25a3628"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"414b1bb9228b3edbe6c023fd7ed139c2"},{url:"/_next/static/chunks/0f993a33-9eb0572e0524006b.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/1133.908f29f7b3d3828e.js",revision:"908f29f7b3d3828e"},{url:"/_next/static/chunks/2326-eb80665d79bda4af.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/2376-6da1ed04e1827969.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/4373.8e68c93fa3d167f4.js",revision:"8e68c93fa3d167f4"},{url:"/_next/static/chunks/4605-9493d88afc355347.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/4981-06b6697831ff4112.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/5280-e92ee8bd5ca1f0cc.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/578-3aeb389a45b60edf.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/604-1687499a2312b4fa.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/7064-0b775a1769a31ec3.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/7077-945506816bd452e5.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/7454.4488a658600e884f.js",revision:"4488a658600e884f"},{url:"/_next/static/chunks/7975-c36783bebdb27cb2.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/8079-e35cdcaca2a2cdf9.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/8416-168576d81fbdc072.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/8441-3d45ee4be7b8e5d2.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/8461863f-b031fd345c448c85.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/909-a7fc22d027324dae.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/9414-06f8a910a3ddb40b.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/9780-20714c7ca401a74a.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/9e33a154-0f43969d7d0ff119.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/a5d84b75-9ae8b36fdd5a9de5.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/a76aede9-7857af2fe9ad94d7.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/(splash)/(root)/page-5c23466030aab942.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/(splash)/home/page-f5da204b7c53e4e7.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/(splash)/layout-6ec293c8c847f1ac.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/(splash)/pricing/page-e4237522dbcbd02d.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/(splash)/support/page-2340326e1c4a5bf7.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/app/(root)/layout-be7256faa50df210.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/app/(root)/page-54286ab58455a712.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/app/billing/page-69ce18461bab3027.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/app/cookbooks/first/page-0d25804531e3937d.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/app/cookbooks/page-2493b6161ff7c4b4.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/app/flow/%5BflowId%5D/page-d9dfddfd0a173ea4.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/app/flow/layout-3f56084f798f0456.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/app/flow/page-8818f3e04c7b7a08.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/app/layout-c3b474a38f06bd8b.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/app/loading-1e60d16cfab2b0c7.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/app/recent/layout-0ef8cd7733b46f04.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/app/recent/page-86216c722d7e7425.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/app/settings/account/page-40c76fde6a981aef.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/app/settings/appearance/page-7885f865cab9143b.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/app/settings/layout-b14591dc9e166beb.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/app/settings/page-983b87839474f57e.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/app/workspace/%5BworkspaceId%5D/flow/%5BflowId%5D/layout-78f0b71cfcd3aab0.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/app/workspace/%5BworkspaceId%5D/flow/%5BflowId%5D/page-7271589b0c8d4c8f.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/app/workspace/%5BworkspaceId%5D/flow/create/page-65e1c0a5b71a15d6.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/app/workspace/%5BworkspaceId%5D/flow/page-d7881cd65d046a36.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/app/workspace/%5BworkspaceId%5D/page-29f4206b512af1f8.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/app/workspace/create/page-e4252ebc37d6ea89.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/app/workspace/page-fd53c03573a34c7b.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/auth/(public)/forgot-password/page-2a674865372985c8.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/auth/(public)/login/page-1b64779460e50d82.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/auth/(public)/register/page-3a05fa8f23e5806c.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/auth/layout-e2a4b2c0a4da11ef.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/auth/reset-password/page-bf18c36cd40f694e.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/auth/welcome/page-3bd90f9d3f28d90f.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/early-access/%5Bid%5D/page-97a9a1181538e0a1.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/early-access/layout-640d59fb07ed0c00.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/early-access/page-2f3a75bff9c0c842.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/early-access/results/%5Bid%5D/page-c9faeb7e5e72cf45.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/early-access/run/%5Bid%5D/page-43b64e70ff2f6b6c.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/global-error-16fa6dffa10cd62e.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/layout-5f96aa891c02b324.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/loading-0df7a81dd003121e.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/not-found-e1498324f606e4e0.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/privacy/page-fc58c8dc11b48120.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/app/terms/page-96655deaca2820c0.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/framework-0cff74432866ca0f.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/main-96f905c24357213d.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/main-app-a1d687137cd3c759.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/pages/_app-8ae3999c915ab5b8.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/pages/_error-0862b793ceab2d03.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-d6c6d55b2a098be2.js",revision:"nRFNU5hdrcVLIRzZYK4bC"},{url:"/_next/static/css/0ad95f03d042a9a6.css",revision:"0ad95f03d042a9a6"},{url:"/_next/static/css/8343068d97927d4e.css",revision:"8343068d97927d4e"},{url:"/_next/static/media/07103e16d41c9190-s.woff2",revision:"865bfc77817e078122fba2ff0a8e259c"},{url:"/_next/static/media/0fb93cc812fb4b50-s.woff2",revision:"a18ad80bf268ef612116d884c2af418f"},{url:"/_next/static/media/32702a3715dbd7c1-s.woff2",revision:"8c6c9a0ed2815ab4659cf6f10388aea2"},{url:"/_next/static/media/6dc02f179ba8da8f-s.woff2",revision:"ec321a873a0a3dbb51083da484c6182c"},{url:"/_next/static/media/7b9ca6a1d31c5662-s.p.woff2",revision:"817c5aeb992050a67c54c8bf028a28a8"},{url:"/_next/static/media/84a39d905077a976-s.woff2",revision:"cd3fed32b75d04b79cf48a95ef63b9a5"},{url:"/_next/static/media/931105f8d96e7f26-s.p.woff2",revision:"6d1f2c44bd135848c7321937f7371e37"},{url:"/_next/static/media/9450a5aa688b86af-s.woff2",revision:"ad7ab63936b2f4518d04ebbdf704c8ca"},{url:"/_next/static/media/bd2489da38fb1d0b-s.woff2",revision:"ca4dd28ee25e096804bbb0dab6fc7dfe"},{url:"/_next/static/media/clicking.71eb9975.gif",revision:"c9976f9dade81d5d4b6d0425e4ffb5a0"},{url:"/_next/static/media/f1d4c48219b1bd72-s.woff2",revision:"e46df47bb1e1cf796f08f67211174cef"},{url:"/_next/static/media/lian-lian.359e1ef9.png",revision:"d84ae94cdeba38c9be5d3b95312bc3ec"},{url:"/_next/static/media/payoneer.5c4aadbd.png",revision:"f4581505e847b955ff7337a7793ab5b6"},{url:"/_next/static/media/ping-pong.4c15a421.png",revision:"716ca33972487faaf36adfa92f3a229a"},{url:"/_next/static/media/world-first.9f9c400e.png",revision:"89d8f15ce7c7bde26083b340644e6916"},{url:"/_next/static/nRFNU5hdrcVLIRzZYK4bC/_buildManifest.js",revision:"b0633fc25895136c2958026df6743563"},{url:"/_next/static/nRFNU5hdrcVLIRzZYK4bC/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/apple-touch-icon.png",revision:"f99b55cfd227f27b93500a7969e94b24"},{url:"/favicon-16x16.png",revision:"1a269572e41e44ef0b4a75f81d72d73c"},{url:"/favicon.ico",revision:"f183a9cf471d8bc30187d8c582a2785a"},{url:"/favicon.png",revision:"f183a9cf471d8bc30187d8c582a2785a"},{url:"/icon512_maskable.png",revision:"c067032b3f4084700280cb3b8c6b0433"},{url:"/icon512_rounded.png",revision:"c067032b3f4084700280cb3b8c6b0433"},{url:"/manifest.json",revision:"5e1019813c8aac1cf085c7bc99ac1d2a"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/screenshot1.png",revision:"16b47d98a940edf237a1b522c31ca858"},{url:"/screenshot2.png",revision:"a9627e73c9d5169e440b43be85cb7b9c"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
