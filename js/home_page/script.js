/* FAQ ANIMADA */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const pergunta = item.querySelector(".faq-pergunta");

    pergunta.addEventListener("click", () => {

        const isActive = item.classList.contains("active");

        faqItems.forEach(faq => {
            faq.classList.remove("active");
        });

        if(!isActive){
            item.classList.add("active");
        }
    });
});