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
