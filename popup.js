document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const caption = document.getElementById("caption");
  const closeBtn = modal.querySelector(".close");

  // Clickable image logic
  document.querySelectorAll('.clickable').forEach(img => {
    img.addEventListener('click', () => {
      console.log("Image clicked:", img.src);
      modal.style.display = "block";
      modalImg.src = img.src;
      caption.textContent = img.alt;
    });
  });

  // Close button
  closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
  });

  // Click outside image to close
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
