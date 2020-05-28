$(document).ready(function(){
    $('#gnbMenu .depth_1 > a').on('mouseover',function(){
        // alert('f');
        $('.depth_2').addClass('active');
    });
    $('#gnbMenu ').on('mouseleave',function(){
        // alert('f');
        $('.depth_2').removeClass('active');
    });
});