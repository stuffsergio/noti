self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  self.clients.claim();
});

self.addEventListener("push", (event) => {
  const data = event.data?.json() || {
    title: "Notificación",
    body: "Mensaje recibido",
  };

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: "/web-app-manifest-192x192.png",
    }),
  );
});

/*self.addEventListener("push", (event) => {
  const data = event.data?.json() || { title: "Notificación", body: "Mensaje" };

  self.registration.showNotification(data.title, {
    body: data.body,
    icon: "/web-app-manifest-192x192.png",
  });
});*/

/** OPCIÓN 2
 * 
 * self.addEventListener("push", event => {
  let data = { title: "Notificación", body: "Mensaje recibido" };

  if (event.data) {
    data = event.data.json();
  }

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: "/web-app-manifest-192x192.png",
      badge: "/web-app-manifest-192x192.png"
    })
  );
});

 */
