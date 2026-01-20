"use client";

import { useEffect, useState } from "react";
import { isIOS, isAndroid, isDesktop, isStandalone } from "@/lib/platform";

import EnableNotifications from "./EnableNotifications";
import InstallAndroid from "./InstallAndroid";
import InstallIOSOverlay from "./InstallIOSOverlay";

export default function DeviceGate() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) return null;

  // Desktop -> Notificaciones
  if (isDesktop()) {
    return <EnableNotifications />;
  }

  // Android -> botón instalar
  if (isAndroid() && !isStandalone()) {
    return (
      <>
        <InstallAndroid />
        <EnableNotifications />
      </>
    );
  }

  // 🍎 iOS
  if (isIOS()) {
    if (!isStandalone()) {
      // iOS SIN instalar → SOLO instrucciones
      return <InstallIOSOverlay />;
    }

    // iOS INSTALADA → notificaciones
    return <EnableNotifications />;
  }
}
