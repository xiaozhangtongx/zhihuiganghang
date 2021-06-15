/**
 * 导航栏二级菜单
 */
const lis = $('.function_item').children('li');
lis.click(function () {
    $(this).addClass("now").siblings().remocl
})
// const function_item = document.querySelector('.function_item');
// const lis = function_item.children;
// // console.log("HELLO WORLD!");
// for (let i = 1; i < lis.length; i++) {
//     lis[i].onmouseover = function () {
//         this.children[1].style.display = 'block';
//     }
//     lis[i].onmouseout = function () {
//         this.children[1].style.display = 'none';
//     }
// }