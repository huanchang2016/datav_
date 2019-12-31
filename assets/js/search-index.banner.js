$(function () {

    //判断页面的浏览器窗口高度给banner高度
    var window_h = $(window).height() - 120;
    window_h = window_h < 600 ? 600 : window_h;
    $(".enquiry-banner").css({ height: window_h });
    $(".banner").css({ height: window_h });
    $(".b-img").css({ height: window_h });
    $(".b-img a").css({ height: window_h });
    $(".b-list").css({ paddingTop: window_h - 30 });


    var n = 0;
    var imgLength = $(".b-img a").length;
    var ctWidth = imgLength * 100;
    var itemWidth = 1 / imgLength * 100;
    $(".b-img").width(ctWidth + "%");
    $(".b-img a").width(itemWidth + "%");
    $(".b-list").width(imgLength * 30);
    if (imgLength > 1) {
        for (var i = 0; i < imgLength; i++) {
            var listSpan = $("<span></span>")
            $(".b-list").append(listSpan);
        }
    }
    $(".b-list span:eq(0)").addClass("spcss").siblings("span").removeClass("spcss");
    $(".bar-right em").click(function () {
        if (n == imgLength - 1) {
            var ctPosit = (n + 1) * 100;
            $(".banner").append($(".b-img").clone());
            $(".b-img:last").css("left", "100%");
            $(".b-img:first").animate({ "left": "-" + ctPosit + "%" }, 1000);
            $(".b-img:last").animate({ "left": "0" }, 1000);
            var setTime0 = setTimeout(function () {
                $(".banner .b-img:first").remove();
            }, 1000);
            n = 0;
            $(".b-list span:eq(" + n + ")").addClass("spcss").siblings("span").removeClass("spcss");
        }
        else {
            n++;
            var ctPosit = n * 100;
            $(".b-img").animate({ "left": "-" + ctPosit + "%" }, 1000);
            $(".b-list span:eq(" + n + ")").addClass("spcss").siblings("span").removeClass("spcss");
        }
    })
    $(".bar-left em").click(function () {
        if (n == 0) {
            var stPosit = imgLength * 100;
            var etPosit = (imgLength - 1) * 100;
            $(".banner").prepend($(".b-img").clone());
            $(".b-img:first").css("left", "-" + stPosit + "%");
            $(".b-img:last").animate({ "left": "100%" }, 1000);
            $(".b-img:first").animate({ "left": "-" + etPosit + "%" }, 1000);
            var setTime0 = setTimeout(function () {
                $(".banner .b-img:last").remove();
            }, 1000);
            n = imgLength - 1;
            $(".b-list span:eq(" + n + ")").addClass("spcss").siblings("span").removeClass("spcss");
        }
        else {
            n--;
            var ctPosit = n * 100;
            $(".b-img").animate({ "left": "-" + ctPosit + "%" }, 1000);
            $(".b-list span:eq(" + n + ")").addClass("spcss").siblings("span").removeClass("spcss");
        }
    })
    $(".b-list span").click(function () {
        var lsIndex = $(this).index();
        n = lsIndex;
        var ctPosit = n * 100;
        $(".b-img").animate({ "left": "-" + ctPosit + "%" }, 1000);
        $(this).addClass("spcss").siblings("span").removeClass("spcss");
    })
    function rollEnvent() {
        if (n == imgLength - 1) {
            var ctPosit = (n + 1) * 100;
            $(".banner").append($(".b-img").clone());
            $(".b-img:last").css("left", "100%");
            $(".b-img:first").animate({ "left": "-" + ctPosit + "%" }, 1000);
            $(".b-img:last").animate({ "left": "0" }, 1000);
            var setTime0 = setTimeout(function () {
                $(".banner .b-img:first").remove();
            }, 1000);
            n = 0;
            $(".b-list span:eq(0)").addClass("spcss").siblings("span").removeClass("spcss");

            /*			clearInterval(setTime_Out);
                        active_live();			
                        setInterval("active_live()",5000);
                        console.log("我这里过");*/

        } else {
            n++;
            var ctPosit = n * 100;
            $(".b-img").animate({ "left": "-" + ctPosit + "%" }, 1000);
            $(".b-list span:eq(" + n + ")").addClass("spcss").siblings("span").removeClass("spcss");
        }


    }

    var slidesetInterval = setInterval(rollEnvent, 1000000000);//时间间隔控制横山

    $(".banner").hover(function () { clearInterval(slidesetInterval); }, function () { slidesetInterval = setInterval(rollEnvent, 1000000000); });//时间间隔控制

    $(".bar-left").mouseover(function () {
        $(this).css("background", "url(images/arr-bg.png)");
        $(this).find("em").addClass("emcss");
    }).mouseleave(function () {
        $(this).css("background", "none");
        $(this).find("em").removeClass("emcss");
    })

    $(".bar-right").mouseover(function () {
        $(this).css("background", "url(images/arr-bg.png)");
        $(this).find("em").addClass("emcss");
    }).mouseleave(function () {
        $(this).css("background", "none");
        $(this).find("em").removeClass("emcss");
    })
});

function searchPage() {
    var searchWord = $("#search-input").val();
    if (searchWord == "请输入材料名称或规格型号进行搜索") {
        searchWord = "";
    }
    if (searchWord.length > 50) {
        return;
    } else {
        var searchForm = $("#SearchForm");

        var reg = new RegExp("^[\\u4E00-\\u9FFF,a-z,A-Z]+$", "g");
        if (!reg.test(searchWord)) {
            searchWord = encodeURIComponent(searchWord);
        }

    }
}


$('#search-input').bind("focus", function () {
    $('.enquiry-release,.enquiry-manage').fadeOut(150);
    $('#search-input').animate({ 'width': 751 }, 300);
});
$('#search-input').bind("blur", function () {
    $('.enquiry-release,.enquiry-manage').fadeIn();
    $('#search-input').animate({ 'width': 510 }, 300);
    $("#searchBtn").unbind();
    $("#searchBtn").click(searchPage);
    if (isblur == "0") {
        isblur = "1";
        $("#searchBtn").trigger("click");
    }
});

$("#signDiv").bind({
    mouseenter: function () {
        $('#search-input').unbind("blur");
    },
    mouseleave: function () {
        $('#search-input').bind("blur", function () {
            $('.enquiry-release,.enquiry-manage').fadeIn(150);
            $('#search-input').animate({ 'width': 510 }, 300);
            $("#searchBtn").unbind();
            $("#searchBtn").click(searchPage);
            if (isblur == "0") {
                isblur = "1";
                $("#searchBtn").trigger("click");
            }
        });
    }
});

$("#searchBtn").click(searchPage);

specialSelect();
function specialSelect() {
    $(".special-select-index ul li").on("click", function (event) {
        $("#search-input").val($("#search-input").val() + $(this).html());
    });
}

//中奖名单滚动
function autoScroll_two(obj, ul_bz){
	$(obj).find(ul_bz).animate({
		marginTop : "-20px"
	},1000,function(){
		$(this).css({marginTop : "0px"}).find("li:first").appendTo(this);
	});
}
setInterval('autoScroll_two("#oDiv", "#oUl")',2000);