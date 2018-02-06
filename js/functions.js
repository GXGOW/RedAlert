//Nodejs dependencies (try/catch constructie dient om webbrowser gerust te stellen)
try {
    window.jQuery = window.$ = require('jquery');
    window.Slideout = require('slideout');
    window.slidesjs = require('../js/jquery.slides');
    window.countdown = require('countdown');
    window.Konami = require('konami');
} catch (e) {}

var isIE = !!window.MSInputMethodContext && !!document.documentMode;
var isMobile = screen.width <= 992;
var alert = new Date('2018-03-03T21:00:00');
var mainView = {
    slideout: null,
    interval: null,
    init: function () {
        if (alert.getTime() > new Date().getTime()) {
            this.initCountdown();
            this.interval = setInterval(this.initCountdown, 1000);
        } else {
            $('#home').empty();
            $('#home').load('html/timetable.html');
        }
        this.easter();
        $('.arrow').click(function () {
            mainView.initSite();
        });
    },
    initSite: function () {
        $('body').css('overflow', 'hidden');
        $('.arrow').fadeOut(500);
        $('body').append('<div id="wrap"></div>');
        $('#wrap').load('html/init.php', function () {
            mainView.initMenu();
            if (!isMobile) $('#menu').hide();
            mainView.loadPage('index', function () {
                $('#wrap').show();
                if (!isMobile) $('#menu').fadeIn(1000);
                $('#home').animate({
                    "margin-top": "-100vh"
                }, 1000, function () {
                    $('#home').remove();
                    $('.arrow').remove();
                    $('#wrap').css('bottom', 'initial');
                    mainView.initSlides();
                    $('body').css('overflow', 'initial');
                    clearInterval(mainView.interval);
                });
            });
            $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDxFQATxIl21PpSjcu_dzg-PT7GzQwsyEc");
            mainView.initCookieBanner();
        });
    },

    initMenu: function () {
        this.slideout = new Slideout({
            'panel': document.getElementById('panel'),
            'menu': document.getElementById('menu'),
            'padding': 250,
            'tolerance': 70
        });
        // Toggle button
        document.querySelector('.toggle-button').addEventListener('click', function () {
            mainView.slideout.toggle();
        });

        $('#menu').find('ul a').each(function () {
            $(this).click(function (e) {
                e.preventDefault();
                if (($(this).text() !== $('.active').text())) {
                    mainView.changeSelected($(this));
                    mainView.beginAnim(function () {
                        mainView.loadPage($('.active').attr('href').split('#')[1], true, function () {
                            mainView.endAnim();
                        });
                    });
                    mainView.changeTitle();
                }
            });
        });
    },
    loadPage: function (page, push, callback) {
        $('#main').load('html/' + page + '.php', function () {
            switch (page) {
                case "index":
                    break;
                case "tickets":
                    mapView.initMap('tickets')

                    break;
                case "location":
                    mapView.initMap('location')
                    break;
                case "lineup":
                    mainView.showDJ();
                    break;
                default:
                    break;

            }
            mainView.changeSelected($('#menu').find('a[href="#' + page + '"]'));
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
            if (typeof callback === 'function') {
                callback();
            }
        });
    },
    initSlides: function () {
        $.ajax({
            url: "php/initSlideshow.php",
            type: 'get',
            success: function (data) {
                $('#menu').find('ul').after('<div id="slides"></div>');
                //Workaround voor mobiele versie. Slides laden anders niet om een of andere reden
                if (isMobile) $('.slideout-menu').css({
                    'visibility': 'hidden',
                    'display': 'block'
                });
                $('#slides').append(data);
                $(function () {
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
                            active: (isMobile ? false : true),
                            auto: true,
                            effect: "slide",
                            interval: 7000,
                            pauseOnHover: false
                        },
                        callback: {
                            loaded: function (number) {
                                $('.slidesjs-play').empty().append('<i class="fa fa-play-circle" aria-hidden="true"></i>');
                                $('.slidesjs-stop').empty().append('<i class="fa fa-pause-circle" aria-hidden="true"></i>');
                                //Deel 2 workaround
                                if (isMobile) $('.slideout-menu').css({
                                    'visibility': 'visible',
                                    'display': 'initial'
                                });
                            }
                        }
                    });
                });
            }
        });
    },
    easter: function () {
        var audio = new Audio('audio/sound.ogg');
        var konami = new Konami(function () {
            $('body').css({
                'background-image': 'url(images/temp.jpg)',
                'background-repeat': 'repeat',
                'background-size': 'initial'
            });
            audio.play();
        });
    },
    beginAnim: function (callback) {
        $('body').css('overflow', 'hidden');
        $('#main').addClass('animated fadeOutUp');
        $('#main').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            callback();
        });
    },
    endAnim: function () {
        $('#main').removeClass('fadeOutUp').addClass('fadeInDown');
        $('#main').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $('#main').removeClass('animated fadeOutUp');
            $('body').css('overflow', 'initial');
        });
    },
    changeSelected: function (elem) {
        $('.active').removeClass('active');
        $(elem).addClass('active');
    },
    changeTitle: function () {
        var title = $('.active').text().split(' ')[1];
        $('title').text('Red Alert - ' + title);
        $('#title').text(title);
    },
    showDJ: function () {
        $('#djwrap').find('img').click(function () {
            var file = $(this).attr('id') === undefined ? 'filler.json' : $(this).attr('id') + '.json';
            $('#djwrap').find('img').not(this).removeAttr('style');
            $(this).css('filter', 'initial');
            $('#djinfo').slideUp(400, function () {
                $('#djinfo').empty();
                /*$('#djinfo').load('html/lineup/' + file, function (response, status, xhr) {
                    if (status != "error") {
                        $('#djinfo').slideDown(400);
                    }
                });*/
                $.getJSON("html/lineup/"+file, function(data) {
                    $('#djinfo').append("<h2>" + data.title + "</h2>");
                    $('#djinfo').append("<p>"+data.description+"</p>");
                    $('#djinfo').slideDown(400);
                })
            })

        });
    },
    initCountdown: function () {
        var ctn = countdown(new Date(), alert, countdown.DAYS |
            countdown.HOURS |
            countdown.MINUTES |
            countdown.SECONDS, 4);
        $("#days").text(ctn.days);
        $("#hrs").text(ctn.hours);
        $("#min").text(ctn.minutes);
        $("#sec").text(ctn.seconds);
    },
    initCookieBanner: function () {
        if (window.cookieconsent) {
            window.cookieconsent.initialise({
                "palette": {
                    "popup": {
                        "background": "#000"
                    },
                    "button": {
                        "background": "#ff0000"
                    }
                },
                "content": {
                    "message": "Deze website gebruikt cookies.",
                    "dismiss": "OK",
                    "link": "Waarom?"
                }
            })
        }
    }
};

var mapView = {
    map: null,
    marker: null,
    mapDiv: null,
    title: null,
    latlng: null,
    initMap: function (page) {
        this.mapDiv = $('#main').find('#map')[0];
        this.setMapDimensions();
        switch (page) {
            case 'location':
                this.latlng = {
                    lat: 51.1023047,
                    lng: 4.1352369
                };
                title = 'Hambiance Hamme';
                break;
            case 'tickets':
                this.latlng = {
                    lat: 51.0928994,
                    lng: 4.1364247
                };
                this.title = 'Jeugddienst Hamme'
                $("#vvk li").each(function () {
                    $(this).on("click", function () {
                        mapView.changeMap($(this).text().split(" ")[0]);
                    })
                });
        }
        this.map = new google.maps.Map(this.mapDiv, {
            center: this.latlng,
            zoom: 16
        });

        this.marker = new google.maps.Marker({
            position: this.latlng,
            map: this.map,
            icon: 'images/letter.png',
            title: title
        });
    },
    changeMap: function (address) {
        switch (address) {
            case "Jeugddienst":
                this.latlng = {
                    lat: 51.1020762,
                    lng: 4.134353
                };
                this.marker.setTitle(this.marker.name = "Jeugddienst Hamme");
                break;
            case "Nachtwinkel":
                this.latlng = {
                    lat: 51.0928994,
                    lng: 4.1364247
                };
                this.marker.setTitle(this.marker.name = "Nachtwinkel Apu");
                break;
        }
        this.map.panTo(this.latlng);
        this.marker.setPosition(this.latlng);
    },
    setMapDimensions: function () {
        if (window.innerWidth < 992) {
            $("#map").width(window.innerWidth - 40);
        }
    }
}

window.onload = function () {
    if (isIE) {
        window.location = 'html/lap.html';
    }
    mainView.init();
};

window.onpopstate = function (event) {
    var page = 'index';
    if (event.state) {
        page = event.state.page;
    }
    mainView.initAnim();
    mainView.loadPage(page);
    mainView.switchAnim();
};