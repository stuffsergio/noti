"use client";

export default function EnableNotifications() {
  if (typeof window === "undefined") return null;

  const hasNotification =
    "Notification" in window && typeof Notification.permission === "string";

  const enable = async () => {
    if (!hasNotification) {
      alert("Notificaciones no soportadas en este dispositivo");
      return;
    }

    if (!("serviceWorker" in navigator)) {
      alert("Service Worker no disponible");
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

  if (!hasNotification) {
    return (
      <div className="text-sm text-gray-400">
        Este dispositivo no soporta notificaciones web.
      </div>
    );
  }

  if (Notification.permission === "denied") {
    return (
      <div className="text-sm text-gray-400">
        Las notificaciones están bloqueadas.
      </div>
    );
  }

  if (Notification.permission === "granted") {
    return (
      <div className="text-sm text-gray-400">Notificaciones activadas ✅</div>
    );
  }

  return (
    <button
      onClick={enable}
      className="px-4 py-2 border border-white text-white bg-[#0a0a0a] rounded-full"
    >
      Activar notificaciones
    </button>
  );
}
