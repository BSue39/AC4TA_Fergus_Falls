const loadMoreBtn = document.getElementById("loadMoreBtn");
const hiddenEvents = document.querySelectorAll(".hidden-event");
const browseSection = document.querySelector(".browse-events");

if (loadMoreBtn && browseSection) {

    let expanded = false;

    loadMoreBtn.addEventListener("click", () => {

        expanded = !expanded;

        hiddenEvents.forEach(card => {
            card.classList.toggle("show", expanded);
        });

        loadMoreBtn.textContent = expanded
            ? "Show Less"
            : "Load More Events";

        if (!expanded) {
            browseSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

}