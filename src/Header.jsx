import React from "react";

function Header() {
    const firstName = "Andy";
    const date = new Date();
    const hours = date.getHours()
    let day = date.getDay()
    let timeOfDay
    let dayOfWeek
    if (hours < 12) {
        timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "evening";
    }
    if (day == 0) {
        dayOfWeek = "Sunday"
    } else if (day == 1) {
        dayOfWeek = "Monday"
    } else if (day == 2) {
        dayOfWeek = "Tuesday"
    } else if (day == 3) {
        dayOfWeek = "Wednesday"
    } else if (day == 4) {
        dayOfWeek = "Thursday"
    } else if (day == 5) {
        dayOfWeek = "Friday"
    } else {
        dayOfWeek = "Saturday"
    }
    
    return (
        <header className="navBar">{`Good ${timeOfDay} ${firstName}, it's ${dayOfWeek}`}</header>
    )
}

export default Header