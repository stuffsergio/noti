"use client";

export default function EnableNotifications() {
  const enable = async () => {
    if (typeof window === "undefined") return;

    if (!window.matchMedia("(display-mode: standalone)").matches) {
      alert("Instala la app desde Safari para activar notificaciones.");
      return;
    }

    if (!("serviceWorker" in navigator)) {
      alert("Service Workers no disponibles en este dispositivo.");
      return;
    }

    if (!("Notification" in window)) {
      alert("Notificaciones no soportadas.");
      return;
    }

    const permission = await Notification.requestPermission();
    if (permission !== "granted") return;

    const reg = await navigator.serviceWorker.ready;

    const sub = await reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
    });

    await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify(sub),
    });

    alert("Notificaciones activadas ✅");
  };

  return <button onClick={enable}>Activar notificaciones</button>;
}
