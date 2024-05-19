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





window.addEventListener('scroll', function () {
    var div = document.getElementById('spostaDiv');
    var scrollTop = window.scrollY;
    if (scrollTop > 0) {
        div.classList.add('spostato');
    } else {
        div.classList.remove('spostato');
    }
});

window.addEventListener('scroll', function () {
    var div2 = document.getElementById('spostaDivdue');
    var scrollTop2 = window.scrollY;
    if (scrollTop2 > 0) {
        div2.classList.add('spostato');
    } else {
        div2.classList.remove('spostato');
    }
});