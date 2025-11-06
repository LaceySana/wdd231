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



const membersFile = "../data/members.json";

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
    });
}

