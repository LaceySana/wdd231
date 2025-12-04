import { places } from "../data/places.mjs";


function displayItems(places) {
    places.forEach(x => {
        document.querySelector("#allplaces").innerHTML += `
        <div>
            <img src="images/${x.image_url}" alt="${x.name}" loading="lazy">
            <h2>${x.name}</h2>
            <address>${x.address}</address>
            <p>${x.description}</p>
            <button>Learn More</button>
        </div>
        `
    }); 
}

displayItems(places);


// 
let currentVisit = Date.now();

let lastVisit = window.localStorage.getItem("lastVisit") || currentVisit;

if (lastVisit === currentVisit) {
    displayWelcome();
} else if (calculateDaysSinceVisit() < 1) {
    // if its been less than a day
    displayWelcome(false);
} else {
    displayLastVisit();
}


function calculateDaysSinceVisit() {
    const msToDays = 86400000;
    let msBetweenVisits = currentVisit - lastVisit;
    return msBetweenVisits / msToDays;
}

function displayWelcome(isFirstVisit = true) {
// create and open modal with different message depending on isFirstVisit
    const msg = document.querySelector("#welcome");
    const frstWlcm = "Welcome! Let us know if you have any questions.";
    const wlcmBck = "Back so soon! Awesome!";

    msg.innerHTML = `
    <button id="closeModal">✖</button>
    <p>${isFirstVisit ? frstWlcm : wlcmBck}</p>
    `;

    msg.showModal();

    closeModal.addEventListener("click", () => {
        msg.close();
    })
}

function displayLastVisit() {
// display number of days since last visit
    let days = Math.round(calculateDaysSinceVisit());

    document.querySelector("#last-visit").innerHTML = `
    <p>You last visited ${days} day${days > 1 ? "s" : ""} ago.</p>
    `;
}

localStorage.setItem("lastVisit", currentVisit);