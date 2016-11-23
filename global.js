 $(document).ready(function () {
            $('ul.thumb>li').mouseenter(function () {
                $('ul.thumb>li').eq($(this).index()).addClass('hover');
                $('div.shadow').eq($(this).index()).addClass('hover');
            });
            $('ul.thumb>li').mouseleave(function () {
                $('ul.thumb>li').eq($(this).index()).removeClass('hover');
                $('div.shadow').eq($(this).index()).removeClass('hover');
            });
            $('div.shadow').click(function () {
                $('div.bg').addClass('active');
                $('div.desc').addClass('active');
            });
            $('div.close').click(function () {
                $('div.bg').removeClass('active');
                $('div.desc').removeClass('active');
            });
            $('ul.thumb>li').click(function () {
                $('div.cnt div.desc').eq($(this).index()).addClass('show').siblings().removeClass('show');
            });
            /*$('div.fwd').click(function () {
                $('div.cnt div.desc').eq($('div.cnt div.desc.show').index() + 1).addClass('show');
                $('div.cnt div.desc.show').eq(0).animate({left: '85%', opacity: '0', filter: "Alpha(opacity=0" }, 600).removeClass('show');
            });
            $('div.back').click(function () {
                $('div.cnt div.desc').eq($('div.cnt div.desc.show').index() - 1).addClass('show');
                $('div.cnt div.desc.show').eq(1).animate({left: '85%', opacity: '0', filter: "Alpha(opacity=0" }, 600).removeClass('show');
            });*/
        });