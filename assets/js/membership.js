/* =========================================================
   MEMBERSHIP FAQ ACCORDION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const faqItems = document.querySelectorAll(
        ".membership-faq .faq-item"
    );

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            const isActive = item.classList.contains("active");

            // Close all FAQ items
            faqItems.forEach(faqItem => {

                faqItem.classList.remove("active");

                const button = faqItem.querySelector(".faq-question");

                button.setAttribute("aria-expanded", "false");

            });

            // Open the clicked item
            if (!isActive) {

                item.classList.add("active");

                question.setAttribute("aria-expanded", "true");

            }

        });

    });

});