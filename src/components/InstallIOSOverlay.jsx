"use client";

import { useState } from "react";

export default function InstallIOSOverlay() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div>
      {show ? (
        <div className="fixed inset-0 bg-black/70 text-white z-50 flex items-end">
          <div className="bg-black w-full p-5 rounded-t-2xl">
            <h3>Cómo instalar</h3>
            <p>1. Pulsa Compartir</p>
            <p>2. Pulsa "..." Más</p>
            <p>3. Pulsa "Añadir a pantalla de inicio"</p>
            <button
              onClick={() => setShow(false)}
              className="mt-4 bg-white text-black px-4 py-2 rounded-full w-full"
            >
              Entendido
            </button>
          </div>
        </div>
      ) : (
        <div>Cómo instalar</div>
      )}
    </div>
  );
}
