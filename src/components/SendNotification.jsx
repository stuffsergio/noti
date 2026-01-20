"use client";

export default function SendNotification() {
  const send = async () => {
    await fetch("/api/notify", {
      method: "POST",
    });

    alert("Notificación enviada 🚀");
  };

  return (
    <button
      onClick={send}
      className="px-4 py-2 border border-white rounded-full mt-4"
    >
      Enviar Notificación
    </button>
  );
}
