/*** LOADS ON EVERY PAGE ***/
document.addEventListener("DOMContentLoaded", () => {

  const items = document.querySelectorAll(".nav-item");

  items.forEach(item => {

    const btn =
      item.querySelector(".dropbtn") ||
      item.querySelector(".submenu-btn");

    if (!btn) return;

    btn.addEventListener("click", (e) => {

      e.stopPropagation();

      items.forEach(i => {
        if (i !== item) {
          i.classList.remove("open");
        }
      });

      item.classList.toggle("open");

    });

  });

  document.addEventListener("click", () => {
    items.forEach(i => i.classList.remove("open"));
  });

  document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {
      items.forEach(i => i.classList.remove("open"));
    }

  });

});

// NAVBAR SHRINK

const navbar = document.querySelector(".navbar");

if (navbar) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
      navbar.classList.add("shrink");
    } else {
      navbar.classList.remove("shrink");
    }

  });

}