//Nodejs dependencies (try/catch constructie dient om webbrowser gerust te stellen)
try {
    window.jQuery = window.$ = require('jquery');
    window.Slideout = require('slideout');
    window.slidesjs = require('../js/jquery.slides');
    window.countdown = require('countdown');
} catch (e) {}

var isIE = !!window.MSInputMethodContext && !!document.documentMode;
var isMobile = screen.width <= 992;
var mainView = {
    slideout: null,
    interval: null,
    location: location.pathname.split('/').slice(-1)[0],
    init: function() {
        if (history.state != null) {
            this.loadPage(history.state.page);
        } else this.loadPage('index', true);
        this.interval = this.countdownInit();
        setInterval(this.countdownInit, 1000);
        $('.arrow').click(function() {
            mainView.initSite();
        });
    },
    initSite: function() {
        $('.arrow').fadeOut(500);
        $('body').append('<div id="wrap"></div>');
        $('#wrap').load('html/init.php', function() {
            mainView.initMenu();
            $('.slideout-menu').hide();
            mainView.loadPage('index', function() {
                clearInterval(mainView.interval);
                $('#wrap').show();
                $('.slideout-menu').fadeIn(1000);
                $('#home').animate({ "margin-top": "-100vh" }, 1000, function() {
                    $('#home').remove();
                    $('.arrow').remove();
                    $('#wrap').css('bottom', 'initial');
                    mainView.initSlides();
                });
            });
            $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDxFQATxIl21PpSjcu_dzg-PT7GzQwsyEc");
        });
    },

    initMenu: function() {
        this.slideout = new Slideout({
            'panel': document.getElementById('panel'),
            'menu': document.getElementById('menu'),
            'padding': 250,
            'tolerance': 70
        });
        // Toggle button
        document.querySelector('.toggle-button').addEventListener('click', function() {
            mainView.slideout.toggle();
        });

        $('#menu').find('a').each(function() {
            $(this).click(function(e) {
                e.preventDefault();
                mainView.changeSelected($(this));
                mainView.loadPage($(this).attr('href').split('#')[1], true);
                mainView.changeTitle();
            });
        });
    },
    loadPage: function(page, push) {
        $('#main').load('html/' + page + '.php', function() {
            switch (page) {
                case "index":
                    break;
                case "tickets":
                    initTickets();
                    break;
                case "location":
                    initMap();
                    break;
                case "lineup":
                    mainView.expandInfo();
                    break;
                default:
                    break;
            }
            $('html, body').animate({ scrollTop: '0px' }, 300);
            if (isMobile) {
                mainView.slideout.close();
            }
            if (typeof push === 'function') {
                push();
            } else if (push) {
                history.pushState({
                    page: page
                }, null, page);
            }
        });
    },
    initSlides: function() {
        $.ajax({
            url: "php/initSlideshow.php",
            type: 'get',
            success: function(data) {
                $('#menu').find('ul').after('<div id="slides"></div>');
                //Workaround voor mobiele versie. Slides laden anders niet om een of andere reden
                if (isMobile) $('.slideout-menu').css({ 'visibility': 'hidden', 'display': 'block' });
                $('#slides').append(data);
                $(function() {
                    $("#slides").slidesjs({
                        width: 250,
                        height: 200,
                        navigation: {
                            active: false,
                            effect: "slide"
                        },
                        pagination: {
                            active: false
                        },
                        play: {
                            active: true,
                            auto: true,
                            effect: "slide",
                            interval: 7000,
                            pauseOnHover: true
                        },
                        callback: {
                            loaded: function(number) {
                                $('.slidesjs-play').empty().append('<i class="fa fa-play-circle" aria-hidden="true"></i>');
                                $('.slidesjs-stop').empty().append('<i class="fa fa-stop-circle" aria-hidden="true"></i>');
                                //Deel 2 workaround
                                if (isMobile) $('.slideout-menu').css({ 'visibility': 'visible', 'display': 'initial' });
                            }
                        }
                    });
                });
            }
        });
    },
    changeSelected: function(elem) {
        $('.active').removeClass('active');
        $(elem).addClass('active');
    },
    changeTitle: function() {
        var title = $('.active').text().split(' ')[1];
        $('title').text('Red Alert - ' + title);
        $('#title').text(title);
    },
    expandInfo: function() {
        $(".dj").click(function() {
            $(".exp").not($(this).next()).delay(500).slideUp(500);
            $(this).next().slideToggle(500);
        });
    },
    setMapDimensions: function() {
        if (window.innerWidth < 992) {
            $("#map").width(window.innerWidth - 40);
        }
    },
    countdownInit: function() {
        var date = new Date('2018-03-18 21:00:00');
        var ctn = countdown(new Date(), date, countdown.DAYS |
            countdown.HOURS |
            countdown.MINUTES |
            countdown.SECONDS, 4);
        $("#days").text(ctn.days);
        $("#hrs").text(ctn.hours);
        $("#min").text(ctn.minutes);
        $("#sec").text(ctn.seconds);
    }
};

window.onload = function() {
    mainView.init();
};

window.onpopstate = function(event) {
    var page = 'index';
    if (event.state) {
        page = event.state.page;
    }
    mainView.loadPage(page);

};