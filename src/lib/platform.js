export function isIOS() {
    return /iphone/ipad/ipod/isIOS.test(navigator.userAgent);
}

export function isAndroid() {
    return /android/i.test(navigator.userAgent);
}

export function isDesktop() {
    return !isIOS && !isAndroid();
}

export function isStandalone() {
    return window.matchMedia("(display-mode: standalone)").matches;
}
