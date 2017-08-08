//Nodejs dependencies (try/catch constructie dient om webbrowser gerust te stellen)
try {
    window.jQuery = window.$ = require('jquery');
    window.Slideout = require('slideout');
    window.slidesjs = require('../js/jquery.slides');
} catch (e) {
}

var isIE = !!window.MSInputMethodContext && !!document.documentMode;
var isMobile = screen.width <= 992
var mainView = {
    storage: null,
    slideout: null,
    location: location.pathname.split('/').slice(-1)[0],
    init: function () {
        this.storage = window.sessionStorage;
        if (history.state != null) {
            this.loadPage(history.state.page);
        }
        else this.loadPage('index', true);
        this.setTitle();
        this.initMenu();
        this.expandInfo();
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
            if (window.innerWidth > 992) {
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
    initMenu: function () {
        this.slideout = new Slideout({
            'panel': document.getElementById('panel'),
            'menu': document.getElementById('menu'),
            'padding': 250,
            'tolerance': 70
        });
        if (window.innerWidth > 992) {
            mainView.slideout.disableTouch();
        }
        // Toggle button
        document.querySelector('.toggle-button').addEventListener('click', function () {
            mainView.slideout.toggle();
        });

        $('#menu').find('a').each(function () {
            $(this).click(function (e) {
                e.preventDefault();
                //mainView.changeSelected($(this));
                if ($(this).attr('href')) {
                    mainView.loadPage($(this).attr('href').split('#')[1], true);
                }
            });
        });
    },
    loadPage: function (page, push) {
        $('#main').load('html/' + page + '.php', function () {
            switch(page){
                case "index":
                    mainView.countdownInit(new Date('2017-03-18T21:00:00'));
                    setInterval(this.countdownInit, 1000);
                    break;

                case "tickets":
                    $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDxFQATxIl21PpSjcu_dzg-PT7GzQwsyEc", function () {
                        initTickets();
                    });
                    break;
                case "location":
                    $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDxFQATxIl21PpSjcu_dzg-PT7GzQwsyEc", function () {
                        initMap();
                    });
                    break;
                default:
                    break;
            }
            //$('html, body').animate({scrollTop: '0px'}, 300);
            if (isMobile) {
                mainView.slideout.close();
            }
            if (push) {
                history.pushState({
                    page: page
                }, null, page);
            }
            //mainView.setHeaderText();
            mainView.setTitle();
        });
    },
    setStorage: function () {
        mainView.storage.setItem("anim", "true");
    },
    checkStorage: function () {
        return mainView.storage.length > 0;
    },
    animateLogo: function () {
        $("#anim").toggle().delay(1000).animate({top: "-100%"}, 1000);
    },

    displayContent: function () {
        var panelTO = (window.innerWidth > 992) ? 3000 : 2000;
        $("#panel").delay(panelTO).fadeTo(1000, 1);
        if (window.innerWidth > 992) {
            $(".slideout-menu").delay(2000).fadeTo(1000, 1);
        }
    },
    resetAnim: function () {
        if (window.innerWidth > 992) {
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
        if (this.location === "") {
            $("#menu").find("a[href]").first().parent("li").addClass("active")
        } else {
            $("#menu").find("a[href]").each(function () {
                if (this.href === window.location.href) {
                    $(this).parent("li").addClass("active");
                }
            });
        }
    },
    setMapDimensions: function() {
        if (window.innerWidth < 992){
            $("#map").width(window.innerWidth - 40);
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
};

window.onpopstate = function (event) {
    var page = 'index';
    if (event.state) {
        page = event.state.page;
    }
    mainView.loadPage(page);
    //mainView.changeSelected($('#menu').find('a[href="#' + page + '"]'));
};