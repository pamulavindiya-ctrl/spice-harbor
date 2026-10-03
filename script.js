const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Reservation Form
const reservationForm = document.querySelector(".reservation-form");

reservationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    alert("Thank you! Your reservation request has been received.");

    reservationForm.reset();
});