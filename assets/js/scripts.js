$(document).ready(function() {

    /***************** Article Class Finder ******************/

    $('.latest-articles').find('img').each(function() {
        var imgClass = (this.width / this.height > 1) ? 'wide' : 'tall';
        $(this).addClass(imgClass);
    });

    /***************** Like Counter ******************/

    $('.count').each(function() {
        var clicks = Math.floor((Math.random() * 100) + 1);
        $(this).text(clicks);
    });

    $(".like_button").one("click", function() {
        var $count = $(this).parent().find('.count');
        $count.html($count.html() * 1 + 1);
        var $icon = $(this).parent().find('.like-counter');
        $($icon).removeClass("fa-heart-o");
        $($icon).addClass("fa-heart");
    });

    $(".like_button").on("click", function() {
        event.preventDefault();
    });

    /***************** Share Dropdown ******************/

    $("li a.share-trigger").on("click", function() {
        $('.share-dropdown').toggleClass("is-open");
        event.preventDefault();
    });

    /***************** Search Component ******************/

    $(".show-search").on("click", function() {
        $(".search-wrapper").addClass("is-visible");
    });

    $(".hide-search").on("click", function() {
        $(".search-wrapper").removeClass("is-visible");
        $(".search-wrapper input").removeClass("is-selected");
    });

    $(".search-wrapper input").on("click", function() {
        $(this).addClass("is-selected");
    });

    $('.search-wrapper input').keypress(function(e) {
        if (e.which === 13) { //Enter key pressed
            window.alert("Ready for implementation.");
        }
    });

    /***************** Bar Chart Animation ******************/

    $('.bar').width('0%');
    $('.bar').waypoint(function() {
        $('.bar').each(function() {
            var width = $(this).data("percentage");
            $(this).animate({
                width: width
            }, {
                duration: 2000,
                easing: 'easeOutExpo',
            });
        });
    }, {
        offset: '85%'
    });

    /***************** Stats Counter ******************/

    var counterZero = '0';
    $('.stats-number').text(counterZero);

    $('.stats-number').waypoint(function() {
        $('.stats-number').each(function() {
            var $this = $(this);
            $({
                Counter: 0
            }).animate({
                Counter: $this.attr('data-stop')
            }, {
                duration: 5000,
                easing: 'swing',
                step: function(now) {
                    $this.text(Math.ceil(now));
                }
            });
        });
        this.destroy();
    }, {
        offset: '75%'
    });

    /***************** Smooth Scroll ******************/

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 2000);
                return false;
            }
        }
    });

    /***************** Responsive Nav ******************/

    $('.nav-toggle').click(function() {
        $(this).toggleClass('active');
        $('.navicon').toggleClass('fixed');
        $('.primary-nav-wrapper').toggleClass('open');
        event.preventDefault();
    });
    $('.primary-nav-wrapper li a').click(function() {
        $('.nav-toggle').toggleClass('active');
        $('.navicon').toggleClass('fixed');
        $('.primary-nav-wrapper').toggleClass('open');
    });

    /***************** Waypoints ******************/

    $('.wp1').waypoint(function() {
        $('.wp1').addClass('animated fadeInUp');
    }, {
        offset: '80%'
    });
    $('.wp2').waypoint(function() {
        $('.wp2').addClass('animated fadeInUp');
    }, {
        offset: '95%'
    });
    $('.wp3').waypoint(function() {
        $('.wp3').addClass('animated fadeInUp');
    }, {
        offset: '95%'
    });
    $('.wp4').waypoint(function() {
        $('.wp4').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp5').waypoint(function() {
        $('.wp5').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });
    $('.wp6').waypoint(function() {
        $('.wp6').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });
    $('.wp7').waypoint(function() {
        $('.wp7').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });
    $('.wp8').waypoint(function() {
        $('.wp8').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });

    /***************** Overlay touch/hover events ******************/

    if (Modernizr.touch) {
        $('figure').bind('touchstart touchend', function(e) {
            $(this).toggleClass('hover');
        });
    }

    var navPos = $('#slider').offset().top +  $('#slider').height();
    $(window).scroll(function(){
        if ($(this).scrollTop() >= navPos) {
            $('#primary-menu').removeClass('hidden-custom');
            $('#primary-menu').addClass('visible');
        } else {
            $('#primary-menu').addClass('hidden-custom');
            $('#primary-menu').removeClass('visible');
        }
    });

});

/***************** Thom is here ********************************/

function doYourStuffAssHole(){

    // Get elements
    var question = document.getElementById("question").value;
    var answer = document.getElementById("answer").value;

    // Ensure question with some styles
    var newQuestion = document.createElement("H5");
    newQuestion.setAttribute('id', question);
    newQuestion.appendChild(document.createTextNode(question));

    // Ensure answer with some styles
    var newAnswer = document.createElement("P");
    var remove = document.createElement("U");
    remove.setAttribute('onclick', 'removeThisBullShit('+question+')');
    remove.appendChild(document.createTextNode("(Supprimer)"));
    newAnswer.appendChild(remove);
    newAnswer.appendChild(document.createTextNode(" "+answer));

    // Append to something
    processBitch("list", newQuestion, newAnswer);
}

function processBitch(target, question, answer){

    // Create ensemble div
    var ensemble = document.createElement("DIV");
    ensemble.setAttribute("class", "ensemble");
    ensemble.appendChild(question);
    ensemble.appendChild(answer);

    // Add to target block question & answer
    $("#"+target).append(ensemble);

    // Clean form
    $("#question").val("");
    $("#answer").val("");
}

function removeThisBullShit(id){

    // Get element then remove it
    var toDel = document.getElementById(id);
    toDel.parentNode.remove();
}