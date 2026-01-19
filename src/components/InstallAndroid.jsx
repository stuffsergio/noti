"use client";

import { useEffect, useState } from "react";

let deferredPrompt;

export default function InstallAndroid() {
  const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      deferredPrompt = e;
      setCanInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const install = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt = null;
  };

  if (!canInstall) return null;

  return (
    <button
      onClick={install}
      className="px-4 py-2 border border-white rounded-full"
    >
      Instalar app
    </button>
  );
}
