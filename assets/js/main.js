"use strict";

// Preloader area
const preloaderFunction = () => {
    document.getElementById("preloader").style.display = "none";
};

// toggleSideMenu start
const toggleSideMenu = () => {
    document.body.classList.toggle("toggle-sidebar");
};
// toggleSideMenu end

// add bg to nav
const header = document.querySelector('nav');
window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY >= 100);
});

$(document).ready(function () {
    // Testimonial section start
    // Owl carousel 
    $('.testimonial-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 20,
        autoplayTimeout: 2000,
        navText: ["<i class='fa-regular fa-angle-left'></i>", "<i class='fa-regular fa-angle-right'></i>"],
        // rtl: true,
        responsive: {
            0: {
                items: 1,
                dotsEach: 3

            },
            600: {
                items: 1,
                nav: false,
                dots: true,
                dotsEach: 2

            },
            768: {
                items: 1,
                nav: true,
                dots: false,

            },
            1000: {
                items: 1,
                nav: true,
                dots: false,
            }
        }
    });

    // cmn select2 start
    $('.cmn-select2').select2();
    // cmn select2 end
    // cmn-select2-modal
    $(".modal-select").select2({
        dropdownParent: $("#formModal"),
    });
    // cmn-select2 with image start
    $('.cmn-select2-image').select2({
        templateResult: formatState,
        templateSelection: formatState
    });
    // select2 function
    function formatState(state) {
        if (!state.id) {
            return state.text;
        }
        var baseUrl = "assets/img/mini-flag";
        var $state = $(
            '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.svg" class="img-flag" /> ' + state.text + '</span>'
        );
        return $state;
    };
    function formatState(state) {
        if (!state.id) {
            return state.text;
        }

        var baseUrl = "assets/img/mini-flag";
        var $state = $(
            '<span><img class="img-flag" /> <span></span></span>'
        );

        // Use .text() instead of HTML string concatenation to avoid script injection issues
        $state.find("span").text(state.text);
        $state.find("img").attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".svg");

        return $state;
    };
    // cmn-select2 with image end

    // Cmn select2 tags start
    $(".cmn-select2-tags").select2({
        tags: true
    });
    // Cmn select2 tags end


    // cmn select2 modal start
    $(".modal-select").select2({
        dropdownParent: $("#formModal"),
    });
    // cmn select2 modal start

    // magnificPopup start
    if ($('.magnific-popup').length) {
        $('.magnific-popup').magnificPopup({
            type: 'image',
            delegate: 'a',
            gallery: {
                enabled: true
            }
        });
    }
    // magnificPopup end

    if ($('.statistics-counter').length) {
        $('.statistics-counter').counterUp({
            delay: 10,
            time: 2000
        });
    }
    
    AOS.init();

    // Round button animation
    $(function () {
        $('.btn-1, .round-btn')
            .on('mouseenter', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({ top: relY, left: relX })
            })
            .on('mouseout', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({ top: relY, left: relX })
            });
    });
    // button animation
});


// input file preview
const previewImage = (id) => {
    document.getElementById(id).src = URL.createObjectURL(event.target.files[0]);
};

// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// Copy text start
function copyTextFunc() {
    const element = document.querySelector('.docs-code');
    const storage = document.createElement('textarea');
    storage.value = element.innerHTML;
    element.appendChild(storage);
    storage.select();
    storage.setSelectionRange(0, 99999);
    document.execCommand('copy');
    element.removeChild(storage);
}
// Copy text end

// Social share start
if ($("#shareBlock").length) {
    $("#shareBlock").socialSharingPlugin({
        urlShare: window.location.href,
        description: $("meta[name=description]").attr("content"),
        title: $("title").text(),
    });
}
// Social share end




// Nice select start
if ($(".nice-select").length) {
    $('.nice-select').niceSelect();
}
// Nice select end

// Range area start
if ($(".js-range-slider").length) {
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 100,
        from: 800,
        to: 500,
        grid: true
    });
}
// Range area end

// International Telephone Input start
if ($("#telephone").length) {
    const input = document.querySelector("#telephone");
    window.intlTelInput(input, {
        initialCountry: "bd",
        separateDialCode: true,
    });
}
// International Telephone Input end

// curved-circle start

$(window).on('load', function () {
    if ($('.curved-circle').length) {
        $('.curved-circle').circleType({
            position: 'absolute',
            dir: 1,
            radius: 42,
            forceHeight: true,
            forceWidth: true
        });
    }
});
// curved-circle end

// Increase decrease button start
document.addEventListener('DOMContentLoaded', (event) => {
    const cartItemCounts = document.querySelectorAll('.cart-item-count');
    cartItemCounts.forEach(cartItemCount => {
        const decreaseButton = cartItemCount.querySelector('[data-decrease]');
        const increaseButton = cartItemCount.querySelector('[data-increase]');
        const valueInput = cartItemCount.querySelector('[data-value]');

        decreaseButton.addEventListener('click', () => {
            let currentValue = parseInt(valueInput.value);
            if (currentValue > 1) {
                valueInput.value = currentValue - 1;
            }
        });

        increaseButton.addEventListener('click', () => {
            let currentValue = parseInt(valueInput.value);
            valueInput.value = currentValue + 1;
        });
    });
});

// Increase decrement button end
// Jquery UI start
if ($('#datepicker').length) {
    $("#datepicker").datepicker();
}
// Jquery UI end

// Copy page url start
if ($('#copyBtn').length) {
    document.getElementById('copyBtn').addEventListener('click', () => {
        let pageUrl = window.location.href;

        navigator.clipboard.writeText(pageUrl).then(() => {
            if (pageUrl) {
                document.getElementById('copyBtn').innerHTML = 'Copied Profile <i class="fa-regular fa-circle-check"></i>';
                setTimeout(() => {
                    document.getElementById('copyBtn').innerHTML = 'Copy Profile <i class="fa-regular fa-copy"></i>';
                }, 1000);
            }
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });
}

// Copy page url end

// input field show hide password start
if (document.querySelector('.login-signup-form')) {
    const passwordBoxes = document.querySelectorAll('.password-box');
    passwordBoxes.forEach((passwordBox) => {
        const passwordInput = passwordBox.querySelector('.password');
        const passwordIcon = passwordBox.querySelector('.password-icon');

        passwordIcon.addEventListener("click", function () {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                passwordIcon.classList.add('fa-eye-slash');
                passwordIcon.classList.remove('fa-eye');
            } else {
                passwordInput.type = 'password';
                passwordIcon.classList.add('fa-eye');
                passwordIcon.classList.remove('fa-eye-slash');
            }
        });
    });
}

// input field show hide password end