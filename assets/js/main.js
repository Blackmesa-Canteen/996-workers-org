var iUp = (function () {
    var t = 0,
        d = 150,
        clean = function () {
            t = 0;
        },
        up = function (e) {
            setTimeout(function () {
                $(e).addClass("up")
            }, t);
            t += d;
        },
        down = function (e) {
            $(e).removeClass("up");
        },
        toggle = function (e) {
            setTimeout(function () {
                $(e).toggleClass("up")
            }, t);
            t += d;
        };
    return {
        clean: clean,
        up: up,
        down: down,
        toggle: toggle
    }
})();

$(document).ready(function () {

    // 获取一言数据
    // fetch('https://v1.hitokoto.cn').then(function (res) {
    // 	return res.json();
    // }).then(function (e) {
    // 	$('#description').html(e.hitokoto + "<br/> -「<strong>" + e.from + "</strong>」")
    // }).catch(function (err) {
    // 	console.error(err);
    // })


    // var url = 'https://query.yahooapis.com/v1/public/yql' +
    // '?q=' + encodeURIComponent('select * from json where url=@url') +
    // '&url=' + encodeURIComponent('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=8') +
    // '&format=json&callback=?';

    /**
     *  壁纸api
     */
    var url = "https://bing.img.run/rand_1366x768.php";

    // 先康康session里有没有
    var imgUrl = JSON.parse(sessionStorage.getItem("imgUrl"));
    var $panel = $('#panel');

    if (imgUrl == null) {
        $.get(url, (result) => {
            if (result.status === 1) {
                imgUrl = result.bing.url;

                $panel.css("background", "url('" + imgUrl + "') center center no-repeat #666");
                $panel.css("background-size", "cover");
                sessionStorage.setItem("imgUrl", JSON.stringify(imgUrl))
            }
        })
    } else {
        // 直接用session里的得了
        $panel.css("background", "url('" + imgUrl + "') center center no-repeat #666");
        $panel.css("background-size", "cover");
    }

	// 在线壁纸
    // $panel.css("background", "url('" + url + "') center center no-repeat #666");

	// 本地壁纸
	// $panel.css("background", "url(../img/bg.jpg) center center no-repeat #666");

    // $panel.css("background-size", "cover");
    // sessionStorage.setItem("index", index);


    $(".iUp").each(function (i, e) {
        iUp.up(e);
    });

    $(".js-avatar")[0].onload = function () {
        $(".js-avatar").addClass("show");
    }
});

$('.btn-mobile-menu__icon').click(function () {
    if ($('.navigation-wrapper').css('display') == "block") {
        $('.navigation-wrapper').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
            $('.navigation-wrapper').off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
        });
        $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');

    } else {
        $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
    }
    $('.btn-mobile-menu__icon').toggleClass('social iconfont icon-list social iconfont icon-angleup animated fadeIn');
});
