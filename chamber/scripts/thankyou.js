const appInfo = new URLSearchParams(window.location.search);

function formatNum(telNum) {
    if (telNum.length == 10) {
        return telNum.replace( /(\d{3})(\d{3})(\d{2})/, "($1) $2-$3");
    } else if (telNum.length == 11) {
        return telNum.replace( /(\d{1})(\d{3})(\d{3})(\d{2})/, "+$1($2) $3-$4");
    }
}

document.querySelector("#results").innerHTML = `
<p>Thank you for your interest in being a Vernal CoC member, <strong>${appInfo.get("first-name")} ${appInfo.get("last-name")}</strong>!</p>
<p>The following information was received at ${appInfo.get("timestamp")}:</p>
<p><strong>Business Name: </strong>${appInfo.get("organization")}</p>
<p>   <strong>Email: </strong>${appInfo.get("email")}</p>
<p>   <strong>Phone: </strong>${formatNum(appInfo.get("phone-number"))}</p>
`;