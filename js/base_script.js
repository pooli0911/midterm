$(document).ready(function () {

    $(".nav-list-item").hover(function () {
        $(this).children(".nav-sublist").children(".nav-sublist-item").slideDown('fast');
    }, function () {
        $(this).children(".nav-sublist").children(".nav-sublist-item").slideUp('slow');
    });

    var i = 0;
    var timer;
    // $('.img').eq(0).fadeIn(350).siblings('.img').fadeOut(350);
    $('.img').eq(0).show().siblings('.img').hide();

    showTime();

    $('.point').hover(function () {
        i = $(this).index();
        Show();
        clearInterval(timer);
    }, function () {
        showTime();
    });

    function showTime() {

        timer = setInterval(function () {
            Show();
            i++;
            if (i == 6) {
                i = 0;
            }
        }, 2500);
    }

    //创建一个Show函数
    function Show() {
        $('.img').eq(i).fadeIn(200).siblings('.img').fadeOut(200);
        $('.point').eq(i).addClass('active').siblings('.point').removeClass('active');

    }

});