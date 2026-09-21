/*==========================================
    INTERACTIVE ORGAN EXPLORER
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const stopButtons = document.querySelectorAll(".stop-buttons button");
    const stopPanels = document.querySelectorAll(".stop-panel");

    /* AUDIO FILES */

    const organSounds = {

        tibia: new Audio("../assets/audio/tibia.mp3"),

        trumpet: new Audio("../assets/audio/trumpet.mp3"),

        flute: new Audio("../assets/audio/flute.mp3"),

        clarinet: new Audio("../assets/audio/clarinet.mp3")

    };


    /*==========================================
        RESET BUTTON INDICATORS
    ==========================================*/

    function resetIndicators() {

        stopButtons.forEach(button => {

            const icon = button.querySelector(".stop-icon");

            if (icon) {

                icon.textContent = "▶";

            }

        });

    }


    /*==========================================
        BUTTON INTERACTION
    ==========================================*/

    stopButtons.forEach(button => {

        button.addEventListener("click", () => {

            const stop = button.dataset.stop;

            const selectedSound = organSounds[stop];

            const icon = button.querySelector(".stop-icon");


            /*==========================================
                IF THIS SOUND IS ALREADY PLAYING
                PAUSE IT
            ==========================================*/

            if (
                selectedSound &&
                !selectedSound.paused
            ) {

                selectedSound.pause();

                if (icon) {

                    icon.textContent = "▶";

                }

                return;

            }


            /*==========================================
                STOP ALL OTHER SOUNDS
            ==========================================*/

            Object.values(organSounds).forEach(sound => {

                sound.pause();

                sound.currentTime = 0;

            });


            /* RESET ALL INDICATORS */

            resetIndicators();


            /*==========================================
                UPDATE ACTIVE BUTTON
            ==========================================*/

            stopButtons.forEach(btn => {

                btn.classList.remove("active");

            });

            button.classList.add("active");


            /*==========================================
                UPDATE INFORMATION PANEL
            ==========================================*/

            stopPanels.forEach(panel => {

                panel.classList.remove("active");

            });

            const selectedPanel = document.getElementById(stop);

            if (selectedPanel) {

                selectedPanel.classList.add("active");

            }


            /*==========================================
                PLAY SELECTED SOUND
            ==========================================*/

            if (selectedSound) {

                selectedSound.play()
                    .then(() => {

                        if (icon) {

                            icon.textContent = "❚❚";

                        }

                    })
                    .catch(error => {

                        console.log(
                            "Audio playback could not start:",
                            error
                        );

                    });

            }

        });


        /*==========================================
            RESET ICON WHEN AUDIO FINISHES
        ==========================================*/

        const stop = button.dataset.stop;

        const sound = organSounds[stop];

        if (sound) {

            sound.addEventListener("ended", () => {

                const icon = button.querySelector(".stop-icon");

                if (icon) {

                    icon.textContent = "▶";

                }

            });

        }

    });

});