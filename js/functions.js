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
                                $('.slidesjs-play').empty().append('<i class="fas fa-play-circle"></i>');
                                $('.slidesjs-stop').empty().append('<i class="fas fa-pause-circle"></i>');
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
                $.getJSON("data/lineup/"+file, function(data) {
                    $('#djinfo').append("<h2>" + data.title + "</h2>");
                    $('#djinfo').append("<p>"+data.description+"</p>");
                    if(data.social !== undefined) {
                        var sites = "<div id='socmed'><p>";
                        Object.keys(data.social).forEach(function(key, index){
                            sites += '<a href="'+data.social[key]+'" target="_blank">';
                            var icon = '';
                            switch(key) {
                                case "site": icon = '<i class="far fa-file"></i>';break;
                                case "facebook": icon = '<i class="fab fa-facebook-square"></i>';break;
                                case "twitter": icon = '<i class="fab fa-twitter"></i>';break;
                                case "soundcloud": icon = '<i class="fab fa-soundcloud"></i>';break;
                                case "spotify": icon = '<i class="fab fa-spotify"></i>';break;
                                default: break;
                            }
                            sites += icon+"</a>"
                        });
                        sites += "</p></div">
                        $("#djinfo").append(sites);
                    }
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

var locations = {
    'hambiance': {title: 'Hambiance Hamme', latlng: {lat: 51.1023047, lng:4.1352369}},
    'molen': {title: 'Bloemen De Molen',latlng: {lat: 51.0923248, lng:4.1359097}},
    'tuit':{title: 'Frituur De Tuit',latlng: {lat: 51.0945915, lng:4.1408053}},
    'covfefe':{title: 'La Pause Douceur',latlng: {lat: 51.0554815, lng:4.1035206}},
    'apu':{title: 'Nachtwinkel Apu',latlng: {lat: 51.0928561, lng:4.1342326}}
};
var mapView = {
    map: null,
    marker: null,
    mapDiv: null,
    loc: null,
    initMap: function (page) {
        this.mapDiv = $('#main').find('#map')[0];
        this.setMapDimensions();
        switch (page) {
            case 'location':
                this.loc = locations['hambiance'];
                break;
            case 'tickets':
                this.loc = locations['molen'];
                $("#vvk li").each(function () {
                    $(this).on("click", function () {
                        mapView.changeLocation($(this).attr('id'));
                    })
                });
        }
        this.map = new google.maps.Map(this.mapDiv, {
            center: this.loc.latlng,
            zoom: 16
        });

        this.marker = new google.maps.Marker({
            position: this.loc.latlng,
            map: this.map,
            title: this.loc.title
        });
    },
    changeLocation: function (location) {
        this.loc = locations[location];
        this.map.panTo(this.loc.latlng);
        this.marker.setPosition(this.loc.latlng);
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