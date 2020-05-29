$(document).ready(function(){
    // $('#gnbMenu .depth_2').hide();
    $('#gnbMenu .depth_1 > a').on('mouseover',function(){
        $('#gnbMenu .depth_2').fadeIn(300);
        $('header').addClass('active');
    });
    $('header').on('mouseleave',function(){
        $('#gnbMenu .depth_2').hide();
        $('header').removeClass('active');
    });
});