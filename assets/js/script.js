/*==================================================
    GLOBAL NAVIGATION
    Dropdown / Submenu Controls
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

  const items = document.querySelectorAll(".nav-item");

  items.forEach(item => {

    const btn =
      item.querySelector(".dropbtn") ||
      item.querySelector(".submenu-btn");

    if (!btn) return;

    btn.addEventListener("click", (e) => {
      e.stopPropagation();

      // Close all other open navigation menus
      items.forEach(i => {
        if (i !== item) i.classList.remove("open");
      });

      // Toggle the current navigation menu
      item.classList.toggle("open");
    });

  });


  /*----------------------------------------------
      CLOSE NAVIGATION WHEN CLICKING OUTSIDE
  ----------------------------------------------*/

  document.addEventListener("click", () => {
    items.forEach(i => i.classList.remove("open"));
  });


  /*----------------------------------------------
      CLOSE NAVIGATION WITH ESCAPE KEY
  ----------------------------------------------*/

  document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {
      items.forEach(i => i.classList.remove("open"));
    }

  });

});


/*==================================================
    GLOBAL NAVIGATION
    Navbar Shrink on Scroll
==================================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }

});


/*==================================================
    HISTORY — BUILDING PAGE
    Interactive Floor Plan
==================================================*/

const rooms = document.querySelectorAll(".room");
const panels = document.querySelectorAll(".room-panel");


/*----------------------------------------------
    ROOM CLICK
    Activates the selected room and displays
    its corresponding information panel
----------------------------------------------*/

rooms.forEach(room => {

  room.addEventListener("click", () => {

    // Remove active state from all rooms
    rooms.forEach(r =>
      r.classList.remove("active")
    );

    // Hide all room information panels
    panels.forEach(panel =>
      panel.classList.remove("active")
    );

    // Activate the selected room
    room.classList.add("active");

    // Get the ID of the matching information panel
    const target = room.dataset.room;

    // Display the matching information panel
    document
      .getElementById(target)
      .classList.add("active");

  });

});


/*==================================================
    HISTORY — ORGAN PAGE
    Interactive Organ Explorer
==================================================*/

const organButtons =
  document.querySelectorAll(".organ-part");

const organPanels =
  document.querySelectorAll(".organ-panel");


/*----------------------------------------------
    ORGAN PART CLICK
    Activates the selected organ component and
    displays its corresponding information panel
----------------------------------------------*/

organButtons.forEach(button => {

  button.addEventListener("click", () => {

    // Remove active state from all organ buttons
    organButtons.forEach(btn =>
      btn.classList.remove("active")
    );

    // Hide all organ information panels
    organPanels.forEach(panel =>
      panel.classList.remove("active")
    );

    // Activate the selected organ component
    button.classList.add("active");

    // Display the matching information panel
    document
      .getElementById(button.dataset.target)
      .classList.add("active");

  });

});


/*==================================================
    HISTORY — PROGRAM PAGE
    Generations of Creativity
    Interactive Milestone Timeline
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

  const milestoneCards =
    document.querySelectorAll(".milestone-card");

  const detailPanels =
    document.querySelectorAll(".detail-panel");

  const previousButton =
    document.getElementById("milestonePrev");

  const nextButton =
    document.getElementById("milestoneNext");

  let currentIndex = 0;


  /*----------------------------------------------
      SHOW MILESTONE
      Displays the selected milestone and its
      corresponding detail panel
  ----------------------------------------------*/

  function showMilestone(index) {

    // Stop if there are no milestone cards
    if (!milestoneCards.length) return;


    // Loop to the last milestone when moving
    // backward from the first
    if (index < 0) {
      index = milestoneCards.length - 1;
    }


    // Loop to the first milestone when moving
    // forward from the last
    if (index >= milestoneCards.length) {
      index = 0;
    }


    // Store the current milestone
    currentIndex = index;


    // Remove active state from all milestone cards
    milestoneCards.forEach(card => {
      card.classList.remove("active");
    });


    // Activate the selected milestone card
    const activeCard =
      milestoneCards[currentIndex];

    activeCard.classList.add("active");


    // Get the ID of the matching detail panel
    const targetId =
      activeCard.dataset.target;


    // Hide all detail panels
    detailPanels.forEach(panel => {
      panel.classList.remove("active");
    });


    // Find and display the matching detail panel
    const targetPanel =
      document.getElementById(targetId);

    if (targetPanel) {
      targetPanel.classList.add("active");
    }

  }


  /*----------------------------------------------
      MILESTONE CARD CLICK
      Allows users to select a milestone directly
  ----------------------------------------------*/

  milestoneCards.forEach((card, index) => {

    card.addEventListener("click", () => {

      showMilestone(index);

    });

  });


  /*----------------------------------------------
      PREVIOUS BUTTON
      Displays the previous milestone
  ----------------------------------------------*/

  if (previousButton) {

    previousButton.addEventListener("click", () => {

      showMilestone(currentIndex - 1);

    });

  }


  /*----------------------------------------------
      NEXT BUTTON
      Displays the next milestone
  ----------------------------------------------*/

  if (nextButton) {

    nextButton.addEventListener("click", () => {

      showMilestone(currentIndex + 1);

    });

  }


  /*----------------------------------------------
      INITIALIZE TIMELINE
      Displays the first milestone when the page
      loads
  ----------------------------------------------*/

  showMilestone(0);

});
