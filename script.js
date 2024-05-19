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
