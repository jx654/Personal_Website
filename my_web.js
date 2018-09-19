$(document).ready(function() {
    var contents = $(".content");
    var menus = $(".menu-list");

    function reset(menuItem) {
        menus.removeClass("active-menu");
        contents.hide();
        $('#' + menuItem.attr('id').slice(0,-4)).show();
        menuItem.addClass("active-menu");
    };

    reset($('#homeMenu'));
    $('.menu-list').on('click', function() {
        reset($(this));
    });

    var slideIndex = 0;
    var slides = $(".mySlides");
    var dots = $(".demo");
    var captionText = $("#caption").eq(0);

    function showSlides() {
        if (slideIndex > slides.length - 1) {
            slideIndex = 0;
        }
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        slides.hide();
        dots.removeClass("active-image");
        slides.eq(slideIndex).show();
        dots.eq(slideIndex).addClass("active-image");
        captionText.html(dots.eq(slideIndex).attr('alt'));
    };

    showSlides();
    $(".prev").on('click', function() {
        showSlides(--slideIndex);
    });

    $(".next").on('click', function() {
        showSlides(++slideIndex);
    });

    $(".demo").on('click', function(){
        slideIndex = parseInt($(this).attr('id').slice(-1));
        showSlides();
    });

    function descriptionShow(skillName) { 
        $('#' + skillName.attr('id') + 'Detail').slideToggle();
    };

    $(".skill").on('click', function() {
        descriptionShow($(this));
    });

    function codeShow(codeIndex) { 
        $('#' + 'code' + codeIndex.attr('id').slice(-1)).slideToggle();
    };

    $(".code-title").on('click', function() {
        codeShow($(this));
    });
});


