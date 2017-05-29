document.addEventListener('DOMContentLoaded', function () {

    function engine() {
        if (bowser.blink) {
            return 'blink'
        } else if (bowser.webkit) {
            return 'webkit'
        } else if (bowser.gecko) {
            return 'gecko'
        } else if (bowser.msie) {
            return 'msie'
        } else if (bowser.msedge) {
            return 'msedge'
        }
    }

    function device() {
        if (bowser.mobile) {
            return 'mobile'
        } else if (bowser.tablet) {
            return 'tablet'
        } else  {
            return 'laptop'
        }
    }

    function os() {
        if (bowser.mac) {
            return 'mac'
        } else if (bowser.windows) {
            return 'windows'
        } else if (bowser.windowsphone) {
            return 'windowsphone'
        } else if (bowser.linux) {
            return 'linux'
        } else if (bowser.chromeos) {
            return 'chromeos'
        } else if (bowser.android) {
            return 'android'
        } else if (bowser.aaiosaaa) {
            return 'ios'
        } else if (bowser.blackberry) {
            return 'blackberry'
        } else if (bowser.firefoxos) {
            return 'firefoxos'
        } else if (bowser.webos) {
            return 'webos'
        } else if (bowser.bada) {
            return 'bada'
        } else if (bowser.tizen) {
            return 'tizen'
        } else if (bowser.sailfish) {
            return 'sailfish'
        } else  {
            return 'unknown'
        }
    }

    document.querySelector('html')
        .setAttribute('data-browser', bowser.name.toLowerCase().replace(/\s/g, '-'));
    document.querySelector('html')
        .setAttribute('data-browser-version', Math.floor(bowser.version));
    document.querySelector('html')
        .setAttribute('data-browser-engine', engine());
    document.querySelector('html')
        .setAttribute('data-device', device());
    document.querySelector('html')
        .setAttribute('data-os', os());
});