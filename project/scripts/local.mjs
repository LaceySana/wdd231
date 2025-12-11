function getCoursesJoined() {
    let coursesJoined = JSON.parse(localStorage.getItem("coursesJoined")) || [];
    return coursesJoined;
}

function setCoursesJoined(course) {
    let coursesJoined = JSON.parse(localStorage.getItem("coursesJoined")) || [];
    coursesJoined.push(course);
    localStorage.setItem("coursesJoined", JSON.stringify(coursesJoined));
}

function displayCoursesJoined() {
    const btn = document.querySelector("#which-courses");
    const courses = getCoursesJoined();
    
    btn.addEventListener("click", () => {
        createModal(courses);
    })
}

function createModal(courses) {
    const modal = document.querySelector("#courses-joined");
    modal.innerHTML = `
    <button id="closeModal">✖</button>
    <h3>Courses Joined</h3>
    <ul id="coursesTakenList"></ul>
    `;

    courses.forEach(course => {
        coursesTakenList.innerHTML += `
        <li>${course}</li>
        `;
    });

    modal.showModal();

    closeModal.addEventListener("click", () => {
        modal.close();
    })
}

export { displayCoursesJoined, setCoursesJoined };