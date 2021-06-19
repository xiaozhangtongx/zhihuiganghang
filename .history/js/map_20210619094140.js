/***************************拖船查询部分地图***************************/
var map_port = new BMap.Map("port", {
    mapType: BMAP_HYBRID_MAP
}); //在百度地图容器中创建一个地图
var point_port = new BMap.Point(117.80737, 38.962955); //定义一个中心点坐标
map_port.centerAndZoom(point_port, 14); //设定地图的中心点和坐标并将地图显示在地图容器中
window.map_port = map_port; //将map变量存储在全局
//地图事件设置
map_port.enableScrollWheelZoom(); //启用地图滚轮放大缩小
map_port.enableKeyboard(); //启用键盘上下左右键移动地图



/***************************走锚判断部分***************************/
var map = new BMap.Map("anchor", {
    mapType: BMAP_HYBRID_MAP
}); //在百度地图容器中创建一个地图
var point = new BMap.Point(117.739833, 38.98954); //定义一个中心点坐标
map.centerAndZoom(point, 19); //设定地图的中心点和坐标并将地图显示在地图容器中
window.map = map; //将map变量存储在全局
//地图事件设置
map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
map.enableKeyboard(); //启用键盘上下左右键移动地图