$(function () {
    // slider part start
    $('.slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        draggable: false,
    });
    // Slider part end
    // Sticky header start
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 50) {
            $('#header_part').addClass('change_bg');
            $('.nav_menuset_one ul li').addClass('special_padding_one');
            $('.nav_menuset_two ul li').addClass('special_padding_two');
        }
        else {
            $('#header_part').removeClass('change_bg');
            $('.nav_menuset_one ul li').removeClass('special_padding_one');
            $('.nav_menuset_two ul li').removeClass('special_padding_two');
        }
    });
    // Sticky header end
    // Slide in part start
    ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2500,
        delay: 400,
    });
    ScrollReveal().reveal('.manifest-top', { delay: 500, origin: 'top' });
    ScrollReveal().reveal('.manifest-right', { delay: 350, origin: 'right' });
    ScrollReveal().reveal('.manifest-rights', { delay: 700, origin: 'right', interval: 200 });
    ScrollReveal().reveal('.manifest-left', { delay: 350, origin: 'left' });
    ScrollReveal().reveal('.manifest-bottom', { delay: 200, origin: 'bottom' });
    // Slide in part end
    var menuUL = document.getElementsByTagName("ul");
    var heightOful = menuUL[0].scrollHeight;
    var btnToggle = document.getElementsByClassName("btn-toggle");
    btnToggle[0].addEventListener("click", function () {
        if (menuUL[0].style.maxHeight) {
            menuUL[0].style.maxHeight = null;
        }
        else {
            menuUL[0].style.maxHeight = menuUL[0].scrollHeight + "px";
        }
    });
    $(".drop_down").mouseenter(function () {
        $(".box").show(1000);
        $(".drop").addClass("fa-angle-up");
        $(".drop").removeClass("fa-angle-down");
    });
    $(".box").mouseleave(function () {
        $(".box").hide(1000);
        $(".drop").removeClass("fa-angle-up");
        $(".drop").addClass("fa-angle-down");
    });
    $(".btn-toggle").click(function () {
        $(".logo_image").toggleClass('logo_opacity', 10000);
    });

    $("#info_btn").click(function () {
        $(".info_slide").slideDown(1000);
    });
    $(".cross").click(function () {
        $(".info_slide").slideUp(1000);
    });
});
