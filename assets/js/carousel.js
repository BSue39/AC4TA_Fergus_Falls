// =========================================================
// EVENTS CAROUSEL
// CONTROLLED NATIVE HORIZONTAL SCROLL
// =========================================================

document.addEventListener("DOMContentLoaded", () => {

    const viewport = document.getElementById("eventsViewport");
    const track = document.getElementById("eventsTrack");

    const cards = Array.from(
        document.querySelectorAll("#eventsTrack .event-card")
    );

    const prev = document.getElementById("eventsPrev");
    const next = document.getElementById("eventsNext");
    const indicators = document.getElementById("eventsIndicators");


    // -----------------------------------------------------
    // SAFETY CHECK
    // -----------------------------------------------------

    if (
        !viewport ||
        !track ||
        cards.length === 0 ||
        !prev ||
        !next
    ) {
        console.error("Events carousel elements are missing.");
        return;
    }


    // -----------------------------------------------------
    // STATE
    // -----------------------------------------------------

    let currentIndex = 0;

    let animationFrame = null;

    let isAnimating = false;

    let manualScrollTimer = null;


    // -----------------------------------------------------
    // GET CARD POSITION
    // -----------------------------------------------------

    function getCardPosition(index) {

        const card = cards[index];

        if (!card) {
            return 0;
        }

        return card.offsetLeft;

    }


    // -----------------------------------------------------
    // GET MAXIMUM SCROLL
    // -----------------------------------------------------

    function getMaxScroll() {

        return Math.max(
            0,
            viewport.scrollWidth -
            viewport.clientWidth
        );

    }


    // -----------------------------------------------------
    // SET ACTIVE CARD
    // -----------------------------------------------------

    function setActiveCard(index) {

        currentIndex = index;


        cards.forEach((card, cardIndex) => {

            card.classList.toggle(
                "active-center",
                cardIndex === currentIndex
            );

        });


        updateIndicators();

        updateArrowState();

    }


    function updateArrowState() {

        prev.disabled = currentIndex === 0;

        next.disabled =
            currentIndex === cards.length - 1;

    }


    // -----------------------------------------------------
    // UPDATE INDICATORS
    // -----------------------------------------------------

    function updateIndicators() {

        if (!indicators) {
            return;
        }


        indicators.innerHTML = "";


        cards.forEach((card, index) => {

            const indicator =
                document.createElement("button");


            indicator.type = "button";


            indicator.setAttribute(
                "aria-label",
                `Go to event ${index + 1}`
            );


            indicator.classList.toggle(
                "active",
                index === currentIndex
            );


            indicator.addEventListener(
                "click",
                () => {

                    goToCard(index);

                }
            );


            indicators.appendChild(
                indicator
            );

        });

    }


    // -----------------------------------------------------
    // CANCEL CURRENT ANIMATION
    // -----------------------------------------------------

    function cancelAnimation() {

        if (animationFrame !== null) {

            cancelAnimationFrame(
                animationFrame
            );

            animationFrame = null;

        }


        isAnimating = false;

    }


    // -----------------------------------------------------
    // ANIMATE TO POSITION
    // -----------------------------------------------------

    function animateToPosition(targetPosition) {

        cancelAnimation();


        const startPosition =
            viewport.scrollLeft;


        const maxScroll =
            getMaxScroll();


        /*
         * Never scroll beyond the browser's actual
         * maximum scroll position.
         */

        targetPosition =
            Math.max(
                0,
                Math.min(
                    targetPosition,
                    maxScroll
                )
            );


        /*
         * If we're already there, don't animate.
         */

        if (
            Math.abs(
                targetPosition -
                startPosition
            ) < 1
        ) {

            viewport.scrollLeft =
                targetPosition;

            return;

        }


        isAnimating = true;


        const distance =
            targetPosition -
            startPosition;


        /*
         * Animation duration is based on distance,
         * but stays within a comfortable range.
         */

        const duration =
            Math.min(
                450,
                Math.max(
                    250,
                    Math.abs(distance) * 0.7
                )
            );


        const startTime =
            performance.now();


        function animate(currentTime) {

            const elapsed =
                currentTime -
                startTime;


            const progress =
                Math.min(
                    elapsed / duration,
                    1
                );


            /*
             * Ease-out curve.
             *
             * Starts immediately and slows naturally
             * as it reaches the destination.
             */

            const eased =
                1 -
                Math.pow(
                    1 - progress,
                    3
                );


            viewport.scrollLeft =
                startPosition +
                distance * eased;


            if (progress < 1) {

                animationFrame =
                    requestAnimationFrame(
                        animate
                    );

            } else {

                viewport.scrollLeft =
                    targetPosition;

                animationFrame = null;

                isAnimating = false;

            }

        }


        animationFrame =
            requestAnimationFrame(
                animate
            );

    }


    // -----------------------------------------------------
    // GO TO CARD
    // -----------------------------------------------------

    function goToCard(index) {

        /*
         * Keep the index within the available cards.
         */

        index = Math.max(
            0,
            Math.min(
                index,
                cards.length - 1
            )
        );


        /*
         * Set the active card IMMEDIATELY.
         *
         * This means the arrow never has to wait for
         * the scrolling animation to finish.
         */

        setActiveCard(index);


        const targetPosition =
            getCardPosition(index);


        animateToPosition(
            targetPosition
        );

    }


    // -----------------------------------------------------
    // NEXT
    // -----------------------------------------------------

    next.addEventListener(
        "click",
        () => {

            if (
                currentIndex <
                cards.length - 1
            ) {

                goToCard(
                    currentIndex + 1
                );

            }

        }
    );


    // -----------------------------------------------------
    // PREVIOUS
    // -----------------------------------------------------

    prev.addEventListener(
        "click",
        () => {

            if (
                currentIndex > 0
            ) {

                goToCard(
                    currentIndex - 1
                );

            }

        }
    );


    // -----------------------------------------------------
    // MANUAL MOUSE / TRACKPAD SCROLL
    // -----------------------------------------------------

    viewport.addEventListener(
        "scroll",
        () => {

            /*
             * Ignore scroll events generated by our own
             * arrow animation.
             */

            if (isAnimating) {
                return;
            }


            clearTimeout(
                manualScrollTimer
            );


            /*
             * Wait until the user stops scrolling before
             * deciding which card is active.
             */

            manualScrollTimer =
                setTimeout(() => {

                    updateFromManualScroll();

                }, 100);

        },
        {
            passive: true
        }
    );


    // -----------------------------------------------------
    // DETERMINE ACTIVE CARD AFTER MANUAL SCROLL
    // -----------------------------------------------------

    function updateFromManualScroll() {

        const scrollPosition =
            viewport.scrollLeft;


        let closestIndex = 0;

        let closestDistance =
            Infinity;


        cards.forEach(
            (card, index) => {

                const distance =
                    Math.abs(
                        card.offsetLeft -
                        scrollPosition
                    );


                if (
                    distance <
                    closestDistance
                ) {

                    closestDistance =
                        distance;

                    closestIndex =
                        index;

                }

            }
        );


        setActiveCard(
            closestIndex
        );

    }


    // -----------------------------------------------------
    // KEYBOARD NAVIGATION
    // -----------------------------------------------------

    viewport.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "ArrowRight"
            ) {

                event.preventDefault();


                if (
                    currentIndex <
                    cards.length - 1
                ) {

                    goToCard(
                        currentIndex + 1
                    );

                }

            }


            if (
                event.key === "ArrowLeft"
            ) {

                event.preventDefault();


                if (
                    currentIndex > 0
                ) {

                    goToCard(
                        currentIndex - 1
                    );

                }

            }

        }
    );


    // -----------------------------------------------------
    // RESIZE
    // -----------------------------------------------------

    window.addEventListener(
        "resize",
        () => {

            cancelAnimation();


            requestAnimationFrame(
                () => {

                    const position =
                        Math.min(
                            getCardPosition(
                                currentIndex
                            ),
                            getMaxScroll()
                        );


                    viewport.scrollLeft =
                        position;


                    setActiveCard(
                        currentIndex
                    );

                }
            );

        }
    );


    // -----------------------------------------------------
    // INITIALIZE
    // -----------------------------------------------------

    viewport.scrollLeft = 0;

    setActiveCard(0);

});