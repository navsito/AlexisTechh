document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // 🔥 CARRUSEL EN CARDS
    // =========================
    document.querySelectorAll(".project-image").forEach(slider => {

        const images = slider.querySelectorAll("img");
        let index = 0;

        const showImage = (i) => {
            images.forEach(img => img.classList.remove("active"));
            images[i].classList.add("active");
        };

        const nextBtn = slider.querySelector(".next");
        const prevBtn = slider.querySelector(".prev");

        if (nextBtn && prevBtn) {
            nextBtn.addEventListener("click", (e) => {
                e.stopPropagation(); // 🔥 evita conflicto con modal
                index = (index + 1) % images.length;
                showImage(index);
            });

            prevBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                index = (index - 1 + images.length) % images.length;
                showImage(index);
            });
        }
    });

    // =========================
    // 🔥 MODAL CON IMÁGENES
    // =========================
    const modal = document.getElementById("modal");
    const title = document.getElementById("modal-title");
    const desc = document.getElementById("modal-desc");
    const tech = document.getElementById("modal-tech");
    const img = document.getElementById("modal-img");

    const prev = document.getElementById("modal-prev");
    const next = document.getElementById("modal-next");

    const closeBtn = document.querySelector(".close");

    let images = [];
    let index = 0;

    document.querySelectorAll(".open-modal").forEach(btn => {
        btn.addEventListener("click", () => {

            title.textContent = btn.dataset.title;
            desc.textContent = btn.dataset.desc;
            tech.textContent = "Tecnologías: " + btn.dataset.tech;

            images = btn.dataset.images.split(",");
            index = 0;

            img.src = images[index];

            modal.style.display = "flex";
        });
    });

if (next && prev && img && images) {

    next.onclick = () => {
        index = (index + 1) % images.length;
        img.src = images[index];
    };

    prev.onclick = () => {
        index = (index - 1 + images.length) % images.length;
        img.src = images[index];
    };
}

if (closeBtn && modal) {
    closeBtn.onclick = () => modal.style.display = "none";

    window.onclick = (e) => {
        if (e.target === modal) modal.style.display = "none";
    };
}
});

document.querySelectorAll("#menu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("menu").classList.remove("active");
  });
});
document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // 🔥 NAVBAR HAMBURGUESA
    // =========================
    const btn = document.getElementById("hamburguesa");
    const menu = document.getElementById("menu");

    if (btn && menu) {
        btn.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }

});