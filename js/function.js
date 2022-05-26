$(function () {
    const $gnb = $('#wrap>header>nav>.gnb');
    const $lnb = $gnb.find('.lnb');
    const $bg_lnb = $('.bg_lnb');
    const $slide = $('section>#content>.slide>.slide-container > p');
    const $diy = $('section>#content>.diy');

    $gnb.on('mouseenter', function () {
        $bg_lnb.stop().slideDown(300);//배경판 노출
        $lnb.stop().slideDown(300);//서브메뉴 노출
    });

    $gnb.on('mouseleave', function () {
        $lnb.stop().slideUp(300);
        $bg_lnb.stop().slideUp(300);
        // $lnb.stop().fadeOut(50);
        // $bg_lnb.stop().fadeOut(50);
    });

    $bg_lnb.on('mouseover', function () {
        $gnb.trigger('mouseover');
    });

    $bg_lnb.on('mouseout', function () {
        $gnb.trigger('mouseout');
    });

    let nowIdx = 0;

    setInterval(function () {

        if (nowIdx < 1) {
            nowIdx++;
        } else {
            nowIdx = 0
        }

        $slide.eq(nowIdx).fadeIn(500).siblings().fadeOut(500)
    }, 2000)
})

