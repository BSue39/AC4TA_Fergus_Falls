/* =========================================================
   ANNOUNCEMENT FILTERS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const announcementCards =
        document.querySelectorAll(".announcement-card");

    const noAnnouncements =
        document.querySelector(".no-announcements");


    /* =====================================================
       EXIT IF ANNOUNCEMENT FILTERS ARE NOT ON THIS PAGE
       ===================================================== */

    if (!filterButtons.length || !announcementCards.length) {
        return;
    }


    /* =====================================================
       FILTER ANNOUNCEMENTS
       ===================================================== */

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const selectedFilter = button.dataset.filter;

            let visibleCards = 0;


            /* =============================================
               UPDATE ACTIVE BUTTON + ACCESSIBILITY STATE
               ============================================= */

            filterButtons.forEach(filterButton => {

                filterButton.classList.remove("active");

                filterButton.setAttribute(
                    "aria-pressed",
                    "false"
                );

            });

            button.classList.add("active");

            button.setAttribute(
                "aria-pressed",
                "true"
            );


            /* =============================================
               SHOW / HIDE ANNOUNCEMENTS
               ============================================= */

            announcementCards.forEach(card => {

                const category = card.dataset.category;

                const matchesFilter =
                    selectedFilter === "all" ||
                    category === selectedFilter;


                card.classList.toggle(
                    "is-hidden",
                    !matchesFilter
                );


                /* COUNT VISIBLE CARDS */

                if (matchesFilter) {
                    visibleCards++;
                }

            });


            /* =============================================
               SHOW / HIDE NO RESULTS MESSAGE
               ============================================= */

            if (noAnnouncements) {

                noAnnouncements.hidden =
                    visibleCards !== 0;

            }

        });

    });

});