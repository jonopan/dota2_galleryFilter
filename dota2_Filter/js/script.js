(function(){

    'use strict';


    var $projects = $('.dota2');

    $projects.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('ul.filters > li').on('click', function(e){

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');

        $projects.isotope({filter: filter});

    });

    $('.card').mouseenter(function(){

        $(this).find('.card-overlay').css({'top': '-100%'});
        $(this).find('.card-hover').css({'top':'0'});

    }).mouseleave(function(){

        $(this).find('.card-overlay').css({'top': '0'});
        $(this).find('.card-hover').css({'top':'100%'});

    });

})(jQuery);

$(document).ready(function(){
    $("#myinput").on("keyup",function(){
    var value = $(this).val().toLowerCase();
    $("#card ").filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);

    });
});
    });

