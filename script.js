/* =========================
   MOBILE MENU
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        // Buttons and nav
        var openBtn =
            document.querySelector(".menu-toggle");

        var closeBtn =
            document.querySelector(".menu-close");

        var nav =
            document.querySelector("nav");

        // Open menu
        openBtn.addEventListener(
            "click",
            function () {
                nav.classList.add("open");
            }
        );

        // Close menu
        closeBtn.addEventListener(
            "click",
            function () {
                nav.classList.remove("open");
            }
        );
    }
);


/* =========================
   WINDOW SIZE TRACKER
========================= */

function updateSize() {

    let width =
        document.documentElement.clientWidth;

    let height =
        document.documentElement.clientHeight;

    let unit =
        document.getElementById("unitSelect").value;

    let displayWidth = width;
    let displayHeight = height;

    // rem/em conversion
    if (unit === "rem" || unit === "em") {

        let baseFont =
            parseFloat(
                getComputedStyle(
                    document.documentElement
                ).fontSize
            );

        displayWidth =
            (width / baseFont).toFixed(2);

        displayHeight =
            (height / baseFont).toFixed(2);
    }

    // percentage conversion
    if (unit === "%") {

        displayWidth =
            (
                (width / window.screen.width) * 100
            ).toFixed(1);

        displayHeight =
            (
                (height / window.screen.height) * 100
            ).toFixed(1);
    }

    // Display updated size
    document.getElementById("sizeDisplay").textContent =
        "Width: " + displayWidth + unit +
        " | Height: " + displayHeight + unit;
}

// Run on load
updateSize();

// Update on resize
window.addEventListener(
    "resize",
    updateSize
);

// Update when unit changes
document
    .getElementById("unitSelect")
    .addEventListener(
        "change",
        updateSize
    );


/* =========================
   PARALLAX EFFECT
========================= */

/*
Selected Element:
Advertisement sidebar widget
*/
const advertBox =
    document.querySelector(".sidebar");

/*
Scroll Event:
Moves advertisement while scrolling
*/
window.addEventListener("scroll", function () {

    // Scroll amount
    let scrollPosition =
        window.scrollY;

    /*
    Stronger movement
    */
    advertBox.style.transform =
        "translateY(" +
        scrollPosition * 0.3 +
        "px)";
});
