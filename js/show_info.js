/******************************************************************
 *                            可视化部分
 * ****************************************************************
 */



/***************************拖船信息部分***************************/
/**
 * 信息化展示现在拖船有多少是空闲的，有多少是工作的
 * 然后给调度部门推荐最合适的拖船（辅助调度）
 */
(function () {
    var app = {};
    var chartDom = document.querySelector('.ship_data_right_top');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        title: {
            text: '在港拖船动态信息'
            // subtext: '数据来源船讯网'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#283b56'
                }
            }
        },
        legend: {
            data: ['休闲船舶', '工作船舶']
        },
        toolbox: {
            show: true,
            feature: {
                dataView: {
                    readOnly: false
                },
                restore: {},
                saveAsImage: {}
            }
        },
        dataZoom: {
            show: false,
            start: 0,
            end: 100
        },

        xAxis: [{
                type: 'category',
                boundaryGap: true,
                data: (function () {
                    var now = new Date();
                    var res = [];
                    var len = 10;
                    while (len--) {
                        res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                        now = new Date(now - 2000);
                    }
                    return res;
                })()
            },
            {
                type: 'category',
                boundaryGap: true,
                data: (function () {
                    var res = [];
                    var len = 10;
                    while (len--) {
                        res.push(10 - len - 1);
                    }
                    return res;
                })()
            }
        ],
        yAxis: [{
                type: 'value',
                scale: true,
                name: '数量（艘）',
                max: 30,
                min: 0,
                boundaryGap: [0.2, 0.2]
            },
            {
                type: 'value',
                scale: true,
                name: '数量（艘）',
                max: 30,
                min: 0,
                boundaryGap: [0.2, 0.2]
            }
        ],
        series: [{
                name: '休闲船舶',
                type: 'bar',
                xAxisIndex: 1,
                yAxisIndex: 1,
                // barWidth: 50, //柱图宽度
                // itemStyle: {
                //     //修改柱子的圆角
                //     barBorderRadius: 15
                // },
                data: (function () {
                    var res = [];
                    var len = 10;
                    while (len--) {
                        res.push((Math.random() * 20 + 5).toFixed(1) - 0);
                    }
                    return res;
                })()
            },
            {
                name: '工作船舶',
                type: 'line',
                data: (function () {
                    var res = [];
                    var len = 0;
                    while (len < 10) {
                        res.push((Math.random() * 10 + 5).toFixed(1) - 0);
                        len++;
                    }
                    return res;
                })()
            }
        ]
    };

    app.count = 11;
    setInterval(function () {
        var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');

        var data0 = option.series[0].data;
        var data1 = option.series[1].data;
        data0.shift();
        data0.push((Math.random() * 20 + 5).toFixed(1) - 0);
        data1.shift();
        data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

        option.xAxis[0].data.shift();
        option.xAxis[0].data.push(axisData);
        option.xAxis[1].data.shift();
        option.xAxis[1].data.push(app.count++);
        myChart.setOption(option);
    }, 20000);

    option && myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();



//首页
(function () {
    var app = {};
    var chartDom_1 = document.querySelector('.home_ship');
    var myChart_ship = echarts.init(chartDom_1);
    var option;

    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#283b56'
                }
            }
        },
        legend: {
            data: ['休闲拖轮', '工作拖轮']
        },
        grid: {
            top: 60,
            bottom: 20
        },
        dataZoom: {
            show: false,
            start: 0,
            end: 100
        },

        xAxis: [{
                type: 'category',
                boundaryGap: true,
                axisLabel: {
                    textStyle: {
                        color: '#f6f6f6', //坐标的字体颜色
                    },
                },
                data: (function () {
                    var now = new Date();
                    var res = [];
                    var len = 10;
                    while (len--) {
                        res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                        now = new Date(now - 2000);
                    }
                    return res;
                })()
            },
            {
                type: 'category',
                boundaryGap: true,
                data: (function () {
                    var res = [];
                    var len = 10;
                    while (len--) {
                        res.push(10 - len - 1);
                    }
                    return res;
                })()
            }
        ],
        yAxis: [{
                type: 'value',
                scale: true,
                name: '数量（艘）',
                max: 30,
                min: 0,
                boundaryGap: [0.2, 0.2]
            },
            {
                type: 'value',
                scale: true,
                name: '数量（艘）',
                max: 30,
                min: 0,
                boundaryGap: [0.2, 0.2]
            }
        ],
        series: [{
                name: '休闲拖轮',
                type: 'bar',
                xAxisIndex: 1,
                yAxisIndex: 1,
                // barWidth: 50, //柱图宽度
                // itemStyle: {
                //     //修改柱子的圆角
                //     barBorderRadius: 15
                // },
                data: (function () {
                    var res = [];
                    var len = 10;
                    while (len--) {
                        res.push((Math.random() * 20 + 5).toFixed(1) - 0);
                    }
                    return res;
                })()
            },
            {
                name: '工作拖轮',
                type: 'line',
                data: (function () {
                    var res = [];
                    var len = 0;
                    while (len < 10) {
                        res.push((Math.random() * 10 + 5).toFixed(1) - 0);
                        len++;
                    }
                    return res;
                })()
            }
        ]
    };

    app.count = 11;
    setInterval(function () {
        var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');

        var data0 = option.series[0].data;
        var data1 = option.series[1].data;
        data0.shift();
        data0.push((Math.random() * 20 + 5).toFixed(1) - 0);
        data1.shift();
        data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

        option.xAxis[0].data.shift();
        option.xAxis[0].data.push(axisData);
        option.xAxis[1].data.shift();
        option.xAxis[1].data.push(app.count++);
        myChart_ship.setOption(option);
    }, 20000);

    option && myChart_ship.setOption(option);
    window.addEventListener("resize", function () {
        myChart_ship.resize();
    });
})();

(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".home_anchor"));

    option = {
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position: function (p) {
                //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            }
        },
        legend: {
            top: "90%",
            itemWidth: 10,
            itemHeight: 10,
            data: ["货船", "渔船", "杂货船", "散货船", "拖船"],
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        series: [{
            name: "锚地船舶种类",
            type: "pie",
            center: ["50%", "42%"],
            radius: ["40%", "60%"],
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            data: [{
                    value: 40,
                    name: "货船"
                },
                {
                    value: 4,
                    name: "渔船"
                },
                {
                    value: 20,
                    name: "杂货船"
                },
                {
                    value: 12,
                    name: "散货船"
                },
                {
                    value: 3,
                    name: "拖船"
                }
            ]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();


(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".home_work"));

    option = {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            top: 60,
            bottom: 20
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLabel: {
                textStyle: {
                    color: '#f6f6f6', //坐标的字体颜色
                },
            },
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}吨',
                textStyle: {
                    color: '#f6f6f6', //坐标的字体颜色
                },
                splitLine: {
                    show: false, //去掉背景的网格线
                }
            }
        },
        series: [{
            name: '作业量',
            type: 'line',
            data: [100, 110, 140, 80, 200, 150, 189],
            markPoint: {
                data: [{
                        type: 'max',
                        name: '最大值'
                    },
                    {
                        type: 'min',
                        name: '最小值'
                    }
                ]
            },
            markLine: {
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            }
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();


(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".anchor_infor_top"));

    option = {
        title: {
            text: '在锚船舶种类'
            // subtext: '数据来源船讯网'
        },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position: function (p) {
                //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            }
        },
        legend: {
            top: "90%",
            itemWidth: 10,
            itemHeight: 10,
            data: ["货船", "渔船", "杂货船", "散货船", "拖船"],
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        series: [{
            name: "锚地船舶种类",
            type: "pie",
            center: ["50%", "42%"],
            radius: ["40%", "60%"],
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            data: [{
                    value: 40,
                    name: "货船"
                },
                {
                    value: 4,
                    name: "渔船"
                },
                {
                    value: 20,
                    name: "杂货船"
                },
                {
                    value: 12,
                    name: "散货船"
                },
                {
                    value: 3,
                    name: "拖船"
                }
            ]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();



(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".anchor_infor_average"));

    option = {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            top: 20,
            bottom: 20
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}吨',
                splitLine: {
                    show: false, //去掉背景的网格线
                }
            }
        },
        series: [{
            name: '作业时间',
            type: 'line',
            data: [100, 110, 140, 80, 160, 150, 159],
            markPoint: {
                data: [{
                        type: 'max',
                        name: '最大值'
                    },
                    {
                        type: 'min',
                        name: '最小值'
                    }
                ]
            },
            markLine: {
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            }
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();


(function () {
    var chartDom = document.getElementById('berth_infor_top');
    var myChart = echarts.init(chartDom);
    var option;
    var worktime = [
        [20, 21, 23, 24, 22, 23, 21, 21, 22, 23, 22, 20, 21, 23, 19, 18, 22, 23, 21, 21, 23, 24, 22, 23, 23, 24, 22, 23, 23, 22],
        [24, 19, 18, 22, 23, 21, 15, 16, 13, 14, 17, 18, 17, 14, 16, 21, 23, 24, 19, 18, 22, 23, 21, 15, 16, 13, 14, 17, 18, 21],
        [19, 18, 22, 23, 21, 15, 16, 13, 14, 17, 18, 17, 14, 16, 21, 16, 13, 14, 17, 18, 17, 14, 16, 21, 22, 23, 22, 20, 21, 23],
        [21, 15, 16, 13, 14, 17, 18, 17, 14, 16, 21, 16, 13, 14, 17, 18, 17, 14, 16, 21, 23, 24, 19, 18, 22, 23, 21, 15, 16, 18],
        [18, 14, 17, 18, 17, 14, 16, 21, 23, 24, 19, 18, 22, 23, 15, 16, 13, 14, 17, 18, 17, 14, 16, 21, 16, 13, 23, 21, 15, 16],
        [17, 14, 16, 21, 22, 23, 22, 20, 21, 23, 18, 22, 23, 15, 16, 13, 14, 17, 18, 17, 14, 16, 21, 13, 14, 17, 18, 17, 14, 16]
    ];
    var day = [];

    for (var i = 1; i <= 30; i++) {
        day.push(i);
    };

    option = {
        title: {
            text: '平均作业时间(小时/天)'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['泊位1', '泊位2', '泊位3', '泊位4', '泊位5', '泊位6'],
            top: "8%"
        },
        grid: {
            top: '26%',
            left: '6%',
            bottom: '5%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: day,
            name: '日'
        },
        yAxis: {
            type: 'value',
            scale: true,
            axisLabel: {
                formatter: '{value}小时'
            }
        },
        series: [{
                name: '泊位1',
                type: 'line',
                data: worktime[0]
            },
            {
                name: '泊位2',
                type: 'line',
                data: worktime[1]
            },
            {
                name: '泊位3',
                type: 'line',
                data: worktime[2]
            },
            {
                name: '泊位4',
                type: 'line',
                data: worktime[3]
            },
            {
                name: '泊位5',
                type: 'line',
                data: worktime[4]
            },
            {
                name: '泊位6',
                type: 'line',
                data: worktime[5]
            }
        ]
    };
    option && myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();


(function () {
    var chartDom = document.getElementById('berth_infor_bottom');
    var myChart = echarts.init(chartDom);
    var option;
    var worktime_1 = [
        [20, 21, 23, 24, 22, 23, 21, 21, 22, 23, 22, 20, 21, 23, 19, 18, 22, 23, 21, 21, 23, 24, 22, 23, 23, 24, 22, 23, 23, 22],
        [24, 19, 18, 22, 23, 21, 15, 16, 13, 14, 17, 18, 17, 14, 16, 21, 23, 24, 19, 18, 22, 23, 21, 15, 16, 13, 14, 17, 18, 21],
        [19, 18, 22, 23, 21, 15, 16, 13, 14, 17, 18, 17, 14, 16, 21, 16, 13, 14, 17, 18, 17, 14, 16, 21, 22, 23, 22, 20, 21, 23],
        [21, 15, 16, 13, 14, 17, 18, 17, 14, 16, 21, 16, 13, 14, 17, 18, 17, 14, 16, 21, 23, 24, 19, 18, 22, 23, 21, 15, 16, 18],
        [18, 14, 17, 18, 17, 14, 16, 21, 23, 24, 19, 18, 22, 23, 15, 16, 13, 14, 17, 18, 17, 14, 16, 21, 16, 13, 23, 21, 15, 16],
        [17, 14, 16, 21, 22, 23, 22, 20, 21, 23, 18, 22, 23, 15, 16, 13, 14, 17, 18, 17, 14, 16, 21, 13, 14, 17, 18, 17, 14, 16]
    ];
    var day = [];
    var worktime = [
        [],
        [],
        [],
        [],
        [],
        []
    ];
    // console.log(worktime_1[0].length);
    for (let i = 0; i < worktime_1.length; i++) {
        for (let j = 0; j < worktime_1[i].length; j++) {
            worktime[i][j] = worktime_1[i][j] / 24;
            // console.log(worktime_1[i][j]);
        }
    }
    for (var i = 1; i <= 30; i++) {
        day.push(i);
    };

    option = {
        title: {
            text: '泊位利用率'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['泊位1', '泊位2', '泊位3', '泊位4', '泊位5', '泊位6'],
            top: "8%"
        },
        grid: {
            top: '26%',
            left: '6%',
            bottom: '5%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: day,
            name: '日'
        },
        yAxis: {
            type: 'value',
            scale: true,
            axisLabel: {
                formatter: '{value}小时'
            }
        },
        series: [{
                name: '泊位1',
                type: 'line',
                data: worktime[0]
            },
            {
                name: '泊位2',
                type: 'line',
                data: worktime[1]
            },
            {
                name: '泊位3',
                type: 'line',
                data: worktime[2]
            },
            {
                name: '泊位4',
                type: 'line',
                data: worktime[3]
            },
            {
                name: '泊位5',
                type: 'line',
                data: worktime[4]
            },
            {
                name: '泊位6',
                type: 'line',
                data: worktime[5]
            }
        ]
    };
    option && myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();



(function () {
    var chartDom = document.getElementById('work_infor_top');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        legend: {
            data: ['吞吐量', '等待量', '装卸效率']
        },
        grid: {
            top: '20%',
            left: '6%',
            bottom: '5%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel: {
                textStyle: {
                    color: '#000', //坐标的字体颜色
                },
            }
        }],
        yAxis: [{
                type: 'value',
                name: '吞吐量',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value} 吨',
                    textStyle: {
                        color: '#000', //坐标的字体颜色
                    },
                }
            },
            {
                type: 'value',
                name: '等待量',
                min: 0,
                max: 25,
                interval: 5,
                axisLabel: {
                    formatter: '{value} 吨'
                }
            }
        ],
        series: [{
                name: '吞吐量',
                type: 'bar',
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
                name: '等待量',
                type: 'bar',
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
                name: '装卸效率',
                type: 'line',
                yAxisIndex: 1,
                data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
        ]
    };

    option && myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();




(function () {

    var chartDom = document.getElementById('work_infor_bottom');
    var myChart = echarts.init(chartDom);
    var option;

    var data = [];
    for (let i = 0; i < 5; ++i) {
        data.push(Math.round(Math.random() * 200));
    }

    option = {
        grid: {
            top: '20%',
            left: '6%',
            bottom: '5%',
            containLabel: true
        },
        xAxis: {
            max: 'dataMax',
            axisLabel: {
                textStyle: {
                    color: '#000', //坐标的字体颜色
                },
            }
        },
        yAxis: {
            type: 'category',
            data: ['泊位1', '泊位2', '泊位3', '泊位4', '泊位5'],
            inverse: true,
            animationDuration: 300,
            animationDurationUpdate: 300,
            axisLabel: {
                textStyle: {
                    color: '#000', //坐标的字体颜色
                },
            },
            max: 2 // only the largest 3 bars will be displayed
        },
        series: [{
            realtimeSort: true,
            name: '装载量',
            type: 'bar',
            data: data,
            label: {
                show: true,
                position: 'right',
                valueAnimation: true
            }
        }],
        legend: {
            show: true
        },
        animationDuration: 0,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
    };

    function run() {
        var data = option.series[0].data;
        for (var i = 0; i < data.length; ++i) {
            if (Math.random() > 0.9) {
                data[i] += Math.round(Math.random() * 2000);
            } else {
                data[i] += Math.round(Math.random() * 200);
            }
        }
        myChart.setOption(option);
    }

    setTimeout(function () {
        run();
    }, 0);
    setInterval(function () {
        run();
    }, 3000);

    option && myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();