(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
            $('.logo-alter-webservice').addClass('change-color');
            $('.logo-alter-js').addClass('change-color');
            $('.logo-alter-corchetes').addClass('change-color');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
            $('.logo-alter-webservice').removeClass('change-color');
            $('.logo-alter-js').removeClass('change-color');
            $('.logo-alter-corchetes').removeClass('change-color');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
// Sticky Navbar
$(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
        $('.navbar').addClass('sticky-top shadow-sm');
        $('.logo-alter-webservice').addClass('change-color');
        $('.logo-alter-js').addClass('change-color');
        $('.logo-alter-corchetes').addClass('change-color');
    } else {
        $('.navbar').removeClass('sticky-top shadow-sm');
        $('.logo-alter-webservice').removeClass('change-color');
        $('.logo-alter-js').removeClass('change-color');
        $('.logo-alter-corchetes').removeClass('change-color');
    }
});


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

document.addEventListener("scroll", function() {
    let scrollPos = window.scrollY || document.documentElement.scrollTop;
    const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const heroHeader = document.querySelector('.hero-header');
    let activeFound = false;

    // Primero, verifica si el usuario está en la parte superior, activando "Home"
    if (heroHeader && scrollPos < heroHeader.offsetHeight) {
        navbarLinks.forEach(link => {
            if (link.getAttribute("href") === "index.html" || link.getAttribute("href") === "" || link.getAttribute("href") === "#") {
                link.classList.add("active");
                activeFound = true;
            } else {
                link.classList.remove("active");
            }
        });
    } else {
        navbarLinks.forEach(link => {
            const href = link.getAttribute("href");

            if (href && href.startsWith("#") && href.length > 1) {
                const section = document.querySelector(href);

                if (section) {
                    if (
                        section.offsetTop <= scrollPos + 50 &&
                        section.offsetTop + section.offsetHeight > scrollPos + 50
                    ) {
                        navbarLinks.forEach(link => link.classList.remove("active"));
                        link.classList.add("active");
                        activeFound = true;
                    } else {
                        link.classList.remove("active");
                    }
                }
            }
        });
    }

    // Si no se encontró ninguna sección activa y no está en la parte superior
    if (!activeFound) {
        navbarLinks.forEach(link => {
            if (link.getAttribute("href") === "index.html" || link.getAttribute("href") === "") {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }
});
