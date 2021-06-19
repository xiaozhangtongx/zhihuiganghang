/**
 * 导航栏二级菜单
 */
const function_items = $('.function_item').children('li');
$(function_items[0]).addClass('nav_li_bg');
function_items.mouseover(function () {
    $(this).addClass("nav_li_bg").siblings().removeClass("nav_li_bg");
})

for (let i = 1; i < function_items.length; i++) {
    function_items[i].onmouseover = function () {
        this.children[1].style.display = 'block';
    }
    function_items[i].onmouseout = function () {
        this.children[1].style.display = 'none';
    }
}
const lis = function_items.children('ul').children('li');
// console.log(lis.length);
lis.mouseover(function () {
    $(this).addClass("nav_li_bg");
})
lis.mouseout(function () {
    $(this).removeClass('nav_li_bg');
})

/**
 * 时间显示
 */
let t = null;
t = setTimeout(time, 1000); //开始运行
function time() {
    clearTimeout(t); //清除定时器
    dt = new Date();
    var y = dt.getFullYear();
    var mt = dt.getMonth() + 1;
    mt = mt < 10 ? '0' + mt : mt;
    var day = dt.getDate();
    day = day < 10 ? '0' + day : day;
    var h = dt.getHours(); //获取时
    h = h < 10 ? '0' + h : h;
    var m = dt.getMinutes(); //获取分
    m = m < 10 ? '0' + m : m;
    var s = dt.getSeconds(); //获取秒
    s = s < 10 ? '0' + s : s;
    document.querySelector(".showtime").innerHTML = y + "年" +
        mt + "月" + day + " " + h + "时" + m + "分" + s + "秒";
    t = setTimeout(time, 1000); //设定定时器，循环运行
}

/**
 * 功能部分
 */

/***************************航道检测***************************/
$(function_items[0]).click(function () {
    console.log(1);
    $("#home").show().siblings().hide();
});

/***************************拖船监管***************************/
/**
 *  1.拖船搜索
 */
$('.fun_ship').click(function () {
    $("#ship_search").show().siblings().hide();
    $('.fun_ship').text('拖船查询');
});
$('.li_ship_search').click(function () {
    $("#ship_search").show().siblings().hide();
    $('.fun_ship').text('拖船查询');
});

/**
 *  2.港口拖船信息展示
 */
$('.li_ship_search_info').click(function () {
    $("#show_ship_data").show().siblings().hide();
    $('.fun_ship').text('信息展示');
});

/***************************锚地管理***************************/
/**
 *  1.走锚判断
 */
$('.fun_anchor').click(function () {
    $("#isLeave").show().siblings().hide();
    $('.fun_anchor').text('走锚判断');
});
$('.li_anchor_isleave').click(function () {
    $("#isLeave").show().siblings().hide();
    $('.fun_anchor').text('走锚判断');
});

/**
 *  2.锚地信息展示
 */
$('.li_anchor_showdata').click(function () {
    $("#show_anchor_info").show().siblings().hide();
    $('.fun_anchor').text('信息展示');
});

/***************************泊位作业***************************/
/**
 *  1.泊位查询
 */
$('.fun_berth').click(function () {
    $("#isLeave").show().siblings().hide();
    $('.fun_').text('走锚判断');
});
$('.li_berth_search').click(function () {
    $("#isLeave").show().siblings().hide();
    $('.fun_').text('走锚判断');
});

/**
 *  2.作业信息展示
 */
$('.li_berth_work').click(function () {
    $("#show_anchor_info").show().siblings().hide();
    $('.fun_').text('信息展示');
});

/**
 *  3.装卸效率
 */
$('.li_work_effic').click(function () {
    $("#show_anchor_info").show().siblings().hide();
    $('.fun_').text('信息展示');
});