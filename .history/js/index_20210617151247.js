/**
 * 导航栏二级菜单
 */
const function_items = $('.function_item').children('li');
function_items.mouseover(function () {
    $(this).addClass("nav_border_bottom");
})
function_items.mouseout(function () {
    $(this).removeClass('nav_border_bottom');
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
console.log(lis.length);
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
$(function_items[1]).click(function () {
    $("#ship_search").show().siblings().hide();
});
$('.li_ship_search').click(function () {
    $("#ship_search").show().siblings().hide();
});

/**
 *  2.港口拖船信息展示
 */
