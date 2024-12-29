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