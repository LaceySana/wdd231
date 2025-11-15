import { getMemberData, displayMembers } from "./members.mjs";

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


getMemberData(displayMembers);
