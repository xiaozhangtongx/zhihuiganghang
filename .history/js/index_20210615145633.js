/**
 * 导航栏二级菜单
 */
const function_item = document.querySelector('.function_item');
const lis = function_item.children;

console.log();
for (var i = 0; i < lis.length; i++) {
    lis[i].onmouseover = function () {
        this.children[1].style.display = 'block';
    }
    lis[i].onmouseout = function () {
        this.children[1].style.display = 'none';
    }
}