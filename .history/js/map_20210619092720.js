/***************************拖船查询部分地图***************************/
var map = new BMap.Map("map", {
    // mapType: BMAP_HYBRID_MAP
}); //在百度地图容器中创建一个地图
var point = new BMap.Point(117.793787, 38.965003); //定义一个中心点坐标
map.centerAndZoom(point, 14); //设定地图的中心点和坐标并将地图显示在地图容器中
window.map = map; //将map变量存储在全局
//地图事件设置
map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
map.enableKeyboard(); //启用键盘上下左右键移动地图