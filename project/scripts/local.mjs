function updateSignUps() {
    let signUps = Number(localStorage.getItem("signUps")) || 0;
    signUps += 1;
    localStorage.setItem("signUps", signUps);
    return signUps;
}

function displaySignUps() {
    const signUps = updateSignUps();
    const sect = document.querySelector("#sign-ups");
    if (signUps == 1) {
        sect.innerHTML = `
        <section>
            <p>This will be your first course with us. Welcome!</p>
        </section>
        `;
    } else {
        sect.innerHTML = `
        <section>
            <p>You've now joined ${signUps} courses with us!</p>
        </section>
        `;
    }
}

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

export { displaySignUps, displayCoursesJoined, setCoursesJoined };