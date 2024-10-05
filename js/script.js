$(document).ready(function() {
    $('.main-header .moreIcons ul .userInfo').click(function () {
        $('.the-after').fadeIn(500);
        $('.accounts-info').fadeIn(500);
    });
    $('.the-after').click(function () {
        $('.the-after').fadeOut(500);
        $('.accounts-info').fadeOut(500);
        $('.fixedBar').fadeOut(500);
    });
    $('.login').click(function () {
        $('.the-after').fadeOut(500);
        $('.accounts-info').fadeOut(500);
        $('.fixedBar').fadeOut(500);
    });
    $('.main-header .logo .bars .listNav').click(function () {
        $('.the-after').fadeIn(500);
        $('.fixedBar').fadeIn(500);
    });
    $('.main-header .logo .bars .down').click(function () {
        $('.moreIcons ul').slideToggle(500);
    });
    $('.hidden-xx').click(function () {
        $('.the-after').fadeIn(500);
    });
    $('.sidenav .closebtn').click(function () {
        $('.the-after').fadeOut(500);
    });
});




var headNav = $("header");
$(window).on('load scroll', function () {
    if ($(this).scrollTop() > 200 && headNav.hasClass('is-fixed') == false) {
        headNav.css("display", "block");
        headNav.css({ "top": '-72px' });
        headNav.addClass('is-fixed');
        headNav.animate({ "top": 0 }, 600);
    }
    else if ($(this).scrollTop() < 200 && headNav.hasClass('is-fixed') == true) {
        headNav.removeClass('is-fixed');
        headNav.animate({ "top": "-72px" }, 600);
        headNav.css("display", "none");
    }
});




const inputs = document.querySelectorAll(".otp-field input");
inputs.forEach((input, index) => {
    input.dataset.index = index;
    input.addEventListener("keyup", handleOtp);
    input.addEventListener("paste", handleOnPasteOtp);
});
function handleOtp(e) {
    /**
     * <input type="text" 👉 maxlength="1" />
     * 👉 NOTE: On mobile devices `maxlength` property isn't supported,
     * So we to write our own logic to make it work. 🙂
     */
    const input = e.target;
    let value = input.value;
    let isValidInput = value.match(/[0-9a-z]/gi);
    input.value = "";
    input.value = isValidInput ? value[0] : "";
    let fieldIndex = input.dataset.index;
    if (fieldIndex < inputs.length - 1 && isValidInput) {
        input.nextElementSibling.focus();
    }
    if (e.key === "Backspace" && fieldIndex > 0) {
        input.previousElementSibling.focus();
    }
    if (fieldIndex == inputs.length - 1 && isValidInput) {
        submit();
    }
}
function handleOnPasteOtp(e) {
    const data = e.clipboardData.getData("text");
    const value = data.split("");
    if (value.length === inputs.length) {
        inputs.forEach((input, index) => (input.value = value[index]));
        submit();
    }
}
function submit() {
    console.log("Submitting...");
    // 👇 Entered OTP
    let otp = "";
    inputs.forEach((input) => {
        otp += input.value;
        input.disabled = true;
        input.classList.add("disabled");
    });
    console.log(otp);
    // 👉 Call API below
}



$('.worksSlider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    rtl: false,
    autoplay: true,
    pagination: false,
    autoplayTimeout: 7000,
    smartSpeed: 2200,
    dragEndSpeed: 1000,
    animate: true,
    animateOut: 'fadeOut',
    animateIn: 'slideInDown',
    navText: [
        "<i class=\"fa-solid fa-angle-double-right\"></i> ",
        "<i class=\"fa-solid fa-angle-double-left\"></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 0
        },
        1000: {
            items: 1
        }
    }
});

$('.articles-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    rtl: false,
    autoplay: true,
    pagination: false,
    autoplayTimeout: 7000,
    smartSpeed: 2200,
    dragEndSpeed: 1000,
    animate: true,
    animateOut: 'fadeOut',
    animateIn: 'slideInDown',
    navText: [
        "<i class=\"fa-solid fa-angles-left\"></i>",
        "<i class=\"fa-solid fa-angles-right\"></i></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

$('.testimonials-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    rtl: true,
    autoplay: true,
    pagination: false,
    autoplayTimeout: 7000,
    smartSpeed: 2200,
    dragEndSpeed: 1000,
    navText: [
        "<i class=\"fa-solid fa-angles-right\"></i>",
        "<i class=\"fa-solid fa-angles-left\"></i></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});

function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0%";
}


$('.works-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    rtl: true,
    autoplay: true,
    pagination: false,
    autoplayTimeout: 700000,
    smartSpeed: 2200,
    dragEndSpeed: 1000,
    navText: [
        "<i class=\"fa-solid fa-angles-right\"></i>",
        "<i class=\"fa-solid fa-angles-left\"></i></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
