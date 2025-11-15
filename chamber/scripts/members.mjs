const memDiv = document.querySelector("#members");

async function getMemberData(display) {
    const membersFile = "data/members.json";
    const response = await fetch(membersFile);
    const data = await response.json();
    display(data.members);
}


const displayMembers = (members) => {
    members.forEach(member => {
        let section = document.createElement("section");
        let img = document.createElement("img");
        let name = document.createElement("p");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let site = document.createElement("a");
        
        // set content and attributes for each element
        img.setAttribute("src", `images/${member.image}`);
        img.setAttribute("alt", `Company Logo for ${member.name}`);
        img.setAttribute("width", "150");
        
        name.textContent = member.name;
        
        const firstCommaIndex = member.address.indexOf(",");
        const line1 = member.address.slice(0, firstCommaIndex);
        const line2 = member.address.slice(firstCommaIndex + 1);
        address.innerHTML = `${line1}<br>${line2}`;
        
        phone.textContent = member.phoneNumber;
        
        site.textContent = member.url;
        site.setAttribute("href", member.url);
        site.setAttribute("target", "_blank");
        
        // append all elements to section
        section.appendChild(img);
        section.appendChild(name);
        section.appendChild(address);
        section.appendChild(phone);
        section.appendChild(site);
        
        memDiv.appendChild(section);
    });
}

const displaySpotlights = (members) => {
    const spotlights = document.querySelector("#spotlights");
    
    const highLevel = members.filter(member => member.membershipLevel >= 2);

    let randComp = [];
    for (let i = 0; i < 3; i++) {
        let randInt = Math.floor(Math.random() * highLevel.length);
        while (randComp.includes(highLevel[randInt])) {
            randInt = Math.floor(Math.random() * highLevel.length);
            console.log(randInt, highLevel[randInt]);
        }
        randComp.push(highLevel[randInt]);
    }
    
    randComp.forEach(member => {
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        let img = document.createElement("img");
        let details = document.createElement("p");

        h3.textContent = member.name;
        img.setAttribute("src", `images/${member.image}`);
        img.setAttribute("alt", `${member.name} logo`);
        img.setAttribute("width", "100px");
        details.innerHTML = 
        `<strong>Phone: </strong>${member.phoneNumber ? member.phoneNumber : "Unavailable"} <br>
        <strong>Address: </strong>${member.address ? member.address : "Unavailable"} <br>
        <strong>URL: </strong>${member.url}
        <strong>Membership Level: </strong>${member.membershipLevel}`


        article.appendChild(h3);
        article.appendChild(img);
        article.appendChild(details);

        spotlights.appendChild(article);
    });
    
    
}


export {getMemberData, displaySpotlights, displayMembers};