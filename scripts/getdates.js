const currentyear = document.querySelector("#currentYear");

const today = new Date();
currentyear.innerHTML = today.getFullYear();


const lastmodified = document.querySelector("#lastModified");

const modifDate = document.lastModified;
lastmodified.innerHTML = `Last Modification: ${modifDate}`;