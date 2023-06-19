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
    const sum = arr.reduce((total, element) => {
        return total + Math.pow(element, 2);
    }, 0);
    const root = Math.sqrt(sum);
    return root;
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
function gotoExample(url, width, height) {
    window.open(url, "_blank", `width=${width},height=${height}`);
}

/* -------------------------------------------------------------------------- */
/*                                  problem 5                                 */
/* -------------------------------------------------------------------------- */
function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    let browserName;
    let browerVersion;
    let versionRegex;

    // getting browser name and
    // setting corresponding regex for getting version
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

    // getting browser version
    let matches = userAgent.match(versionRegex);
    browerVersion = matches ? matches[1] : "Unknown";
    return `${browserName} v${browerVersion}`;
}

/* -------------------------------------------------------------------------- */
/*                                  problem 6                                 */
/* -------------------------------------------------------------------------- */
function getUserLocation(element = undefined) {
    let locationStatus;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const latitudeText = latitude.toFixed(4);
                const longitudeText = longitude.toFixed(4);
                locationStatus = `Latitude: ${latitudeText}°<br> Longitude: ${longitudeText}°`;
                if (element) {
                    element.innerHTML = locationStatus;
                } else {
                    console.log(locationStatus);
                }
            },
            () => {
                locationStatus = "Unable to retrieve your location";
                if (element) {
                    element.innerHTML = locationStatus;
                } else {
                    console.log(locationStatus);
                }
            }
        );
    } else {
        console.log(error);
    }
}

/* -------------------------------------------------------------------------- */
/*                                  problem 7                                 */
/* -------------------------------------------------------------------------- */
// inside webpage

/* -------------------------------------------------------------------------- */
/*                                  problem 8                                 */
/* -------------------------------------------------------------------------- */
function showText(element) {
    element.innerText = "Button Clicked!";
}

function removeText(element) {
    element.innerText = "";
}

/* -------------------------------------------------------------------------- */
/*                                 problem 10                                 */
/* -------------------------------------------------------------------------- */
function changeTextToYellow(element) {
    if (!element.classList.contains("hightlight")) {
        element.classList.add("highlight");
    }
}

function resetTextFromYellow(element) {
    element.classList.remove("highlight");
}

/* -------------------------------------------------------------------------- */
/*                                 problem 11                                 */
/* -------------------------------------------------------------------------- */
function addItemsToList(list) {
    const listItems = list.childNodes;
    const newItem = document.createElement("li");
    newItem.classList.add("my-li");

    const idx = listItems.length + 1;
    newItem.innerText = idx;
    if (listItems.length < 5) {
        list.appendChild(newItem);
    }
}

/* -------------------------------------------------------------------------- */
/*                                 problem 12                                 */
/* -------------------------------------------------------------------------- */
function switchImage(imgElement) {
    const imageList = ["p0jz4pmnl9E", "h_XcnLbDc_0", "qbOnG07yDCM"];
    currentImageIndex = currentImageIndex + 1;
    if (currentImageIndex % imageList.length === 0) currentImageIndex = 0;
    currentImageUrl = `https://source.unsplash.com/${imageList[currentImageIndex]}`;
    imgElement.src = currentImageUrl;
}

/* -------------------------------------------------------------------------- */
/*                                 problem 13                                 */
/* -------------------------------------------------------------------------- */
function changeTextColor(event) {
    // reseting all paragraphs
    const allParagraphs = document.querySelectorAll("p");
    allParagraphs.forEach((element) => {
        element.classList.remove("red");
    });

    // targetting selected paragraphs
    const className = event.target.value;
    if (className) {
        const targetParagraphs = document.querySelectorAll(`.${className}`);
        targetParagraphs.forEach((element) => {
            element.classList.add("red");
        });
    }
}

/* -------------------------------------------------------------------------- */
/*                                 problem 14                                 */
/* -------------------------------------------------------------------------- */
async function sendRequest() {
    try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}

/* -------------------------------------------------------------------------- */
/*                                  prblem 15                                 */
/* -------------------------------------------------------------------------- */
async function sendRequest() {
    const jsonObj = {
        name: "John Doe",
        email: "johndoe@example.com",
    };
    try {
        let res = await axios.post(
            "https://jsonplaceholder.typicode.com/users",
            jsonObj
        );
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}
