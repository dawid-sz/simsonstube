// function to show the menu section on click and also change the background to black

function hamburgerMenu() {
    const menu = document.getElementById('myLinks');
    const leiste = document.getElementById('homeBtn');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        leiste.style.background = 'none';
    } else {
        menu.style.display = 'block';
        menu.style.background = 'rgba(0, 0, 0, 0.9)';
        leiste.style.background = 'rgba(0, 0, 0, 0.9)';
    }
}




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto', // Change to a lower value if needed, e.g., 1
    spaceBetween: 20,
    loop: true, // Enable loop mode
    autoHeight: true,
    centeredSlides: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });