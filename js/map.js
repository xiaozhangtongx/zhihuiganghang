/******************************************************************
 *                          显示地图
 * ****************************************************************
 */
/***************************首页轨迹展示部分***************************/
var map_home = new BMap.Map("map_home", {
    mapType: BMAP_HYBRID_MAP
}); //在百度地图容器中创建一个地图
var point_home = new BMap.Point(117.838867, 38.968631); //定义一个中心点坐标
map_home.centerAndZoom(point_home, 14); //设定地图的中心点和坐标并将地图显示在地图容器中
//地图事件设置
map_home.enableScrollWheelZoom(); //启用地图滚轮放大缩小
map_home.enableKeyboard(); //启用键盘上下左右键移动地图


/***************************航道检测部分地图***************************/
var map_path = new BMap.Map("path_map", {
    mapType: BMAP_HYBRID_MAP
}); //在百度地图容器中创建一个地图
var point_path = new BMap.Point(117.700867, 38.998631); //定义一个中心点坐标
map_path.centerAndZoom(point_path, 14); //设定地图的中心点和坐标并将地图显示在地图容器中
//地图事件设置
map_path.enableScrollWheelZoom(); //启用地图滚轮放大缩小
map_path.enableKeyboard(); //启用键盘上下左右键移动地图


/***************************拖船查询部分地图***************************/
var map_port = new BMap.Map("port", {
    mapType: BMAP_HYBRID_MAP
}); //在百度地图容器中创建一个地图
var point_port = new BMap.Point(117.700867, 38.998631); //定义一个中心点坐标
map_port.centerAndZoom(point_port, 14); //设定地图的中心点和坐标并将地图显示在地图容器中
window.map_port = map_port; //将map变量存储在全局
//地图事件设置
map_port.enableScrollWheelZoom(); //启用地图滚轮放大缩小
map_port.enableKeyboard(); //启用键盘上下左右键移动地图



/***************************拖船热力图部分地图***************************/
var heatmap = new BMap.Map("show_heatmap", {
    mapType: BMAP_HYBRID_MAP
}); //在百度地图容器中创建一个地图
var point_heatmap = new BMap.Point(117.700867, 39.018631); //定义一个中心点坐标
heatmap.centerAndZoom(point_heatmap, 13); //设定地图的中心点和坐标并将地图显示在地图容器中
window.heatmap = heatmap; //将map变量存储在全局
//地图事件设置
heatmap.enableScrollWheelZoom(); //启用地图滚轮放大缩小
heatmap.enableKeyboard(); //启用键盘上下左右键移动地图



/***************************走锚判断部分***************************/
var map = new BMap.Map("anchor", {
    // mapType: BMAP_HYBRID_MAP
}); //在百度地图容器中创建一个地图
//画框
var polyline = new window.BMap.Polyline([
    new BMap.Point(117.98525661754005, 38.99653514570446),
    new BMap.Point(117.948738, 38.900595),
    new BMap.Point(118.09465, 38.876446),
    new BMap.Point(118.11731, 38.96656),
    new BMap.Point(117.98525661754005, 38.99653514570446)
], {
    strokeColor: 'red',
    strokeWeight: 2,
    strokeOpacity: 0.5
});
map.addOverlay(polyline);

var polyline_2 = new window.BMap.Polyline([
    new BMap.Point(118.029762, 38.813459),
    new BMap.Point(118.017059, 38.800161),
    new BMap.Point(118.051048, 38.77974),
    new BMap.Point(118.063751, 38.792907),
    new BMap.Point(118.029762, 38.813459)
], {
    strokeColor: 'red',
    strokeWeight: 2,
    strokeOpacity: 0.5
});
map.addOverlay(polyline_2);

var polyline_3 = new window.BMap.Polyline([
    new BMap.Point(118.385719, 38.80223),
    new BMap.Point(118.380569, 38.779391),
    new BMap.Point(118.440308, 38.772941),
    new BMap.Point(118.445114, 38.795513),
    new BMap.Point(118.385719, 38.80223)
], {
    strokeColor: 'red',
    strokeWeight: 2,
    strokeOpacity: 0.5
});
map.addOverlay(polyline_3);

var point = new BMap.Point(117.564783, 39.064985); //定义一个中心点坐标
map.centerAndZoom(point, 12); //设定地图的中心点和坐标并将地图显示在地图容器中
//地图事件设置
map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
map.enableKeyboard(); //启用键盘上下左右键移动地图



/***************************锚地管理部分***************************/
var map_anchor = new BMap.Map("map_anchor", {
    // mapType: BMAP_HYBRID_MAP
}); //在百度地图容器中创建一个地图
var point_anchor = new BMap.Point(117.864783, 38.964985); //定义一个中心点坐标
map_anchor.centerAndZoom(point_anchor, 14); //设定地图的中心点和坐标并将地图显示在地图容器中
window.map_anchor = map_anchor; //将map变量存储在全局
//地图事件设置
map_anchor.enableScrollWheelZoom(); //启用地图滚轮放大缩小
map_anchor.enableKeyboard(); //启用键盘上下左右键移动地图
//画框
var polygon = new window.BMap.Polygon([
    new BMap.Point(117.950811, 38.947271),
    new BMap.Point(117.940912, 38.901461),
    new BMap.Point(117.979822, 38.890656),
    new BMap.Point(117.991343, 38.937617),
    new BMap.Point(117.950811, 38.947271)
], {
    strokeColor: 'red',
    strokeWeight: 2,
    strokeOpacity: 0.5
});
window.map_anchor.addOverlay(polygon);



/***************************作业展示部分***************************/
var map_berth = new BMap.Map("map_berth", {
    // mapType: BMAP_HYBRID_MAP
}); //在百度地图容器中创建一个地图
var point_berth = new BMap.Point(117.864783, 38.964985); //定义一个中心点坐标
map_berth.centerAndZoom(point_berth, 14); //设定地图的中心点和坐标并将地图显示在地图容器中
//地图事件设置
map_berth.enableScrollWheelZoom(); //启用地图滚轮放大缩小
map_berth.enableKeyboard(); //启用键盘上下左右键移动地图



/***************************泊位查询部分***************************/
var berthmap = new BMap.Map("berth", {
    mapType: BMAP_HYBRID_MAP
}); //在百度地图容器中创建一个地图
var point = new BMap.Point(117.738748, 38.990474); //定义一个中心点坐标
berthmap.centerAndZoom(point, 19); //设定地图的中心点和坐标并将地图显示在地图容器中
window.berthmap = berthmap; //将map变量存储在全局
//地图事件设置
berthmap.enableScrollWheelZoom(); //启用地图滚轮放大缩小
berthmap.enableKeyboard(); //启用键盘上下左右键移动地图
//泊位1
var polygon1 = new BMap.Polygon([
    new BMap.Point(117.74122893650909, 38.990408403924874),
    new BMap.Point(117.74097082195546, 38.99050103555472),
    new BMap.Point(117.74058459595135, 38.989880031246145),
    new BMap.Point(117.74085272032268, 38.989796425111415)
], {
    strokeColor: 'blue',
    strokeWeight: 3,
    strokeOpacity: 0.5
});
berthmap.addOverlay(polygon1);

//泊位2
var polygon2 = new BMap.Polygon([
    new BMap.Point(117.74083770803666, 38.98971735368259),
    new BMap.Point(117.74054257098913, 38.98981292191666),
    new BMap.Point(117.74018335381678, 38.98922997931486),
    new BMap.Point(117.74048349773125, 38.98912942033994)
], {
    strokeColor: 'blue',
    strokeWeight: 3,
    strokeOpacity: 0.5
});
berthmap.addOverlay(polygon2);

//泊位3
var polygon3 = new BMap.Polygon([
    new BMap.Point(117.7413639567838, 38.98976424391249),
    new BMap.Point(117.74160505955939, 38.98967658393737),
    new BMap.Point(117.74135291602862, 38.98921089927009),
    new BMap.Point(117.74108479790941, 38.98929851268922)
], {
    strokeColor: 'blue',
    strokeWeight: 2,
    strokeOpacity: 0.5
});
berthmap.addOverlay(polygon3);

//泊位4
var polygon4 = new BMap.Polygon([
    new BMap.Point(117.74105277722374, 38.98921040816281),
    new BMap.Point(117.74129388420143, 38.98913575864519),
    new BMap.Point(117.74104674027956, 38.988682086442545),
    new BMap.Point(117.74079462593266, 38.988765720905)
], {
    strokeColor: 'blue',
    strokeWeight: 2,
    strokeOpacity: 0.5
});
berthmap.addOverlay(polygon4);

//泊位5
var polygon5 = new BMap.Polygon([
    new BMap.Point(117.74379989426228, 38.98918576151994),
    new BMap.Point(117.74370885206997, 38.98902152433021),
    new BMap.Point(117.74288856851545, 38.989301411888896),
    new BMap.Point(117.74299562074246, 38.989473681748024)
], {
    strokeColor: 'blue',
    strokeWeight: 2,
    strokeOpacity: 0.5
});
berthmap.addOverlay(polygon5);

//泊位6
var polygon6 = new BMap.Polygon([
    new BMap.Point(117.74288858176665, 38.98950653299389),
    new BMap.Point(117.74278052895102, 38.98933926408047),
    new BMap.Point(117.74211527368195, 38.9895723443901),
    new BMap.Point(117.74222333085021, 38.98975662603461)
], {
    strokeColor: 'blue',
    strokeWeight: 2,
    strokeOpacity: 0.5
});
berthmap.addOverlay(polygon6);


/***************************泊位查询部分***************************/
var map_berth_work = new BMap.Map("map_berth_work", {
    mapType: BMAP_HYBRID_MAP
}); //在百度地图容器中创建一个地图
var point_work = new BMap.Point(117.738748, 38.990474); //定义一个中心点坐标
map_berth_work.centerAndZoom(point_work , 19); //设定地图的中心点和坐标并将地图显示在地图容器中
//地图事件设置
map_berth_work.enableScrollWheelZoom(); //启用地图滚轮放大缩小
map_berth_work.enableKeyboard(); //启用键盘上下左右键移动地图