/**
 * 导航栏二级菜单
 */
const function_items = $('.function_item').children('li');
function_items.mouseover(function () {
    $(this).addClass("now");
})
function_items.mouseout(function () {
    $(this).removeClass('now');
})
for (let i = 1; i < function_items.length; i++) {
    function_items[i].onmouseover = function () {
        this.children[1].style.display = 'block';
    }
    function_items[i].onmouseout = function () {
        this.children[1].style.display = 'none';
    }
}
const lis = function_items.children();
console.log(lis.length);
