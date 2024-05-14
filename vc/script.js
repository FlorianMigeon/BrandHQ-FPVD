$(document).ready(function(){
    let currentIndex = 0;
    const items = $('.carousel-item');
    const itemAmt = items.length;

    function cycleItems() {
        const item = $('.carousel-item').eq(currentIndex);
        items.hide();
        item.css('display', 'block');
    }

    $('.carousel-control-next').click(function() {
        currentIndex += 1;
        if (currentIndex > itemAmt - 1) {
            currentIndex = 0;
        }
        cycleItems();
    });

    $('.carousel-control-prev').click(function() {
        currentIndex -= 1;
        if (currentIndex < 0) {
            currentIndex = itemAmt - 1;
        }
        cycleItems();
    });

    cycleItems();

    var parallaxElements = document.querySelectorAll('.parallax-item');
    new simpleParallax(parallaxElements, {
        scale: 1.5,
        delay: 0.1,
        transition: 'cubic-bezier(0,0,0,1)'