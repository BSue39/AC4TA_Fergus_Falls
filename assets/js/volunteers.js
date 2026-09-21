const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {

        const expanded = question.getAttribute("aria-expanded") === "true";

        question.setAttribute(
            "aria-expanded",
            !expanded
        );

    });
});