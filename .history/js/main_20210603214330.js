var map = new BMap.Map("allmap"); //在百度地图容器中创建一个地图
var point = new BMap.Point(122.164958, 29.907286); //定义一个中心点坐标
map.centerAndZoom(point, 13); //设定地图的中心点和坐标并将地图显示在地图容器中
window.map = map; //将map变量存储在全局

//地图事件设置
map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
map.enableKeyboard(); //启用键盘上下左右键移动地图

//地图控件添加函数：
//向地图中添加缩放控件
var ctrl_nav = new BMap.NavigationControl({
    anchor: BMAP_ANCHOR_TOP_LEFT,
    type: BMAP_NAVIGATION_CONTROL_ZOOM
});
map.addControl(ctrl_nav);
//向地图中添加缩略图控件
var ctrl_ove = new BMap.OverviewMapControl({
    anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
    isOpen: true
});
map.addControl(ctrl_ove);
//地图样式控件
map.addControl(new BMap.MapTypeControl());
//向地图中添加比例尺控件
map.addControl(new BMap.ScaleControl());