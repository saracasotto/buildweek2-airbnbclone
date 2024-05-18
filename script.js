// FUNZIONE PER LO SNAPSCROLL DEL FOOTER
var scrollContainer = document.getElementById('scroll-container');
var prevButton = document.getElementById('prev');
var nextButton = document.getElementById('next');

prevButton.addEventListener('click', function () {
    scrollContainer.scrollLeft -= 200; // Imposta la quantità di spostamento
});

nextButton.addEventListener('click', function () {
    scrollContainer.scrollLeft += 200; // Imposta la quantità di spostamento
});


/* DROPDOWN FUNCTIONS */

/* document.addEventListener('click', e => {
    const idDropdownButton = e.target.matches("[data-drop-button]")
    if (!idDropdownButton && e.target.closest("[data-drop]") != null ) return

    let currentDropdown 
    if (idDropdownButton) {
        currentDropdown = e.target.closest("[data-drop]")
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-drop].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
}) */