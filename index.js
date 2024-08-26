const Platform = {
    MacOS: 'mac_os',
    iOS: 'iOS',
    Windows: 'Windows',
    Android: 'Android',
    Linux: 'Linux',
};

function getOS() {
    const userAgent = window.navigator.userAgent;

    // Define regex patterns for different operating systems
    const platform = navigator?.userAgentData?.platform || navigator?.platform || 'unknown'

    const macOSPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K', 'macOS'];
    const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
    const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
    let os = null;

    // Determine the operating system based on the platform and user agent
    if (macOSPlatforms.includes(platform)) {
        os = Platform.MacOS;
    } else if (iosPlatforms.includes(platform)) {
        os = Platform.iOS;
    } else if (windowsPlatforms.includes(platform)) {
        os = Platform.Windows;
    } else if (/Android/.test(userAgent)) {
        os = Platform.Android;
    } else if (/Linux/.test(platform)) {
        os = Platform.Windows;
    }

    return os;
}

function setImage(os) {
    const appimage = document.getElementById("appimage");
    const addimage = document.getElementById("addimage");
    const loginimage = document.getElementById("loginimage");
    const archiveimage = document.getElementById("archiveimage");
    const exportimage = document.getElementById("exportimage");
    const darkimage = document.getElementById("darkimage");

    const addContent = document.getElementById("add-content");
    const loginContent = document.getElementById("login-content");
    const archiveContent = document.getElementById("archive-content");
    const exportContent = document.getElementById("export-content");
    const darkContent = document.getElementById("dark-content");

    const addSection = document.getElementById("add-section");
    const loginSection = document.getElementById("login-section");
    const archiveSection = document.getElementById("archive-section");
    const exportSection = document.getElementById("export-section");
    const darkSection = document.getElementById("dark-section");

    appimage.src = `https://cdn.jsdelivr.net/gh/rishi-singh26/TempBox-Webpage/assets/screenshots/${os}/App.png`;
    addimage.src = `https://cdn.jsdelivr.net/gh/rishi-singh26/TempBox-Webpage/assets/screenshots/${os}/Add.png`;
    loginimage.src = `https://cdn.jsdelivr.net/gh/rishi-singh26/TempBox-Webpage/assets/screenshots/${os}/Login.png`;
    archiveimage.src = `https://cdn.jsdelivr.net/gh/rishi-singh26/TempBox-Webpage/assets/screenshots/${os}/Archive.png`;
    exportimage.src = `https://cdn.jsdelivr.net/gh/rishi-singh26/TempBox-Webpage/assets/screenshots/${os}/Export.png`;
    darkimage.src = `https://cdn.jsdelivr.net/gh/rishi-singh26/TempBox-Webpage/assets/screenshots/${os}/Dark.png`;

    if (os === Platform.MacOS || os === Platform.Windows || os === Platform.Linux) {
        addSection.style.height = '500px';
        loginSection.style.height = '500px';
        archiveSection.style.height = '500px';
        exportSection.style.height = '500px';
        darkSection.style.height = '500px';

        addContent.style.height = '500px';
        loginContent.style.height = '500px';
        archiveContent.style.height = '500px';
        exportContent.style.height = '500px';
        darkContent.style.height = '500px';

        appimage.className = 'mockup-desktop';
        addimage.className = 'mockup-desktop';
        loginimage.className = 'mockup-desktop';
        archiveimage.className = 'mockup-desktop';
        exportimage.className = 'mockup-desktop';
        darkimage.className = 'mockup-desktop';
    } else {
        addSection.style.height = '750px';
        loginSection.style.height = '750px';
        archiveSection.style.height = '750px';
        exportSection.style.height = '750px';
        darkSection.style.height = '750px';

        addContent.style.height = '750px';
        loginContent.style.height = '750px';
        archiveContent.style.height = '750px';
        exportContent.style.height = '750px';
        darkContent.style.height = '750px';

        appimage.className = 'desktop';
        addimage.className = 'desktop';
        loginimage.className = 'desktop';
        archiveimage.className = 'desktop';
        exportimage.className = 'desktop';
        darkimage.className = 'desktop';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setImage(getOS());
});