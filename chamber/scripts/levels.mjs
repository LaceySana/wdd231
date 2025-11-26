async function getLevelInfo(display) {
    const levelsData = "data/membershiplevels.json";
    try {
        const response = await fetch(levelsData);
        if (response.ok) {
            const data = await response.json();
            display(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
    
    
}

function displayLevelCards(levels) {
    const cards = document.querySelector("#level-info");
    cards.innerHTML = "";
    cards.innerHTML = `<h2>Membership Levels</h2>`;
    levels.forEach(level => {
        let lvlId = level.title.replace(" ", "") + "-div";
        let btnId = level.title.replace(" ", "") + "-info";
        cards.innerHTML += `
        <section class="member-level" id="${lvlId}">
            <h3>${level.title} Membership Level</h2>
            <button type="button" id="${btnId}">Learn More</button>
        </section>
        `;
    });
    levels.forEach(level => {
        let btnId = level.title.replace(" ", "") + "-info";
        document.querySelector(`#${btnId}`).addEventListener("click", () => displayLevelInfo(level));
    });
}

function displayLevelInfo(level) {
    const levelDetails = document.querySelector("#level-dialog");

    const usdFormatter = new Intl.NumberFormat("en-US", { style: "currency", currency : "USD" })

    levelDetails.innerHTML = `
    <button id="closeModal">✖</button>
    <h2>${level.title}</h2>
    <p><strong>Cost: </strong>${usdFormatter.format(level.cost)}</p>
    <p><strong>Benefits: </strong></p>
    <ul id="benefit-list"></ul>
    `;
    const benefitList = document.querySelector("#benefit-list");
    level.benefits.forEach(benefit => {
        let li = document.createElement("li");
        li.textContent = benefit;
        benefitList.appendChild(li);
    });

    levelDetails.showModal();

    closeModal.addEventListener("click", () => {
        levelDetails.close();
    })
}

export{getLevelInfo, displayLevelCards, displayLevelInfo}