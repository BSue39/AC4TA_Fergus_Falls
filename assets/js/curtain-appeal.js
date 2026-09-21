console.log("Curtain Appeal JS Loaded!");

document.addEventListener("DOMContentLoaded", () => {


    /* =========================================================
       CURTAIN APPEAL PAGE CHECK
       ========================================================= */

    const curtainAppealPage =
    document.querySelector(
        ".curtain-comparison"
    );


    /* Stop if this is not the Curtain Appeal page */

    if (!curtainAppealPage) {

        return;

    }


    /* =========================================================
       CURTAIN CAMPAIGN PROGRESS
       ========================================================= */

    const goalCard =
        document.querySelector(
            ".curtain-goal-card"
        );


    if (goalCard) {

        const raised =
            Number(
                goalCard.dataset.raised
            );

        const goal =
            Number(
                goalCard.dataset.goal
            );


        const percent = Math.min(
            Math.round((raised / goal) * 100),
            100
        );


        const goalPercent =
            document.getElementById(
                "goal-percent"
            );

        const progressFill =
            document.getElementById(
                "progress-fill"
            );

        const amountRaised =
            document.getElementById(
                "amount-raised"
            );

        const goalRaisedText =
            document.getElementById(
                "goal-raised-text"
            );

        const goalTotalText =
            document.getElementById(
                "goal-total-text"
            );

        const recognitionPercent =
            document.getElementById(
                "recognition-percent"
            );

        const progressBar =
            document.querySelector(
                ".progress-bar"
            );


        /* Update campaign progress */

        if (goalPercent) {

            goalPercent.textContent =
                percent;

        }


        if (progressFill) {

            progressFill.style.width =
                percent + "%";

        }


        if (amountRaised) {

            amountRaised.textContent =
                raised.toLocaleString();

        }


        if (goalRaisedText) {

            goalRaisedText.textContent =
                raised.toLocaleString();

        }


        if (goalTotalText) {

            goalTotalText.textContent =
                goal.toLocaleString();

        }


        if (progressBar) {

            progressBar.setAttribute(
                "aria-valuenow",
                percent
            );

        }


        /* Update donor recognition percentage */

        if (recognitionPercent) {

            recognitionPercent.textContent =
                percent + "%";

        }

    }


    /* =========================================================
       IMAGE LIGHTBOX
       ========================================================= */

    const imageTriggers =
        document.querySelectorAll(
            ".comparison-image-trigger"
        );

    const lightbox =
        document.querySelector(
            ".image-lightbox"
        );

    const lightboxImage =
        document.getElementById(
            "lightbox-image"
        );

    const lightboxCaption =
        document.getElementById(
            "lightbox-caption"
        );

    const lightboxClose =
        document.querySelector(
            ".lightbox-close"
        );


    /* Exit lightbox setup if elements are missing */

    if (
        !imageTriggers.length ||
        !lightbox ||
        !lightboxImage ||
        !lightboxCaption ||
        !lightboxClose
    ) {

        return;

    }


    /* =========================================================
       OPEN LIGHTBOX
       ========================================================= */

    imageTriggers.forEach(trigger => {

        trigger.addEventListener(
            "click",
            () => {

                const fullImage =
                    trigger.dataset.fullImage;

                const altText =
                    trigger.dataset.alt;


                /* Load selected image */

                lightboxImage.src =
                    fullImage;

                lightboxImage.alt =
                    altText;

                lightboxCaption.textContent =
                    altText;


                /* Show lightbox */

                lightbox.hidden =
                    false;

                lightbox.classList.add(
                    "is-open"
                );

                lightbox.setAttribute(
                    "aria-hidden",
                    "false"
                );


                /* Prevent page scrolling */

                document.body.style.overflow =
                    "hidden";


                /* Move keyboard focus to close button */

                lightboxClose.focus();

            }
        );

    });


    /* =========================================================
       CLOSE LIGHTBOX FUNCTION
       ========================================================= */

    function closeLightbox() {

        lightbox.classList.remove(
            "is-open"
        );

        lightbox.setAttribute(
            "aria-hidden",
            "true"
        );

        lightbox.hidden =
            true;

        document.body.style.overflow =
            "";

    }


    /* =========================================================
       CLOSE WITH X BUTTON
       ========================================================= */

    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );


    /* =========================================================
       CLOSE WHEN CLICKING OUTSIDE IMAGE
       ========================================================= */

    lightbox.addEventListener(
        "click",
        (event) => {

            if (
                event.target === lightbox
            ) {

                closeLightbox();

            }

        }
    );


    /* =========================================================
       CLOSE WITH ESCAPE KEY
       ========================================================= */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                !lightbox.hidden
            ) {

                closeLightbox();

            }

        }
    );

});