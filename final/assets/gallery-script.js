const galleryImages = document.querySelectorAll(".portmid img");
const overlay = document.querySelector(".overlay");

galleryImages.forEach((img) => {
    function toggleZoom(e) {
        const currId = e.target.id;
        if (currId) {
            img.id = "";
        } else {
            img.id = "huge-beeg-image";
        }
        overlay.classList.toggle("hidden");
    }
    img.onclick = toggleZoom;
});
