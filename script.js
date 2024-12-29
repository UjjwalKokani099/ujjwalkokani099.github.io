document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('.accordion-icon');

        // Toggle the display of the content
        if (content.style.display === "block") {
            content.style.display = "none";
            icon.style.transform = "rotate(0deg)";
        } else {
            content.style.display = "block";
            icon.style.transform = "rotate(180deg)";
        }
    });
});
// Select buttons and container
const scrollLeftButton = document.getElementById('scroll-left');
const scrollRightButton = document.getElementById('scroll-right');
const cardContainer = document.querySelector('.card-container');

// Scroll Amount
const scrollAmount = 300; // Pixels per scroll

// Scroll Left
scrollLeftButton.addEventListener('click', () => {
    cardContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

// Scroll Right
scrollRightButton.addEventListener('click', () => {
    cardContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});
