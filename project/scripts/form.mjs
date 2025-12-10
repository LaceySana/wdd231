const data = new URLSearchParams(window.location.search);

function displayThanks() {
    document.querySelector("#thanks").innerHTML = `
    <section>
        <p style="font-size: larger;">Thank you <strong>${data.get("fname")} ${data.get("lname")}</strong> for signing up for the <strong>${data.get("level")} ${data.get("subject")}</strong> course!</p>
    </section>
    `;
}

const course = `${data.get("level")} ${data.get("subject")}`;

export { course, displayThanks };