// Smooth Scroll for Navbar Links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Fade-in Animation on Scroll
const sections = document.querySelectorAll("section");

const options = {
    threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        appearOnScroll.unobserve(entry.target);
    });
}, options);

sections.forEach(section => {
    section.classList.add("hidden");
    appearOnScroll.observe(section);
});
