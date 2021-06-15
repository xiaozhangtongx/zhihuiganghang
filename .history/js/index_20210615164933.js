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

