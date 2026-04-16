const Platform = {
    MacOS: 'mac_os',
    iOS: 'iOS',
};

function getOS() {
    const userAgent = window.navigator.userAgent;

    const platform = navigator?.userAgentData?.platform || navigator?.platform || 'unknown';

    const macOSPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K', 'macOS'];
    const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
    const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
    let os = null;

    if (macOSPlatforms.includes(platform)) {
        os = Platform.MacOS;
    } else if (iosPlatforms.includes(platform)) {
        os = Platform.iOS;
    } else if (windowsPlatforms.includes(platform)) {
        // Windows → show macOS images
        os = Platform.MacOS;
    } else if (/Android/.test(userAgent)) {
        // Android → show iOS images
        os = Platform.iOS;
    } else if (/Linux/.test(platform)) {
        // Linux → show macOS images
        os = Platform.MacOS;
    }

    return os;
}

function setImage(os) {
    const imageIds = ['appimage', 'addimage', 'loginimage', 'archiveimage', 'exportimage', 'darkimage'];
    const imageNames = ['App', 'Add', 'Login', 'Archive', 'Export', 'Dark'];

    imageIds.forEach((id, i) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.src = `https://cdn.jsdelivr.net/gh/rishi-singh26/TempBox-Webpage/assets/screenshots/${os}/${imageNames[i]}.png`;
        if (os === Platform.MacOS) {
            el.className = 'mockup-desktop';
        }
    });
}

setImage(getOS());