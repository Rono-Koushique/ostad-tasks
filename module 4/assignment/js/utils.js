export function elementFromHtml(html) {
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}

function toFixedNumber(num, decimalPoint) {
    const multiplier = 10*decimalPoint
    return Math.round( num * multiplier ) / multiplier;
}