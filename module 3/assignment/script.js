/* -------------------------------------------------------------------------- */
/*                                  problem 1                                 */
/* -------------------------------------------------------------------------- */
function getDayFromDate(dateString) {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const date = new Date(dateString);
    const dayIndex = date.getDay();
    const day = days[dayIndex];
    if (!day) {
        return "Error: Invalid Parameters";
    }
    return day;
}

/* -------------------------------------------------------------------------- */
/*                                  problem 2                                 */
/* -------------------------------------------------------------------------- */
function rootSum(arr) {
    try {
        const sum = arr.reduce((total, element) => {
            return total + Math.pow(element, 2);
        }, 0);
        const root = Math.sqrt(sum);
        return root;
    } catch (error) {
        return;
    }
}

/* -------------------------------------------------------------------------- */
/*                                  problem 3                                 */
/* -------------------------------------------------------------------------- */
function isPrime(number) {
    if (number <= 0) return false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}

/* -------------------------------------------------------------------------- */
/*                                  problem 4                                 */
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                                  problem 5                                 */
/* -------------------------------------------------------------------------- */
function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    let browserName;
    let browerVersion;
    let versionRegex;

    if (userAgent.indexOf("Firefox") > -1) {
        browserName = "Mozilla Firefox";
        versionRegex = /Firefox\/([\d.]+)/;
    } else if (userAgent.indexOf("Chrome") > -1) {
        browserName = "Google Chrome";
        versionRegex = /Chrome\/([\d.]+)/;
    } else if (userAgent.indexOf("Safari") > -1) {
        browserName = "Apple Safari";
        versionRegex = /Version\/([\d.]+)/;
    } else if (
        userAgent.indexOf("Opera") > -1 ||
        userAgent.indexOf("OPR") > -1
    ) {
        browserName = "Opera";
        versionRegex = /(?:Opera|OPR)\/([\d.]+)/;
    } else if (userAgent.indexOf("Edge") > -1) {
        browserName = "Microsoft Edge";
        versionRegex = /Edge\/([\d.]+)/;
    } else if (userAgent.indexOf("Trident") > -1) {
        browserName = "Internet Explorer";
        versionRegex = /Trident\/([\d.]+)/;
    } else {
        browserName = "Unknown";
        versionRegex = /(?:\b(?:Version|MSIE|rv)[: ]|[^a-z]Edge\/)([\d.]+)/;
    }
    let matches = userAgent.match(versionRegex);
    browerVersion = matches ? matches[1] : "Unknown";
    return `${browserName} v${browerVersion}`;
}

/* -------------------------------------------------------------------------- */
/*                                  problem 6                                 */
/* -------------------------------------------------------------------------- */

function getUserLocation() {
    const locationStatus = document.getElementById("location-status");
    const locationOutput = document.getElementById("location-output");

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        locationStatus.innerText = "";
        locationOutput.innerText = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }

    function error() {
        locationStatus.innerText = "Unable to retrieve your location";
    }

    if (!navigator.geolocation) {
        locationStatus.innerText =
            "Geolocation is not supported by your browser";
    } else {
        locationStatus.innerText = "Locating...";
        navigator.geolocation.getCurrentPosition(success, error);
    }
}
