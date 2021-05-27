$('document').ready(function(){
    $('.click button').click(function(){ //click
        $('.click p').hide();
    });
    $('.hide button').click(function(){ //hide
        $('.hide h1').hide();
    })
    $('.show button').click(function(){ //show
        $('.hide h1').show();
    })
    $('.toggle button').click(function(){ //toggle (hide,show)
        $('.toggle p').toggle();
    })
    $('.slideDown h2').hide(); // will slide down a hidden text
    $('.slideDown button').click(function(){
        $('.slideDown h2').slideDown("slow");
    })
    $('.slideUp button').click(function(){
        $('.slideUp h1').slideUp('fast');
    })
    $('.slideToggle button').click(function(){
        $('.slideToggle h1').slideToggle();
    });
    $('.fadeInHidden').hide();
    $(".fadeIn button").click(function(){
        $('.fadeIn p').fadeIn();
    })
    $('.fadeOut button').click(function(){
        $('.fadeOut p').fadeOut();
    })
    $('.addClass button').click(function(){
        $('.addClass p').addClass('red');
    })
    $('.before button').click(function(){
        $('.before h1').before("new paragraph before header")
    })
    $('.after button').click(function(){
        $('.after button').after("new paragraph button")
    })
    $('.append button').click(function(){
        $('.append h1').append(" After same line");
    })
    $('.html button').click(function(){
        $('.html p').html("<b>New Bold Paragraph");
    })
    $('.attr button').click(function(){
       var x = $('.attr p').attr("title");
       $('.attr div').text(x);
    })
    $('.val button').click(function(){
       var y = $(this).text();
       $('.val input').val(y);

    })
    $('.text button').click(function(){
        $('.text p').text("This is the new paragraph");
    }) 
});