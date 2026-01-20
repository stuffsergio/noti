"use client";

export default function SendNotification() {
  const send = async () => {
    await fetch("/api/notify", {
      method: "POST",
    });

    setTimeout(() => {
      alert("Notificación enviada 🚀");
    }, 5000);
  };

  return (
    <button
      onClick={send}
      className="px-4 py-2 text-white border border-white rounded-full mt-4"
    >
      Enviar Notificación
    </button>
  );
}
