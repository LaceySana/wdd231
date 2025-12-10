async function getData(display) {
    const courseFile = "data/courses.json";
    try {
        const response = await fetch(courseFile);
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

const courses = getData(displayCourses);


function displayCourses(courses) {
    // const singingCourses = courses.filter((course) => course.subject == "Singing");
    // const pianoCourses = courses.filter((course) => course.subject == "Piano");
    // const violinCourses = courses.filter((course) => course.subject == "Violin");
    // const guitarCourses = courses.filter((course) => course.subject == "Guitar");
    // const drumCourses = courses.filter((course) => course.subject == "Drum Set");

    courses.forEach(course => {
        document.querySelector("#course-list").innerHTML += `
        <section>
            <h2>${course.subject}</h2>
            <h3>${course.level}</h3>
            <p><strong>${course.description}</strong></p>
            <p><strong>$${course.cost}</strong></p>
        </section>
        `;
    });
    
}