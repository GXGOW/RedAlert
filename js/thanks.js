
window.onload = function () {
    $("#anim").toggle().delay(1000).animate({top: "-100%"}, 1000);
    var panelTO = (window.innerWidth > 992) ? 3000 : 2000;
    if (window.innerWidth < 992) setTimeout(function() {$("#wrap").css("background-color","white")}, panelTO+1000);

    $("#panel").delay(panelTO).fadeTo(1000, 1);
    $(window).resize(function () {
        mainView.scrwth = window.innerWidth;
        if (mainView.scrwth > 992) {
            this.slideout.disableTouch();
            $("header").css("opacity", 0);
        }
        else {
            $("header").css("opacity", 1);
            this.slideout.enableTouch();
        }
    });
    $("#title").text(document.title.substring(document.title.lastIndexOf(" ")));
    $(".toggle-button").css("opacity",0);
};