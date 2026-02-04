// TEMPORARY TEST MODE
// This lets you verify everything works before date-locking

const loading = document.getElementById("loading");
const letters = document.querySelectorAll(".letter");

// Change this value to test different days
// Options: "rose", "propose", "chocolate"
const currentDay = "rose";

setTimeout(() => {
    loading.style.display = "none";

    letters.forEach(letter => {
        if (letter.id === currentDay) {
            letter.style.display = "block";
        }
    });
}, 1000);
