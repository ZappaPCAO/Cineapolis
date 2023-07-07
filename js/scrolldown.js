let lastScroll = 0;
let menuExpanded;
let beforeScroll;
let lastClick;

$(window).scroll(function () {
    const currentScroll = $(this).scrollTop();
    const navbarHeight = $("#menu").outerHeight();

    if (menuExpanded) return;
    
    if (currentScroll > lastScroll) {
        $("#menu").css("top", -(navbarHeight - 3));
    if ($("#drop-menu-login > .icono-login").attr("aria-expanded") === "true") {
        lastClick = true;
        $("#drop-menu-login").trigger("click");
    }
    } else {
        $("#menu").css("top", "0");
    }
    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});

$("#menu").on("click", function () {
    if (lastClick) {
        lastClick = false;
        return;
    } else {
        beforeScroll = $(window).scrollTop();
        menuExpanded = true;
    }
});

$(window).on("scroll", function () {
    beforeScroll =
    beforeScroll >= $(window).scrollTop()  ? beforeScroll - $("#menu").outerHeight() : beforeScroll;

    if (beforeScroll + $("#menu").outerHeight() + 10 < $(window).scrollTop())
        menuExpanded = false;
});
