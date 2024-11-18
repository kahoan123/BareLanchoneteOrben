
document.querySelectorAll("nav ul li a").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); 
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

        alert("Você clicou no menu: " + link.textContent.trim());
    });
});


document.querySelectorAll(".cardapio-items .item").forEach((item) => {
    item.addEventListener("click", () => {
        const itemName = item.querySelector("h3")?.textContent || "Item desconhecido";
        alert("Você clicou no item: " + itemName.trim());
    });
});


const footer = document.querySelector("footer");
if (footer) {
    footer.addEventListener("click", () => {
        const footerText = footer.querySelector("p");
        if (footerText) {
            footerText.textContent =
                "Obrigado por visitar o Bar e Lanchonete Orben! Volte sempre!";
        }
    });
}


window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("main section");
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        const sectionId = section.getAttribute("id");
        const link = document.querySelector(`nav ul li a[href="#${sectionId}"]`);

        if (link) {
            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        }
    });
});
