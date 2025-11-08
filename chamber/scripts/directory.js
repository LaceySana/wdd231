const grid = document.querySelector("#grid-btn");
const list = document.querySelector("#list-btn");
const memDiv = document.querySelector("#members");

grid.addEventListener("click", () => {
    memDiv.classList.add("grid");
    memDiv.classList.remove("list");
})

list.addEventListener("click", () => {
    memDiv.classList.add("list");
    memDiv.classList.remove("grid");
})



const membersFile = "data/members.json";

async function getMemberData() {
    const response = await fetch(membersFile);
    const data = await response.json();
    displayMembers(data.members);
}

getMemberData();

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

