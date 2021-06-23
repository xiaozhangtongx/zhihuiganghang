/**
 * 功能菜单
 */
/***************************菜单显示判断***************************/
$('.show_functions').mouseover(function () {
    $('.menu').show();
});
$('.show_functions').mouseout(function () {
    $('.menu').hide();
});

/***************************功能选择部分***************************/
const list = document.querySelectorAll('.list');

function accordion(e) {
    e.stopPropagation();
    if (this.classList.contains('active')) {
        this.classList.remove('active');
    } else
    if (this.parentElement.parentElement.classList.contains('active')) {
        this.classList.add('active');
    } else {
        for (i = 0; i < list.length; i++) {
            list[i].classList.remove('active');
        }
        this.classList.add('active');
    }
}
for (i = 0; i < list.length; i++) {
    list[i].addEventListener('click', accordion);
}

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
    document.querySelector(".showTime").innerHTML = y + "年" +
        mt + "月" + day + " " + h + "时" + m + "分" + s + "秒";
    t = setTimeout(time, 1000); //设定定时器，循环运行
}

/**
 * 功能部分
 */

/***************************返回主界面***************************/
$('#fun_home').click(function () {
    $('.mainbox').show().siblings().hide();
})


/***************************航道检测***************************/
$("#fun_path").click(function () {
    $("#show_path").show().siblings().hide();
});


/***************************拖船监管***************************/
/**
 *  1.拖船搜索
 */
$("#fun_ship_search").click(function () {
    $("#ship_search").show().siblings().hide();
});


/**
 *  2.拖船信息展示
 */
$("#fun_show_ship").click(function () {
    $("#show_ship_data").show().siblings().hide();
});

/***************************锚地管理***************************/
/**
 *  1.走锚判断
 */
$("#fun_isLeave").click(function () {
    $("#isLeave").show().siblings().hide();
});


/**
 *  2.锚地信息展示
 */
$("#fun_show_anchor").click(function () {
    $("#show_anchor_info").show().siblings().hide();
});

/***************************泊位作业***************************/
/**
 *  1.泊位查询
 */
$("#fun_berth_search").click(function () {
    $("#berth_search").show().siblings().hide();
});

/**
 *  2.作业信息展示
 */
$("#fun_show_work").click(function () {
    $("#show_berth_work").show().siblings().hide();
});

/**
 *  3.装卸效率
 */
$("#fun_show_effic").click(function () {
    $("#work_effic").show().siblings().hide();
});