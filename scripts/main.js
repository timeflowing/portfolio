$(document).ready(function(){

    var $header = $('header');
    var $sticky = $header.before($header.clone().addClass("sticky"));


    $(window).on("scroll", function(){
      var scrollFromTop = $(window).scrollTop();
      $("body").toggleClass("scroll", (scrollFromTop > 350));
    });

    $('.menu li a[href^="#"]').on('click', function(e){
      e.preventDefault();

      var target = $(this.hash);

      if (target.length) {
        $('html, body').stop().animate({
          scrollTop: target.offset().top -70
        }, 1000);
      }

    });
    $('.btn-js').on('click', function(e){
      e.preventDefault();

      var target = $(this.hash);

      if (target.length) {
        $('html, body').stop().animate({
          scrollTop: target.offset().top -70
        }, 1000);
      }

    });


    var body = $('body');
    var menuTrigger = $('.js-menu-trigger');
    var mainOverlay = $('.js-main-overlay');

    menuTrigger.on('click', function(){
      body.addClass('menu-is-active');
    });

    mainOverlay.on('click', function(){
      body.removeClass('menu-is-active');
    });

    $('.menu li a').on('click', function(){
      $('body').removeClass('menu-is-active');

    });

    $('.grid').masonry({

      itemSelector: '.grid-item',
      columnWidth: 200,
      fitWidth: true

    });

    var canvas = document.getElementById( 'canvas' ),
		ctx = canvas.getContext( '2d' ),
    canvas2 = document.getElementById( 'canvas2' ),
    ctx2 = canvas2.getContext( '2d' ),
		// full screen dimensions
		cw = window.innerWidth,
		ch = window.innerHeight,
    charArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    maxCharCount = 100,
    fallingCharArr = [],
    fontSize = 10,
    maxColums = cw/(fontSize);
    canvas.width = canvas2.width = cw;
    canvas.height = canvas2.height = ch;


    function randomInt( min, max ) {
    	return Math.floor(Math.random() * ( max - min ) + min);
    }

    function randomFloat( min, max ) {
    	return Math.random() * ( max - min ) + min;
    }

    function Point(x,y)
    {
      this.x = x;
      this.y = y;
    }

    Point.prototype.draw = function(ctx){

      this.value = charArr[randomInt(0,charArr.length-1)].toUpperCase();
      this.speed = randomFloat(1,5);


      ctx2.fillStyle = "rgba(255,255,255,0.8)";
      ctx2.font = fontSize+"px san-serif";
      ctx2.fillText(this.value,this.x,this.y);

        ctx.fillStyle = "#0F0";
        ctx.font = fontSize+"px san-serif";
        ctx.fillText(this.value,this.x,this.y);



        this.y += this.speed;
        if(this.y > ch)
        {
          this.y = randomFloat(-100,0);
          this.speed = randomFloat(2,5);
        }
    }

    for(var i = 0; i < maxColums ; i++) {
      fallingCharArr.push(new Point(i*fontSize,randomFloat(-500,0)));
    }


    var update = function()
    {

    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,cw,ch);

    ctx2.clearRect(0,0,cw,ch);

      var i = fallingCharArr.length;

      while (i--) {
        fallingCharArr[i].draw(ctx);
        var v = fallingCharArr[i];
      }

      requestAnimationFrame(update);
    }

  update();


$('.slider').slick({
  autoplay: true,
  autoplaySpeed:2000,
  arrows: false,
  centerMode: true,
  slidesToShow: 3,
  prevArrow:'<button type="button" class="slick-prev">Previous</button>',
  nextArrow:'<button type="button" class="slick-next">Previous</button>',

  responsive: [
    {
      breakpoint: 990,
      settings: {
          slidesToShow: 2
      }

    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]

});

});

$('input').focus(function(){
  $(this).parents('.form-group').addClass('focused');
});

$('input').blur(function(){
  var inputValue = $(this).val();
  if ( inputValue == "" ) {
    $(this).removeClass('filled');
    $(this).parents('.form-group').removeClass('focused');
  } else {
    $(this).addClass('filled');
  }
})

$('.view-gallery button').on('click', function() {
  $('.box').toggleClass('animated');
   $('ul').css({
    // 'max-width' : '100%'
   });
});
