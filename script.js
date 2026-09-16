/* =========================
   BUKA UNDANGAN
========================= */

function openInvitation() {

    document.getElementById("cover").style.display = "none";

    document.getElementById("invitation").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================
   COUNTDOWN
========================= */

const graduationDate = new Date(
    "September 28, 2026 08:00:00"
).getTime();


const countdown = setInterval(function () {

    const now = new Date().getTime();

    const distance = graduationDate - now;


    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );


    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );


    document.getElementById("days").textContent =
        days.toString().padStart(2, "0");


    document.getElementById("hours").textContent =
        hours.toString().padStart(2, "0");


    document.getElementById("minutes").textContent =
        minutes.toString().padStart(2, "0");


    document.getElementById("seconds").textContent =
        seconds.toString().padStart(2, "0");


    if (distance < 0) {

        clearInterval(countdown);

        document.querySelector(".countdown").innerHTML =
            "<p>Hari Wisuda Telah Tiba 🎓</p>";

    }

}, 1000);