
window.onload = function () {
    $("#anim").toggle().delay(1000).animate({top: "-100%"}, 1000);
    var panelTO = (this.scrwth > 992) ? 3000 : 2000;
    $("#panel").delay(panelTO).fadeTo(1000, 1);
    if (this.scrwth > 992) {
        $(".slideout-menu").delay(2000).fadeTo(1000, 1);
    }
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