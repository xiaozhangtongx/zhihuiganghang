/**
 * 导航栏二级菜单
 */
const lis = $('.function_item').children('li');
lis.mouseover(function () {
    $(this).addClass("now");
})
lis.mouseout(function () {
    $(this).removeClass('now');
})
for (let i = 1; i < lis.length; i++) {
    lis[i].onmouseover = function () {
        this.children[1].style.display = 'block';
    }
    lis[i].onmouseout = function () {
        this.children[1].style.display = 'none';
    }
}
