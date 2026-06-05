document.addEventListener("DOMContentLoaded", () => {

  const items = document.querySelectorAll(".nav-item");

  items.forEach(item => {

    const btn =
      item.querySelector(".dropbtn") ||
      item.querySelector(".submenu-btn");

    if (!btn) return;

    btn.addEventListener("click", (e) => {
      e.stopPropagation();

      // close siblings
      items.forEach(i => {
        if (i !== item) i.classList.remove("open");
      });

      // toggle current
      item.classList.toggle("open");
    });

  });

  // click outside closes all
  document.addEventListener("click", () => {
    items.forEach(i => i.classList.remove("open"));
  });

  // ESC closes all (UX improvement)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      items.forEach(i => i.classList.remove("open"));
    }
  });

});

// NAVBAR SHRINK ON SCROLL
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("eventsTrack");
  const cards = document.querySelectorAll(".event-card");
  const prev = document.getElementById("eventsPrev");
  const next = document.getElementById("eventsNext");

  let index = 0;

  function updateCenter() {
    cards.forEach((card, i) => {
      card.classList.toggle("active-center", i === index);
    });

    const cardWidth = cards[0].offsetWidth + 32; // gap included
    track.scrollTo({
      left: index * cardWidth,
      behavior: "smooth"
    });
  }

  next.addEventListener("click", () => {
    if (index < cards.length - 1) index++;
    updateCenter();
  });

  prev.addEventListener("click", () => {
    if (index > 0) index--;
    updateCenter();
  });

  updateCenter();
});

// HISTORY_BUILDING PAGE
//INTERACTIVE FLOOR PLAN SECTION
const rooms = document.querySelectorAll(".room");
const panels = document.querySelectorAll(".room-panel");

rooms.forEach(room => {

  room.addEventListener("click", () => {

    rooms.forEach(r =>
      r.classList.remove("active")
    );

    panels.forEach(panel =>
      panel.classList.remove("active")
    );

    room.classList.add("active");

    const target =
      room.dataset.room;

    document
      .getElementById(target)
      .classList.add("active");

  });

});

// HISTORY_PROGRAM PAGE
//Interactive Wall
const milestoneCards =
document.querySelectorAll(".milestone-card");

const detailPanels =
document.querySelectorAll(".detail-panel");

milestoneCards.forEach(card => {

    card.addEventListener("click", () => {

        milestoneCards.forEach(c =>
            c.classList.remove("active")
        );

        detailPanels.forEach(panel =>
            panel.classList.remove("active")
        );

        card.classList.add("active");

        const target =
            card.dataset.target;

        document
            .getElementById(target)
            .classList.add("active");

    });

});

const milestoneTrack =
document.querySelector(".milestone-track");

document
.getElementById("milestoneNext")
.addEventListener("click", () => {

    milestoneTrack.scrollBy({
        left: 320,
        behavior: "smooth"
    });

});

document
.getElementById("milestonePrev")
.addEventListener("click", () => {

    milestoneTrack.scrollBy({
        left: -320,
        behavior: "smooth"
    });

});
