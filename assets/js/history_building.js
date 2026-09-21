/*==========================================
    INTERACTIVE THEATRE MAP
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const roomButtons = document.querySelectorAll(".room");
    const roomPanels = document.querySelectorAll(".room-panel");

    if (!roomButtons.length || !roomPanels.length) {
        return;
    }

    roomButtons.forEach(button => {

        button.addEventListener("click", () => {

            const roomName = button.dataset.room;

            /* Remove active state from all buttons */
            roomButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            /* Remove active state from all panels */
            roomPanels.forEach(panel => {
                panel.classList.remove("active");
            });

            /* Activate selected button */
            button.classList.add("active");

            /* Activate matching information panel */
            const selectedPanel = document.getElementById(roomName);

            if (selectedPanel) {
                selectedPanel.classList.add("active");
            }

        });

    });

});