"use client";

export default function EnableNotifications() {
  const enable = async () => {
    if (!("Notification" in window)) return;
    if (!("serviceWorker" in navigator)) return;

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

  if (Notification.permission === "denied") {
    return (
      <div className="text-sm text-gray-400">
        Las notificaciones están bloqueadas.
        <br />
        Actívalas desde la configuración del navegador.
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
      className="px-4 py-2 border border-white text-white bg-[#0a0a0a] shadow-xl rounded-full text-lg tracking-tighter"
    >
      Activar notificaciones 💻 1
    </button>
  );
}
