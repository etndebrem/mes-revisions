/* Service worker — met l'appli en cache pour un fonctionnement hors-ligne.
   Incrémentez la version (CACHE) après toute modification des fichiers. */
const CACHE = 'revisions-v21';

const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './revision-droit-commercial/index.html',
  './revision-droit-commercial/style.css',
  './revision-droit-commercial/app.js',
  './revision-droit-commercial/data.js',
  './revision-droit-commercial/fiches.js',
  './revision-droit-ue/index.html',
  './revision-droit-ue/style.css',
  './revision-droit-ue/app.js',
  './revision-droit-ue/data.js',
  './revision-droit-ue/qcm-data.js',
  './revision-droit-ue/qcm.js',
  './revision-anglais-uk/index.html',
  './revision-anglais-uk/style.css',
  './revision-anglais-uk/app.js',
  './revision-anglais-uk/data.js',
  './revision-anglais-uk/fiches.js',
  './revision-histoire-droit/index.html',
  './revision-histoire-droit/style.css',
  './revision-histoire-droit/app.js',
  './revision-histoire-droit/data.js',
  './revision-histoire-droit/qcm-data.js',
  './revision-histoire-droit/qcm.js',
  './revision-histoire-droit/auteurs-data.js',
  './revision-histoire-droit/auteurs.js',
  './revision-vie-politique/index.html',
  './revision-vie-politique/style.css',
  './revision-vie-politique/app.js',
  './revision-vie-politique/data.js',
  './revision-vie-politique/fiches.js',
  './revision-vie-politique/auteurs-data.js',
  './revision-vie-politique/auteurs.js',
  './revision-anglais-constit/index.html',
  './revision-anglais-constit/style.css',
  './revision-anglais-constit/app.js',
  './revision-anglais-constit/data.js',
  './revision-anglais-constit/qcm-data.js',
  './revision-anglais-constit/qcm.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then((cached) =>
      cached || fetch(e.request).catch(() => caches.match('./index.html'))
    )
  );
});
