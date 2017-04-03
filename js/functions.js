var mainView = {
    storage: null,
    scrwth: window.innerWidth,
    location: location.pathname.split('/').slice(-1)[0],
    init: function () {
        this.storage = window.sessionStorage;
        this.setTitle();
        this.slideout();
        this.expandInfo();
        if (this.location == "" || this.location == "index.php") {
            this.countdownInit(new Date('2017-03-18T21:00:00'));
            setInterval(this.countdownInit, 1000);
        }
        if (!this.checkStorage()) {
            this.setStorage();
            this.animateLogo();
            this.displayContent();
        } else {
            this.resetAnim();
        }
        this.highlightCurrentPage();
        this.windowResize();
    },
    setTitle: function () {
        $("#title").text(document.title.substring(document.title.lastIndexOf(" ")));
    },

    windowResize: function () {
        $(window).resize(function () {
            mainView.scrwth = window.innerWidth;
            if (mainView.scrwth > 992) {
                $("#menu").show();
                this.slideout.disableTouch();
            }
            else {
                $("header").css("opacity", 1);
                mainView.slideout();
                $("#menu").hide();
                this.slideout.enableTouch();
            }
        });
    },
    slideout: function () {
        var pad;
        if (this.scrwth <= 992) {
            pad = 250;
        } else {
            pad = 200;
        }
        var slideout = new Slideout({
            'panel': document.getElementById('panel'),
            'menu': document.getElementById('menu'),
            'padding': pad,
            'tolerance': 70
        });
        if (window.innerWidth > 992) {
            slideout.disableTouch();
        }
        // Toggle button
        document.querySelector('.toggle-button').addEventListener('click', function () {
            slideout.toggle();
        });
    },
    setStorage: function () {
        mainView.storage.setItem("anim", "true");
    },
    checkStorage: function () {
        if (mainView.storage.length <= 0)
            return false;
        else return true;
    },
    animateLogo: function () {
        $("#anim").toggle().delay(1000).animate({top: "-100%"}, 1000);
    },

    displayContent: function () {
        var panelTO = (this.scrwth > 992) ? 3000 : 2000;
        $("#panel").delay(panelTO).fadeTo(1000, 1);
        if (this.scrwth > 992) {
            $(".slideout-menu").delay(2000).fadeTo(1000, 1);
        }
    },
    resetAnim: function () {
        if (this.scrwth > 992) {
            $("#menu").show();
        }
        $("#panel").css("opacity", 1);
    },
    expandInfo: function () {
        $(".dj").click(function () {
            $(".exp").not($(this).next()).delay(500).slideUp(500);
            $(this).next().slideToggle(500);
        });
    },
    highlightCurrentPage: function () {
        if (this.location == "") {
            $("#menu a[href]").first().parent("li").addClass("active")
        } else {
            $("#menu a[href]").each(function () {
                if (this.href == window.location.href) {
                    $(this).parent("li").addClass("active");
                }
            });
        }
    },
    setMapDimensions: function() {
        if (this.scrwth < 992){
            $("#map").width(this.scrwth - 40);
        }
    },
    countdownInit: function (date) {
        var t = date - new Date();
        if (t > 0) {
            var sec = Math.floor((t / 1000) % 60);
            var min = Math.floor((t / 1000 / 60) % 60);
            var hrs = Math.floor((t / (1000 * 60 * 60)) % 24);
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            $("#days").text(days);
            $("#hrs").text(hrs);
            $("#min").text(min);
            $("#sec").text(sec);
        } else $("#countdown").hide();
    }
};

window.onload = function () {
    mainView.init();
    switch (mainView.location) {
        case "location.php":
        case "tickets.php":
            $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDxFQATxIl21PpSjcu_dzg-PT7GzQwsyEc&callback=initMap");
            break;
        default:
            break;
    }
};