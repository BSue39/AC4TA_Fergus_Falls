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

    const target = card.dataset.target;

    document
      .getElementById(target)
      .classList.add("active");

  });

});

const milestoneTrack =
  document.querySelector(".milestone-track");

const next =
  document.getElementById("milestoneNext");

const prev =
  document.getElementById("milestonePrev");

if (milestoneTrack && next && prev) {

  next.addEventListener("click", () => {

    milestoneTrack.scrollBy({
      left: 320,
      behavior: "smooth"
    });

  });

  prev.addEventListener("click", () => {

    milestoneTrack.scrollBy({
      left: -320,
      behavior: "smooth"
    });

  });

}